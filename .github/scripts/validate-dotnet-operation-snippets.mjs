import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const directory = path.resolve(process.argv[2]);
const target = path.join(directory, '.validation-snippets');
await fs.mkdir(target, { recursive: true });
const snippets = (
  await Promise.all(
    ['operation-examples.json', 'operation-variants.json'].map(async (file) =>
      JSON.parse(await fs.readFile(path.join(directory, 'docs', file), 'utf8')),
    ),
  )
).flat();
for (const [index, snippet] of snippets.entries()) {
  const lines = snippet.content.split('\n');
  const imports = lines.filter((line) => line.startsWith('using '));
  const body = lines.filter((line) => !line.startsWith('using '));
  await fs.writeFile(
    path.join(target, `Example${index}.cs`),
    [
      ...imports,
      `namespace Samples.Example${index};`,
      'public static class Example { public static async Task Run() {',
      ...body,
      '}}',
    ].join('\n'),
  );
}
await fs.writeFile(
  path.join(target, 'Snippets.csproj'),
  `<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net8.0</TargetFramework><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable></PropertyGroup><ItemGroup><ProjectReference Include="${path.join(directory, 'src/SellApp.net/SellApp.net.csproj')}" /></ItemGroup></Project>`,
);
const result = spawnSync('dotnet', ['build', '--nologo', '--verbosity', 'quiet'], {
  cwd: target,
  encoding: 'utf8',
  maxBuffer: 20 * 1024 * 1024,
});
if (result.status !== 0) {
  await fs.mkdir(path.resolve(import.meta.dirname, '../reports'), { recursive: true });
  await fs.writeFile(
    path.resolve(import.meta.dirname, '../reports/dotnet-snippet-errors.log'),
    result.stdout + result.stderr,
  );
  process.stderr.write((result.stdout + result.stderr).slice(-12000));
  process.exit(result.status ?? 1);
}
console.log(`Compiled ${snippets.length} .NET operation examples.`);
