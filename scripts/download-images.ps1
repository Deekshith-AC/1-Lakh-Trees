<#
Download a curated set of free images into the project's `public/images/` folder.
Run from the project root in PowerShell:

  powershell -ExecutionPolicy Bypass -File .\scripts\download-images.ps1

This script uses `Invoke-WebRequest` to fetch images from Unsplash query endpoints. If your environment blocks external downloads or Unsplash redirects, you may need to download images manually and place them in `public/images/`.
#>

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$outDir = Join-Path $root "..\public\images"
If (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

$mapping = @{
  'hero.jpg' = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80&fit=crop'
  'hero-mobile.jpg' = 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=900&q=80&fit=crop'
  'about.jpg' = 'https://images.unsplash.com/photo-1520975911507-6f7f77a2b86d?w=1200&q=80&fit=crop'
  'partners-bg.jpg' = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&fit=crop'
  'mission-saplings.jpg' = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&fit=crop'
}

# carousel 1..8 (use varied forest/plantation photos)
for ($i=1; $i -le 8; $i++) {
  $mapping["carousel-$i.jpg"] = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&fit=crop&sig=$i"
}

# services images
$mapping['services-1.jpg'] = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&fit=crop'
$mapping['services-2.jpg'] = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&fit=crop'
$mapping['services-3.jpg'] = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&fit=crop&sig=3'

# partners logos placeholders (you can replace with real logos later)
for ($i=1; $i -le 12; $i++) { $mapping["logo-$i.png"] = "https://via.placeholder.com/200x200.png?text=Logo+$i" }

# gallery 1..20
for ($i=1; $i -le 20; $i++) { $mapping["gallery-$i.jpg"] = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80&fit=crop&sig=$i" }

foreach ($name in $mapping.Keys) {
  $url = $mapping[$name]
  $out = Join-Path $outDir $name
  Write-Host "Downloading $url -> $out"
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -ErrorAction Stop
  } catch {
    Write-Warning "Failed to download $url : $_"
  }
}

Write-Host "Done. Put any real partner logos into public/images/logo-1.png ... logo-12.png and run the dev server."
