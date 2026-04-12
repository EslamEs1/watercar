# Research: Premium Arabic Landing Page

**Feature Branch**: `001-arabic-landing-page`  
**Date**: 2026-04-12  
**Purpose**: Resolve all technical decisions and document best practices before design phase.

## R-001: Arabic RTL Layout with TailwindCSS

**Decision**: Use TailwindCSS CDN with `dir="rtl"` on `<html>` and rely on Tailwind's built-in RTL support via logical properties.

**Rationale**: TailwindCSS 3.3+ includes RTL support through the `rtl:` variant modifier and logical property utilities (`ms-`, `me-`, `ps-`, `pe-` for margin/padding inline start/end). Combined with `dir="rtl"` on the root element, flexbox and grid layouts automatically reverse. This eliminates the need for manual RTL overrides for most layout patterns.

**Alternatives considered**:
- Manual CSS logical properties without Tailwind → rejected: significantly more CSS to write and maintain
- CSS-only with custom RTL stylesheet → rejected: duplicates effort that Tailwind handles natively
- Tailwind CLI build → viable but unnecessary for this project's scope; CDN is sufficient

**Key implementation notes**:
- Use `ms-*` / `me-*` (margin-inline-start/end) instead of `ml-*` / `mr-*`
- Use `ps-*` / `pe-*` (padding-inline-start/end) instead of `pl-*` / `pr-*`
- Use `start-*` / `end-*` for positioning instead of `left-*` / `right-*`
- Flexbox `flex-row` automatically reverses in RTL context
- For elements that must NOT reverse (e.g., phone numbers), use `dir="ltr"` locally

## R-002: Arabic Typography — Font Selection

**Decision**: Use IBM Plex Sans Arabic as primary font, loaded from Google Fonts CDN.

**Rationale**: IBM Plex Sans Arabic is a high-quality, professional Arabic font with excellent readability at all sizes, good weight range (300–700), and strong Latin character support for mixed content (phone numbers, URLs). It has a modern, clean aesthetic that matches the premium brand direction.

**Alternatives considered**:
- Tajawal → good quality, slightly more traditional feel; less weight variety
- Cairo → popular but very common on Arabic websites; less differentiated
- Noto Sans Arabic → excellent coverage but generic; used as system fallback
- Almarai → clean but limited to 300, 400, 700 weights

**Font stack**: `'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Arial', sans-serif`

**Loading strategy**:
- Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- Load weights 400, 500, 600, 700 via Google Fonts
- Use `font-display: swap` to prevent FOIT (flash of invisible text)
- Subset to Arabic + Latin characters for reduced file size

## R-003: Color Palette Design

**Decision**: Use a blue-based primary palette with gold accent, conveying trust, professionalism, and premium quality.

**Rationale**: Blue conveys trust and reliability — critical for a local service business. Gold accent adds a premium feel common in Saudi business branding. Neutral grays provide clean, readable backgrounds and text.

**Palette (HSL-based design tokens)**:

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--color-primary-50` | hsl(213, 94%, 97%) | Light backgrounds |
| `--color-primary-100` | hsl(213, 90%, 93%) | Section backgrounds |
| `--color-primary-500` | hsl(213, 94%, 48%) | Primary buttons, links |
| `--color-primary-600` | hsl(213, 94%, 40%) | Button hover states |
| `--color-primary-700` | hsl(213, 94%, 32%) | Active states, header |
| `--color-primary-900` | hsl(213, 94%, 15%) | Dark text on light bg |
| `--color-accent-400` | hsl(40, 90%, 55%) | Accent highlights, stars |
| `--color-accent-500` | hsl(40, 90%, 45%) | Accent buttons, badges |
| `--color-neutral-50` | hsl(210, 20%, 98%) | Page background |
| `--color-neutral-100` | hsl(210, 16%, 95%) | Card backgrounds |
| `--color-neutral-300` | hsl(210, 14%, 83%) | Borders, dividers |
| `--color-neutral-600` | hsl(210, 12%, 45%) | Secondary text |
| `--color-neutral-800` | hsl(210, 15%, 20%) | Primary body text |
| `--color-neutral-900` | hsl(210, 20%, 10%) | Headings |
| `--color-whatsapp` | hsl(142, 70%, 40%) | WhatsApp CTA buttons |
| `--color-whatsapp-hover` | hsl(142, 70%, 35%) | WhatsApp hover state |

## R-004: WhatsApp Deep Linking — Saudi Market

**Decision**: Use `https://wa.me/966XXXXXXXXX?text=...` format with URL-encoded Arabic pre-filled message.

**Rationale**: The `wa.me` domain is WhatsApp's official universal link format. It works across all platforms (iOS, Android, desktop web). Including a pre-filled text message reduces friction and increases conversion rate — the visitor doesn't have to type anything.

**Alternatives considered**:
- `whatsapp://send?phone=...` → rejected: not universally supported, fails on desktop without app
- `api.whatsapp.com/send?phone=...` → works but `wa.me` is the canonical shortlink

**Pre-filled message template**:
```
https://wa.me/966XXXXXXXXX?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85
```
Decoded: "مرحبا، أرغب في الاستفسار عن خدماتكم" (Hello, I would like to inquire about your services)

## R-005: Schema.org Structured Data

**Decision**: Include both `LocalBusiness` and `FAQPage` schema types as JSON-LD in the `<head>` of index.html.

**Rationale**: JSON-LD is Google's preferred format for structured data. LocalBusiness schema improves local search visibility. FAQPage schema enables rich FAQ snippets in search results, increasing click-through rate.

**Alternatives considered**:
- Microdata (inline HTML attributes) → rejected: more verbose, harder to maintain
- RDFa → rejected: less tooling support, more complex

**Implementation**:
- Two separate `<script type="application/ld+json">` blocks
- LocalBusiness: name, description, address, phone, areaServed, openingHours, priceRange
- FAQPage: mainEntity array with Question/Answer pairs matching the visible FAQ section

## R-006: Smooth Scroll and Active Navigation

**Decision**: Use native CSS `scroll-behavior: smooth` with JavaScript Intersection Observer for active link highlighting.

**Rationale**: CSS `scroll-behavior: smooth` provides hardware-accelerated smooth scrolling with zero JavaScript overhead. Intersection Observer efficiently tracks which section is visible for active navigation state, without scroll event listeners.

**Alternatives considered**:
- JavaScript `scrollIntoView({ behavior: 'smooth' })` → used as fallback for programmatic scrolling, but CSS handles the common case
- Scroll event listeners with `requestAnimationFrame` → rejected: less performant than Intersection Observer
- Third-party smooth scroll library → rejected: violates zero-dependency constraint

**Key details**:
- Navigation links use `href="#section-id"` for graceful degradation without JS
- Header height offset accounted for via `scroll-padding-top` CSS property
- Active nav link determined by Intersection Observer with `rootMargin` matching header height

## R-007: FAQ Accordion Pattern

**Decision**: Use native `<details>`/`<summary>` HTML elements enhanced with CSS transitions and JavaScript for single-open behavior.

**Rationale**: `<details>`/`<summary>` provides built-in accessibility (keyboard navigation, screen reader support) and functions without JavaScript. CSS and JavaScript enhance with smooth height transitions and optional single-open-at-a-time behavior.

**Alternatives considered**:
- Pure JavaScript accordion with `div`/`button` → rejected: requires more ARIA attributes, more code, less semantic
- CSS-only accordion with hidden checkboxes → rejected: hacky, poor accessibility
- `<details>` without enhancement → functional but lacks smooth animation and single-open behavior

**Animation approach**:
- Use CSS `grid-template-rows: 0fr` → `1fr` transition for smooth height animation
- Wrap answer content in a `<div>` with `overflow: hidden` inside `<details>`
- JavaScript toggles `open` attribute and manages single-open-at-a-time behavior

## R-008: Floating WhatsApp Button and Mobile Sticky Bar

**Decision**: Floating WhatsApp button as a fixed-position element on all viewports; sticky bottom bar visible only below 768px using CSS media queries.

**Rationale**: Fixed positioning ensures persistent visibility. CSS-only responsive toggling avoids JavaScript for show/hide logic. The floating button is positioned bottom-left (RTL-appropriate) and the sticky bar spans the full width with two action buttons.

**Key details**:
- Floating button: `position: fixed; inset-inline-start: 1rem; bottom: 1rem; z-index: 40`
- On mobile: floating button shifts up to avoid overlapping sticky bottom bar
- Sticky bar: `position: fixed; bottom: 0; width: 100%; z-index: 50` — hidden on `md:` breakpoint and above
- Both use `z-index` layering to avoid conflicts with the sticky header

## R-009: Animation and Motion Best Practices

**Decision**: Use CSS transitions for hover/focus states and CSS animations for scroll-reveal effects, all gated behind `prefers-reduced-motion` media query.

**Rationale**: CSS-only animations are more performant (compositor thread) and don't require JavaScript. Respecting `prefers-reduced-motion` is both an accessibility requirement and a constitution mandate (Principle IV).

**Implementation**:
- Hover states: `transition: transform 0.2s ease, box-shadow 0.2s ease`
- Scroll reveal: Simple `opacity` + `translateY` animation triggered by Intersection Observer adding a CSS class
- Reduced motion: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`
