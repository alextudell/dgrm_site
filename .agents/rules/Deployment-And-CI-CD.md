# Deployment, Hosting & CI/CD Protocol (dgrm.app)

## 🚀 Production Deployment Target
`dgrm.app` is compiled to a 100% static distribution (`/dist/`) via `astro build` and hosted on a Global Edge CDN for sub-100ms global latency and zero maintenance overhead.

---

## 🛠️ Recommended Hosting Platforms

### Option A: Cloudflare Pages (Recommended for Speed & Security)
* **Why:** Free global edge CDN, native DDOS protection, automated SSL on `dgrm.app`, instant git-push deploys, and automated PR preview branches.
* **Build Settings:**
  * **Framework Preset:** `Astro`
  * **Build Command:** `npm run build`
  * **Build Output Directory:** `dist`
  * **Node.js Version:** `20.x` or higher (Set env `NODE_VERSION = 20`)

### Option B: Firebase Hosting (Unified Ecosystem)
* **Why:** Keeps all Diagram assets under one Firebase console.
* **Setup (`firebase.json`):**
  ```json
  {
    "hosting": {
      "public": "dist",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "headers": [
        {
          "source": "**",
          "headers": [
            { "key": "X-Content-Type-Options", "value": "nosniff" },
            { "key": "X-Frame-Options", "value": "DENY" },
            { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
          ]
        },
        {
          "source": "**/*.@(jpg|jpeg|gif|png|webp|avif|svg|woff2)",
          "headers": [
            { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
          ]
        }
      ]
    }
  }
  ```
* **Deploy Command:** `firebase deploy --only hosting`

---

## 🌐 Custom Domain Setup (`dgrm.app`)

1. **Apex Domain (`dgrm.app`):**
   * Configured via DNS `A` / `CNAME` records pointing to Cloudflare Pages / Firebase.
2. **Subdomain Redirect (`www.dgrm.app`):**
   * Must automatically 301-redirect to apex `https://dgrm.app`.
3. **SSL/TLS Security:**
   * Automatic TLS 1.3 with HSTS (`Strict-Transport-Security`) enabled.

---

## 🔒 HTTP Security & Caching Headers

Every deployment must enforce standard security and immutable caching headers for static assets:

```text
# Security Headers
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin

# Long-term Cache for Hashed Assets (/assets/*)
Cache-Control: public, max-age=31536000, immutable

# Short-term Cache for HTML Pages
Cache-Control: public, max-age=0, must-revalidate
```

---

## 🚦 Pre-Deploy Verification Checklist

Before releasing updates to `dgrm.app`:
1. [ ] **Build Validation:** Run `npm run build` locally and ensure 0 warnings/errors.
2. [ ] **Legal Document Validation:** Check that `/privacy` and `/terms` render complete, unbroken Markdown.
3. [ ] **Asset Check:** Verify that all icons, OG images (`og-image.png`), and app screenshots load with 200 OK.
4. [ ] **Mobile Touch Test:** Verify hamburger drawer open/close and button taps on mobile viewport.
5. [ ] **Lighthouse Pass:** Confirm Performance and SEO scores are 100 on desktop and mobile.
