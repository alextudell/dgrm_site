# SEO, Metadata & OpenGraph Protocol (dgrm.app)

## 🌐 Mission: Flawless Discovery & Rich Social Sharing
When a link to `dgrm.app` is shared in Telegram, Twitter/X, iMessage, WhatsApp, or indexed by Google, it MUST render as a luxury, high-conversion rich card with zero broken previews.

---

## 🏷️ Essential Head Metadata Standards

Every page rendered via `BaseLayout.astro` must include the following dynamically constructed `<head>` tags:

### 1. Primary HTML Meta
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<meta name="theme-color" content="#090A0F" />
<link rel="canonical" href={canonicalURL} />

<title>{title} — Diagram | Premium Self-Coaching & Focus</title>
<meta name="description" content={description} />
<meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
```

### 2. OpenGraph (Facebook, Telegram, Discord, LinkedIn)
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Diagram" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL('/assets/og-image.png', Astro.site)} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Diagram — Premium Self-Coaching App" />
<meta property="og:locale" content="en_US" />
```

### 3. Twitter / X Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={canonicalURL} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL('/assets/og-image.png', Astro.site)} />
```

---

## 🖼️ OpenGraph Image Standards (`/public/assets/og-image.png`)

* **Dimensions:** Strictly `1200 x 630 px` (Aspect ratio `1.91:1`).
* **Visual Composition:**
  * Background: Deep `#090A0F` canvas with subtle brand indigo/amber ambient glow.
  * Center/Left: Diagram logomark + punchy tagline: *"Turn Ambition into Action"*.
  * Right: 3D / Angled perspective mockup of the Diagram mobile app (Dark Mode).
  * Quality: Clean, sharp PNG or WebP under `300kb`.

---

## 📱 Favicons & Web App Manifest

The `/public/` root must contain a complete favicon suite:
* `favicon.ico` (32x32 legacy fallback)
* `favicon.svg` (Modern scalable vector favicon)
* `apple-touch-icon.png` (180x180 for iOS Home Screen bookmarking)
* `site.webmanifest` (Web app manifest with name "Diagram", theme colors, and 192/512 icons)

---

## 🤖 Schema.org Structured Data (JSON-LD)

To help Google display Diagram as a validated mobile app in search snippets, inject a JSON-LD `SoftwareApplication` schema into the homepage `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Diagram",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "ProductivityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Premium self-coaching and goal achievement app based on the Goal → Plan → Action → Reflection loop.",
  "url": "https://dgrm.app",
  "author": {
    "@type": "Organization",
    "name": "Diagram Team",
    "url": "https://dgrm.app"
  }
}
</script>
```

---

## 🗺️ Sitemap & Robots.txt Protocol

* **Sitemap Generation:** Use `@astrojs/sitemap` integration to automatically generate `/sitemap.xml` on every build.
* **Robots.txt (`/public/robots.txt`):**
  ```text
  User-agent: *
  Allow: /

  Sitemap: https://dgrm.app/sitemap.xml
  ```
