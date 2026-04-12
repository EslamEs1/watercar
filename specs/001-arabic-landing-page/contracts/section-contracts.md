# Section Contracts: Premium Arabic Landing Page

**Feature Branch**: `001-arabic-landing-page`  
**Date**: 2026-04-12  
**Purpose**: Define the structure and content contract for each page section, serving as the handoff reference between design and implementation.

## Contract Format

Each section contract specifies:
- **Section ID**: The HTML `id` attribute for scroll navigation
- **Semantic element**: The HTML5 element to use
- **Content slots**: What content appears in the section
- **Responsive behavior**: How the section adapts across breakpoints
- **CTA presence**: Whether conversion actions appear in this section

---

## SC-01: Sticky Header (`#header`)

**Element**: `<header>`  
**Behavior**: Fixed to top on scroll, transparent initially then solid background on scroll.

| Slot | Content | Mobile (<768px) | Desktop (≥768px) |
|------|---------|-----------------|-------------------|
| Logo/Brand | Business name text or logo | Visible, left-aligned (RTL: right) | Visible, right-aligned (RTL) |
| Navigation | Section anchor links | Collapsed into hamburger menu | Horizontal inline links |
| CTA Button | WhatsApp or phone button | Hidden (covered by sticky bar) | Visible in nav bar |

**Z-index**: 50 (above all content, below modals)

---

## SC-02: Hero Section (`#hero`)

**Element**: `<section>`  
**Behavior**: Full viewport height on mobile, generous padding on desktop. Background gradient or subtle pattern.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Headline (h1) | Primary value proposition in Arabic | Large, centered | Extra-large, right-aligned |
| Subheadline | Supporting text, 1-2 lines | Below headline | Below headline |
| Primary CTA | WhatsApp button (green, large) | Full-width | Auto-width |
| Secondary CTA | Phone call button (outlined) | Full-width, below primary | Inline with primary |
| Trust badges | 3-4 metric counters | Horizontal scroll or 2x2 grid | Inline row |

**CTA**: Yes (WhatsApp + Phone)

---

## SC-03: Services (`#services`)

**Element**: `<section>`  
**Behavior**: Card grid layout with consistent card sizing.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "خدماتنا" or similar | Centered | Centered |
| Section subtitle | Brief descriptor | Below title | Below title |
| Service cards | 4-8 cards with icon + title + description | 1 column, stacked | 2-4 column grid |

**Card structure**: Icon (SVG/emoji) → Title (h3) → Description (p)  
**CTA**: No direct CTA in this section

---

## SC-04: Why Choose Us (`#why-us`)

**Element**: `<section>`  
**Behavior**: Alternating background color from services section. Feature grid.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "لماذا تختارنا" | Centered | Centered |
| Differentiator cards | 4-6 items with icon + title + description | 1 column | 2-3 column grid |

**Card structure**: Icon → Title (h3) → Short description  
**CTA**: No direct CTA

---

## SC-05: How It Works (`#how-it-works`)

**Element**: `<section>`  
**Behavior**: 3-step horizontal flow on desktop, vertical stack on mobile. Numbered steps with visual connector line.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "كيف نعمل" or "خطوات الخدمة" | Centered | Centered |
| Step 1 | Number + icon + title + description | Vertical card | Horizontal, 1/3 width |
| Step 2 | Number + icon + title + description | Vertical card | Horizontal, 1/3 width |
| Step 3 | Number + icon + title + description | Vertical card | Horizontal, 1/3 width |
| Connector | Visual line between steps | Vertical line | Horizontal line/dots |

**CTA**: No direct CTA

---

## SC-06: Service Coverage (`#coverage`)

**Element**: `<section>`  
**Behavior**: Location tags/badges or grid showing served areas.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "مناطق التغطية" | Centered | Centered |
| Subtitle | Coverage promise text | Below title | Below title |
| Area tags | Badge-style location names | Flex-wrap grid | Flex-wrap grid, wider |
| CTA | WhatsApp for area inquiry | Full-width button | Auto-width button |

**CTA**: Yes (WhatsApp — "اسأل عن منطقتك")

---

## SC-07: Pricing Teasers (`#pricing`)

**Element**: `<section>`  
**Behavior**: Pricing cards with one highlighted as "popular". "Starting from" pricing model.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "أسعارنا" or "باقات الأسعار" | Centered | Centered |
| Subtitle | "تبدأ من" pricing note | Below title | Below title |
| Pricing cards (×3) | Service name + price + features + CTA | 1 column stacked | 3 column grid |
| Popular badge | "الأكثر طلباً" on highlighted card | Visible | Visible |

**Card structure**: Service name → Starting price (large) → Unit → Feature list → CTA button  
**CTA**: Yes (WhatsApp per card — "اطلب الآن")

---

## SC-08: Testimonials (`#testimonials`)

**Element**: `<section>`  
**Behavior**: Testimonial cards, horizontally scrollable on mobile or grid on desktop.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "آراء عملائنا" | Centered | Centered |
| Testimonial cards | 3-6 cards with name + stars + text | Horizontal scroll or stack | 3 column grid |

**Card structure**: Star rating (★) → Review text (blockquote) → Customer name + location  
**CTA**: No direct CTA

---

## SC-09: FAQ Accordion (`#faq`)

**Element**: `<section>`  
**Behavior**: Accordion with single-open behavior. Uses `<details>`/`<summary>` elements.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Section title (h2) | "الأسئلة الشائعة" | Centered | Centered |
| FAQ items (×5-10) | Question (summary) + Answer (details) | Full-width | Max-width 800px, centered |

**Element structure**: `<details>` → `<summary>` (question) → `<div>` (answer)  
**CTA**: No direct CTA (implicit trust-building)

---

## SC-10: Final CTA (`#cta`)

**Element**: `<section>`  
**Behavior**: High-contrast section with strong background (primary color or gradient). Bold conversion-focused copy.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Headline (h2) | Strong conversion headline | Centered, large | Centered, extra-large |
| Subtext | Urgency or reassurance text | Below headline | Below headline |
| Primary CTA | WhatsApp button (large, prominent) | Full-width | Auto-width |
| Secondary CTA | Phone call button | Full-width, below | Inline with primary |

**CTA**: Yes (WhatsApp + Phone — main conversion push)

---

## SC-11: Footer (`#footer`)

**Element**: `<footer>`  
**Behavior**: Dark background, multi-column layout on desktop, stacked on mobile.

| Slot | Content | Mobile | Desktop |
|------|---------|--------|---------|
| Business info | Name, tagline, brief description | Full-width | Column 1 |
| Contact details | Phone, WhatsApp, email, address | Full-width | Column 2 |
| Quick links | Navigation links to sections | Full-width | Column 3 |
| Legal links | Privacy policy, terms of service | Full-width | Column 4 or inline |
| Copyright | © year + business name | Centered | Centered, full-width bar |

**CTA**: Indirect (contact details serve as CTAs)

---

## Persistent UI Elements

### Floating WhatsApp Button

**Visibility**: All viewports, all scroll positions  
**Position**: Fixed, bottom-left (RTL: `inset-inline-start`), 1rem from edges  
**Z-index**: 40  
**Mobile adjustment**: Shifts up when sticky bottom bar is present  
**Content**: WhatsApp icon (SVG) + optional pulse animation

### Sticky Mobile Bottom Bar

**Visibility**: Below 768px only  
**Position**: Fixed bottom, full-width  
**Z-index**: 50  
**Content**: Two equal buttons — WhatsApp (green) and Phone Call (primary blue)  
**Height**: ~60px with safe-area inset padding for notched devices
