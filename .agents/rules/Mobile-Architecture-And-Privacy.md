# Mobile Architecture & Privacy Ground Truth (Diagram Mobile)

This document serves as the absolute technical baseline and single source of truth for the Diagram companion mobile application's architecture, security model, and data privacy disclosures across dgrm.app.

---

## 🏛️ 1. Offline-First & Local Storage
* **Core Store:** All user entities (Goals, Milestones, Tasks, Habits, Diaries/Reflections, Wheel of Values, Profile) are stored locally on the device using LocalDocumentStore.
* **Zero Connectivity Requirement:** The app is completely autonomous and operational offline without an active internet connection.
* **Anonymous by Default:** No account creation is required to use the full feature set locally.

---

## 🔑 2. Authentication Architecture (Firebase Auth)
* **Supported Auth Providers:**
  1. **Anonymous / Guest:** Ephemeral UID assigned on first launch for seamless onboarding.
  2. **Email & Password:** Standard credential-based login.
  3. **Google Sign-In (OAuth):** Native OAuth flow via Google.
  4. **Sign in with Apple (Apple Account):** Native Apple OAuth / credential flow with support for "Hide My Email".
* **Scope:** Authentication is strictly utilized for multi-device sync authorization and subscription verification.

---

## ☁️ 3. Cloud Backup, Storage & Sync Mechanics
* **Firebase Storage (Google Cloud):**
  * **Payload:** Stores `app_state.json` (database state snapshot) and user-uploaded media files (habit proofs, avatars).
  * **Transit Security:** Encrypted in transit via HTTPS / TLS 1.3.
  * **Storage Security (At Rest):** Encrypted at rest using Google Cloud AES-256 infrastructure.
  * **Security Rules:** Access is strictly restricted to authenticated user accounts via Firebase Security Rules (`request.auth.uid == userId`).
  * ⚠️ **MANDATORY LEGAL GUARDRAIL:** This is **NOT** client-side zero-knowledge / End-to-End Encryption (E2EE). Never claim E2EE or «сквозное шифрование» in any web copy, documentation, or legal documents.

---

## 🤖 4. AI Ecosystem & Intelligence (AI Proxy / Google Gemini)
* **Trigger Mechanism:** AI processing occurs **ONLY** upon explicit user request (e.g. Goal Decomposition, Harmony / Values Analysis, Manifesto Drafting, Assistant Voice Intent Parsing).
* **Data Transmitted:** Only relevant prompt context (Goal title, values, specific voice transcript) is transmitted over TLS.
* **Hot Draft (Ephemeral Processing):** AI processing is strictly stateless and ephemeral.
* **Zero Global Training:** User prompts and responses are **NEVER** used to train foundation models (Google Gemini or third-party AI models).

---

## 📱 5. Device Permissions & System Integration
* **Microphone & Speech-to-Text:**
  * Used exclusively for voice task dictation and quick entry via native system APIs (speech_to_text).
  * Audio streams are processed locally or via system dictation engines; raw audio is never stored or uploaded to Diagram servers.
* **Camera & Photo Library:**
  * Used exclusively when the user selects or snaps a photo for habit proof/completion or profile avatar.
* **Local Notifications & Widgets:**
  * All push notifications, reminders, and daily review pings are scheduled locally on-device using lutter_local_notifications. No remote marketing push servers are used.
  * Home screen and lock screen widgets read data directly from a local database snapshot.

---

## 💳 6. Subscriptions & Payments (RevenueCat)
* **SDK:** RevenueCat (purchases_flutter).
* **Role:** In-app purchase receipt verification, entitlement routing, and subscription state management across platforms.
* **Zero Payment Card Access:** Payment processing and billing are handled 100% by Apple (App Store In-App Purchases) and Google (Google Play Billing). No credit card numbers, billing addresses, or financial records ever touch Diagram or RevenueCat.

---

## 📊 7. Telemetry, Analytics & Crash Reporting
* **Firebase Crashlytics:** Collects anonymized crash stack traces, OS versions, and device hardware models to debug crashes.
* **Firebase Analytics:** Collects high-level anonymized interaction events (e.g. screen views, feature adoption rates).
* ⚠️ **Privacy Boundary:** Personal user content — including journal text, goal descriptions, task titles, habit notes, and voice recordings — is **STRICTLY EXCLUDED** from telemetry and analytics payloads.

---

## 📦 8. Data Sovereignty: Export & Complete Deletion
* **Data Export:** Users can export a complete, portable archive of their local data at any time via UserDataExporter into a standard .zip file (*Settings → Data → Export Data*).
* **Permanent Account & Cloud Erasure:** Users can permanently delete their account, cloud backups (pp_state.json), media files, and authentication records instantly in-app (*Settings → Account → Delete Account*).
* **Local Storage Purge:** Uninstalling the app immediately destroys all local data stored in LocalDocumentStore.
