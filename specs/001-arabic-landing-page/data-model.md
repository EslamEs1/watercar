# Data Model: Premium Arabic Landing Page

**Feature Branch**: `001-arabic-landing-page`  
**Date**: 2026-04-12  
**Purpose**: Define the content entities, their structure, and relationships for the static landing page.

> **Note**: This project has no database or dynamic data. The "data model" describes the content entities that will be hardcoded in HTML. This serves as a reference for content structure and ensures consistency across sections.

## Content Entities

### E-001: Business Profile

Represents the core business information used across the page header, footer, structured data, and meta tags.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| name | text | Business name in Arabic | Required, displayed in header/footer |
| tagline | text | Short brand tagline | Required, displayed in header |
| phone | text | Primary phone number | Saudi format: +966 5X XXX XXXX |
| whatsapp_number | text | WhatsApp contact number | Format: 966XXXXXXXXX (no +) |
| whatsapp_message | text | Pre-filled WhatsApp greeting | URL-encoded Arabic text |
| address | text | Business address in Arabic | Required for Schema.org |
| city | text | Primary city | Required for Schema.org |
| areas_served | list | Service coverage areas | At least 5 area names |
| working_hours | text | Operating hours | Arabic text format |
| email | text | Contact email | Optional, displayed in footer |

### E-002: Service

Represents an individual service offering displayed in the services section.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| title | text | Service name in Arabic | Required, max 30 characters |
| description | text | Brief service description | Required, 1-2 sentences |
| icon | svg/reference | Visual icon for the service | Inline SVG or icon class |
| order | number | Display order in grid | Sequential, starts at 1 |

**Instances**: Minimum 4, maximum 8

### E-003: Trust Indicator

Represents a credibility metric displayed near the hero section.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| metric | text | The number or value | Required (e.g., "+١٠") |
| unit | text | What the metric measures | Required (e.g., "سنوات خبرة") |
| icon | svg/reference | Visual icon | Optional |

**Instances**: Exactly 3-4

### E-004: Differentiator

Represents a "Why Choose Us" competitive advantage.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| title | text | Advantage name in Arabic | Required, max 40 characters |
| description | text | Brief explanation | Required, 1-2 sentences |
| icon | svg/reference | Visual icon | Required |

**Instances**: Minimum 4, maximum 6

### E-005: Process Step

Represents one step in the "How It Works" section.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| step_number | number | Sequential step number | 1, 2, or 3 only |
| title | text | Step name in Arabic | Required, max 30 characters |
| description | text | Brief explanation of the step | Required, 1-2 sentences |
| icon | svg/reference | Visual icon | Optional |

**Instances**: Exactly 3

### E-006: Pricing Card

Represents a pricing teaser in the pricing section.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| service_name | text | Name of the priced service | Required |
| starting_price | text | "Starting from" price in SAR | Required, Arabic numerals |
| unit | text | Price unit (e.g., per visit, per month) | Required |
| features | list | 3-5 included feature bullets | Required, min 3 items |
| is_popular | boolean | Whether to highlight as popular/recommended | One card max |
| cta_text | text | Button label | Required |

**Instances**: Exactly 3

### E-007: Testimonial

Represents a customer review in the testimonials section.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| customer_name | text | Customer name in Arabic | Required |
| rating | number | Star rating | 1-5, integer |
| review_text | text | Review content in Arabic | Required, 1-3 sentences |
| location | text | Customer location | Optional (e.g., "الرياض") |

**Instances**: Minimum 3, maximum 6

### E-008: FAQ Item

Represents a question-answer pair in the FAQ accordion.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| question | text | Question in Arabic | Required |
| answer | text | Answer in Arabic | Required, 1-3 sentences |
| order | number | Display order | Sequential, starts at 1 |

**Instances**: Minimum 5, maximum 10

### E-009: Navigation Link

Represents a header navigation item linking to a page section.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| label | text | Link text in Arabic | Required |
| href | text | Section ID anchor | Required, format: #section-id |
| order | number | Display order in nav | Sequential |

**Instances**: 6-8 links (matching major sections)

## Entity Relationships

```text
Business Profile
├── owns → Service[] (displayed in #services)
├── owns → Trust Indicator[] (displayed in #hero area)
├── owns → Differentiator[] (displayed in #why-us)
├── owns → Process Step[3] (displayed in #how-it-works)
├── owns → Pricing Card[3] (displayed in #pricing)
├── has → Testimonial[] (displayed in #testimonials)
├── has → FAQ Item[] (displayed in #faq)
└── defines → Navigation Link[] (displayed in #header)
```

All entities are owned by the single Business Profile. There are no cross-entity relationships beyond this ownership. All data is static — no state transitions apply.
