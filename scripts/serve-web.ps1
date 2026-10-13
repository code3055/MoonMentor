$ErrorActionPreference = "Stop"
& "$PSScriptRoot\build-web.ps1"
Set-Location "$PSScriptRoot\.."
Write-Output "Open http://localhost:4173"
python -m http.server 4173 --directory web
