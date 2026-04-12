<!--
  Sync Impact Report
  ===========================================================================
  Version change: 0.0.0 → 1.0.0 (MAJOR — initial constitution ratification)
  Modified principles: N/A (initial creation)
  Added sections:
    - Core Principles (7 principles)
    - Technology & Constraints
    - Development Workflow & Quality Gates
    - Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md     — ✅ reviewed, compatible
    - .specify/templates/spec-template.md     — ✅ reviewed, compatible
    - .specify/templates/tasks-template.md    — ✅ reviewed, compatible
  Follow-up TODOs: None
  ===========================================================================
-->

# Healthy Choice Landing Page Constitution

## Core Principles

### I. Frontend-Only & Zero Dependencies

This project MUST remain a pure frontend static site.
No backend server, database, API integrations, or server-side
rendering are permitted. The deliverable is a set of static files
(HTML, CSS, JS) that can be served from any static hosting provider
or CDN.

- No Node.js runtime dependency at build time beyond optional
  Tailwind CLI compilation.
- No package.json with runtime dependencies.
- No fetch/XHR calls to external APIs (WhatsApp and tel: links
  are URI scheme redirects, not API calls).
- Assets MUST be self-contained or loaded from trusted CDNs
  (Google Fonts, Tailwind CDN if applicable).

**Rationale**: The project scope explicitly forbids backend, database,
and API usage. Keeping zero runtime dependencies ensures maximum
portability, performance, and simplicity.

### II. Arabic-First RTL Design (NON-NEGOTIABLE)

Every page, component, and style MUST be designed with Arabic RTL
as the primary and default layout direction.

- The `<html>` element MUST include `dir="rtl"` and `lang="ar"`.
- All CSS layouts (flexbox, grid) MUST account for RTL flow.
- Logical CSS properties (`margin-inline-start`, `padding-inline-end`)
  MUST be preferred over physical properties (`margin-left`,
  `padding-right`) wherever Tailwind or vanilla CSS supports them.
- Icon directions, chevrons, and visual indicators MUST respect
  RTL orientation.
- Text alignment defaults to `text-right` unless explicitly
  centered for design symmetry.

**Rationale**: The target audience is Arabic-speaking. RTL is not
an afterthought — it is the primary layout mode.

### III. Mobile-First & Conversion-Optimized

All layouts MUST be designed mobile-first with progressive
enhancement for tablet and desktop breakpoints.

- Breakpoint strategy: mobile (default) → `sm:` → `md:` → `lg:`
  → `xl:`.
- Touch targets MUST be minimum 44×44 CSS pixels.
- CTA buttons (WhatsApp, phone) MUST appear in the hero,
  mid-page, and final CTA sections at minimum.
- A floating WhatsApp button MUST be visible on all viewport sizes.
- A sticky mobile bottom CTA bar MUST be present on small screens.
- Page weight MUST remain under 500 KB (excluding images) for
  first meaningful paint.
- Largest Contentful Paint target: < 2.5 seconds on 3G.
- No horizontal scroll on any viewport width ≥ 320px.

**Rationale**: The primary conversion funnel is mobile users
contacting the business via WhatsApp or phone call. Every design
decision MUST prioritize this path.

### IV. Premium Visual Quality

The visual output MUST feel significantly more modern, professional,
and trustworthy than typical Saudi local-service competitor websites.

- Typography MUST use high-quality Arabic-compatible web fonts
  (e.g., IBM Plex Sans Arabic, Tajawal, Cairo, or Noto Sans Arabic).
- Color palette MUST be curated and harmonious — no raw CSS named
  colors (`red`, `blue`, `green`). Use HSL-based design tokens.
- Spacing MUST follow a consistent scale (4px / 0.25rem base).
- Card components MUST use soft shadows, rounded corners, and
  subtle hover states.
- Animations MUST be subtle, purposeful, and respect
  `prefers-reduced-motion`.
- No visual clutter, no browser alerts, no default browser styles.

**Rationale**: The goal is to differentiate from low-quality
competitor sites and build immediate trust with visitors.

### V. Semantic HTML & SEO Readiness

All markup MUST use semantic HTML5 elements with proper heading
hierarchy and accessibility attributes.

- One `<h1>` per page.
- Heading levels MUST NOT skip (no `<h1>` → `<h3>`).
- All interactive elements MUST have unique, descriptive `id`
  attributes.
- Schema.org structured data MUST be included for `LocalBusiness`
  and `FAQPage`.
- Open Graph and Twitter Card meta tags MUST be present.
- `<meta>` title and description MUST be filled with realistic
  Arabic placeholder content.
- All images MUST have descriptive `alt` attributes in Arabic.
- ARIA landmarks and roles MUST be used where semantic elements
  are insufficient.

**Rationale**: SEO and accessibility are first-class requirements
for a production-quality landing page.

### VI. Clean Code Organization

Source files MUST be organized into a clear, predictable structure.

- CSS MUST be separated into logical files or clearly sectioned
  within a single stylesheet with documented regions.
- JavaScript MUST be modular, with each feature (accordion, smooth
  scroll, mobile menu, etc.) in its own function or module.
- No inline styles except for dynamic values set by JavaScript.
- No inline `<script>` blocks except for structured data (JSON-LD).
- Class naming MUST be consistent (BEM-inspired or Tailwind utility
  classes — not mixed arbitrarily).
- File names MUST be lowercase with hyphens (e.g., `main.js`,
  `custom-styles.css`).

**Rationale**: Clean organization enables handoff to production
teams and future maintenance.

### VII. Performance-First Loading

Every asset and markup decision MUST prioritize page load speed.

- CSS MUST be loaded in `<head>` with appropriate preloading.
- JavaScript MUST be loaded with `defer` or at end of `<body>`.
- Images MUST use modern formats (WebP with fallbacks) and include
  `width`/`height` attributes to prevent layout shift.
- Font loading MUST use `font-display: swap`.
- No render-blocking third-party scripts.
- Minimize DOM depth — target < 1500 DOM elements per page.

**Rationale**: Performance directly impacts conversion rates and
SEO ranking, especially on mobile networks in the target market.

## Technology & Constraints

### Allowed Technologies (Exhaustive List)

| Category    | Allowed                                             |
|-------------|-----------------------------------------------------|
| Markup      | HTML5                                               |
| Styling     | Vanilla CSS, TailwindCSS (CDN or CLI build)         |
| Scripting   | Vanilla JavaScript (ES6+, no transpiler required)   |
| Fonts       | Google Fonts CDN                                    |
| Icons       | Inline SVG, or icon CDN (Heroicons, Phosphor, etc.) |
| Hosting     | Any static file server / CDN                        |

### Prohibited Technologies

- No React, Vue, Angular, Svelte, or any frontend framework.
- No jQuery or utility libraries.
- No build tools beyond optional Tailwind CLI.
- No Node.js server or Express.
- No database (SQL, NoSQL, localStorage for data persistence).
- No REST/GraphQL API calls.
- No server-side rendering or static site generators.
- No CSS preprocessors (Sass, Less) unless compiled to vanilla CSS
  before delivery.

### Browser Support

- Chrome/Edge 90+
- Safari 14+ (including iOS Safari)
- Firefox 90+
- Samsung Internet 15+

### Required Pages

| Page          | File            | Purpose                              |
|---------------|-----------------|--------------------------------------|
| Landing Page  | `index.html`    | Main conversion page                 |
| Privacy Policy| `privacy.html`  | Legal: privacy policy (Arabic)       |
| Terms of Use  | `terms.html`    | Legal: terms and conditions (Arabic) |

### Required Sections (index.html)

| Order | Section ID         | Description                                |
|-------|--------------------|--------------------------------------------|
| 1     | `#header`          | Sticky header with navigation              |
| 2     | `#hero`            | Hero with headline, sub, CTAs, trust       |
| 3     | `#services`        | Service cards grid                         |
| 4     | `#why-us`          | Why choose us / differentiators            |
| 5     | `#how-it-works`    | 3-step process                             |
| 6     | `#coverage`        | Service areas / locations                  |
| 7     | `#pricing`         | Pricing teasers ("starting from" style)    |
| 8     | `#testimonials`    | Customer testimonials / social proof       |
| 9     | `#faq`             | FAQ accordion                              |
| 10    | `#cta`             | Final call-to-action block                 |
| 11    | `#footer`          | Footer with contact, legal, copyright      |

## Development Workflow & Quality Gates

### File Structure Convention

```text
watercar/
├── index.html
├── privacy.html
├── terms.html
├── css/
│   ├── main.css          # Custom styles & design tokens
│   └── utilities.css     # Optional utility overrides
├── js/
│   ├── main.js           # Core functionality
│   ├── accordion.js      # FAQ accordion logic
│   └── smooth-scroll.js  # Smooth scroll + active nav
├── assets/
│   ├── images/           # Optimized images (WebP + fallbacks)
│   ├── icons/            # SVG icons if not inline
│   └── fonts/            # Self-hosted fonts (if applicable)
└── .specify/             # Specification artifacts (not deployed)
```

### Quality Gates

Before any implementation task is marked complete:

1. **RTL Verification**: Page MUST render correctly in RTL mode
   with no layout breaks.
2. **Mobile Verification**: Page MUST be fully usable at 320px
   viewport width.
3. **Performance Check**: No render-blocking resources; page loads
   under 3 seconds on simulated 3G.
4. **Accessibility Spot-Check**: All interactive elements keyboard-
   navigable; color contrast ratio ≥ 4.5:1 for body text.
5. **Link Verification**: All CTA links (WhatsApp, tel:) use correct
   URI schemes and placeholder values.
6. **Cross-Section Navigation**: Smooth scroll from header nav to
   all section IDs functions correctly.
7. **Visual Review**: Design matches premium quality standard — no
   default browser styles visible.

### Content Language

- All user-facing text MUST be in Arabic.
- All code comments and documentation MAY be in English.
- HTML `lang` attribute MUST be `ar`.
- Placeholder phone numbers MUST use Saudi format
  (e.g., `+966 5X XXX XXXX`).
- Placeholder WhatsApp links MUST use `https://wa.me/966XXXXXXXXX`.

## Governance

This constitution is the authoritative source of truth for all
development decisions in this project. In case of conflict between
this document and any other artifact (spec, plan, or task), this
constitution takes precedence.

### Amendment Procedure

1. Propose changes with rationale in writing.
2. Update this document with the change.
3. Increment version according to semantic versioning:
   - **MAJOR**: Principle removed, redefined, or technology stack
     change.
   - **MINOR**: New principle or section materially added.
   - **PATCH**: Clarification, wording, or typo fix.
4. Update `LAST_AMENDED_DATE` to the date of the change.
5. Review dependent templates for alignment.

### Compliance

- All spec, plan, and task documents MUST reference and comply with
  this constitution.
- The plan template's "Constitution Check" section MUST validate
  against the principles defined here.
- Any deviation MUST be explicitly documented in the plan's
  "Complexity Tracking" table with justification.

**Version**: 1.0.0 | **Ratified**: 2026-04-12 | **Last Amended**: 2026-04-12
