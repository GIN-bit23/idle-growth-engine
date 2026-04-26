# 🌱 Kush Clicker Core

A mobile-first idle/clicker game starter built with Expo + React Native + TypeScript.

This repo includes a working **starter app** plus a full **VS Code setup** so you can open and start building quickly.

---

## ✅ Included starter setup

### Game starter
- Tap button to earn kush currency
- Passive income loop (ticks every 250ms)
- 3 generator types (Plant, Farm, Lab)
- Exponential generator cost scaling
- Modular architecture (`config`, `core`, `systems`, `ui`)

### VS Code starter
- Recommended extensions (`ESLint`, `Prettier`, React Native tools)
- Format-on-save and lint integration
- VS Code tasks + launch configs
- Prettier + EditorConfig + ESLint flat config
- `.gitignore` defaults for Expo/Node

---

## 🧰 Environment setup (one command)

### macOS / Linux
```bash
npm run setup:env
```

### Windows (PowerShell)
```bash
npm run setup:env:win
```

These setup scripts:
1. Verify Node.js version (20+)
2. Install npm dependencies
3. Install recommended VS Code extensions (if `code` CLI is available)
4. Print next steps

Node version target is pinned in `.nvmrc`.

---

## 📱 Run locally

```bash
npm run start
```

Then open with Expo Go (scan QR code on iOS/Android).

---

## 💻 Use with Visual Studio Code

1. Open this folder in VS Code.
2. Install recommended extensions when prompted.
3. Run `Terminal → Run Task...` and choose:
   - `Setup environment`
   - `Start Expo`
4. Use launch configurations from `Run and Debug` for Android/iOS.

---

## 🧪 Useful scripts

```bash
npm run setup:env
npm run setup:env:win
npm run start
npm run android
npm run ios
npm run web
npm run typecheck
npm run lint
npm run format
```

---

## 📄 License

Private project – not for distribution.
