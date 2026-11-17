Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\Ahmad Yazdani\Desktop\umer Dential Clinic\logo-original.png"
$bmp = New-Object System.Drawing.Bitmap($srcPath)
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check if pixel is not near-white (detect logo pixels)
        if ($c.R -lt 235 -or $c.G -lt 235 -or $c.B -lt 235) {
            # also ignore very faint watermark or gray background if any
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Found logo area: minX=$minX, minY=$minY, maxX=$maxX, maxY=$maxY"

# Add small padding
$pad = 12
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, ($maxX - $minX + 1) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, ($maxY - $minY + 1) + ($pad * 2))

Write-Host "Cropping rect: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$croppedBmp = $bmp.Clone($cropRect, $bmp.PixelFormat)

# Make transparent version and white-background version
$transparentBmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $c = $croppedBmp.GetPixel($x, $y)
        if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) {
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } else {
            $transparentBmp.SetPixel($x, $y, $c)
        }
    }
}

$croppedBmp.Save("c:\Users\Ahmad Yazdani\Desktop\umer Dential Clinic\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$transparentBmp.Save("c:\Users\Ahmad Yazdani\Desktop\umer Dential Clinic\logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$croppedBmp.Dispose()
$transparentBmp.Dispose()
Write-Host "Logo cropped and saved successfully!"
