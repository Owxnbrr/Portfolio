# Portfolio Dev — Starter

> Direction Artistique : Terminal Premium OS / Blueprint Paper Tech
> Stack : Next.js 14 App Router · TypeScript · Tailwind CSS

## Installation

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/
│   ├── globals.css        # Tokens CSS, thèmes dark/light, utilities
│   ├── layout.tsx         # Root layout + ThemeScript (no FOUC)
│   └── page.tsx           # Page principale
├── components/
│   ├── Header.tsx         # Nav sticky + theme toggle + mobile drawer
│   ├── Hero.tsx           # Hero + typewriter + terminal animé
│   ├── Projects.tsx       # Grid projets + filtre tabs
│   ├── Skills.tsx         # Grid compétences groupées
│   ├── Experience.tsx     # Timeline double colonnes
│   ├── About.tsx          # Bio + centres d'intérêt
│   ├── Contact.tsx        # CTA email + copy interaction
│   ├── Footer.tsx         # Footer avec build hash
│   ├── SectionHeader.tsx  # Composant réutilisable
│   ├── ScrollProgress.tsx # Barre de progression scroll
│   ├── ScrollReveal.tsx   # Wrapper animation entrée
│   └── ThemeScript.tsx    # Script inline anti-FOUC
├── data/
│   └── portfolio.ts       # ← TOUT TON CONTENU ICI
└── hooks/
    ├── useTheme.ts         # Toggle dark/light + localStorage
    └── useIntersectionObserver.ts
```

## Personnaliser

### 1. Ton contenu
Tout est dans `src/data/portfolio.ts` :
- `PROFILE` → nom, email, tagline, bio, liens
- `PROJECTS` → tes projets (ajoute, modifie, supprime)
- `SKILLS` → ta stack groupée par catégorie
- `EXPERIENCES` → work + education

### 2. Thèmes
Tokens dans `src/app/globals.css` :
```css
:root, [data-theme="dark"]  { --color-accent: #0EA5E9; ... }
[data-theme="light"]         { --color-accent: #0369A1; ... }
```
Modifie les hex pour personnaliser.

### 3. Typographies
Changées dans `globals.css` (import Google Fonts) + `tailwind.config.js` (fontFamily).
Actuellement : **Syne** (display) + **Geist** (sans) + **Geist Mono** (mono).

### 4. Animations
Configurées dans `tailwind.config.js` → `keyframes` + `animation`.
Durées dans les classes Tailwind `duration-{n}`.

## Toggle de thème
- Persisté dans `localStorage` (clé : `portfolio-theme`)
- Respecte `prefers-color-scheme` par défaut
- Zéro FOUC grâce au script inline dans `<head>`

## Accessibilité
- Focus visible sur tous les éléments interactifs
- `aria-label` sur tous les liens icônes
- `aria-live` sur le typewriter hero
- `prefers-reduced-motion` respecté (typewriter figé)
- Contraste AA minimum garanti sur les deux thèmes

## Déploiement

```bash
npm run build
# → Vercel, Netlify, ou tout hébergeur Next.js
```

---

`// build #a3f2c8d`
