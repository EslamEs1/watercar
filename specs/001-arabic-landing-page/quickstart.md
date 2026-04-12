# Quickstart: Premium Arabic Landing Page

**Feature Branch**: `001-arabic-landing-page`  
**Date**: 2026-04-12

## Prerequisites

- A modern web browser (Chrome 90+, Firefox 90+, Safari 14+, or Edge 90+)
- A code editor (VS Code recommended with Live Server extension)
- Git (for version control)

No Node.js, npm, or build tools required.

## Getting Started

### 1. Switch to the feature branch

```bash
git checkout 001-arabic-landing-page
```

### 2. Open the project

Open the `watercar/` directory in your code editor.

### 3. Start a local server

**Option A — VS Code Live Server**:
- Install the "Live Server" extension in VS Code
- Right-click `index.html` → "Open with Live Server"

**Option B — Python**:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option C — Direct file**:
Simply double-click `index.html` to open in a browser. Note: some features (font loading) may behave differently with `file://` protocol.

### 4. Development workflow

1. Edit HTML files (`index.html`, `privacy.html`, `terms.html`)
2. Edit styles in `css/main.css` and `css/utilities.css`
3. Edit behavior in `js/main.js`, `js/accordion.js`, `js/smooth-scroll.js`
4. Save and refresh browser (or use Live Server auto-reload)

## Project Structure

```text
watercar/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── css/
│   ├── main.css            # Design tokens & component styles
│   └── utilities.css       # RTL helpers & animation utilities
├── js/
│   ├── main.js             # Core: mobile menu, header scroll, init
│   ├── accordion.js        # FAQ accordion logic
│   └── smooth-scroll.js    # Smooth scroll + active nav tracking
└── assets/
    ├── images/             # Optimized images
    └── icons/              # SVG icons
```

## Key Files to Edit

| File | Contains | Edit when... |
|------|----------|-------------|
| `index.html` | All 11 page sections, structured data, meta tags | Changing content, section order, or HTML structure |
| `css/main.css` | CSS custom properties (colors, fonts, spacing), component styles | Changing colors, typography, layout, or component look |
| `css/utilities.css` | Animation utilities, RTL overrides, responsive helpers | Adding new animations or fixing RTL-specific issues |
| `js/main.js` | Mobile menu toggle, sticky header behavior, initialization | Changing header behavior or adding new global interactions |
| `js/accordion.js` | FAQ expand/collapse with smooth animation | Changing FAQ behavior |
| `js/smooth-scroll.js` | Navigation scroll + active link highlighting | Changing scroll behavior or nav tracking |

## Quality Checks

Before considering any section complete, verify:

1. **RTL**: Does the layout look correct in RTL? Are icons/chevrons pointing the right direction?
2. **Mobile (320px)**: Is everything visible and tappable at 320px width?
3. **Desktop (1920px)**: Does the layout use space well at wide viewports?
4. **CTAs**: Do WhatsApp links open WhatsApp? Do tel: links open the dialer?
5. **Navigation**: Does clicking a nav link scroll smoothly to the correct section?
6. **Accessibility**: Can you tab through all interactive elements?
7. **Console**: Are there any JavaScript errors in the browser console?

## Placeholder Values to Replace Before Production

| Placeholder | Replace With | Location |
|-------------|-------------|----------|
| `966XXXXXXXXX` | Real WhatsApp number | All WhatsApp links |
| `+966 5X XXX XXXX` | Real phone number | All tel: links, footer |
| Business name placeholders | Real business name | Header, footer, Schema.org, meta tags |
| Address placeholders | Real business address | Footer, Schema.org |
| Testimonial names | Real customer names (with permission) | Testimonials section |
| Pricing amounts | Real starting prices | Pricing section |
| `og:image` placeholder | Real OG image URL | `<head>` meta tags |
