# Feature Specification: Premium Arabic Landing Page

**Feature Branch**: `001-arabic-landing-page`  
**Created**: 2026-04-12  
**Status**: Draft  
**Input**: User description: "Build a premium one-page Arabic RTL landing page for a local service business, optimized for WhatsApp/call conversions, with trust-building sections, FAQ, testimonials, pricing teasers, and premium design using only HTML, CSS, TailwindCSS, and vanilla JavaScript."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Mobile Visitor Contacts Business via WhatsApp (Priority: P1)

A potential customer discovers the business through search or a shared link on their mobile phone. They land on the page, immediately understand what service is offered, see trust indicators (years of experience, number of customers served, service guarantees), and tap the WhatsApp button to start a conversation. The entire flow from landing to WhatsApp contact takes under 15 seconds.

**Why this priority**: WhatsApp is the primary conversion channel for local service businesses in Saudi Arabia. The majority of traffic will be mobile. This is the core revenue-generating user journey.

**Independent Test**: Can be fully tested by opening the page on a mobile device, scrolling through the hero section, and tapping the WhatsApp CTA. Delivers the primary business value of generating customer leads.

**Acceptance Scenarios**:

1. **Given** a visitor opens the page on a mobile device, **When** the page loads, **Then** the hero section displays the service name, a clear value proposition in Arabic, and prominent WhatsApp and call CTA buttons above the fold within 3 seconds.
2. **Given** a visitor is on any section of the page on mobile, **When** they look at the bottom of their screen, **Then** a sticky bottom bar with WhatsApp and call buttons is always visible.
3. **Given** a visitor taps the WhatsApp CTA button, **When** the action triggers, **Then** the visitor is redirected to WhatsApp with a pre-filled message template addressing the business.
4. **Given** a visitor taps the phone call CTA button, **When** the action triggers, **Then** the device's native phone dialer opens with the business phone number pre-filled.

---

### User Story 2 - Visitor Evaluates Trust and Service Quality (Priority: P2)

A potential customer is comparing multiple local service providers. They scroll through the page to evaluate the business's credibility. They review trust indicators near the hero, read the "Why Choose Us" section, browse customer testimonials, check the service coverage area, and review the FAQ section to resolve their concerns. After building confidence, they contact the business.

**Why this priority**: Trust-building directly impacts conversion rates. Without credibility signals, visitors will leave and choose a competitor. This is the second most important journey because it supports the primary conversion goal.

**Independent Test**: Can be fully tested by scrolling through all trust-related sections and verifying each section displays complete, readable content with smooth navigation between sections.

**Acceptance Scenarios**:

1. **Given** a visitor is on the page, **When** they scroll past the hero, **Then** trust indicators (e.g., years of experience, customers served, service guarantee badges) are clearly visible.
2. **Given** a visitor navigates to the testimonials section, **When** the section loads, **Then** at least 3 customer testimonials are displayed with names, ratings, and review text in Arabic.
3. **Given** a visitor opens an FAQ item, **When** they tap/click the question, **Then** the answer expands smoothly with an accordion animation, and other open items collapse.
4. **Given** a visitor clicks a navigation link in the header, **When** the scroll action triggers, **Then** the page smoothly scrolls to the corresponding section with the header remaining visible.

---

### User Story 3 - Desktop Visitor Explores Services and Pricing (Priority: P3)

A visitor on a desktop computer browses the full page to understand the service offerings, coverage areas, how the service process works, and pricing structure. They navigate using the sticky header menu, review each section, and ultimately convert via WhatsApp or phone call using the final CTA section or floating WhatsApp button.

**Why this priority**: While mobile is the primary device, desktop visitors represent a meaningful segment, especially for those researching services during work hours. The desktop experience must also be premium and complete.

**Independent Test**: Can be fully tested by opening the page on a desktop browser, using the navigation menu to visit each section, and verifying all content displays correctly in a wide layout with hover states and visual polish.

**Acceptance Scenarios**:

1. **Given** a visitor opens the page on a desktop browser, **When** the page loads, **Then** all sections render correctly in a wide layout with proper RTL alignment, readable typography, and no horizontal overflow.
2. **Given** a visitor hovers over a service card, **When** the hover state activates, **Then** the card displays a subtle elevation/shadow animation providing visual feedback.
3. **Given** a visitor scrolls down the page on desktop, **When** the floating WhatsApp button is visible, **Then** it remains fixed in the bottom-left corner (RTL-appropriate) and is always clickable.
4. **Given** a visitor reaches the pricing teaser section, **When** they view the pricing cards, **Then** each card displays a "starting from" price, service name, and a CTA button to contact for full pricing.

---

### User Story 4 - Visitor Navigates to Legal Pages (Priority: P4)

A visitor or business partner needs to review the privacy policy or terms of service. They scroll to the footer and click the appropriate link, which takes them to a separate, clean legal page.

**Why this priority**: Legal pages are a regulatory requirement and contribute to business legitimacy, but are not part of the primary conversion flow.

**Independent Test**: Can be tested by clicking legal links in the footer and verifying each legal page loads with complete content and a link back to the main page.

**Acceptance Scenarios**:

1. **Given** a visitor is on the main page footer, **When** they click "Privacy Policy", **Then** a separate privacy policy page opens with complete Arabic content and consistent branding.
2. **Given** a visitor is on a legal page, **When** they want to return to the main page, **Then** a clear navigation link or header logo takes them back to the landing page.

---

### Edge Cases

- What happens when the page is viewed on very small screens (below 320px width)? Content must remain readable and CTAs must remain tappable.
- What happens when JavaScript fails to load? Core content and CTA links (WhatsApp, phone) must remain functional without JavaScript since they use standard `href` links.
- What happens when a visitor has slow internet connectivity? The page must be lightweight enough to load core content and CTAs within 5 seconds on 3G connections.
- What happens when a visitor uses browser translation on the Arabic page? Content structure must not break under auto-translation.
- What happens when the header sticky behavior activates on scroll? The header must not overlap or hide content, and section scroll targets must account for the header height offset.
- What happens when all FAQ items are expanded simultaneously? The layout must not break or cause content overlap.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Page MUST render entirely in Arabic with proper RTL (right-to-left) text direction and layout throughout all sections.
- **FR-002**: Page MUST include a sticky header with the business logo/name and navigation links that smooth-scroll to corresponding page sections.
- **FR-003**: Header navigation MUST collapse into a mobile-friendly hamburger menu on screens below 768px width.
- **FR-004**: Hero section MUST display a compelling headline, subheadline, and two CTA buttons (WhatsApp as primary, phone call as secondary) above the fold on mobile devices.
- **FR-005**: Page MUST include a floating WhatsApp button that remains visible at all times during scrolling, positioned in the bottom-left corner (appropriate for RTL layout).
- **FR-006**: Page MUST include a sticky bottom bar on mobile (below 768px) with WhatsApp and phone call action buttons that remains visible during scrolling.
- **FR-007**: WhatsApp CTA buttons MUST link to WhatsApp with a pre-filled greeting message in Arabic using the `wa.me` URL scheme.
- **FR-008**: Phone call CTA buttons MUST use the `tel:` URL scheme to trigger the device's native dialer.
- **FR-009**: Page MUST include a trust indicators section near the hero displaying at least 3 credibility metrics (e.g., years of experience, customers served, response time guarantee).
- **FR-010**: Page MUST include a services section displaying at least 4 service offerings in card-based layout with icons/visual indicators, titles, and short descriptions.
- **FR-011**: Page MUST include a "Why Choose Us" section with at least 4 competitive differentiators presented in a visually distinct format.
- **FR-012**: Page MUST include a service coverage/locations section listing the areas served.
- **FR-013**: Page MUST include a "How It Works" section presenting exactly 3 sequential steps with numbered visual indicators.
- **FR-014**: Page MUST include a pricing teaser section with at least 3 pricing cards showing "starting from" prices, service names, and individual CTA buttons.
- **FR-015**: Page MUST include a testimonials section displaying at least 3 customer reviews with customer name, star rating, and review text.
- **FR-016**: Page MUST include an FAQ section with at least 5 questions in an accordion format where clicking a question toggles the answer visibility with smooth animation.
- **FR-017**: Page MUST include a final CTA section with a strong conversion-focused headline and WhatsApp/call buttons.
- **FR-018**: Page MUST include a footer with business contact details, navigation links, and links to privacy policy and terms of service pages.
- **FR-019**: A separate privacy policy page MUST exist with Arabic content, consistent branding, and navigation back to the main page.
- **FR-020**: A separate terms of service page MUST exist with Arabic content, consistent branding, and navigation back to the main page.
- **FR-021**: All pages MUST include proper semantic HTML5 markup with correct heading hierarchy (single h1, logical h2/h3 nesting).
- **FR-022**: All pages MUST include meta title, meta description, Open Graph tags, and Twitter Card tags with appropriate placeholder content.
- **FR-023**: Main page MUST include structured data markup for LocalBusiness and FAQPage schemas.
- **FR-024**: Page MUST be mobile-first responsive, functioning correctly from 320px to 1920px+ viewport widths.
- **FR-025**: CTA buttons (WhatsApp and phone) MUST appear in at least 4 distinct locations across the page: hero, sticky bottom bar (mobile), floating button, and final CTA section.
- **FR-026**: All interactive elements MUST have visible hover/focus states for accessibility.
- **FR-027**: Page MUST load with no browser alerts, console errors, or intrusive popups.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Page fully loads and displays all content within 3 seconds on a standard broadband connection and within 5 seconds on a 3G mobile connection.
- **SC-002**: A first-time mobile visitor can reach WhatsApp contact in under 15 seconds from page load (hero CTA or sticky bar).
- **SC-003**: All page sections are navigable via the sticky header with smooth scroll completing within 1 second per navigation action.
- **SC-004**: The page scores 90+ on Google Lighthouse for Performance, Accessibility, Best Practices, and SEO categories.
- **SC-005**: 100% of CTA buttons across the page successfully trigger their intended action (WhatsApp redirect or phone dialer).
- **SC-006**: The page renders correctly and is fully usable across all modern browsers (Chrome, Safari, Firefox, Edge) on both mobile and desktop.
- **SC-007**: All FAQ accordion items open and close with smooth animation and no layout shifting or content overlap.
- **SC-008**: Page content is fully readable and all interactive elements are usable on viewports from 320px to 1920px+ without horizontal scrolling.
- **SC-009**: Legal pages (privacy, terms) are accessible from the footer and display complete content with navigation back to the main page.
- **SC-010**: The visual design is perceived as more professional and trustworthy than typical local service competitor websites, validated by consistent spacing, typography hierarchy, card shadows, and polished micro-interactions.

## Assumptions

- Target audience is Arabic-speaking users in Saudi Arabia, primarily accessing via mobile devices (estimated 70%+ mobile traffic).
- The business is a local home/commercial service provider (e.g., water delivery, cleaning, maintenance) operating in Riyadh and surrounding areas.
- WhatsApp is the primary and preferred communication channel for the target market.
- No backend, database, authentication, or dynamic content management is required — all content is static and hardcoded.
- TailwindCSS will be loaded via CDN for rapid development; no build tools or bundlers are required.
- Phone numbers and WhatsApp numbers used are Saudi format (+966 prefix) placeholders to be replaced before production deployment.
- All content is in Arabic with no English localization required.
- Images/icons will use placeholder references or inline SVGs — no external image assets are provided at this stage.
- The site will be deployed as static files on any standard web hosting or CDN.
- Google Fonts with Arabic support (e.g., Tajawal, Cairo, or IBM Plex Arabic) will be used for typography via CDN.
- No cookie consent banner is required at this stage (no tracking scripts included).
- Legal page content (privacy policy, terms of service) uses standard Arabic boilerplate appropriate for a local service business.
