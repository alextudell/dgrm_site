# Design System & Tokens (Soft Premium Web)

## 🎨 Aesthetic Philosophy: "Soft Premium"
The visual identity of `dgrm.app` is an exact mirror of the mobile app:
* **Deep Layered Canvas:** Deep, quiet dark backgrounds with subtle, non-distracting ambient light glows.
* **Tactile Glassmorphism:** Frosted glass cards with soft borders (`backdrop-blur-md`), giving a sense of physical layering.
* **Squircle Geometry:** Generous, organic corner radii (24px–32px) rather than sharp, generic SaaS corners.
* **8pt Spacing Grid:** Strict mathematical cadence across all paddings, margins, and section gaps.

---

## 🌈 Color Palette Tokens (Tailwind Configuration)

### 1. Canvas & Surface Layers (Dark Theme Primary)
* **Background Canvas:** `#090A0F` (`bg-canvas`) — The deepest background layer.
* **Surface Card:** `#141722` (`bg-surface`) — Standard elevation for content cards.
* **Surface Elevated:** `#1B1F2E` (`bg-surface-elevated`) — Hover states, dropdowns, and active cards.
* **Surface Soft:** `#23283B` (`bg-surface-soft`) — Inner tracks, inputs, secondary badges.

### 2. Accent & Semantic Brand Colors
* **Primary Brand (Indigo):** `#6366F1` (`text-primary`, `bg-primary`) — Key buttons, primary links, active badges.
* **Primary Deep:** `#4F46E5` (`bg-primary-deep`) — Button gradients and hover fills.
* **Rocket / Warning (Amber/Orange):** `#F59E0B` (`text-accent-rocket`, `bg-accent-rocket`) — Focus status, streak highlights, rocket mechanics.
* **Triumph / Gold:** `#EAB308` (`text-accent-gold`) — Milestones, completed achievements, trophy highlights.
* **Lavender / AI Glow:** `#A78BFA` (`text-accent-ai`, `bg-accent-ai`) — Diagram AI features, token badges, decomposition highlights.
* **Success (Emerald):** `#10B981` (`text-success`) — Completed states, positive growth metrics.

### 3. Text & Content Hierarchy (Contrast Calibrated)
* **Text Primary (`text-text-primary`):**
  * *Dark Mode:* `#F8FAFC` (Slate-50 — 100% contrast, headings, active labels)
  * *Light Mode:* `#090A0F` (Slate-950 — deep black, crisp contrast ~19:1)
* **Text Secondary (`text-text-secondary`):**
  * *Dark Mode:* `#94A3B8` (Slate-400 — muted slate, contrast ~7.5:1)
  * *Light Mode:* `#334155` (Slate-700 — deep slate, high legibility, contrast ~9.5:1)
* **Text Tertiary / Muted (`text-text-muted`):**
  * *Dark Mode:* `#64748B` (Slate-500 — contrast ~4.6:1)
  * *Light Mode:* `#64748B` (Slate-500 — WCAG AA compliant, contrast ~4.8:1)

### 4. Borders & Dividers
* **Border Subtle (`border-border-subtle`):**
  * *Dark Mode:* `rgba(255, 255, 255, 0.08)`
  * *Light Mode:* `rgba(0, 0, 0, 0.08)`
* **Border Highlight (`border-border-highlight`):**
  * *Dark Mode:* `rgba(255, 255, 255, 0.16)`
  * *Light Mode:* `rgba(0, 0, 0, 0.14)`

---

## 📐 Geometry & Corner Radii

Never use sharp 4px/6px corners. Diagram uses rounded, soft surfaces:
* **`rounded-squircle-sm`:** `12px` — Badges, small pills, tags.
* **`rounded-squircle-md`:** `16px` — Buttons, inputs, small feature chips.
* **`rounded-squircle-lg`:** `24px` — Standard feature cards, testimonials, FAQ cards.
* **`rounded-squircle-xl`:** `32px` — Hero containers, major showcase banners, app mockup frames.
* **`rounded-full`:** `9999px` — CTA buttons, floating status badges, store pills.

---

## 🪟 Glassmorphism & Depth Utilities (CSS Recipes)

### 1. The Standard Glass Card (`.diagram-glass`)
```css
.diagram-glass {
  background: rgba(20, 23, 34, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.diagram-glass:hover {
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
}
```

### 2. Ambient Light Glow (`.diagram-glow`)
```css
.diagram-glow-indigo {
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%);
}

.diagram-glow-amber {
  background: radial-gradient(circle at center, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0) 70%);
}
```

---

## 🔤 Typography Hierarchy

* **Primary Sans Font:** `Inter` or `Plus Jakarta Sans` (clean geometric sans-serif for UI & body).
* **Headings:**
  * **Display H1:** `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary`
  * **Section H2:** `text-3xl sm:text-4xl font-bold tracking-tight text-text-primary`
  * **Card H3:** `text-xl sm:text-2xl font-semibold text-text-primary`
* **Body Copy:** `text-base sm:text-lg text-text-secondary leading-relaxed`
* **Eyebrow / Badge Label:** `text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary`

---

## 📏 Spacing Scale & Section Rhythm (8pt Grid Standard)

Always use strict mathematical cadences on the 8pt grid:
* **Section Vertical Padding (`space-section-standard`):** `py-14 sm:py-20` (56px mobile $\to$ 80px desktop)
* **Hero Bottom Padding (`space-section-hero-b`):** `pb-14 sm:pb-20` (56px mobile $\to$ 80px desktop)
* **Inter-Section Horizon Gap:** `160px` on desktop (80px bottom of Section A + 80px top of Section B, centered on `border-t border-border-subtle`)
* **Content Stack Gap (`space-content-stack`):** `space-y-12 sm:space-y-16` (48px mobile $\to$ 64px desktop between header and cards)
* **Header Elements Gap (`space-header-gap`):** `space-y-3 sm:space-y-4` (12px–16px between eyebrow, heading, and subtitle)
* **Card Inner Padding:** `p-5 sm:p-8 lg:p-10` (20px–40px)
* **Card & Feature Grids Gap:** `gap-4 sm:gap-6 lg:gap-8` (16px–32px)

---

## 🛑 Single Surface & Anti-Matryoshka Law (Zero Nested Boxes)

To prevent clutter, claustrophobic mobile layouts, and border-in-border-in-border noise:
1. **Max Elevation Level = 1:** Never place an elevated bordered card (`diagram-glass` / `diagram-glass-elevated`) inside another card container.
2. **Inner Elements Are Frameless:**
   * Inside cards or lists, icon badges, chevrons, and buttons must NOT use harsh glass borders (`border-border-highlight`).
   * Use clean SVG glyphs or soft translucent tints (`bg-primary/10`, `text-primary`).
3. **List Items on Mobile:**
   * Interactive lists (such as FAQ accordions) must either be a **single stack of standalone cards** (`space-y-3` with `diagram-glass rounded-2xl`) or an **open borderless list** on the canvas. Never wrap a group of cards into an outer master box.
4. **Tailwind Class Safety Rule:**
   * Never use non-standard fractional Tailwind spacing classes (`py-4.5`, `p-3.5`, `gap-2.5` where unconfigured).
   * Stick strictly to the standard scale: `p-3`, `p-4`, `p-5`, `p-6`, `p-8`, `gap-3`, `gap-4`, `gap-6` or explicit bracket notation (`p-[18px]`).
