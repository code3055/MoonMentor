param(
  [string]$Curriculum = "$PSScriptRoot\..\examples\moonbit-basics.curriculum",
  [string]$Attempts = "$PSScriptRoot\..\examples\learner.attempts",
  [string]$Exercises = "$PSScriptRoot\..\examples\moonbit-basics.exercises",
  [ValidateSet("text", "json")][string]$Format = "text"
)

$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."

$env:MOONMENTOR_CURRICULUM = Get-Content -Raw -Encoding utf8 -LiteralPath $Curriculum
$env:MOONMENTOR_ATTEMPTS = Get-Content -Raw -Encoding utf8 -LiteralPath $Attempts
$env:MOONMENTOR_EXERCISES = Get-Content -Raw -Encoding utf8 -LiteralPath $Exercises
$env:MOONMENTOR_FORMAT = $Format
moon run cmd/moonmentor
