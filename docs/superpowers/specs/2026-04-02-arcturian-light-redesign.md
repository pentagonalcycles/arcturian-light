# Arcturian Light London — Website Redesign Spec

**Date:** 2026-04-02  
**Last updated:** 2026-04-02 (post-build)  
**Client:** Carol Nayach  
**Current site:** www.arcturianlight.co.uk (WordPress, single-page scroll)  
**New site (live):** https://arcturian-light.vercel.app  
**GitHub repo:** https://github.com/pentagonalcycles/arcturian-light  
**Developer:** maintainer only (Carol will not self-update; all changes go through the developer)

---

## 1. Overview

A full rebuild of Carol Nayach's spiritual / metaphysical website. The existing WordPress single-page site is outdated aesthetically and needs structural improvement. The replacement is a hand-crafted **plain HTML + CSS static site** — no build tools, no CMS, no dependencies — with a **Cosmic & Mystical** visual identity.

Content revisions will be provided by Carol at a later stage. The rebuild establishes the structure, design system, and integrations; content slots are filled with the existing text as a starting point.

---

## 2. Platform & Tooling

| Decision | Choice | Rationale |
|---|---|---|
| Platform | Plain HTML + CSS | Zero dependencies, no build step, easiest for a single developer to maintain long-term |
| CMS | None | Developer handles all updates on Carol's behalf |
| Hosting | Vercel | Free tier, connected to GitHub repo `pentagonalcycles/arcturian-light`. Auto-deploys on every push to `main`. Live at https://arcturian-light.vercel.app |
| Domain | arcturianlight.co.uk | Existing domain — to be pointed to Vercel at go-live via DNS records provided in Vercel Project Settings → Domains. DNS cutover and decommissioning of old WordPress hosting are deployment steps outside the scope of the build itself. |

---

## 3. Site Structure

Multi-page site. 8 HTML files total.

### Pages

| File | Page | Purpose |
|---|---|---|
| `index.html` | Home | Hero, intro, 3 pillar cards, CTAs, newsletter signup |
| `about.html` | About | Carol's story, the Arcturians, the Stargate, the Crystal Temple, the Sacred Triangle, David K Miller attribution |
| `meditations.html` | Meditations & Schedule | What the sessions are, current schedule (weekly + weekend retreats), Zoom links, PayPal payment links |
| `healing.html` | Healing | Personal healing sessions description, what to expect, contact CTA, testimonial area |
| `videos.html` | Videos | Grid of embedded past YouTube meditations/teachings, link to YouTube channel |
| `contact.html` | Contact | Formspree contact form, email link, Facebook, Instagram, YouTube, Zoom Meeting ID, newsletter signup |
| `privacy-policy.html` | Privacy Policy | Carried over and updated from existing page |
| `terms.html` | Terms of Service | Carried over and updated from existing page |

### Shared elements (repeated in each HTML file)

- **Header / nav:** logo + site name, nav links to all main pages, mobile hamburger menu
- **Footer:** copyright, social links, legal page links, David K Miller attribution note

---

## 4. Visual Design System

### Aesthetic

**Cosmic & Mystical** — deep navy/indigo backgrounds, gold and violet accents, serif display headings, clean sans-serif body text. Evokes the cosmos, higher dimensions, starships. Elegant and otherworldly.

### Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Deep Space | `#0a0a1a` | Page background, section backgrounds |
| Indigo Night | `#1a1040` | Card backgrounds, header background |
| Arcturian Violet | `#2a1f6e` | Accent sections, dividers |
| Starlight Gold | `#c8a96e` | Headings, CTAs, decorative elements, nav logo |
| Soft Violet | `#9b8fc4` | Section labels, secondary text, nav links |
| Warm Cream | `#e8d5a3` | Body text on dark backgrounds, subheadings |
| Ghost White | `#f0eefc` | Light body text, captions |

### Typography

- **Display headings (H1, H2, H3):** Cinzel (Google Fonts, loaded on all pages) with Georgia as fallback, tracked, gold
- **Eyebrow / section labels:** System UI sans-serif, uppercase, letter-spaced, violet — implemented as `<p class="label">` (not heading elements, to preserve correct heading hierarchy)
- **Nav links:** System UI sans-serif, small, uppercase, letter-spaced, violet
- **Body text:** System UI sans-serif, 14–16px, cream/ghost white
- **Note:** `Inter` is declared in the CSS font-stack as a fallback but is not loaded via Google Fonts; `system-ui` serves as the effective sans-serif font

### Buttons

- **Primary:** gold background (`#c8a96e`), deep space text, uppercase, letter-spaced
- **Secondary / outline:** gold border, gold text, transparent background

### Decorative motifs

- Thin gold horizontal rules between sections
- Star symbol `✦` used as section separator and decorative accent
- Subtle radial gradient overlays on hero and section backgrounds

---

## 5. Page-by-Page Design

### Home (`index.html`)

1. **Hero** — full-viewport-height, dark gradient background (or a subtle space/star image), centred logo, site name in Cinzel/Georgia, tagline in italic serif, two CTA buttons (View Schedule / About Carol)
2. **Intro** — 2–3 sentence welcome paragraph, centred, max-width ~600px
3. **Three pillars** — horizontal card row: Meditations · Healing · Ascension. Each card: icon/symbol, title, one-line description, link
4. **Newsletter signup** — Mailchimp embed, styled to match dark theme

### About (`about.html`)

1. Page hero (smaller than home) with page title
2. Carol's story — text + photo of Carol
3. The Arcturians section — who they are
4. The Arcturian Stargate
5. The Crystal Temple & Sacred Triangle
6. David K Miller attribution (footer note or inline callout)

### Meditations & Schedule (`meditations.html`)

1. Page hero with title
2. What the sessions are — brief description
3. Zoom Details section — Meeting ID displayed publicly; password is **not** shown. Visitors are prompted to contact Carol via the contact form to receive the password (security measure to prevent disruptive attendees)
4. Schedule table/list:
   - Weekly Monday 11am (online only) — £10 via PayPal, "Get Zoom Password" button → `contact.html`
   - Weekly Wednesday 7–8:15pm (in-person & online) — £10, "Get Zoom Password" button → `contact.html`, note re venue (email to attend in person)
   - Weekend retreats — dates updated by developer when Carol provides them; same password-request pattern applies
5. PayPal link styled as a button on each session block

### Healing (`healing.html`)

1. Page hero with title
2. Description of personal healing sessions
3. What to expect (healing chambers, Crystal Temple, Arcturian energies, etc.)
4. Testimonial/quote area (placeholder — Carol to supply)
5. CTA → Contact

### Videos (`videos.html`)

1. Page hero with title
2. Introductory sentence linking to YouTube channel
3. YouTube channel link button
4. "Coming soon" placeholder message with YouTube channel button — the responsive CSS grid of `<iframe>` embeds is present in the HTML as commented-out template markup, ready to be uncommented once Carol supplies video IDs
5. Note: developer activates the grid and replaces `VIDEO_ID_*` placeholders by editing the HTML

### Contact (`contact.html`)

1. Page hero with title
2. Formspree contact form (name, email, message fields) — submissions emailed to `nayachcarol@gmail.com`
3. Social links: Facebook (`fb.com/arcturianlightlondon`), Instagram (`arcturian_light_london`), YouTube channel, email
4. Zoom Meeting ID: 9829596972 / Pass: Arcturus
5. Mailchimp newsletter signup embed (repeated from home)

### Privacy Policy & Terms

Carried over from existing WordPress pages, lightly reformatted to match new design.

---

## 6. Integrations

| Integration | Implementation | Notes |
|---|---|---|
| Mailchimp newsletter | Standard Mailchimp embed HTML snippet | Styled to match dark theme. Placed on Home and Contact pages |
| PayPal payments | Direct `paypal.me/CarolNayach` link buttons | No PayPal SDK embed needed |
| YouTube channel | Direct link to `https://www.youtube.com/@ArcturianLight` | Used on Videos page, Meditations page, footer, and Contact page. Replaces the old shortened `bit.ly/2J3hsRz` link. |
| YouTube embeds | Standard `<iframe>` embeds | CSS grid layout on Videos page — pending video IDs from Carol |
| Contact form | Formspree (`<form action="https://formspree.io/f/...">`) | Free tier (50 submissions/month). Emails Carol directly. No backend required |
| Zoom links | Meeting ID displayed publicly; password withheld | Visitors directed to contact form to request the Zoom password. Direct `zoom.us` join links removed from public-facing pages to prevent uninvited/disruptive access. |

---

## 7. Responsive Design

- **Approach:** Mobile-first CSS with `min-width` breakpoints
- **Breakpoints:** 375px (mobile), 768px (tablet), 1280px (desktop)
- **Navigation:** Full horizontal nav on desktop; hamburger toggle (minimal vanilla JS) on mobile
- **Grids:** Single-column on mobile, 2–3 column on desktop
- **Images:** `max-width: 100%`, `height: auto`

---

## 8. File Structure

```
nayach/
  css/
    style.css          ← single shared stylesheet
  images/
    logo.png
    hero-bg.jpg
    carol.jpg
    (other images TBD — Carol to supply)
  js/
    main.js            ← mobile nav toggle, nav-close-on-link-click, copyright year
  index.html
  about.html
  meditations.html
  healing.html
  videos.html
  contact.html
  privacy-policy.html
  terms.html
  docs/
    superpowers/
      specs/
        2026-04-02-arcturian-light-redesign.md
```

---

## 9. Accessibility & Quality Standards Applied

The following standards were implemented during the build (beyond the original spec):

- **Skip-to-content link** — `<a href="#main-content" class="skip-link">` on every page, visible on keyboard focus
- **`<main>` landmark** — all page content is wrapped in `<main id="main-content">` on every page
- **Heading hierarchy** — eyebrow labels above `<h2>` elements use `<p class="label">` not `<h4>`, preserving correct DOM heading order
- **`aria-current="page"`** — set on the active nav link on each page
- **`aria-controls` on hamburger** — nav toggle button references `id="nav-links"` on the `<ul>`
- **Focus styles** — `a:focus-visible`, `.nav-toggle:focus-visible`, form inputs and textareas all have visible gold outline on keyboard focus; `.card:focus-within` and `.social-links a:focus-visible` match hover states
- **`prefers-reduced-motion`** — `scroll-behavior: smooth` is disabled for users who prefer reduced motion
- **External links** — all use `https://` and `rel="noopener noreferrer"`
- **Decorative icons** — `✦` bullet markers in lists use `aria-hidden="true"`
- **Copyright year** — rendered via `js/main.js` DOM manipulation (not `document.write`)
- **Nav closes on link click** — mobile nav closes automatically when a nav link is tapped

---

## 10. Out of Scope

- Blog / news section (not on current site, not requested)
- E-commerce / booking system (PayPal links are sufficient)
- Live streaming integration (YouTube embeds for recorded content only)
- CMS / admin interface (developer handles all updates)
- Multilingual support

---

## 11. Out of Scope

- Blog / news section (not on current site, not requested)
- E-commerce / booking system (PayPal links are sufficient)
- Live streaming integration (recorded YouTube content only)
- CMS / admin interface (developer handles all updates)
- Multilingual support
- Favicon (not implemented — to be added when Carol supplies a logo/icon)

---

## 12. Open Items — pending before go-live on arcturianlight.co.uk

The site is built and deployed at https://arcturian-light.vercel.app. The following items must be resolved before pointing the `arcturianlight.co.uk` domain to Vercel:

| Item | Action | Where in code |
|---|---|---|
| Formspree form ID | Create free account at formspree.io, point form to `nayachcarol@gmail.com`, replace `FORMSPREE_ID` | `contact.html` — `<form action="https://formspree.io/f/FORMSPREE_ID">` |
| Mailchimp embed snippet | Get embed HTML from Carol's Mailchimp account, replace placeholder `<div>` | `index.html` and `contact.html` — marked with `<!-- TODO: Replace with Mailchimp embed snippet -->` |
| YouTube video IDs | Get video IDs from Carol's channel, uncomment the `video-grid` template in `videos.html` and replace `VIDEO_ID_1`–`VIDEO_ID_6` | `videos.html` — commented-out `<div class="video-grid">` block |
| ~~Carol's photo~~ | ~~Add image file as `images/carol.jpg`~~ | **Done** — `images/CarolNayach.png` added and live on About page (`3ac576d`) |
| Privacy Policy text | Copy from `arcturianlight.co.uk/privacy-policy/`, paste into content section | `privacy-policy.html` — marked with `<!-- TODO -->` |
| Terms of Service text | Copy from `arcturianlight.co.uk/terms-of-service/`, paste into content section | `terms.html` — marked with `<!-- TODO -->` |
| Testimonials | Carol to supply — replace placeholder quote | `healing.html` — `<blockquote class="testimonial">` |
| Weekend retreat dates | Carol to supply — uncomment example `schedule-block` and fill in dates | `meditations.html` — marked with `<!-- TODO: Add upcoming weekend retreat blocks -->` |
| Updated bio / page copy | Carol to supply revised text | Various pages |
| DNS cutover | In Vercel Project Settings → Domains, add `arcturianlight.co.uk`; update DNS at registrar with Vercel's records | Vercel dashboard |

---

## 13. Repository & Deployment Reference

| Item | Detail |
|---|---|
| GitHub repo | https://github.com/pentagonalcycles/arcturian-light |
| GitHub account | pentagonalcycles |
| Live URL (Vercel) | https://arcturian-light.vercel.app |
| Production domain (pending DNS) | arcturianlight.co.uk |
| Deploy trigger | Every push to `main` branch auto-deploys via Vercel GitHub integration |
| Build config | None required — Vercel auto-detects static HTML |
