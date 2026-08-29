# Content Collections & Legal Documents Protocol (dgrm.app)

## ⚖️ Purpose & App Store Compliance
Apple App Store (Guideline 5.1.1) and Google Play Developer Policies strictly require direct, public, non-gated URLs for:
1. **Privacy Policy** (`https://dgrm.app/privacy`)
2. **Terms of Use & EULA** (`https://dgrm.app/terms`)

These documents must be easy to read, clearly dated, legally rigorous, and updated independently of the site's layout code.

---

## 📂 Content Architecture (`src/content/`)

Legal documents live as pure Markdown in `src/content/legal/` and are validated using **Astro Content Collections** + **Zod**.

```text
src/content/
├── config.ts               # Collection schema definition
└── legal/
    ├── privacy.md          # Privacy Policy
    └── terms.md            # Terms of Use & End User License Agreement (EULA)
```

---

## 🛡️ Zod Schema Definition (`src/content/config.ts`)

Every legal document MUST satisfy this strict schema:

```typescript
import { defineCollection, z } from 'astro:content';

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    effectiveDate: z.string(), // e.g. "September 1, 2026"
    lastUpdated: z.string(),   // e.g. "August 28, 2026"
    version: z.string(),       // e.g. "1.0.0"
  }),
});

export const collections = {
  legal: legalCollection,
};
```

---

## 📜 Mandatory Content Requirements for Diagram

### 1. Privacy Policy (`privacy.md` / `privacy-ru.md`) Must Disclose:
* **Offline-First Data Storage:** All goals, plans, milestones, tasks, daily habits, diary entries, reflections, and wheel of values entries are stored locally on the user's device via `LocalDocumentStore`. Diagram functions fully anonymously without internet.
* **Authentication Data:** Firebase Authentication processes anonymous guest tokens, email/password credentials, or Google sign-in OAuth tokens strictly for account identification and sync authorization.
* **Cloud Backup & Storage:**
  * **Firebase Storage (Google Cloud):** Stores `app_state.json` and media files over TLS, encrypted at rest (AES-256) and secured by Firebase Security Rules. **Explicitly state: NOT client-side zero-knowledge / E2EE encryption.**
  * **Google Drive Backup:** Optional backup to an isolated hidden folder (`appDataFolder`) via Google Drive API.
* **AI Processing (Google Gemini / AI Proxy):** AI requests (decomposition, harmony analysis, manifesto, voice intent) occur ONLY upon explicit user action, processed ephemerally (Hot Draft), and are NEVER used to train global AI models.
* **Device Permissions:**
  * *Microphone / Speech-to-Text:* Dictation and voice entry only via system APIs (`speech_to_text`).
  * *Camera / Photos:* Habit proof and avatar selection only.
  * *Local Notifications & Widgets:* Scheduled locally (`flutter_local_notifications`), widgets read local data snapshot.
* **Diagnostic, Telemetry & Analytics:** Firebase Crashlytics collects anonymized crash logs; Firebase Analytics collects anonymized interaction events. Journal and goal texts are NEVER sent to telemetry.
* **Subscription Processing:** Subscriptions are processed by Apple In-App Purchases and Google Play Billing, mediated by **RevenueCat** (receipt validation). No payment card data is ever collected or processed by Diagram.
* **Data Sovereignty & Deletion (GDPR & CCPA):** Export of full archive (`UserDataExporter` -> ZIP) and permanent in-app account & cloud data deletion (*Settings → Account → Delete Account*), plus local purge on app uninstall.

### 2. Terms of Use (`terms.md` / `terms-ru.md`) Must Disclose:
* **License & Intellectual Property:** Standard EULA granting a personal, non-transferable license to use Diagram.
* **Diagram Pro Subscriptions:**
  * Auto-renewable subscription terms (Monthly, Annual, Lifetime).
  * Payment charged to Apple ID / Google Account upon purchase confirmation.
  * Auto-renewal occurs unless turned off at least 24 hours before the current period ends.
  * Subscriptions managed/cancelled directly through user's Apple ID / Google Play Subscriptions settings.
* **Disclaimer of Warranty:** The app is a self-coaching tool and does not provide certified psychological, medical, or financial counseling.
* **Contact Channel:** `support@dgrm.app`.

---

## 🎨 Typography & Legal Layout (`LegalLayout.astro`)

Legal pages must use Tailwind's official Typography plugin (`@tailwindcss/typography`) for readable, distraction-free reading:

```astro
---
import BaseLayout from './BaseLayout.astro';
import Header from '../components/navigation/Header.astro';
import Footer from '../components/navigation/Footer.astro';

interface Props {
  title: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
  version: string;
}

const { title, description, lastUpdated, effectiveDate, version } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <Header />
  <main class="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
    <article class="max-w-3xl mx-auto">
      {/* Document Header */}
      <header class="mb-12 pb-8 border-b border-border-subtle">
        <a href="/" class="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-6">
          <span>←</span> Back to Diagram
        </a>
        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">{title}</h1>
        <div class="flex flex-wrap items-center gap-4 text-xs text-text-muted">
          <span>Effective: {effectiveDate}</span>
          <span>•</span>
          <span>Last Updated: {lastUpdated}</span>
          <span>•</span>
          <span class="px-2 py-0.5 rounded-full bg-surface-soft border border-border-subtle">Version {version}</span>
        </div>
      </header>

      {/* Markdown Body */}
      <div class="prose prose-invert prose-slate max-w-none 
                  prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-tight
                  prose-p:text-text-secondary prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-text-primary
                  prose-ul:text-text-secondary prose-ol:text-text-secondary
                  prose-li:my-1">
        <slot />
      </div>
    </article>
  </main>
  <Footer />
</BaseLayout>
```
