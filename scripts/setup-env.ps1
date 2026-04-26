$ErrorActionPreference = "Stop"
$RootDir = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $RootDir

Write-Host "[1/4] Checking Node.js"
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw "Node.js is not installed. Install Node 20+ first."
}

$nodeVersion = node -p "process.versions.node"
$nodeMajor = [int]($nodeVersion.Split('.')[0])
if ($nodeMajor -lt 20) {
  throw "Node.js version must be >= 20. Current: $(node -v)"
}

Write-Host "[2/4] Installing npm dependencies"
npm install

Write-Host "[3/4] Installing VS Code extensions (if 'code' CLI is available)"
if (Get-Command code -ErrorAction SilentlyContinue) {
  code --install-extension dbaeumer.vscode-eslint --force
  code --install-extension esbenp.prettier-vscode --force
  code --install-extension msjsdiag.vscode-react-native --force
  code --install-extension yoavbls.pretty-ts-errors --force
} else {
  Write-Host "'code' command not found. Open VS Code and install recommended extensions manually."
}

Write-Host "[4/4] Environment setup complete"
Write-Host "Run: npm run start"
