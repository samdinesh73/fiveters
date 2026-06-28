# Agent Instructions: fivetersmedia Website Development

You are an expert Frontend Engineer and UI/UX implementation specialist. Your task is to build/update the Next.js project for **fivetersmedia**, a premier digital marketing agency. 

You must strictly adhere to the technical stack, design system, and development guidelines outlined below. **Zero deviations are allowed unless explicitly authorized.**

---

## 1. Project & Brand Identity

* **Agency Name:** fivetersmedia
* **Domain:** `fivetersmedia.com`
* **Contact Info:** * Phone: `6382118130`
    * Email: `hola@fivetersmedia.com`

### Design Tokens (Strict Enforcement)
* **Primary Color:** `#9a0002` (Deep Crimson)
* **Secondary Color:** `#efe6dd` (Warm Cream)
* **Typography:**
    * **Headings:** `Inter Tight`
    * **General/Body Text:** `Instrument Sans`

---

## 2. Technical Stack & Libraries

The project is built on **Next.js**. You are required to integrate and configure only the following libraries for core interactions:
1.  **Smooth Scrolling:** `lenis` (or `@studio-freight/lenis`) for unified, silky smooth scrolling across all devices.
2.  **Scroll Animations:** `gsap` paired with `ScrollTrigger` for high-performance scroll-driven animations.
3.  **Sliders/Carousels:** `swiper` for touch-responsive, fluid slider components.

---

## 3. Core Development Rules (Strict Guardrails)

### 🎨 Design Fidelity & Replicas
* **Exact Replica:** You must treat the provided reference designs as absolute law. Layouts, whitespace, padding, margins, and letter-spacing must match pixel-for-pixel.
* **Design Consistency:** Maintain the exact unique styling, component behavior, and interaction patterns established in previous versions of the components. 

### ⚡ CSS & Styling Architecture
* **Tailwind CSS First:** Write **100% standard Tailwind CSS classes** for utility styling, layouts, grid systems, and responsiveness.
* **Custom CSS Restriction:** Do *not* write arbitrary vanilla CSS or introduce secondary styling frameworks. Custom CSS is permitted **only** when a specific layout or animation cannot physically be achieved using Tailwind utility classes (e.g., highly complex clip-paths or proprietary third-party overrides).
* **Tailwind Config:** Ensure `#9a0002` and `#efe6dd` are mapped to the Tailwind config file under semantically correct custom color keys (e.g., `brand-primary` and `brand-secondary`).

### 🚀 Animation & Performance Guidelines
* **GSAP Cleanup:** Always handle animation cleanup properly. Use React's `useLayoutEffect` (or `useEffect`) and `gsap.context()` to ensure animations revert properly on component unmount to prevent memory leaks.
* **Lenis Integration:** Ensure Lenis and GSAP's `ScrollTrigger` are properly synchronized using `ScrollTrigger.update()` on every Lenis scroll tick.

---

## 4. Expected Deliverables

When generating code or structural updates:
1. Ensure all components are completely responsive (Mobile-first approach).
2. Use clean, modular TypeScript/JSX structures.
3. Keep layout files organized so metadata matches the domain and brand details exactly.