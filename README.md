# Arcturian Light London — Website

Static website for **Carol Nayach**, spiritual practitioner and channel for the Arcturian Emissaries of Light, based in London.

- **Live site:** https://arcturian-light.vercel.app
- **Production domain (pending DNS):** arcturianlight.co.uk
- **GitHub repo:** https://github.com/pentagonalcycles/arcturian-light
- **GitHub account:** pentagonalcycles
- **Deployer:** Vercel — auto-deploys on every push to `main`

---

## Tech stack

Plain HTML + CSS. No framework, no build tools, no dependencies.

- `css/style.css` — single shared stylesheet (CSS custom properties, all components, responsive)
- `js/main.js` — mobile nav toggle, nav-close-on-link-click, copyright year
- `images/` — static images
- 8 HTML pages (see structure below)

---

## File structure

```
nayach/
  css/
    style.css
  images/
    CarolNayach.png
  js/
    main.js
  index.html           ← Home
  about.html           ← About Carol & the Arcturians
  meditations.html     ← Schedule, Zoom details, PayPal
  healing.html         ← Personal healing sessions
  videos.html          ← YouTube embeds (pending video IDs)
  contact.html         ← Formspree form, social links, newsletter
  privacy-policy.html  ← Legal (content pending)
  terms.html           ← Legal (content pending)
  docs/
    superpowers/
      specs/2026-04-02-arcturian-light-redesign.md   ← Full design spec
      plans/2026-04-02-arcturian-light-rebuild.md    ← Implementation plan + post-launch log
```

---

## How to make common updates

### Update the schedule (new dates, new sessions)
Edit `meditations.html`. The weekly Monday and Wednesday blocks are always present. For weekend retreats, uncomment the example `schedule-block` template in the Weekend Retreats section and fill in the dates.

### Add YouTube videos to the Videos page
Edit `videos.html`. Find the commented-out `<div class="video-grid">` block. Uncomment it and replace `VIDEO_ID_1` through `VIDEO_ID_6` with real YouTube video IDs. To find a video ID: open the video on YouTube and copy the part after `?v=` in the URL (e.g. `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`). Remove the "coming soon" placeholder paragraph above the grid.

### Add the Mailchimp newsletter signup
Get the embed HTML snippet from Carol's Mailchimp account. In `index.html` and `contact.html`, find the `<!-- TODO: Replace with Mailchimp embed snippet -->` comment and replace the placeholder `<div>` with the snippet. The `#mc_embed_signup` CSS overrides in `style.css` will automatically theme it to match the dark design.

### Add the Formspree contact form ID
Create a free account at [formspree.io](https://formspree.io), create a new form pointing to `nayachcarol@gmail.com`, and copy the form ID (e.g. `xpzgkwrb`). In `contact.html`, replace `FORMSPREE_ID` in the form action URL.

### Add/update Carol's photo
Replace or add image files in `images/`. The About page references `images/CarolNayach.png`.

### Update Privacy Policy or Terms of Service
Copy the text from the existing WordPress pages (`arcturianlight.co.uk/privacy-policy/` and `/terms-of-service/`), paste into the content section of `privacy-policy.html` and `terms.html` respectively, and format using standard `<h2>`, `<p>`, `<ul>` tags.

### Add testimonials
Edit `healing.html`. Find the `<blockquote class="testimonial">` placeholder and replace the text with Carol's testimonial. Add further `<blockquote>` elements for additional quotes.

---

## Deploying changes

1. Edit files locally
2. `git add . && git commit -m "description of change"`
3. `git push origin main`

Vercel picks up the push automatically and deploys within ~30 seconds.

---

## Pointing arcturianlight.co.uk to Vercel (DNS cutover)

When all open items below are resolved:

1. In the Vercel dashboard → Project Settings → Domains → add `arcturianlight.co.uk`
2. Vercel will provide DNS records (an A record and/or CNAME)
3. Update those records at the domain registrar
4. Keep the old WordPress site live until DNS has fully propagated (up to 48 hours)
5. Vercel auto-provisions HTTPS once the domain resolves

---

## Open items (before go-live on arcturianlight.co.uk)

- [ ] Formspree form ID — replace `FORMSPREE_ID` in `contact.html`
- [ ] Mailchimp embed snippet — replace placeholder in `index.html` and `contact.html`
- [ ] YouTube video IDs — uncomment video grid in `videos.html` and add IDs
- [ ] Privacy Policy text — paste into `privacy-policy.html`
- [ ] Terms of Service text — paste into `terms.html`
- [ ] Testimonials — replace placeholder in `healing.html`
- [ ] Weekend retreat dates — add schedule blocks in `meditations.html`
- [ ] DNS cutover — point `arcturianlight.co.uk` to Vercel

---

## Design system (quick reference)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0a0a1a` | Page background |
| `--color-surface` | `#1a1040` | Cards, header, footer |
| `--color-accent` | `#2a1f6e` | Borders, accent sections |
| `--color-gold` | `#c8a96e` | Headings, CTAs, decorative |
| `--color-violet` | `#9b8fc4` | Labels, nav links, secondary text |
| `--color-cream` | `#e8d5a3` | Subheadings, emphasis text |
| `--color-body-text` | `#c8c0e0` | Body text |

Display font: **Cinzel** (Google Fonts) — headings  
Body font: **system-ui** — all other text

---

## Full documentation

- Design spec: `docs/superpowers/specs/2026-04-02-arcturian-light-redesign.md`
- Implementation plan + post-launch change log: `docs/superpowers/plans/2026-04-02-arcturian-light-rebuild.md`

---

## Client contacts

- **Carol Nayach** — nayachcarol@gmail.com
- **YouTube:** https://www.youtube.com/@ArcturianLight
- **Facebook:** https://www.facebook.com/arcturianlightlondon
- **Instagram:** https://www.instagram.com/arcturian_light_london
