---
title: "Privacy Policy"
description: "Privacy Policy for Diagram mobile application and dgrm.app web services."
effectiveDate: "September 1, 2026"
lastUpdated: "August 28, 2026"
version: "1.0.0"
---

# Privacy Policy

Welcome to **Diagram** (referred to as "we", "us", "our", or "Diagram"). We develop and operate the Diagram mobile application and the official web hub at **`dgrm.app`**. 

Your privacy is our core architectural priority. Diagram is built upon a **Sovereign Data & Offline-First** philosophy: your goals, plans, daily tasks, reflections, and personal journals belong strictly to you.

---

## 1. Sovereign Data Architecture (Offline-First)

* **Local Storage by Default:** All your personal coaching data — including Goals, Milestones, Tasks, Habits, Dioms, Manifestos, Wheel of Values entries, and Daily Reflection logs — is stored locally on your device via an encrypted local database (`LocalDocumentStore`).
* **Zero Data Monetization:** We never sell, rent, monetize, or inspect your personal productivity and coaching data.

---

## 2. Information We Process

To provide synchronization, secure authentication, and optional intelligent coaching features, we process only the minimum necessary data:

### A. Authentication Data
* When you sign in (e.g. via Google Sign-In or Email Authentication), **Firebase Authentication** (Google LLC) processes your email address, display name, and unique authentication identifier (UID).
* If you use the app anonymously, a random anonymous UID is assigned to your device.

### B. Subscription & In-App Purchase Data
* In-app subscriptions (such as *Diagram Pro*) are processed directly through **Google Play Billing** (Google LLC) and **Apple In-App Purchases** (Apple Inc.).
* We use **RevenueCat** (RevenueCat, Inc.) as our subscription infrastructure provider to manage and validate receipts. RevenueCat receives anonymized purchase receipts and your app user ID to unlock premium features across your devices. No payment card details ever touch Diagram servers.

### C. Diagnostic & Crash Logs
* To ensure stability and fix bugs, we use **Firebase Crashlytics** (Google LLC). Crashlytics collects anonymized crash logs, operating system versions, and device hardware models. This data cannot be linked to your personal coaching contents.

### D. Diagram AI Coaching Requests
* When you explicitly request AI assistance (such as Goal Decomposition, Manifesto drafting, or Routine balancing), your specific text prompt is transmitted over secure TLS encryption to the **Google Gemini API**.
* **Zero Model Training:** AI requests are processed ephemerally and are **NOT** used to train global AI models or shared with third parties for marketing purposes.

---

## 3. How We Use Your Information

We process technical and account data strictly to:
1. Authenticate your account and prevent unauthorized access.
2. Synchronize your active subscription status (*Diagram Pro*).
3. Process your explicit AI coaching requests.
4. Diagnose app crashes and improve software performance.
5. Provide customer support when you reach out to us.

---

## 4. Third-Party Service Providers

We rely on trusted, industry-standard infrastructure providers that comply with strict security and privacy standards (GDPR, SOC2, ISO 27001):

| Provider | Purpose | Privacy Link |
| :--- | :--- | :--- |
| **Google Firebase** | Authentication & Crashlytics | [Firebase Privacy](https://firebase.google.com/support/privacy) |
| **RevenueCat** | Subscription Receipt Validation | [RevenueCat Privacy](https://www.revenuecat.com/privacy) |
| **Google Gemini API** | AI Decomposition Engine | [Google Cloud Privacy](https://cloud.google.com/terms/cloud-privacy-notice) |
| **Cloudflare** | Web CDN & DDoS Protection | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |

---

## 5. Your Rights: Data Control & Deletion (GDPR & CCPA)

You maintain complete control over your data at all times:

* **Export Your Data:** You can export your goals, tasks, and coaching logs into a standard portable archive directly within the app (*Settings → Data → Export Data*).
* **Instant Account & Cloud Deletion:** You can delete your account and all associated cloud records instantly inside the app by going to **Settings → Account → Delete Account**.
* **Local Data Erase:** Uninstalling the app completely purges all local offline database stores from your device.
* **Support Request:** You may also request complete data erasure or ask privacy-related questions by emailing us at **support@dgrm.app**.

---

## 6. Children's Privacy

Diagram is not directed to children under the age of 13 (or under 16 in the European Union). We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us at **support@dgrm.app**, and we will delete it immediately.

---

## 7. Changes to This Privacy Policy

We may update our Privacy Policy periodically to reflect new features or regulatory requirements. Any updates will be published directly on this page with an updated "Last Updated" date.

---

## 8. Contact Us

If you have any questions, feedback, or concerns regarding this Privacy Policy, please contact our team:

* **Email:** [support@dgrm.app](mailto:support@dgrm.app)
* **Website:** [https://dgrm.app](https://dgrm.app)
* **Product:** Diagram Self-Coaching Ecosystem
