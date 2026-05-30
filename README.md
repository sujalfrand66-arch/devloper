# Lusux Web — Premium Digital Studio Experience

A world-class, award-grade portfolio site for **Lusux Web** — rebuilt from a single-file
HTML page into a production-ready **Next.js 15** application with cinematic motion,
smooth scrolling, and an obsessive attention to detail.

> Creative code. Powerful technology.

## ✨ Highlights

- **Dark luxury aesthetic** — bone-on-ink palette with a refined gold accent, grain
  texture, ambient glows and glassmorphism used only where it earns its place.
- **Lenis smooth scrolling** synced with **GSAP ScrollTrigger**.
- **Framer Motion** scroll-triggered storytelling: text reveals, staggered entrances,
  parallax, scroll-linked word-by-word color reveal.
- **Premium custom cursor** with magnetic targets + contextual labels.
- **Elegant loading screen** with a live percentage counter.
- **Interactive project portfolio** (Awwwards-style hover preview) featuring 8 real,
  live client projects.
- **Animated statistics**, **process timeline**, **auto-rotating testimonials**.
- **High-converting contact form** that opens a pre-filled WhatsApp enquiry.
- **SEO-ready**: metadata, OpenGraph, JSON-LD `ProfessionalService`, robots & sitemap.
- **Accessible & performant**: respects `prefers-reduced-motion`, semantic markup,
  fully static export (≈206 kB first load JS).

## 🧱 Tech Stack

| Layer        | Tool                          |
| ------------ | ----------------------------- |
| Framework    | Next.js 15 (App Router)       |
| Language     | TypeScript                    |
| Styling      | Tailwind CSS                  |
| Animation    | GSAP + Framer Motion          |
| Smooth scroll| Lenis                         |
| Fonts        | Syne · Space Grotesk · JetBrains Mono |

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, SEO metadata, JSON-LD
│   ├── page.tsx          # section assembly
│   ├── globals.css       # design system
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── SmoothScroll.tsx  # Lenis + GSAP
│   ├── Cursor.tsx        # custom magnetic cursor
│   ├── Loader.tsx        # intro loader
│   ├── Nav.tsx / Footer.tsx
│   ├── ScrollProgress.tsx
│   ├── ui/               # Magnetic, Reveal primitives
│   └── sections/         # Hero, Services, Work, Stats, Studio, Process, Testimonials, Contact
└── data/site.ts          # single source of truth for all content
```

All copy, projects and contact details live in `src/data/site.ts`.

The original single-file site is preserved under `legacy/index.html`.
