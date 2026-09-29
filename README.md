# TrailHive — Landing Page (React)

The same pixel-oriented, responsive TrailHive landing page, rebuilt as a component-based React app powered by Vite.

## Structure

```
trailhive-react/
├── index.html              Vite entry HTML (loads fonts + #root)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             React DOM bootstrap
    ├── App.jsx               Assembles the page from section components
    ├── index.css              Design tokens, layout, responsive rules, animations
    ├── hooks/
    │   └── useReveal.js       IntersectionObserver hook driving scroll-reveal
    └── components/
        ├── Reveal.jsx          Wrapper component for the fade/slide-up animation
        ├── Header.jsx           Sticky nav + mobile drawer (useState/useEffect)
        ├── Hero.jsx
        ├── Features.jsx         Data-driven 3-card grid
        ├── Testimonial.jsx       Reused for both testimonial sections (props-driven)
        ├── CtaImage.jsx
        └── Footer.jsx           Controlled newsletter form + social links
```

## Running it

```bash
cd trailhive-react
npm install
npm run dev       # http://localhost:5173

npm run build      # production build → dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## What's included

- **Componentized sections** — each part of the page (`Header`, `Hero`, `Features`, `Testimonial`, `CtaImage`, `Footer`) is its own component; `Testimonial` is reused for both quote sections via props (`quote`, `author`, `showLogos`, `ctaLabel`, `photo`).
- **Scroll-reveal via a custom hook** — `useReveal` wraps `IntersectionObserver` and is consumed through a small `<Reveal>` component (`as`, `delay` props), so any element can opt into the fade/slide-up entrance without repeating observer logic. Respects `prefers-reduced-motion` through CSS.
- **Interactive state in React** — mobile nav open/close and the sticky header shadow live in `Header`'s `useState`/`useEffect`; the newsletter form in `Footer` is a controlled input with validation and a temporary success message.
- **Same responsive, accessible CSS** as the static build — fluid layout from ~360px up, semantic markup, visible focus states, `aria-label`s on icon-only controls.

## Images

Image slots are CSS-gradient placeholders (`img-*` classes in `index.css`) sized to the original layout. Swap the corresponding `<div>` for an `<img>` (or add a `backgroundImage` style / import) to drop in real photography — no layout changes needed.

## Customizing

Colors, type, spacing, and motion timing are CSS custom properties at the top of `src/index.css` (`:root { … }`).
