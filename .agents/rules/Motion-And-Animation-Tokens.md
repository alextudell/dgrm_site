# Motion & Animation Protocol (Apple Cupertino Standard)

## 🍏 Philosophy: Physics-Based & Purpose-Driven Motion
Motion in `dgrm.app` is an essential layer of communication, tactile feedback, and spatial depth. It must feel physical, continuous, and restrained — never decorative, linear, or distracting.

---

## 📐 1. Easing Curves Hierarchy

All transitions in `dgrm.app` must strictly use physics-based bezier curves:

| Token Name | Cubic Bezier | Purpose & Context |
| :--- | :--- | :--- |
| **`--ease-spring`** / `ease-spring` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Default Motion Standard.** Screen cross-dissolves, modal entries, hero showcases, and card expansions (SwiftUI `.spring` equivalent). |
| **`--ease-smooth`** / `ease-smooth` | `cubic-bezier(0.32, 0.72, 0, 1)` | Natural deceleration for long-distance drawer slides, page scrolls, and accordion reveals. |
| **`--ease-tactile`** / `ease-tactile` | `cubic-bezier(0.2, 0, 0, 1)` | Fast physical response for button presses, checkbox toggles, and hover states. |

---

## ⏱️ 2. Duration Scale

Animations must adhere to the 4-tier timing system:

| Token Name | Milliseconds | Usage |
| :--- | :--- | :--- |
| **`--duration-instant`** | `150ms` | Button active press (`active:scale-[0.98]`), tap highlights, micro-toggles |
| **`--duration-tactile`** | `250ms` | Hover states, border color changes, theme toggle transitions |
| **`--duration-flow`** | `450ms` | Screen cross-dissolve, story progress rail updates, accordion expansion |
| **`--duration-cinematic`**| `700ms` | Atmospheric ambient halo color shifts, background spotlight sweeps |

---

## 🥞 3. The Single-Slot Grid Stack Law (Zero-Jank Transitions)

* **FORBIDDEN:** Toggling `display: none` or `.hidden` for interactive multi-state carousels or mockups. Doing so destroys the DOM rendering tree instantly and creates visual frame drops.
* **MANDATORY:** Use an overlapping CSS Grid Stack (`grid grid-cols-1 grid-rows-1`).
  * All views occupy `col-start-1 row-start-1`.
  * Active view: `opacity-100 scale-100 translate-y-0 z-10 pointer-events-auto`.
  * Inactive view: `opacity-0 scale-[0.985] translate-y-2 z-0 pointer-events-none invisible`.
  * Interpolation is strictly GPU-accelerated (`transform`, `opacity`, `filter`).

---

## ♿ 4. Accessibility & Reduced Motion

Every motion utility and keyframe animation must respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
