$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
moon build --target js --release web/bridge
Copy-Item -Force "_build\js\release\build\web\bridge\bridge.js" "web\bridge.js"
Write-Output "Built web/bridge.js"
