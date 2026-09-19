"""Check retained NuGet packages without executing package code or rebuilding."""

import argparse
import hashlib
import io
import json
import os
from pathlib import Path
import re
import subprocess
import zipfile
import xml.etree.ElementTree as ET

REPOSITORY = "sellapp/sellapp-dotnet"
MAX_PACKAGE_BYTES = 50 * 1024 * 1024


def require(condition, message):
    if not condition:
        raise ValueError(message)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def validate_manifest(raw, expected_hash, source, ownership, sdk_commit, tag):
    require(
        bool(re.fullmatch(r"[a-f0-9]{64}", expected_hash)),
        "Expected a SHA-256 manifest digest",
    )
    require(
        len(raw) <= 65536 and sha256(raw) == expected_hash,
        "Publication manifest hash differs",
    )
    manifest = json.loads(raw)
    version = manifest.get("version", "")
    require(
        bool(re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", version)) and tag == "v" + version,
        "Release tag/version differs",
    )
    require(
        manifest.get("schemaVersion") == 1 and manifest.get("repository") == REPOSITORY,
        "Unexpected publication repository/schema",
    )
    require(
        bool(re.fullmatch(r"[a-f0-9]{40}", sdk_commit))
        and manifest.get("sdkCommit") == sdk_commit,
        "SDK commit differs from workflow checkout",
    )
    require(
        ownership.get("repository") == REPOSITORY
        and ownership.get("language") == "dotnet",
        "Unexpected source ownership",
    )
    require(
        source.get("sdkVersion") == version and source.get("language") == "dotnet",
        "Generated SDK language/version differs",
    )
    require(
        source.get("generatorDirty") is False,
        "Source was generated from a dirty checkout",
    )
    require(
        manifest.get("sourceSha")
        == source.get("generatorCommit")
        == ownership.get("sourceSha"),
        "Generator source identity differs",
    )
    require(
        bool(re.fullmatch(r"[a-f0-9]{40}", manifest.get("sourceSha", ""))),
        "Invalid generator source identity",
    )
    require(
        manifest.get("specSha256")
        == source.get("specSha256")
        == ownership.get("specSha256"),
        "Specification identity differs",
    )
    require(
        bool(re.fullmatch(r"[a-f0-9]{64}", manifest.get("specSha256", ""))),
        "Invalid specification digest",
    )
    files = manifest.get("files", [])
    expected = {f"SellApp.{version}.nupkg"}
    require(
        len(files) == 1 and {f.get("name") for f in files} == expected,
        "Expected exactly the versioned NuGet package",
    )
    for item in files:
        require(
            bool(re.fullmatch(r"[a-f0-9]{64}", item.get("sha256", ""))),
            "Invalid package digest",
        )
        require(
            type(item.get("size")) is int and 0 < item["size"] <= MAX_PACKAGE_BYTES,
            "Invalid package size",
        )
    return manifest


def validate_package(data, item, version):
    require(
        len(data) == item["size"] and sha256(data) == item["sha256"],
        "Package bytes differ from validated manifest",
    )
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        entries = archive.infolist()
        names = [entry.filename for entry in entries]
        require(len(names) == len(set(names)), "Duplicated package entry")
        require(
            all(not name.startswith(("/", "\\")) and "\\" not in name
                and ".." not in name.split("/") for name in names),
            "Unsafe package entry",
        )
        require(sum(entry.file_size for entry in entries) <= 100 * 1024 * 1024,
                "Oversized unpacked package")
        required = {"SellApp.nuspec", "lib/net8.0/SellApp.net.dll",
                    "README.md", "LICENSE.txt", "NOTICE.txt"}
        require(required.issubset(names), "Missing package metadata, assembly or documentation")
        require(archive.getinfo("SellApp.nuspec").file_size <= 65536, "Oversized package metadata")
        raw = archive.read("SellApp.nuspec")
        require(b"<!DOCTYPE" not in raw and b"<!ENTITY" not in raw, "Unexpected XML declarations")
        info = ET.fromstring(raw).find("{*}metadata")
        require(info is not None, "Missing NuGet metadata")
        require(info.findtext("{*}id") == "SellApp"
                and info.findtext("{*}version") == version, "Package name/version differs")
        require(info.findtext("{*}readme") == "README.md"
                and info.findtext("{*}license") == "MIT", "Package readme/license differs")
        repo = info.find("{*}repository")
        require(repo is not None
                and repo.get("url") == "https://github.com/sellapp/sellapp-dotnet"
                and repo.get("type") == "git", "Package repository differs")
        require(archive.read("README.md").startswith(b"# SellApp .NET SDK"), "Unexpected package README")


def github(resource, binary=False):
    command = ["gh", "api", "--hostname", "github.com", resource]
    if binary:
        command.extend(["--header", "Accept: application/octet-stream"])
    result = subprocess.run(command, capture_output=True, timeout=120)
    require(result.returncode == 0, "GitHub asset/metadata read failed")
    return result.stdout if binary else json.loads(result.stdout)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--tag", required=True)
    parser.add_argument("--sha256", required=True)
    args = parser.parse_args()
    require(
        bool(re.fullmatch(r"v[0-9]+\.[0-9]+\.[0-9]+", args.tag)),
        "Expected release tag vX.Y.Z",
    )
    require(
        os.environ.get("GITHUB_REPOSITORY") == REPOSITORY
        and os.environ.get("GITHUB_REF") == "refs/heads/main",
        "Run this workflow from the official repository main branch",
    )
    commit = os.environ.get("GITHUB_SHA", "")
    prefix = "repos/" + REPOSITORY
    release = github(prefix + "/releases/tags/" + args.tag)
    require(release.get("tag_name") == args.tag, "GitHub release tag differs")
    ref = github(prefix + "/git/ref/tags/" + args.tag)["object"]
    for _ in range(3):
        if ref.get("type") == "commit":
            break
        require(
            ref.get("type") == "tag"
            and bool(re.fullmatch(r"[a-f0-9]{40}", ref.get("sha", ""))),
            "Unexpected Git tag object",
        )
        ref = github(prefix + "/git/tags/" + ref["sha"])["object"]
    require(
        ref.get("type") == "commit" and ref.get("sha") == commit,
        "Release tag differs from workflow checkout",
    )
    assets = release.get("assets", [])

    def download(name, maximum):
        matches = [asset for asset in assets if asset.get("name") == name]
        require(len(matches) == 1, "Missing or duplicated release asset: " + name)
        asset = matches[0]
        require(
            type(asset.get("id")) is int
            and type(asset.get("size")) is int
            and 0 < asset["size"] <= maximum,
            "Invalid release asset size/identity",
        )
        data = github(prefix + "/releases/assets/" + str(asset["id"]), binary=True)
        require(len(data) == asset["size"], "Downloaded release asset size differs")
        return data

    manifest = validate_manifest(
        download("publication-manifest.json", 65536),
        args.sha256,
        json.loads(Path("generation-manifest.json").read_text()),
        json.loads(Path(".sellapp-sdk-sync.json").read_text()),
        commit,
        args.tag,
    )
    require(not Path("dist").exists(), "Output directory already exists")
    packages = []
    for item in manifest["files"]:
        data = download(item["name"], MAX_PACKAGE_BYTES)
        validate_package(data, item, manifest["version"])
        packages.append((item["name"], data))
    Path("dist").mkdir()
    for name, data in packages:
        Path("dist", name).write_bytes(data)
    print("Verified retained NuGet package for " + args.tag + " at " + commit)


if __name__ == "__main__":
    main()
