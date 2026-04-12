# Implementation Plan: Premium Arabic Landing Page

**Branch**: `001-arabic-landing-page` | **Date**: 2026-04-12 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-arabic-landing-page/spec.md`

## Summary

Build a premium one-page Arabic RTL landing page for a local service business (water delivery / home services) targeting Saudi Arabia. The page maximizes conversions through WhatsApp and phone call CTAs, supported by trust-building sections (testimonials, credentials, coverage, FAQ). Delivered as a static site using HTML5, TailwindCSS (CDN), and vanilla JavaScript with no backend or build tools. Includes separate privacy and terms pages.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+ (no transpiler)  
**Primary Dependencies**: TailwindCSS 3.x (CDN), Google Fonts (CDN — IBM Plex Sans Arabic)  
**Storage**: N/A (static site, no data persistence)  
**Testing**: Manual browser testing across devices, Google Lighthouse audit (target 90+ all categories)  
**Target Platform**: Web — mobile-first responsive (320px–1920px+), modern browsers (Chrome 90+, Safari 14+, Firefox 90+, Samsung Internet 15+, Edge 90+)  
**Project Type**: Static website / landing page  
**Performance Goals**: First Contentful Paint < 2s broadband, LCP < 2.5s on 3G, total page weight < 500KB excluding images  
**Constraints**: No frameworks, no backend, no build tools (except optional Tailwind CLI), Arabic RTL-first layout, no runtime dependencies  
**Scale/Scope**: 3 HTML pages, 11 sections on main page, ~15 reusable component patterns

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| # | Principle | Status | Notes |
|---|-----------|--------|-------|
| I | Frontend-Only & Zero Dependencies | PASS | No backend, no APIs, no package.json. TailwindCSS and fonts via CDN only. WhatsApp/tel are URI scheme redirects, not API calls. |
| II | Arabic-First RTL Design (NON-NEGOTIABLE) | PASS | `dir="rtl"` and `lang="ar"` on all pages. Logical CSS properties preferred. All content in Arabic. RTL is the primary layout mode. |
| III | Mobile-First & Conversion-Optimized | PASS | Mobile-first breakpoint strategy. CTAs in 4+ locations (hero, sticky bar, floating button, final CTA). Touch targets ≥ 44×44px. Page weight < 500KB. |
| IV | Premium Visual Quality | PASS | IBM Plex Sans Arabic font. HSL-based color tokens. Consistent 4px spacing scale. Soft shadows, rounded corners. Subtle animations respecting `prefers-reduced-motion`. |
| V | Semantic HTML & SEO Readiness | PASS | One h1 per page, no heading skips. Schema.org LocalBusiness + FAQPage. OG/Twitter Card tags. ARIA landmarks. Arabic alt text. |
| VI | Clean Code Organization | PASS | Separated CSS files, modular JS functions, no inline styles/scripts (except JSON-LD). Lowercase hyphenated file names. |
| VII | Performance-First Loading | PASS | CSS in head with preload. JS deferred. font-display: swap. No render-blocking third-party scripts. Target < 1500 DOM elements. |

**Gate Result**: ALL PASS — no violations, no complexity tracking entries needed.

## Project Structure

### Documentation (this feature)

```text
specs/001-arabic-landing-page/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   ├── schema-localbusiness.json
│   ├── schema-faqpage.json
│   └── section-contracts.md
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
watercar/
├── index.html              # Main landing page (11 sections)
├── privacy.html            # Privacy policy page
├── terms.html              # Terms of service page
├── css/
│   ├── main.css            # Design tokens, custom properties, component styles
│   └── utilities.css       # RTL overrides, animation utilities, responsive helpers
├── js/
│   ├── main.js             # Initialization, mobile menu toggle, scroll-based header
│   ├── accordion.js        # FAQ accordion expand/collapse logic
│   └── smooth-scroll.js    # Smooth scroll navigation + active link tracking
└── assets/
    ├── images/             # Optimized images (WebP with fallbacks)
    └── icons/              # SVG icons (if not inline)
```

**Structure Decision**: Single flat static site structure matching the constitution's File Structure Convention (§ Development Workflow). No build pipeline. CSS and JS organized by concern. Assets directory for future image/icon additions.

## Complexity Tracking

> No violations found — table left empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
