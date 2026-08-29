# Performance, Core Web Vitals & Zero-CLS Protocol (dgrm.app)

## ⚡ The Benchmark: 100/100 Lighthouse Standard
`dgrm.app` is the front door to a luxury software product. It must load instantly, without layout jumps, stutters, or heavy JavaScript bundles.

### Core Web Vitals Targets:
* **LCP (Largest Contentful Paint):** `< 1.2s` (Hero image/text renders instantly).
* **CLS (Cumulative Layout Shift):** `0.00` (Zero visual jumps during loading).
* **INP / FID (Interaction to Next Paint):** `< 50ms` (Instant response on clicks and taps).
* **Total Page Weight:** `< 500kb` (excluding high-res app screenshots, which must be lazy-loaded).

---

## 🖼️ The Asset & Image Optimization Law

### 1. Mandatory `<Image />` Component
* **FORBIDDEN:** Raw HTML `<img src="...">` tags for local screenshots and illustrations.
* **MANDATORY:** Always use Astro's built-in image optimization component:
  ```astro
  ---
  import { Image } from 'astro:assets';
  import heroMockup from '../assets/hero-mockup.png';
  ---

  <Image
    src={heroMockup}
    alt="Diagram App Interface"
    width={1200}
    height={800}
    format="webp"
    quality={90}
    loading="eager"
    fetchpriority="high"
    class="w-full h-auto rounded-squircle-xl"
  />
  ```

### 2. Loading Strategy: Eager vs Lazy
* **Above-the-fold (Hero image / Logo):**
  * `loading="eager"`
  * `fetchpriority="high"`
  * Explicit `width` and `height` (prevents CLS).
* **Below-the-fold (Feature cards / Testimonials / Footer):**
  * `loading="lazy"`
  * `decoding="async"`

### 3. SVG Best Practices
* Use inline SVGs or SVG sprite sheets for icons (e.g. Lucide Icons).
* Always specify explicit `width`, `height`, and `viewBox` attributes on every SVG to prevent 1-frame icon resizing jumps.

---

## 🔤 Self-Hosted Fonts & Zero Flash of Unstyled Text (FOUT)

* **FORBIDDEN:** Linking to external Google Fonts CDNs (`fonts.googleapis.com` / `fonts.gstatic.com`). External font CDNs cause render-blocking DNS lookups and privacy compliance (GDPR) issues.
* **MANDATORY:** Host modern `.woff2` font files locally in `/public/fonts/`.
* **Font Preloading in `<head>` (`BaseLayout.astro`):**
  ```html
  <link
    rel="preload"
    href="/fonts/inter-latin-var.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  ```
* **CSS Font Declaration:** Always use `font-display: swap;` in `@font-face` rules.

---

## 🛑 Third-Party Scripts & Analytics Discipline

* **Zero Heavy Trackers:** Heavy scripts (e.g., full Google Tag Manager, heavy chat widgets) are strictly forbidden on the marketing landing page.
* **Privacy-Friendly Analytics:** Use lightweight, privacy-first analytics (Cloudflare Web Analytics, Plausible, or Umami — script size `< 3kb`) injected with `defer` or `async`.
* **Cookie Banner Avoidance:** Since we do not use invasive tracking or marketing advertising cookies on `dgrm.app`, we maintain a clean UI without annoying full-screen cookie consent walls.

---

## 🧪 Performance Verification Checklist (Pre-Deploy)

Before committing and deploying changes to `dgrm.app`:
1. [ ] Run `npm run build` to ensure static generation passes with 0 errors.
2. [ ] Run Lighthouse in Chrome Incognito mode (Mobile & Desktop).
3. [ ] Verify that Performance, Accessibility, Best Practices, and SEO scores are all **≥ 98%**.
4. [ ] Check Network tab: Total JavaScript transferred on landing page must be `< 30kb`.
5. [ ] Check Console: Zero 404s for images, fonts, or favicons.
