---
title: "Privacy Policy"
description: "Privacy Policy for Diagram mobile application and dgrm.app web services."
effectiveDate: "August 29, 2026"
lastUpdated: "August 29, 2026"
version: "1.0.0"
---

## 1. Introduction & Overview

Welcome to **Diagram** ("we", "our", or "us"). Diagram is a premium personal planning and self-coaching application developed to help you organize goals, track routines, manage tasks, and reflect on personal progress.

We respect your privacy and believe that personal thoughts, goals, and reflections belong to you. Diagram is architected with an **Offline-First** philosophy: by default, your data is stored directly on your personal device and can be used completely without creating an account.

This Privacy Policy explains what information we collect, how it is used, where it is stored, and your rights when using the Diagram mobile and desktop applications and our website ([https://dgrm.app](https://dgrm.app)).

---

## 2. Core Architectural Principles

* **Offline-First by Default:** Your tasks, habits, diary entries, goals, values, and milestone plans are stored locally on your device's local file system.
* **No Mandatory Account:** You can use the core features of Diagram anonymously without providing your name, email, or phone number.
* **No Selling of Personal Data:** We do not sell, rent, or monetize your personal content or identifiable information to data brokers or third-party advertisers.
* **Transparent Cloud Usage:** Cloud storage and AI features are strictly opt-in and triggered on demand.

---

## 3. Information We Collect and How We Use It

### A. Data You Create Locally (User Content)
* **What:** Goals, milestones, tasks, routines/habits, diary records, life-balance assessments ("Harmony"), personal values, manifesto drafts, and local media attachments (photos associated with habits or avatars).
* **Storage & Processing:** Stored locally on your device using structured local documents (`LocalDocumentStore`).
* **Cloud Sync (Optional):** If you create an account and enable cloud backup, this data is uploaded to your private storage space (see Section 4).

### B. Account & Authentication Information (Optional)
If you choose to create an account or sign in to synchronize data across devices, we collect:
* **Email & Password:** Processed and secured via Firebase Authentication (Google LLC). Passwords are never visible to us.
* **Google Sign-In:** If you sign in with Google OAuth, we receive your Google User Identifier (UID), email address, and basic profile info provided by Google.
* **Anonymous Guest Session:** If you do not sign in, a local anonymous identifier is maintained solely on your device.

### C. AI & Intelligent Assistant Processing (Optional / On-Demand)
Diagram includes optional AI-assisted features (such as goal decomposition, life manifest drafting, life harmony analysis, and natural-language intent parsing):
* **Trigger:** Data is transmitted to our AI proxy service only when you explicitly trigger an AI feature (e.g., tapping "Generate Plan" or using the voice assistant).
* **Scope:** Only the relevant input context (e.g., goal description, selected values, or dictation prompt) is transmitted via encrypted HTTPS to our backend AI proxy powered by large language models (such as Google Cloud / Google Gemini).
* **Ephemeral Processing:** Transmitted data is processed in real time to generate suggestions ("Hot Drafts") returned to your screen. You review and modify drafts before saving them to your local database. Your private data is not used to train foundation public AI models without explicit consent.

### D. Voice & Speech Recognition
* **Microphone Access:** If granted, the microphone is used strictly while recording or dictating tasks and voice commands.
* **Speech-to-Text:** Audio is processed using native on-device operating system speech recognition APIs (`SpeechRecognition` / Android `SpeechRecognizer` / `speech_to_text`). Diagram does not record your ambient audio in the background.

### E. Photos and Camera Access
* **Media Access:** If granted, access to your device's photo library or camera is used exclusively to let you attach photos to habits, tasks, or your personal profile avatar. Media files are stored locally and backed up only if cloud sync is activated.

### F. Subscriptions & In-App Purchases
* **Purchase Processing:** In-app subscriptions (Monthly, Annual, Lifetime) are processed directly by the Apple App Store (Apple Inc.) or Google Play Store (Google LLC).
* **Subscription Management:** We use RevenueCat (RevenueCat, Inc.) to validate purchase receipts, manage active subscription tiers, and restore purchases. RevenueCat receives an anonymous app user identifier and transactional receipt metadata. We never see, collect, or store your credit card or bank details.

### G. Diagnostics, Crashes & Analytics
* **Firebase Crashlytics (Google LLC):** Collects crash logs, stack traces, operating system version, and device hardware details to help us identify and fix crashes.
* **Firebase Analytics (Google LLC):** Collects aggregated, non-personally identifiable usage metrics (e.g., app opens, screen views, feature interactions such as completing a task or starting onboarding). We do not transmit the textual contents of your diary entries, goals, or notes into analytics events.

---

## 4. Cloud Storage, Backup & Security

* **Firebase Storage (Google Cloud):** When cloud backup is enabled, your app snapshot (`app_state.json`) and uploaded media are transferred over encrypted channels (TLS/HTTPS) and stored in Google Cloud data centers with encryption at rest. Access is strictly controlled via Firebase Security Rules tied to your authenticated user account.
* **Google Drive Backup (Alternative):** If you choose Google Drive backup, your data is transferred directly to your own private Google Drive hidden application folder (`appDataFolder`). Only Diagram can access this specific folder; neither Diagram nor third-party apps have access to the rest of your personal Google Drive.
* **Encryption Disclosure:** Data is encrypted in transit (TLS) and encrypted at rest by cloud infrastructure providers. Diagram does not utilize client-side zero-knowledge (end-to-end) encryption keys; your cloud data is protected by industry-standard authenticated access controls and cloud server encryption.
* **Local Notifications:** Notifications are scheduled and triggered locally on your device. No external push notification servers are used to send tracking or promotional messages.

---

## 5. Third-Party Service Providers

We integrate trusted third-party services to provide infrastructure, analytics, and billing:

| Provider | Purpose | Privacy Policy |
| :--- | :--- | :--- |
| **Google LLC** (Firebase / Google Cloud / Gemini) | Authentication, Cloud Backup, Diagnostics (Crashlytics), Product Analytics, AI processing | [Google Privacy Policy](https://policies.google.com/privacy) |
| **RevenueCat, Inc.** | In-app purchase receipt validation & subscription state | [RevenueCat Privacy Policy](https://www.revenuecat.com/privacy) |
| **Apple Inc.** | App distribution, in-app billing (iOS / macOS) | [Apple Privacy Policy](https://www.apple.com/legal/privacy/) |

---

## 6. Data Retention, Export & Deletion

We believe you should have total control over your information:

* **Data Export (Data Portability):** You can export a complete, machine-readable archive (`.zip` containing JSON/CSV data and media) of all your personal records at any time directly from the app:  
  *Navigate to:* **Settings ➔ Data ➔ Export Data**.
* **Account & Cloud Data Deletion (Right to Erasure):** You can permanently delete your account and all associated cloud backups at any time directly within the app:  
  *Navigate to:* **Settings ➔ Account ➔ Delete Account**.  
  Upon confirmation, your Firebase authentication record, cloud database snapshot, and cloud media files are permanently deleted.
* **Local Data Removal:** Uninstalling the application or clearing local application storage immediately purges all locally stored files from your device.

---

## 7. Children's Privacy

Diagram is not directed to individuals under the age of 13 (or under the applicable age limit in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us at [support@dgrm.app](mailto:support@dgrm.app), and we will promptly delete such information.

---

## 8. Rights for EEA/UK (GDPR) and California (CCPA/CPRA) Users

If you reside in the European Economic Area (EEA), the United Kingdom, or California, you have specific legal rights regarding your personal data:

* **Right to Access & Portability:** You can access and export your data at any time via the in-app export tool.
* **Right to Rectification:** You can edit and update all your data directly inside the application.
* **Right to Erasure:** You can delete your account and cloud data anytime via the in-app deletion button.
* **Non-Discrimination:** We will not discriminate against you for exercising your privacy rights.
* **Do Not Sell My Personal Information:** We do not sell your personal information.

---

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our technology, legal obligations, or application features. When changes are made, we will update the "Last Updated" date at the top of this document. Continued use of Diagram after changes become effective constitutes acceptance of the revised policy.

---

## 10. Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:

* **Email:** [support@dgrm.app](mailto:support@dgrm.app)
* **Website:** [https://dgrm.app](https://dgrm.app)
* **App Identifier:** `app.dgrm.diagram`
* **Developer/Entity:** Aleksey Tudell
