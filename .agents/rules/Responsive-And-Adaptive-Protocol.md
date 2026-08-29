# Responsive & Adaptive Protocol (Mobile-First Web)

## 📱 Mobile-First Mandate
More than 70% of visitors to `dgrm.app` will arrive from mobile devices (via Telegram, Instagram, Reddit, and TikTok).
* **The Law:** All markup and Tailwind utilities MUST be written **Mobile-First**.
* **Base Styles:** Optimized for iPhone / compact Android screens (`375px–430px`).
* **Progressive Enhancement:** Expanded via `sm:`, `md:`, `lg:`, `xl:` breakpoints for tablets and widescreen desktop displays.

---

## 📐 Standard Breakpoint Scale

| Screen Tier | Tailwind Prefix | Pixel Range | Layout Behavior |
| :--- | :--- | :--- | :--- |
| **Mobile Compact** | *(default)* | `< 640px` | 1-column stack, full-width cards (`px-4`), compact padding, burger menu |
| **Tablet / Phablet** | `sm:` / `md:` | `640px – 1023px` | 2-column feature grid, balanced typography, medium mockups |
| **Desktop / Laptop**| `lg:` | `1024px – 1279px`| 3-column showcase, dual CTA buttons, expanded side-by-side Hero |
| **Widescreen** | `xl:` / `2xl:` | `≥ 1280px` | Centered max container (`max-w-7xl`), large ambient glow backdrops |

---

## 🛑 The Zero Horizontal Scroll Rule (`overflow-x: hidden`)

Horizontal scrolling on mobile is a critical bug. To prevent layout blowouts:
1. **Container Enclosure:** The root `<body>` in `BaseLayout.astro` must include `overflow-x-hidden w-full relative`.
2. **Never Use Fixed Widths:**
   * **FORBIDDEN:** `w-[500px]` or `min-w-[400px]` without max-width constraints.
   * **MANDATORY:** `w-full max-w-lg mx-auto` or `w-full sm:w-auto`.
3. **Paddings and Negative Margins:**
   * Never use arbitrary negative margins (`-mx-12`) that push content past the mobile viewport boundary.

---

## 👆 Touch Target & Tactile Standards (Apple HIG Compliance)

* **Minimum Hit Target:** Every clickable element (buttons, links, accordion headers, menu toggles) MUST have a minimum tap area of **`44 x 44 px`**.
* **Tactile Press Feedback:** Interactive elements must respond to touches with subtle scaling (mirroring Diagram's mobile feel):
  ```html
  <button class="transition-transform duration-150 active:scale-[0.98] hover:scale-[1.01] ...">
    Get Diagram
  </button>
  ```
* **Tap Highlight Removal:** Add `-webkit-tap-highlight-color: transparent;` to `global.css` to eliminate the ugly gray Android/iOS tap flash.

---

## 🍏 iOS Safe Area & Viewport Insets

To ensure the fixed header and sticky CTAs are not obscured by the iPhone Dynamic Island, Notch, or Home Bar:

1. **Meta Viewport:**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
   ```
2. **Safe Area CSS Utilities:**
   ```css
   /* Header Top Inset */
   header {
     padding-top: max(env(safe-area-inset-top), 1rem);
   }

   /* Footer Bottom Inset */
   footer {
     padding-bottom: max(env(safe-area-inset-bottom), 2rem);
   }
   ```

---

## 🍔 Navigation Drawer Behavior (Mobile vs Desktop)

* **Desktop (`≥ 1024px`):** Floating, centered glass pill header (`sticky top-4 backdrop-blur-md`).
* **Mobile (`< 1024px`):**
  * Clean header with Diagram logomark + Hamburger button.
  * When opened: Full-screen or slide-down glass drawer with high blur (`backdrop-blur-xl`).
  * Body scroll must be locked (`overflow: hidden` on `document.body`) while the mobile drawer is active.
