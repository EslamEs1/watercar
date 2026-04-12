# Implementation Plan: Premium Arabic Landing Page

**Branch**: `002-arabic-landing-page` | **Date**: 2026-04-12 | **Spec**: [specs/002-arabic-landing-page/spec.md](file:///media/eslam/work/backend/watercar/specs/002-arabic-landing-page/spec.md)

## Summary

Create a high-end, conversion-focused single-page Arabic website for a local service business. The implementation will use HTML5, Tailwind CSS, and Vanilla JavaScript, adhering to a strict RTL layout and mobile-first approach.

## Technical Context

**Language/Version**: HTML5, Vanilla JavaScript (ES6)
**Primary Dependencies**: Tailwind CSS (via CDN for local dev/demo), Google Fonts
**Storage**: N/A (Static)
**Testing**: Manual responsive verification, PageSpeed Insights simulations
**Target Platform**: Any static web host
**Project Type**: One-page Landing Page
**Performance Goals**: < 2s load time on 4G, > 90 Lighthouse score
**Constraints**: No backend, No frameworks, Arabic RTL default

## Constitution Check

- **Frontend-Only**: ✅ No backend/API used.
- **Arabic-First RTL**: ✅ `dir="rtl"` and `lang="ar"` on `html`.
- **Mobile-First**: ✅ Tailwind `sm:`, `md:`, `lg:` breakpoints used.
- **Premium Visuals**: ✅ Custom font, HSL colors, soft shadows.
- **Semantic HTML**: ✅ Proper `<header>`, `<main>`, `<section>`, `<footer>` tags.

## Project Structure

### Documentation

```text
specs/002-arabic-landing-page/
├── spec.md
├── plan.md
└── tasks.md
```

### Source Code

```text
watercar/
├── index.html
├── privacy.html
├── terms.html
├── css/
│   └── main.css
├── js/
│   ├── main.js
│   ├── accordion.js
│   └── scroll.js
└── assets/
    ├── images/
    └── icons/
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Tailwind CDN | Rapid premium prototyping | Installing CLI requires Node.js/npm which is discouraged if strictly "no framework" / "vanilla" is interpreted as "no build tools". (Will use CDN for initial demo, can move to CLI if requested). |

## Tasks

- [ ] T001 Setup directory structure and move generated assets.
- [ ] T002 Implement `index.html` structure with Tailwind CSS.
- [ ] T003 Design and style the Premium Hero section with CTAs.
- [ ] T004 Build Service cards grid with elegant shadows.
- [ ] T005 Implement "How it Works" and "Why Choose Us" sections.
- [ ] T006 Create Testimonials and FAQ (Accordion) sections.
- [ ] T007 Add sticky mobile bottom CTA bar and floating WhatsApp button.
- [ ] T008 Implement smooth scroll and active navigation logic.
- [ ] T009 Create Privacy and Terms pages.
