$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force public/assets/additional | Out-Null
$assets = Get-Content scripts/page-assets.json -Raw | ConvertFrom-Json
foreach ($asset in $assets) {
  if (!(Test-Path -LiteralPath $asset.path)) { Invoke-WebRequest -Uri $asset.url -OutFile $asset.path }
}
Write-Output ('Downloaded ' + $assets.Count + ' design assets.')
