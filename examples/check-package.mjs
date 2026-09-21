import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { inflateRawSync } from 'node:zlib';
function readArchive(file, maxEntries = 10000) {
  assert(Number.isSafeInteger(maxEntries) && maxEntries > 0 && maxEntries <= 65535, 'Invalid ZIP entry limit');
  const bytes = readFileSync(file);
  assert(bytes.length <= 256 * 1024 * 1024, 'Archive is unexpectedly large');
  const footer = bytes.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  assert(footer >= 0 && footer + 22 <= bytes.length, 'Missing ZIP directory');
  const count = bytes.readUInt16LE(footer + 10);
  assert(count < maxEntries, 'Unexpected ZIP entry count');
  const files = new Map();
  let expandedSize = 0;
  let offset = bytes.readUInt32LE(footer + 16);
  for (let index = 0; index < count; index++) {
    assert.equal(bytes.readUInt32LE(offset), 0x02014b50, 'Invalid ZIP directory entry');
    const size = bytes.readUInt32LE(offset + 20), method = bytes.readUInt16LE(offset + 10);
    const nameSize = bytes.readUInt16LE(offset + 28), extraSize = bytes.readUInt16LE(offset + 30), commentSize = bytes.readUInt16LE(offset + 32);
    const name = bytes.subarray(offset + 46, offset + 46 + nameSize).toString('utf8');
    assert(!files.has(name) && !name.startsWith('/') && !name.split('/').includes('..'), 'Invalid archive path');
    const local = bytes.readUInt32LE(offset + 42);
    assert.equal(bytes.readUInt32LE(local), 0x04034b50, 'Invalid ZIP local entry');
    const start = local + 30 + bytes.readUInt16LE(local + 26) + bytes.readUInt16LE(local + 28);
    assert(start + size <= bytes.length && (method === 0 || method === 8), 'Unsupported ZIP entry');
    const compressed = bytes.subarray(start, start + size);
    const contents = method === 0 ? compressed : inflateRawSync(compressed, { maxOutputLength: 32 * 1024 * 1024 });
    expandedSize += contents.length;
    assert(expandedSize <= 256 * 1024 * 1024, 'Expanded archive is unexpectedly large');
    files.set(name, contents);
    offset += 46 + nameSize + extraSize + commentSize;
  }
  return files;
}

const execute = promisify(execFile);
assert(process.argv[2], 'Pass the directory containing the freshly built NuGet package');
const archivePath = resolve(process.argv[2], 'SellApp.0.1.1.nupkg');
const archive = readArchive(archivePath);
for (const name of ['README.md', 'LICENSE.txt', 'NOTICE.txt', 'docs/usage.md', 'docs/methods.md', 'examples/README.md', 'examples/Onboarding/Program.cs']) assert(archive.has(name), 'Missing package documentation: ' + name);
assert(archive.get('README.md').toString().startsWith('# SellApp .NET SDK'));
assert(archive.get('SellApp.nuspec').toString().includes('<readme>README.md</readme>'));
for (const name of archive.keys()) assert(!/(^|\/)(test|tests|testdata|fixtures|obj|bin)(\/|$)/.test(name), 'Unwanted package content: ' + name);
const assets = JSON.parse(readFileSync('examples/Onboarding/obj/project.assets.json', 'utf8'));
assert.equal(assets.libraries['SellApp/0.1.1']?.type, 'package', 'Example must consume the packed NuGet package');
assert(Object.keys(assets.packageFolders).some((folder) => resolve(folder) === resolve(process.argv[2], 'consumer-packages')), 'Use an isolated RestorePackagesPath under the package directory');
assert.equal(assets.libraries['SellApp/0.1.1'].sha512, createHash('sha512').update(readFileSync(archivePath)).digest('base64'), 'Consumer must restore this exact package archive');
const product = {"id":120,"title":"Design kit","slug":"design-kit","description":"<p>Templates for your next project.</p>","images":[{"path":"store/1/listings/NM6TBKIMzpFJq1MKTV24oMJ1W4UrKCo7NS98nt4K.png","metadata":{"size":39289,"filename":"NM6TBKIMzpFJq1MKTV24oMJ1W4UrKCo7NS98nt4K","extension":"png","mime_type":"image/png"}},{"path":"store/1/listings/ov6XMb68tRr80zl7sqfN1or7xfqqH5WbZygDEQ8X.png","metadata":{"size":422373,"filename":"ov6XMb68tRr80zl7sqfN1or7xfqqH5WbZygDEQ8X","extension":"png","mime_type":"image/png"}}],"order":1,"visibility":"PUBLIC","delivery_text":"Thanks for your purchase. Your download is ready.","additional_information":[{"required":true,"key":"3aecffd000e00e2211e94558007ffc37","type":"checkbox","label":"Do you agree to the purchase terms?"}],"other_settings":{"faq":[{"answer":"Yes. Adapt the included templates to your project.","question":"Can I use these templates for my own project?"}],"video_url":"https://example.com/launch-lab/product-tour","redirect_url":"https://example.com/post-launch?customer_email=[customer_email]&order_id=[order_id]","product_title":"Design kit","product_description":"Templates for your next project."},"deleted_at":null,"created_at":"2026-08-24T10:00:00.000000Z","updated_at":"2026-08-24T10:00:00.000000Z","store_id":1,"category_id":null,"section_id":null,"section_order":null,"is_discoverable":true,"variants":[{"id":4321,"title":"Design kit"}],"url":"https://launch-lab.sell.app/product/design-kit"};
let mode = 'first';
let calls = [];
const failures = [];
const server = createServer((request, response) => {
  try {
    const url = new URL(request.url, 'http://127.0.0.1');
    assert.equal(url.pathname, '/v2/products');
    assert.equal(request.method, 'GET');
    assert.equal(request.headers.authorization, 'Bearer test_key');
    assert.equal(request.headers['x-store'], 'test_store');
    calls.push(url);
    assert.equal(url.searchParams.get('limit'), mode === 'pagination' ? '15' : '1');
    if (mode === 'pagination') assert.equal(url.searchParams.get('page'), String(calls.length));
    response.setHeader('Content-Type', 'application/json');
    if (mode === 'error') { response.writeHead(403); response.end(JSON.stringify({message:'Forbidden',request_id:'req_example'})); return; }
    response.end(JSON.stringify({data:mode === 'empty' ? [] : [product], links:{next: mode === 'pagination' && calls.length === 1 ? '?page=2' : null}, meta:{current_page: calls.length,last_page: mode === 'pagination' ? 2 : 1}}));
  } catch (error) { failures.push(error); response.writeHead(500); response.end('{}'); }
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
try {
  for (mode of ['first', 'empty', 'pagination', 'error']) {
    calls = [];
    const env = {...process.env, SELLAPP_API_KEY:'test_key', SELLAPP_STORE:'test_store', SELLAPP_API_BASE_URL:'http://127.0.0.1:' + server.address().port};
    const args = ['examples/Onboarding/bin/Release/net8.0/Onboarding.dll', ...(mode === 'pagination' ? ['pagination'] : [])];
    let result;
    try { result = {...await execute('dotnet', args, {env, timeout:20000}), code:0}; }
    catch (error) { if (typeof error.code !== 'number') throw error; result = error; }
    assert.equal(result.code, mode === 'error' ? 1 : 0, result.stderr);
    assert.equal(calls.length, mode === 'pagination' ? 2 : 1);
    if (mode === 'error') assert(result.stderr.includes('req_example'));
    else if (mode === 'empty') assert.equal(result.stdout.trim(), 'No products yet. Your connection is ready.');
    else assert.equal(result.stdout.trim().split(/\r?\n/).filter(Boolean).join('|'), Array(calls.length).fill(product.id + ': ' + product.title).join('|'));
    assert.equal(failures.length, 0, failures.map(String).join('\n'));
    console.log('Packaged .NET example ' + mode + ': PASS');
  }
} finally { await new Promise((done) => server.close(done)); }
