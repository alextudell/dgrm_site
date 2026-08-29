# Web Architecture Principles & Project Structure (dgrm.app)

## 🏛️ Core Tech Stack
* **Framework:** **Astro (SSG / Static Site Generation)** — Zero-JavaScript baseline with Islands Architecture.
* **Styling:** **Tailwind CSS** configured with Diagram "Soft Premium" design tokens.
* **Content Engine:** **Astro Content Collections** with strict **Zod** schema validation for Markdown/MDX documents.
* **Icons:** **Lucide Icons** (`lucide-astro` / SVG sprites) for 100% visual consistency with the mobile app.
* **Deployment Target:** Static Output (`output: 'static'`) deployed to Global Edge CDN (Cloudflare Pages / Firebase Hosting).

---

## 📁 Law of the Land: Project Directory Structure
All code in `dgrm.app` MUST adhere to this strict Component-Driven layer hierarchy:

```text
dgrm-site/
├── public/                     # Pure static assets (favicons, robots.txt, sitemap.xml, OG images)
│   ├── assets/                 # App mockups, screenshots, branding assets
│   └── fonts/                  # Self-hosted web fonts (zero external Google Fonts CDN calls)
│
├── src/
│   ├── layouts/                # Master Page Shells & HTML scaffolding
│   │   ├── BaseLayout.astro    # Base HTML document, <head>, SEO meta, OpenGraph, font preloads
│   │   ├── LandingLayout.astro # BaseLayout + Global Header + Global Footer for marketing pages
│   │   └── LegalLayout.astro   # Focused reading layout for Privacy Policy & Terms of Use
│   │
│   ├── components/             # Reusable UI & Page Blocks (Separation of Concerns)
│   │   ├── ui/                 # Atomic design tokens (Buttons, Badges, GlassCards, Glows)
│   │   ├── sections/           # Large landing page slices (Hero, Philosophy, Rocket, Features, FAQ, CTA)
│   │   └── navigation/         # Header, Mobile Navigation Drawer, Footer
│   │
│   ├── content/                # Single Source of Truth for text documents
│   │   ├── config.ts           # Zod schema definitions for collections (legal, blog, etc.)
│   │   └── legal/              # Pure Markdown documents (privacy.md, terms.md)
│   │
│   ├── pages/                  # File-based routing (Zero business logic, assembly only)
│   │   ├── index.astro         # Main landing page (composes components/sections/*)
│   │   ├── privacy.astro       # Renders content/legal/privacy.md inside LegalLayout
│   │   ├── terms.astro         # Renders content/legal/terms.md inside LegalLayout
│   │   └── 404.astro           # Custom 404 Error page
│   │
│   ├── styles/                 # Global styling system
│   │   └── global.css          # Tailwind base directives, custom utilities (squircle, glass, glow)
│   │
│   └── utils/                  # Helper functions (SEO builders, date formatters, schema generators)
│
├── astro.config.mjs            # Astro build & integration configuration
├── package.json
└── tailwind.config.mjs         # Color tokens, radii, shadows mirrored from Flutter app
```

---

## ⚡ Architectural Mandates

### 1. The Zero-JS Law (Island Architecture)
* **Static by Default:** By default, Astro generates pure, ultra-fast HTML and CSS with 0kb of client-side JavaScript.
* **Selective Hydration:** Client-side JavaScript is strictly forbidden unless an element requires runtime user interactivity (e.g., FAQ accordion toggle, mobile menu drawer, interactive demo).
* **Directive Discipline:** When interactive JS is required, ALWAYS use the most conservative hydration directive:
  * `client:idle` — For non-critical interactive components (FAQ, demo).
  * `client:visible` — For components that appear below the fold.
  * **NEVER** use `client:load` on below-the-fold content.

### 2. Smart Section / Dumb Component Pattern
* **Sections (`src/components/sections/`):** Responsible for assembling UI primitives, passing copy, and orchestrating layout for a specific slice of the landing page.
* **UI Atoms (`src/components/ui/`):** Purely presentational, reusable dumb components (e.g. `Button`, `GlassCard`, `Badge`). They receive props and never make assumptions about page context.
* **Pages (`src/pages/`):** Strictly assemblies. No inline CSS spaghetti or raw HTML blocks inside `src/pages/*.astro`. A page simply imports layout and sections.

### 3. Separation of Legal Text and Presentation
* **No Raw HTML in Legal Pages:** Privacy Policy and Terms of Use MUST NEVER be hardcoded into `.astro` HTML files.
* They MUST live as pure Markdown in `src/content/legal/` and be rendered dynamically via `Content Collections` and `LegalLayout.astro`.

### 4. Asset Optimization Standard
* Raw `<img>` tags are strictly forbidden for local raster images.
* ALWAYS use Astro's native `<Image />` component (`import { Image } from 'astro:assets'`) with explicit `width`, `height`, and `format="webp"` or `format="avif"` to guarantee **Zero Cumulative Layout Shift (CLS = 0)**.
