# 🌱 Kush Clicker Core

A mobile-first idle/clicker game starter built with Expo + React Native + TypeScript.

This repo includes a working **starter app** plus a full **VS Code setup** so you can open and start building quickly.

---

## ✅ Included "everything" starter setup

### Game starter
- Tap button to earn kush currency
- Passive income loop (ticks every 250ms)
- 3 generator types (Plant, Farm, Lab)
- Exponential generator cost scaling
- Modular architecture (`config`, `core`, `systems`, `ui`)

### VS Code starter
- Recommended extensions (`ESLint`, `Prettier`, React Native tools)
- Format-on-save and lint integration
- VS Code tasks (`Install dependencies`, `Start Expo`, `Typecheck`)
- VS Code launch configs for iOS/Android React Native debugging
- Prettier + EditorConfig + ESLint flat config
- `.gitignore` defaults for Expo/Node

---

## 🧮 Economy formulas

```ts
cost = baseCost * (growth ^ level)
production = baseProduction * level
```

Balance tuning lives in `src/config/balance.ts`.

---

## 📱 Run locally

1. Install dependencies

```bash
npm install
```

2. Start Expo

```bash
npm run start
```

3. Open on phone
- Install **Expo Go** on iOS/Android
- Scan the QR code from terminal/browser

---

## 💻 Use with Visual Studio Code

1. Open this folder in VS Code.
2. Install recommended extensions when prompted.
3. Run tasks with `Terminal → Run Task...`.
4. Use launch configurations from `Run and Debug` for Android/iOS.

---

## 🧪 Useful scripts

```bash
npm run start
npm run android
npm run ios
npm run web
npm run typecheck
npm run lint
npm run format
```

---

## 🛠️ Next steps to build

- Save/load with AsyncStorage
- Offline earnings calculation
- Tech tree and evolution multipliers
- Prestige reset loop
- Better visual feedback (floating numbers, particles)

---

## 📄 License

Private project – not for distribution.
