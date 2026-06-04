# Evntiqa — Marketing Site

ABM-powered executive Circles for B2B technology brands.
A clean, fast, accessible single-page marketing site built with **React 18 + Vite + TypeScript + Tailwind CSS**.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload at http://localhost:5173)
npm run dev

# 3. Type-check + build for production (output: dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node 18.18+** (Node 20 LTS recommended).

---

## Project structure

```
evntiqa-website/
├─ public/                       # Static assets, copied as-is into the build
│  ├─ brand/                     # Evntiqa logo (light + dark variants)
│  ├─ logos/                     # Client logo wall artwork
│  ├─ favicon.svg
│  └─ robots.txt
├─ src/
│  ├─ components/
│  │  ├─ Header.tsx              # Sticky nav + mobile drawer
│  │  ├─ Hero.tsx                # Navy hero w/ rings + grid
│  │  ├─ TrustSection.tsx        # "No spray-and-pray" list
│  │  ├─ HowItWorks.tsx          # 4-step flow
│  │  ├─ WhyEvntiqa.tsx          # 6 benefit cards
│  │  ├─ WhoWeHelp.tsx           # 8 audience cards (navy)
│  │  ├─ ClientLogos.tsx         # Dual-direction marquee
│  │  ├─ About.tsx               # Story + stats
│  │  ├─ FinalCTA.tsx            # Closing call to action
│  │  ├─ Footer.tsx              # Brand + links + social
│  │  ├─ WhatsAppButton.tsx      # Floating launcher
│  │  ├─ Preloader.tsx           # First-load branded splash
│  │  ├─ ui.tsx                  # Container, Reveal, SectionHead
│  │  └─ icons.tsx               # Single typed icon set
│  ├─ data/site.ts               # ⭐ All copy / nav / cards / clients / contact
│  ├─ hooks.ts                   # useScrollReveal, useStickyHeader, useScrollLock
│  ├─ styles/index.css           # Tailwind + design tokens + decorative CSS
│  ├─ App.tsx                    # Page composition
│  └─ main.tsx                   # React entry
├─ index.html                    # SEO meta, OG/Twitter, JSON-LD, fonts
├─ tailwind.config.js            # Brand palette, fonts, shadows
├─ vite.config.ts
└─ tsconfig.json
```

The page is composed in [src/App.tsx](src/App.tsx) by importing each section component in order. To remove or reorder a section, edit that file.

---

## Editing content (no code required)

**Every piece of copy on the site lives in one file:** [src/data/site.ts](src/data/site.ts).

Strings are clearly grouped:

| Block           | What it controls                                             |
| --------------- | ------------------------------------------------------------ |
| `site`          | Brand name, tagline, email, LinkedIn, primary CTA, nav links |
| `site.whatsapp` | The floating WhatsApp button (number + pre-filled message)   |
| `hero`          | Hero tag chip, headline, sub-text, support quote             |
| `trust`         | "Executive dialogues are only valuable…" section             |
| `how`           | The 4 step cards                                             |
| `why`           | The 6 "Why B2B Marketers Work with Us" cards                 |
| `who`           | The 8 audience cards on the navy section                     |
| `clients`       | The brand wall lead, sub, and the list of client logo files  |
| `about`         | The eyebrow, heading, three paragraphs, three stat tiles     |
| `finalCta`      | The closing heading + body                                   |
| `footer`        | Footer link list and the two bottom-row strings              |

Save the file → Vite hot-reloads → done.

---

## Quick swap points

These three things are placeholders right now and ship as a **one-line change** each.

### 1. Brand logo

Replace these two files with the real Evntiqa wordmark (SVG preferred):

- [public/brand/logo-light.svg](public/brand/logo-light.svg) — used on dark backgrounds (header over the hero, footer)
- [public/brand/logo-dark.svg](public/brand/logo-dark.svg) — used on light backgrounds (header after scroll, mobile menu)

Currently the header and footer render the wordmark as styled text — once you have artwork files you can also swap to `<img>` tags inside [Header.tsx](src/components/Header.tsx) (`BrandLogo`) and [Footer.tsx](src/components/Footer.tsx).

### 2. WhatsApp number

Open [src/data/site.ts](src/data/site.ts) and replace the `number` field:

```ts
whatsapp: {
  number: '14155551234', // digits only, country code first, no '+' or spaces
  message: "Hi Evntiqa, I'd like to book a discovery call.",
},
```

### 3. Client logos

Each client SVG lives in [public/logos/](public/logos/). Replace any file with the real logo (keep the **same filename** so no code changes are needed). To add or remove brands, edit `clients.logos` in [src/data/site.ts](src/data/site.ts).

Recommended specs: SVG preferred, full-colour brand artwork, ~200×60 viewBox. Each logo is rendered inside a 200×104 white card with a soft hairline border, so any palette looks clean.

---

## Design system

The brand palette and type scale live in [tailwind.config.js](tailwind.config.js). The dominant colour is **Neon Blue `#1F51FE`**, with white as the canvas, a deep navy `#0A1736` for the hero / Who-We-Help / Final-CTA / Footer, and near-blacks for text — kept sparing per the brief.

| Token                 | Value      | Use                                                   |
| --------------------- | ---------- | ----------------------------------------------------- |
| `brand`               | `#1F51FE`  | Primary buttons, links, eyebrows, icon outlines       |
| `brand-bright`        | `#5076FF`  | Hero headline accent, hero tag dot, footer link hover |
| `brand-50/100`        | tints      | Card icon chips, hairlines, dashed connector line     |
| `navy`                | `#0A1736`  | Hero / Who / Final / Preloader background             |
| `navy-deep`           | `#06102B`  | Footer background                                     |
| `ink`/`ink-2`/`ink-3` | dark blues | Primary, secondary, tertiary text                     |

Fonts (Google Fonts): **Schibsted Grotesk** for display headings, **Hanken Grotesk** for body — both loaded from the CDN with `display=swap` to avoid layout flash.

---

## Animations & motion

Designed to feel premium without ever lagging:

- All scroll reveals use one shared `IntersectionObserver` (one-time per element).
- Animations only ever touch `transform` and `opacity` for 60fps on lower-powered phones.
- Hero rings drift on the GPU; client logo marquee is pure CSS keyframes; WhatsApp pulses with a single `transform` ring.
- `prefers-reduced-motion` is honoured — all motion is disabled and reveals snap to visible.

---

## Accessibility & SEO

- Semantic `<header>`, `<main>`, `<section>`, `<footer>` with one `<h1>` (the hero headline).
- All sections use `aria-labelledby` referencing the section's heading id.
- Decorative SVGs are `aria-hidden`; functional icon-only links carry `aria-label`s.
- Logo marquee duplicates its set for the loop — the duplicates are `aria-hidden` so screen readers don't read brands twice.
- `<title>`, meta description, Open Graph + Twitter Card tags, canonical, theme-color, and `Organization` JSON-LD all in [index.html](index.html).
- Drop a 1200×630 PNG at `public/og-image.png` to ship the social preview image (referenced by the OG/Twitter meta tags).

---

## Deploy

This builds to a **static** `dist/` folder — deploy it anywhere static hosting is supported. All three of these are free and excellent for this site:

### Netlify (recommended)

1. Push the repo to GitHub/GitLab.
2. New site → import repo.
3. Build command: `npm run build` · Publish directory: `dist`.

### Vercel

1. New project → import repo.
2. Framework preset: **Vite**. Build command and output directory are auto-detected.

### Cloudflare Pages

1. Create application → Pages → connect repo.
2. Framework preset: **Vite**. Build command: `npm run build` · Build output: `dist`.

For all three: set the production domain to `evntiqa.com` and update the `<link rel="canonical">` and `og:url` in [index.html](index.html) if the domain ever changes.

---

## Scripts reference

| Command             | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Vite dev server with hot-module reload          |
| `npm run typecheck` | TypeScript only (no emit)                       |
| `npm run build`     | Type-check + production build into `dist/`      |
| `npm run preview`   | Serve the production build locally on port 4173 |

---

© 2026 Evntiqa.
