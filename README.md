# 🌱 Kush Clicker Core

A mobile-first idle/clicker game built with scalable systems, evolution-based progression, and modular architecture.

This project focuses on long-term retention through meaningful upgrades, tech tree decisions, and exponential growth mechanics.

---

## 🚀 Overview

Kush Clicker is not just a basic clicker game.

It is designed as a **system-driven idle game engine** where:
- progression is tied to **visual evolution**
- upgrades create **real strategic decisions**
- systems scale cleanly over time

---

## 🎯 Core Features

### 🌱 Core Gameplay Loop
- Tap to generate currency
- Passive income through generators
- Real-time income scaling

### ⚙️ Upgrade System
- Multiple generator types (Plant, Farm, Lab, Dealer, Factory)
- Exponential cost and production scaling
- Immediate feedback on upgrades

### 🌐 Tech Tree
- 4 distinct branches:
  - Growth (raw power)
  - Efficiency (optimization)
  - Mutation (risk/reward)
  - Automation (idle scaling)
- Limited upgrade points → meaningful choices

### 🌿 Evolution System
- 5 progression stages:
  1. Organic
  2. Enhanced
  3. Mutated
  4. Energy
  5. Mythic
- Each stage:
  - increases production significantly
  - unlocks new mechanics

### ⚡ Feedback System
- Click feedback (particles + numbers)
- Upgrade feedback (visual + state change)
- Evolution feedback (major visual shift)

---

## 🧠 Design Principles

- Systems over features
- Clarity over complexity
- Mobile-first UX
- Scalable architecture
- No meaningless upgrades

---

## 🏗️ Project Structure


/src
/core → game loop, state management, economy
/systems → upgrades, tech tree, evolution
/ui → screens, components, layout
/assets → images, icons, brand assets
/config → balancing values and constants

/brand_assets → UI and design references
/claude.md → AI development rules


---

## ⚙️ Economy Model

Core formulas:


cost = base_cost * (1.15 ^ level)
production = base_output * level * global_multiplier


Rules:
- exponential but controlled growth
- visible impact per upgrade
- no flat progression

---

## 📱 Mobile-First Design

- Portrait orientation
- Thumb-friendly interactions
- Minimum 44px tap targets
- High-contrast UI for long sessions

---

## 🎨 UI & Design System

Defined in:
- `brand_assets/GUIDELINES.png`

Includes:
- color system
- typography
- icon rules
- component behavior

---

## 🤖 AI Development

This project uses `claude.md` to enforce:
- clean architecture
- consistent UI behavior
- correct economy scaling
- modular code structure

---

## 🚧 Current Status

- [ ] Core loop
- [ ] Generator system
- [ ] Upgrades interface
- [ ] Tech tree system
- [ ] Evolution system
- [ ] Prestige system

---

## 🧪 Future Systems

- Offline progress
- Achievements
- Events
- Meta progression
- Monetization layer

---

## ⚠️ Development Rules

Do NOT:
- hardcode values
- duplicate logic
- add weak upgrades (<10% impact)
- break scaling consistency

---

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies

npm install

3. Run development environment

npm run dev


---

## 📌 Notes

This project is built as a **scalable idle game system**, not just a prototype.

Every feature must:
- support progression
- improve retention
- integrate with existing systems

---

## 📄 License

Private project – not for distribution.
