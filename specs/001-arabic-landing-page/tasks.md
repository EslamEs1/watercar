# Tasks: Premium Arabic Landing Page

**Input**: Design documents from `/specs/001-arabic-landing-page/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/  
**Tests**: Not requested — manual browser testing and Lighthouse audit per quality gates

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create project file structure, design tokens, and the HTML skeleton with all CDN dependencies, meta tags, and structured data.

- [x] T001 Create project directory structure: `css/`, `js/`, `assets/images/`, `assets/icons/` per plan.md
- [x] T002 [P] Create `css/main.css` with CSS custom properties (design tokens from research R-003: full color palette, font stack, spacing scale), base typography rules using IBM Plex Sans Arabic, and global reset/normalization styles
- [x] T003 [P] Create `css/utilities.css` with animation utility classes (scroll-reveal opacity+translateY), RTL helper overrides, `prefers-reduced-motion` media query gate, and responsive helper classes
- [x] T004 Create `index.html` skeleton: `<!DOCTYPE html>`, `<html dir="rtl" lang="ar">`, `<head>` with meta charset/viewport, meta title/description in Arabic, Open Graph tags, Twitter Card tags, Google Fonts preconnect + `<link>` for IBM Plex Sans Arabic (400,500,600,700), TailwindCSS CDN `<script>`, `<link>` to `css/main.css` and `css/utilities.css`, two `<script type="application/ld+json">` blocks for LocalBusiness and FAQPage (from `contracts/schema-localbusiness.json` and `contracts/schema-faqpage.json`), `<body>` with empty `<section>` shells for all 11 section IDs (#header through #footer), and deferred `<script>` tags for `js/main.js`, `js/accordion.js`, `js/smooth-scroll.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the header and footer — shared structural elements that ALL user stories depend on — plus core JavaScript for navigation behavior.

**CRITICAL**: No user story work can begin until this phase is complete.

- [x] T005 Build sticky header (`#header`) in `index.html` — `<header>` element with business name/logo text, 7 navigation `<a>` links to section IDs (per data-model E-009: خدماتنا, لماذا نحن, كيف نعمل, التغطية, الأسعار, آراء العملاء, الأسئلة), hamburger menu button (hidden on md+), desktop WhatsApp CTA button (hidden below md), Tailwind classes for sticky top-0, transparent-to-solid background transition on scroll, z-index 50, RTL-correct layout
- [x] T006 [P] Build footer (`#footer`) in `index.html` — `<footer>` with dark background, 4-column responsive grid (stacked on mobile): business info column (name, tagline, description), contact details column (phone with `tel:` link, WhatsApp with `wa.me` link, email, address), quick links column (section navigation anchors), legal links column (links to `privacy.html` and `terms.html`), copyright bar with dynamic year, all Arabic content per data-model E-001
- [x] T007 [P] Create `js/main.js` — DOMContentLoaded initialization, mobile hamburger menu toggle (add/remove class on nav element), sticky header scroll listener (add solid background class after 50px scroll via `classList.toggle`), close mobile menu on navigation link click
- [x] T008 [P] Create `js/smooth-scroll.js` — CSS `scroll-behavior: smooth` on `<html>`, `scroll-padding-top` matching header height (~70px), IntersectionObserver watching all section elements with `rootMargin` offset for header height, callback to add/remove `active` class on corresponding nav link, graceful degradation without JS (standard anchor links still work)

**Checkpoint**: Header and footer visible, navigation scrolls to empty sections, mobile menu toggles.

---

## Phase 3: User Story 1 — Mobile WhatsApp Conversion (Priority: P1) MVP

**Goal**: A mobile visitor lands on the page, immediately sees the service and value proposition, and contacts the business via WhatsApp or phone call in under 15 seconds.

**Independent Test**: Open `index.html` on a mobile viewport (375px). Hero section loads above the fold with headline, subheadline, and two CTA buttons. Sticky bottom bar is visible. Floating WhatsApp button is visible. Tapping WhatsApp opens `wa.me` link. Tapping phone opens dialer. Final CTA section has same buttons at page bottom.

- [x] T009 [US1] Build hero section (`#hero`) in `index.html` — `<section>` with full-height min-h-screen on mobile, gradient or subtle pattern background using primary colors, `<h1>` with Arabic headline (value proposition), `<p>` subheadline, primary WhatsApp CTA button (green bg, large, full-width on mobile, auto on desktop with `wa.me` href), secondary phone CTA button (outlined style, `tel:` href), space reserved below for trust badges (implemented in US2), responsive layout centered on mobile, right-aligned on desktop
- [x] T010 [P] [US1] Build floating WhatsApp button in `index.html` — `<a>` element with `position: fixed`, `inset-inline-start: 1rem`, `bottom: 5rem` (shifted up on mobile to avoid sticky bar overlap, `bottom: 1.5rem` on md+), z-index 40, green circular button with WhatsApp SVG icon (24x24), subtle pulse animation CSS class, `wa.me` href with pre-filled Arabic message per research R-004, `aria-label` in Arabic, 44x44px minimum touch target
- [x] T011 [P] [US1] Build sticky mobile bottom bar in `index.html` — `<div>` with `position: fixed`, `bottom: 0`, full-width, z-index 50, visible only below md breakpoint (Tailwind `md:hidden`), two equal-width buttons side by side: WhatsApp (green bg, WhatsApp icon + "واتساب" text) and Phone Call (primary blue bg, phone icon + "اتصل الآن" text), `padding-bottom: env(safe-area-inset-bottom)` for notched devices, ~60px height
- [x] T012 [US1] Build final CTA section (`#cta`) in `index.html` — `<section>` with primary-700 gradient background, white text, centered layout, `<h2>` with strong conversion Arabic headline, `<p>` with urgency/reassurance subtext, WhatsApp button (white bg, green text, large) and phone button (white outlined, large), responsive stacked on mobile / inline on desktop
- [x] T013 [US1] Wire all WhatsApp CTAs across the page with `https://wa.me/966XXXXXXXXX?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7...` (pre-filled Arabic greeting per research R-004), wire all phone CTAs with `tel:+966XXXXXXXXX`, verify 4+ CTA locations exist: hero, floating button, sticky bar, final CTA section

**Checkpoint**: US1 complete — mobile visitor can land, see hero, and contact via WhatsApp/phone from 4 different CTA locations. Page is functional as MVP.

---

## Phase 4: User Story 2 — Trust & Quality Evaluation (Priority: P2)

**Goal**: A visitor scrolling through the page sees trust signals, testimonials, and FAQ answers that build confidence before they contact the business.

**Independent Test**: Scroll through the page. Trust indicators are visible below the hero with metrics (years, customers, guarantee). "Why Choose Us" section shows 4+ differentiators. Testimonials show 3+ reviews with star ratings. FAQ section has 5+ items that expand/collapse with smooth animation and single-open behavior.

- [x] T014 [US2] Build trust indicators below hero in `index.html` — inside or immediately after `#hero` section, a row of 3-4 trust metric cards per data-model E-003 (e.g., "+١٠ سنوات خبرة", "+٥٠٠٠ عميل سعيد", "ضمان الرضا", "استجابة خلال ٣٠ دقيقة"), each with icon + metric number (large) + unit label, responsive horizontal row on desktop, 2x2 grid on mobile, subtle card background with soft shadow
- [x] T015 [P] [US2] Build "Why Choose Us" section (`#why-us`) in `index.html` — `<section>` with alternating background (neutral-50), `<h2>` section title "لماذا تختارنا", 4-6 differentiator cards per data-model E-004 with SVG icon, `<h3>` title, `<p>` description, responsive 1-column mobile / 2-3 column desktop grid, hover shadow elevation on cards
- [x] T016 [P] [US2] Build testimonials section (`#testimonials`) in `index.html` — `<section>`, `<h2>` "آراء عملائنا", 3-6 testimonial cards per data-model E-007 with 5-star rating display (filled/empty stars using accent-400 color), `<blockquote>` review text in Arabic, customer name + location below, card styling with quote icon decoration, responsive 1-column mobile / 3-column desktop grid
- [x] T017 [US2] Build FAQ section (`#faq`) in `index.html` — `<section>`, `<h2>` "الأسئلة الشائعة", 5-7 `<details>` elements per data-model E-008, each with `<summary>` containing question text + chevron icon (RTL-correct direction), inner `<div>` wrapping answer `<p>` with `overflow: hidden` for animation, max-width 800px centered on desktop, full-width on mobile, content from contracts/schema-faqpage.json Q&A pairs plus 2 additional
- [x] T018 [US2] Create `js/accordion.js` — select all `<details>` in `#faq`, on `toggle` event: if opening, close all other open `<details>` (single-open behavior), CSS animation via `grid-template-rows: 0fr → 1fr` transition on inner wrapper, handle keyboard interaction (Enter/Space on summary), respect `prefers-reduced-motion` by skipping animation duration

**Checkpoint**: US2 complete — all trust-building sections display correctly. FAQ accordion animates smoothly. Visitor can evaluate business credibility through 4 trust/social-proof sections.

---

## Phase 5: User Story 3 — Desktop Services & Pricing Exploration (Priority: P3)

**Goal**: A desktop visitor browses service offerings, understands the process, checks coverage areas, and reviews pricing — then converts via CTA.

**Independent Test**: Open page at 1440px width. Services section shows 4+ cards in grid with hover states. "How It Works" shows 3 horizontal steps with connector. Coverage shows area badges. Pricing shows 3 cards with "starting from" prices and one highlighted as popular. All sections render correctly in RTL.

- [x] T019 [P] [US3] Build services section (`#services`) in `index.html` — `<section>`, `<h2>` "خدماتنا", `<p>` subtitle, 4-6 service cards per data-model E-002, each card: inline SVG icon (water/cleaning/maintenance themed), `<h3>` service title, `<p>` description, card styling with rounded-xl, soft shadow, hover transform translateY(-4px) + shadow elevation, responsive 1-column mobile / 2-column tablet / 3-4 column desktop grid
- [x] T020 [P] [US3] Build "How It Works" section (`#how-it-works`) in `index.html` — `<section>` with neutral-50 background, `<h2>` "كيف نعمل", 3 step cards per data-model E-005, each: large step number in accent circle, icon, `<h3>` title, `<p>` description, visual connector line between steps (horizontal dashed/dotted on desktop, vertical on mobile), responsive vertical stack mobile / horizontal row desktop
- [x] T021 [P] [US3] Build service coverage section (`#coverage`) in `index.html` — `<section>`, `<h2>` "مناطق التغطية", `<p>` subtitle promise text, flex-wrap grid of area badges per data-model E-001 areas_served (8-12 Riyadh districts as styled tags/chips: شمال الرياض, جنوب الرياض, شرق الرياض, غرب الرياض, وسط الرياض, حي النرجس, حي الياسمين, حي العليا, حي الملقا, etc.), WhatsApp CTA button "اسأل عن منطقتك"
- [x] T022 [US3] Build pricing teaser section (`#pricing`) in `index.html` — `<section>` with primary-50 background, `<h2>` "أسعارنا", `<p>` "تبدأ الأسعار من" subtitle, 3 pricing cards per data-model E-006: service name, large "starting from" price in SAR with Arabic numerals, price unit, 3-5 feature bullets with checkmark icons, individual WhatsApp CTA button "اطلب الآن", one card marked popular with "الأكثر طلباً" badge + primary border + slight scale, responsive 1-column mobile / 3-column desktop grid

**Checkpoint**: US3 complete — all informational sections display with full content and proper desktop layouts. Pricing cards each have their own CTA.

---

## Phase 6: User Story 4 — Legal Pages (Priority: P4)

**Goal**: A visitor can access privacy policy and terms of service from the footer, read them, and navigate back to the main page.

**Independent Test**: Click "سياسة الخصوصية" in footer — privacy.html opens with consistent header, Arabic legal content, and link back. Click "الشروط والأحكام" — terms.html opens similarly.

- [x] T023 [P] [US4] Create `privacy.html` — `<!DOCTYPE html>`, `<html dir="rtl" lang="ar">`, `<head>` with meta tags (title: "سياسة الخصوصية"), TailwindCSS CDN, Google Fonts, `css/main.css` link, `<body>` with simplified header (business name + link back to index.html), `<main>` with `<h1>` "سياسة الخصوصية", full Arabic privacy policy content (data collection, usage, cookies, third parties, rights, contact — standard boilerplate for Saudi local service business), consistent footer, no navigation/sticky elements needed
- [x] T024 [P] [US4] Create `terms.html` — same structure as privacy.html, `<h1>` "الشروط والأحكام", full Arabic terms of service content (service description, user obligations, liability limitations, payment terms, service guarantee, dispute resolution, governing law — standard boilerplate for Saudi local service business), meta title "الشروط والأحكام"

**Checkpoint**: US4 complete — both legal pages accessible from footer, display complete Arabic content, and have navigation back to main page.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Animations, accessibility, responsive fine-tuning, and performance validation across all user stories.

- [x] T025 [P] Add scroll-reveal animations to all content sections in `index.html` + `js/main.js` — IntersectionObserver watching `.reveal` class elements with `threshold: 0.1`, callback adds `.revealed` class, CSS in `css/utilities.css` transitions `opacity: 0; transform: translateY(20px)` → `opacity: 1; transform: translateY(0)` over 0.6s ease, gated behind `prefers-reduced-motion` check
- [x] T026 [P] Add hover/focus states to all interactive elements across `index.html` — service cards (shadow elevation + translateY), pricing cards (border highlight), testimonial cards (subtle scale), FAQ summary items (background tint), CTA buttons (color darken + slight scale), all links (underline on hover), visible focus rings (ring-2 ring-primary-500 ring-offset-2) for keyboard accessibility
- [x] T027 Responsive fine-tuning across all sections in `index.html` — verify all sections at 320px, 375px, 768px, 1024px, 1440px, 1920px viewports, fix any text overflow, card spacing issues, grid breakpoint jumps, ensure floating button and sticky bar don't overlap content, ensure `body` has `padding-bottom` on mobile to account for sticky bar height
- [x] T028 [P] SEO and accessibility audit across `index.html`, `privacy.html`, `terms.html` — verify single `<h1>` per page with no heading level skips, all images/icons have Arabic `alt` text, all interactive elements have `aria-label` where needed, color contrast ratio ≥ 4.5:1 for body text (neutral-800 on white = verified), all `<a>` links have descriptive text, validate JSON-LD structured data matches visible page content
- [x] T029 Performance optimization in `index.html` — verify total page weight < 500KB (check with DevTools Network tab), no render-blocking resources (CSS in head, JS deferred), font-display: swap confirmed, DOM element count < 1500, remove any unused Tailwind output if using CDN play mode, verify LCP < 2.5s target with Chrome DevTools Lighthouse

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on T004 (index.html skeleton) from Setup — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Foundational completion — delivers MVP
- **US2 (Phase 4)**: Depends on Foundational completion — can run in parallel with US1
- **US3 (Phase 5)**: Depends on Foundational completion — can run in parallel with US1/US2
- **US4 (Phase 6)**: Depends on T002/T003 (CSS files) only — can run in parallel with US1/US2/US3
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: After Foundational → Standalone MVP, no other story dependencies
- **User Story 2 (P2)**: After Foundational → Independent of US1 (trust indicators go near hero but don't modify hero itself)
- **User Story 3 (P3)**: After Foundational → Independent of US1/US2 (all new sections)
- **User Story 4 (P4)**: After Setup CSS → Independent of US1/US2/US3 (separate HTML files, only needs CSS and footer links exist)

### Within Each User Story

- Build HTML content first
- Wire JavaScript behavior second
- CTA wiring last (after all sections exist)

### Parallel Opportunities

- **Phase 1**: T002 + T003 can run in parallel (different CSS files)
- **Phase 2**: T006 + T007 + T008 can run in parallel (different files: html footer, main.js, smooth-scroll.js)
- **Phase 3**: T010 + T011 can run in parallel (floating button vs sticky bar — different HTML blocks)
- **Phase 4**: T015 + T016 can run in parallel (different sections in index.html)
- **Phase 5**: T019 + T020 + T021 can run in parallel (different sections in index.html)
- **Phase 6**: T023 + T024 can run in parallel (different HTML files)
- **Phase 7**: T025 + T026 + T028 can run in parallel (different concerns)
- **Cross-phase**: US1 + US2 + US3 + US4 can all run in parallel after Foundational is complete

---

## Parallel Example: User Story 3

```
# Launch all independent sections for US3 together:
Task T019: "Build services section (#services) in index.html"
Task T020: "Build How It Works section (#how-it-works) in index.html"
Task T021: "Build coverage section (#coverage) in index.html"

# Then sequentially:
Task T022: "Build pricing section (#pricing) in index.html" (depends on section pattern established by T019)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T004)
2. Complete Phase 2: Foundational (T005–T008)
3. Complete Phase 3: User Story 1 (T009–T013)
4. **STOP and VALIDATE**: Open on mobile — can visitor reach WhatsApp in < 15 seconds?
5. Deploy/demo if ready — page has hero, header, footer, floating button, sticky bar, final CTA

### Incremental Delivery

1. Setup + Foundational → Skeleton ready with header/footer
2. Add US1 → MVP with conversion capability → Deploy
3. Add US2 → Trust-building sections enhance conversion → Deploy
4. Add US3 → Full service/pricing info for research visitors → Deploy
5. Add US4 → Legal compliance → Deploy
6. Polish → Performance + accessibility + animations → Final Deploy

### Parallel Team Strategy

With multiple developers after Foundational phase:
- Developer A: US1 (hero + CTAs) + US4 (legal pages)
- Developer B: US2 (trust + FAQ) — requires accordion.js
- Developer C: US3 (services + pricing) — pure HTML/CSS sections

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- No automated tests — manual browser testing per quality gates in constitution
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All Arabic content is placeholder — replaceable before production
