# Arcturian Light London — Website Rebuild Implementation Plan

> **Status: COMPLETED — 2026-04-02**  
> All 12 tasks executed and verified. Site live at https://arcturian-light.vercel.app  
> GitHub: https://github.com/pentagonalcycles/arcturian-light

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete 8-page static HTML + CSS website for Carol Nayach's Arcturian Light London, replacing the outdated WordPress site with a modern Cosmic & Mystical aesthetic.

**Architecture:** Plain HTML files sharing a single CSS stylesheet (`css/style.css`) and a minimal JS file (`js/main.js`) for the mobile nav toggle, nav-close-on-link-click, and copyright year. No build tools, no dependencies, no framework. Each page is a self-contained HTML file with the shared nav and footer duplicated across files.

**Tech Stack:** HTML5, CSS3 (custom properties, CSS Grid, Flexbox, mobile-first media queries), vanilla JavaScript, Google Fonts (Cinzel), Formspree (contact form — ID pending), Mailchimp embed (newsletter — snippet pending), PayPal.me links, YouTube `<iframe>` embeds (video IDs pending).

---

## File Map

| File | Role |
|---|---|
| `css/style.css` | Single shared stylesheet — CSS custom properties (colour/typography tokens), reset, layout, components, all pages, responsive breakpoints |
| `js/main.js` | Mobile hamburger nav toggle, nav-close-on-link-click, copyright year |
| `index.html` | Home page |
| `about.html` | About Carol & the Arcturians |
| `meditations.html` | Meditations & Schedule |
| `healing.html` | Personal Healing Sessions |
| `videos.html` | YouTube Videos grid |
| `contact.html` | Contact & social links |
| `privacy-policy.html` | Privacy Policy |
| `terms.html` | Terms of Service |
| `images/` | Placeholder directory — images supplied by Carol later |

---

## Task 1: Project scaffold & CSS design tokens

**Files:**
- Create: `css/style.css`
- Create: `js/main.js`
- Create: `images/.gitkeep`

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p css js images
touch images/.gitkeep
```

- [ ] **Step 2: Create `js/main.js` with the nav toggle**

```js
// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('nav-open');
    });
  }
});
```

- [ ] **Step 3: Create `css/style.css` with CSS custom properties (design tokens), reset, and base typography**

```css
/* ============================================================
   ARCTURIAN LIGHT LONDON — style.css
   ============================================================ */

/* --- Design tokens ----------------------------------------- */
:root {
  /* Colours */
  --color-bg:          #0a0a1a;  /* Deep Space */
  --color-surface:     #1a1040;  /* Indigo Night */
  --color-accent:      #2a1f6e;  /* Arcturian Violet */
  --color-gold:        #c8a96e;  /* Starlight Gold */
  --color-violet:      #9b8fc4;  /* Soft Violet */
  --color-cream:       #e8d5a3;  /* Warm Cream */
  --color-ghost:       #f0eefc;  /* Ghost White */
  --color-body-text:   #c8c0e0;  /* General body text */

  /* Typography */
  --font-display: 'Cinzel', Georgia, serif;
  --font-serif:   Georgia, 'Times New Roman', serif;
  --font-sans:    'Inter', system-ui, -apple-system, sans-serif;

  /* Spacing */
  --space-xs:  0.5rem;
  --space-sm:  1rem;
  --space-md:  2rem;
  --space-lg:  4rem;
  --space-xl:  6rem;

  /* Layout */
  --max-width: 1100px;
  --nav-height: 72px;
}

/* --- Reset -------------------------------------------------- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background-color: var(--color-bg);
  color: var(--color-body-text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  min-height: 100vh;
}
img { max-width: 100%; height: auto; display: block; }
a { color: var(--color-gold); text-decoration: none; }
a:hover { text-decoration: underline; }
ul { list-style: none; }

/* --- Base typography --------------------------------------- */
h1, h2, h3 {
  font-family: var(--font-display);
  color: var(--color-gold);
  letter-spacing: 0.08em;
  line-height: 1.2;
}
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); }
h3 { font-size: clamp(1.1rem, 2vw, 1.4rem); }
h4 {
  font-family: var(--font-sans);
  color: var(--color-violet);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: var(--space-xs);
}
p { margin-bottom: var(--space-sm); color: var(--color-body-text); }
p:last-child { margin-bottom: 0; }

/* --- Layout helpers ---------------------------------------- */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
}
.section {
  padding: var(--space-lg) 0;
}
.section--accent {
  background-color: var(--color-surface);
}
.section--violet {
  background-color: var(--color-accent);
}
.text-center { text-align: center; }
.divider {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin: var(--space-md) auto;
  opacity: 0.7;
}
.star-sep {
  display: block;
  text-align: center;
  color: var(--color-gold);
  font-size: 1.25rem;
  letter-spacing: 0.5em;
  margin: var(--space-md) 0;
}

/* --- Buttons ----------------------------------------------- */
.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
}
.btn:hover { opacity: 0.85; text-decoration: none; }
.btn--primary {
  background-color: var(--color-gold);
  color: var(--color-bg);
  border: 2px solid var(--color-gold);
}
.btn--outline {
  background-color: transparent;
  color: var(--color-gold);
  border: 2px solid var(--color-gold);
}
.btn-group {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-md);
}
```

- [ ] **Step 4: Verify files exist**

```bash
ls css/ js/ images/
```
Expected output: `css/style.css`, `js/main.js`, `images/.gitkeep`

- [ ] **Step 5: Commit**

```bash
git init
git add css/style.css js/main.js images/.gitkeep
git commit -m "feat: project scaffold, CSS design tokens and base styles"
```

---

## Task 2: Shared nav and footer CSS + components

**Files:**
- Modify: `css/style.css` (append nav and footer styles)

- [ ] **Step 1: Append nav styles to `css/style.css`**

Add to the end of `css/style.css`:

```css
/* --- Navigation -------------------------------------------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-accent);
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.nav-brand {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-gold);
  letter-spacing: 0.12em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nav-brand:hover { text-decoration: none; opacity: 0.85; }
.nav-links {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}
.nav-links a {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-violet);
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a[aria-current="page"] {
  color: var(--color-gold);
  text-decoration: none;
}
/* Hamburger toggle — hidden on desktop */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-direction: column;
  gap: 5px;
}
.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-gold);
  transition: transform 0.2s, opacity 0.2s;
}

/* --- Footer ------------------------------------------------ */
.site-footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-accent);
  padding: var(--space-lg) 0 var(--space-md);
  text-align: center;
}
.footer-social {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-md);
}
.footer-social a {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-violet);
}
.footer-social a:hover { color: var(--color-gold); }
.footer-legal {
  font-size: 0.75rem;
  color: var(--color-violet);
  margin-bottom: var(--space-sm);
}
.footer-legal a { color: var(--color-violet); }
.footer-legal a:hover { color: var(--color-gold); }
.footer-attribution {
  font-size: 0.7rem;
  color: var(--color-accent);
  max-width: 640px;
  margin: var(--space-sm) auto 0;
  line-height: 1.5;
  color: var(--color-violet);
  opacity: 0.7;
}
.footer-copyright {
  font-size: 0.75rem;
  color: var(--color-violet);
  opacity: 0.6;
  margin-top: var(--space-sm);
}

/* --- Responsive nav ---------------------------------------- */
@media (max-width: 767px) {
  .nav-toggle {
    display: flex;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background-color: var(--color-surface);
    flex-direction: column;
    padding: var(--space-md);
    gap: var(--space-md);
    border-bottom: 1px solid var(--color-accent);
  }
  .nav-links.nav-open {
    display: flex;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add css/style.css
git commit -m "feat: add nav and footer CSS components"
```

---

## Task 3: Page hero, cards, and section CSS components

**Files:**
- Modify: `css/style.css` (append)

- [ ] **Step 1: Append page-level component styles to `css/style.css`**

```css
/* --- Page hero (inner pages) ------------------------------- */
.page-hero {
  padding: var(--space-xl) 0 var(--space-lg);
  text-align: center;
  background: linear-gradient(160deg, var(--color-bg) 0%, var(--color-surface) 100%);
  border-bottom: 1px solid var(--color-accent);
}
.page-hero .label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-violet);
  margin-bottom: var(--space-sm);
}
.page-hero h1 { margin-bottom: var(--space-sm); }
.page-hero p {
  max-width: 560px;
  margin: 0 auto;
  color: var(--color-cream);
  font-family: var(--font-serif);
  font-style: italic;
}

/* --- Cards ------------------------------------------------- */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}
@media (min-width: 768px) {
  .cards-grid--3 { grid-template-columns: repeat(3, 1fr); }
  .cards-grid--2 { grid-template-columns: repeat(2, 1fr); }
}
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-accent);
  border-radius: 6px;
  padding: var(--space-md);
  text-align: center;
  transition: border-color 0.2s;
}
.card:hover { border-color: var(--color-gold); }
.card-icon {
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-sm);
}
.card h3 { margin-bottom: var(--space-xs); }
.card p { font-size: 0.9rem; }
.card a.card-link {
  display: inline-block;
  margin-top: var(--space-sm);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
}

/* --- Schedule table ---------------------------------------- */
.schedule-block {
  background-color: var(--color-surface);
  border: 1px solid var(--color-accent);
  border-radius: 6px;
  padding: var(--space-md);
  margin-bottom: var(--space-md);
}
.schedule-block h3 { margin-bottom: var(--space-xs); }
.schedule-block .schedule-meta {
  font-size: 0.85rem;
  color: var(--color-violet);
  margin-bottom: var(--space-sm);
  letter-spacing: 0.05em;
}
.schedule-block p { font-size: 0.9rem; }
.schedule-block .btn-group { justify-content: flex-start; }

/* --- Video grid -------------------------------------------- */
.video-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}
@media (min-width: 768px) {
  .video-grid { grid-template-columns: repeat(2, 1fr); }
}
.video-embed {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid var(--color-accent);
}
.video-embed iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
}

/* --- Contact form ------------------------------------------ */
.contact-form {
  max-width: 560px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: var(--space-md);
}
.form-group label {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-violet);
  margin-bottom: var(--space-xs);
}
.form-group input,
.form-group textarea {
  width: 100%;
  background-color: var(--color-surface);
  border: 1px solid var(--color-accent);
  border-radius: 3px;
  padding: 0.75rem 1rem;
  color: var(--color-cream);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-gold);
}
.form-group textarea { min-height: 140px; resize: vertical; }

/* --- Social links list ------------------------------------- */
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  margin: var(--space-md) 0;
}
.social-links a {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-violet);
  border: 1px solid var(--color-accent);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  transition: border-color 0.2s, color 0.2s;
}
.social-links a:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  text-decoration: none;
}

/* --- Testimonial quote ------------------------------------- */
.testimonial {
  border-left: 3px solid var(--color-gold);
  padding: var(--space-sm) var(--space-md);
  margin: var(--space-md) 0;
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-cream);
  font-size: 1.05rem;
}

/* --- Mailchimp embed override ------------------------------ */
/* Forces Mailchimp's injected form to match dark theme */
#mc_embed_signup {
  background: transparent !important;
  color: var(--color-body-text) !important;
  font-family: var(--font-sans) !important;
}
#mc_embed_signup input.email {
  background-color: var(--color-surface) !important;
  border: 1px solid var(--color-accent) !important;
  color: var(--color-cream) !important;
  border-radius: 3px !important;
}
#mc_embed_signup .button {
  background-color: var(--color-gold) !important;
  color: var(--color-bg) !important;
  border-radius: 3px !important;
  font-family: var(--font-sans) !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
}

/* --- Two-column content layout ----------------------------- */
.content-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  align-items: start;
}
@media (min-width: 768px) {
  .content-split { grid-template-columns: 1fr 1fr; }
}
.content-split img {
  border-radius: 6px;
  border: 1px solid var(--color-accent);
  width: 100%;
}
```

- [ ] **Step 2: Commit**

```bash
git add css/style.css
git commit -m "feat: add page hero, cards, schedule, video grid, contact form CSS components"
```

---

## Task 4: Home page (`index.html`)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arcturian Light London — Healing &amp; Ascension Meditations</title>
  <meta name="description" content="Join Carol Nayach for channelled Arcturian light transmissions, guided meditations and personal healing sessions online and in London.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAV -->
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div style="
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      background: radial-gradient(ellipse at 50% 30%, #2a1f6e 0%, #1a1040 40%, #0a0a1a 100%);
    ">
      <p style="font-size:0.75rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-violet);margin-bottom:1.5rem;">
        ✦ &nbsp; An Arcturian Group in London &nbsp; ✦
      </p>
      <h1 style="font-size:clamp(2.5rem,6vw,4.5rem);letter-spacing:0.15em;margin-bottom:1rem;">
        Arcturian Light
      </h1>
      <div class="divider"></div>
      <p style="font-family:var(--font-serif);font-style:italic;font-size:1.1rem;color:var(--color-cream);margin-bottom:2rem;max-width:520px;">
        Healing &nbsp;·&nbsp; Ascension &nbsp;·&nbsp; Light Transmissions
      </p>
      <p style="max-width:540px;color:var(--color-body-text);margin-bottom:2.5rem;font-size:0.95rem;">
        Join us for channelled Arcturian guided meditations and energy transmissions from the ninth dimension and above. Online via Zoom and in person in London.
      </p>
      <div class="btn-group">
        <a href="meditations.html" class="btn btn--primary">View Schedule</a>
        <a href="about.html" class="btn btn--outline">About Carol</a>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="section text-center">
    <div class="container" style="max-width:680px;">
      <span class="star-sep">✦ ✦ ✦</span>
      <h2>Greetings from the Arcturians</h2>
      <div class="divider"></div>
      <p style="color:var(--color-cream);">
        We come to you with open hearts. Our mission is to assist you in your ascension process and the ascension of your planet. It is a mission of love.
      </p>
      <p>
        We are a highly evolved civilisation and have assisted many planets in their ascension. Our spiritual technology is very advanced and we wish to teach you how to heal and ascend your planet and yourselves.
      </p>
    </div>
  </section>

  <!-- THREE PILLARS -->
  <section class="section section--accent">
    <div class="container">
      <div class="text-center" style="margin-bottom:var(--space-md);">
        <h4>Our Work</h4>
        <h2>Three Pillars</h2>
        <div class="divider"></div>
      </div>
      <div class="cards-grid cards-grid--3">
        <div class="card">
          <div class="card-icon">✦</div>
          <h3>Meditations</h3>
          <p>Weekly channelled guided meditations and Arcturian light transmissions, online via Zoom and in person.</p>
          <a href="meditations.html" class="card-link">View Schedule →</a>
        </div>
        <div class="card">
          <div class="card-icon">◈</div>
          <h3>Healing</h3>
          <p>Personal healing sessions to open to the light, raise your vibration and receive healing in the Arcturian Crystal Temple.</p>
          <a href="healing.html" class="card-link">Learn More →</a>
        </div>
        <div class="card">
          <div class="card-icon">☽</div>
          <h3>Ascension</h3>
          <p>Visits to the Arcturian Stargate, Sacred Triangle work, and planetary healing focused on the UK and London.</p>
          <a href="about.html" class="card-link">About Our Work →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER SIGNUP -->
  <section class="section text-center">
    <div class="container" style="max-width:560px;">
      <h4>Stay Connected</h4>
      <h2>Newsletter</h2>
      <div class="divider"></div>
      <p>Sign up to receive the Arcturian Light newsletter with event updates and transmissions.</p>
      <!-- TODO: Replace with Mailchimp embed snippet from Carol's account -->
      <div style="margin-top:var(--space-md);padding:var(--space-md);border:1px dashed var(--color-accent);border-radius:6px;color:var(--color-violet);font-size:0.85rem;">
        [Mailchimp signup embed — insert snippet here]
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-attribution">
        Our work is connected to the work of David K Miller with the Arcturians.
        For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>.
      </p>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open `index.html` in a browser and visually verify**

  - Hero fills the viewport, gold heading, two CTA buttons visible
  - Nav bar is visible with all links
  - Three pillars cards render in a row (desktop) or stack (mobile)
  - Newsletter placeholder is visible
  - Footer shows social links and attribution

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add home page with hero, intro, pillars and newsletter placeholder"
```

---

## Task 5: About page (`about.html`)

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create `about.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About — Arcturian Light London</title>
  <meta name="description" content="Learn about Carol Nayach, the Arcturians, the Arcturian Stargate, Crystal Temple and the Sacred Triangle.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAV -->
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html" aria-current="page">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="container">
      <p class="label">✦ Our Story</p>
      <h1>About</h1>
      <p>Carol Nayach &amp; the Arcturian Emissaries of Light</p>
    </div>
  </section>

  <!-- CAROL'S STORY -->
  <section class="section">
    <div class="container">
      <div class="content-split">
        <div>
          <h4>Carol's Journey</h4>
          <h2>How It Began</h2>
          <div class="divider" style="margin-left:0;"></div>
          <p>I first became aware of the Arcturians through one of David K Miller's channelled books <em>The Sacred Triangle Volume 1</em>. I picked up the book, read one paragraph and decided I needed to meditate with the information. Immediately the Arcturian Helio-Ah came in through my crown, down into my heart and started working with me.</p>
          <p>So I realised I would be working with the Arcturians. I later discovered that I am an Arcturian Starseed with a soul connection with Helio-Ah. From then on I worked to become a clear channel for the Arcturian energies and as my ability developed I discovered I could channel the energies of many higher beings including Jesus/Sananda, Mary Magdalene, Archangel Metatron, and more.</p>
          <p>My spiritual journey over the last few years has been the most rewarding period of my life and I feel such love and appreciation for the Arcturians, guides and teachers who have supported me, loved me, guided me and accelerated my growth and evolution.</p>
        </div>
        <div>
          <!-- TODO: Replace src with Carol's photo when supplied -->
          <img src="images/carol.jpg" alt="Carol Nayach" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
  </section>

  <!-- THE ARCTURIANS -->
  <section class="section section--accent">
    <div class="container" style="max-width:780px;">
      <div class="text-center">
        <h4>Who They Are</h4>
        <h2>The Arcturians</h2>
        <div class="divider"></div>
      </div>
      <p>We come to you with open hearts. Our mission is to assist you in your ascension process and the ascension of your planet. It is a mission of love.</p>
      <p>We are a highly evolved civilisation and have assisted many planets in their ascension. Our spiritual technology is very advanced and we wish to teach you how to heal and ascend your planet and yourselves.</p>
      <p>Our technology includes visits to our healing chambers on our magnificent starship Athena. We invite you to come to our Arcturian Crystal Temple in the etheric realm which we have created for you, to receive our energy transmissions of love and light and meet many of the ascended masters.</p>
    </div>
  </section>

  <!-- THE STARGATE -->
  <section class="section">
    <div class="container" style="max-width:780px;">
      <div class="text-center">
        <h4>The Gateway</h4>
        <h2>The Arcturian Stargate</h2>
        <div class="divider"></div>
      </div>
      <p>The journey of the evolution of the soul which humanity is engaged in is the opening of the heart — to learn to live from the higher intelligence of the heart instead of being enslaved by the ego mind. As we work to integrate our 5D self and light of soul into our Being, our high heart begins to open and activate.</p>
      <p>We begin to experience the higher feelings of unconditional love, peace, acceptance, forgiveness, beauty and inner stillness. Ultimately we achieve the enlightened state of Christ consciousness embodiment where we are free to leave the cycle of Earth incarnations and ascend.</p>
      <p>Every being on their ascension travels to the Arcturian Stargate. The Arcturians are the guardians of the Stargate and work under the direction of Archangel Metatron. The Arcturian Stargate is a place of unimaginable beauty and an incredible energy of love.</p>
      <blockquote class="testimonial">"We all know that the keys to unlocking the codes of Ascension lie within the heart. Love is the key."</blockquote>
    </div>
  </section>

  <!-- THE SACRED TRIANGLE -->
  <section class="section section--accent">
    <div class="container" style="max-width:780px;">
      <div class="text-center">
        <h4>Planetary Healing</h4>
        <h2>The Sacred Triangle</h2>
        <div class="divider"></div>
      </div>
      <p>An important part of our work is planetary healing, focused on the UK, and creating a city of light in London. The Sacred Triangle unites the Extraterrestrials, the Ascended Masters &amp; Archangels, and the Native Ascended Masters.</p>
      <p>We meet one Sunday a month and it always seems that all the light beings in the universe come to assist, sending in their energies. Great results have been achieved. Those who participate also receive much activation and healing for themselves.</p>
    </div>
  </section>

  <!-- DAVID K MILLER ATTRIBUTION -->
  <section class="section">
    <div class="container" style="max-width:680px;text-align:center;">
      <span class="star-sep">✦ ✦ ✦</span>
      <p style="font-size:0.85rem;color:var(--color-violet);">
        Our work has been greatly influenced by the many channelled books of David K Miller from the Arcturians and his Arcturian Group of Forty Project. For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>. Our thanks to him for the enormous volume of material he has channelled and published.
      </p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-attribution">
        Our work is connected to the work of David K Miller with the Arcturians.
        For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>.
      </p>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Visually verify in browser**

  - Page hero renders with subtitle
  - Carol's story section uses two-column layout on desktop, single column on mobile
  - Image placeholder shows no broken image icon (onerror hides it)
  - Stargate quote renders with left gold border
  - Sacred Triangle and attribution sections render correctly

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "feat: add About page with Carol's story, Arcturians, Stargate and Sacred Triangle sections"
```

---

## Task 6: Meditations & Schedule page (`meditations.html`)

**Files:**
- Create: `meditations.html`

- [ ] **Step 1: Create `meditations.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meditations &amp; Schedule — Arcturian Light London</title>
  <meta name="description" content="Join Carol Nayach's weekly Arcturian light transmission meditations online via Zoom or in person in London.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAV -->
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html" aria-current="page">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="container">
      <p class="label">✦ Join Us</p>
      <h1>Meditations &amp; Schedule</h1>
      <p>Channelled Arcturian light transmissions — online and in person</p>
    </div>
  </section>

  <!-- ABOUT THE SESSIONS -->
  <section class="section">
    <div class="container" style="max-width:780px;">
      <div class="text-center">
        <h4>About the Sessions</h4>
        <h2>Arcturian Light Transmissions</h2>
        <div class="divider"></div>
      </div>
      <p>During our guided channelled meditations together we receive energies from the ninth dimension and above — from the Arcturians and combined energies of all those in the Higher Realms of Light who focus their energies upon us.</p>
      <p>Our group energy has been building exponentially. All meditations go out on the <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube channel Carol Nayach Arcturian Light</a>. Please look them up — they are very powerful and transforming.</p>
    </div>
  </section>

  <!-- ZOOM INFO -->
  <section class="section section--accent">
    <div class="container" style="max-width:560px;text-align:center;">
      <h4>How to Join</h4>
      <h2>Zoom Details</h2>
      <div class="divider"></div>
      <p style="font-size:1.1rem;color:var(--color-cream);">Meeting ID: <strong>982 959 6972</strong></p>
      <p style="color:var(--color-cream);">Password: <strong>Arcturus</strong></p>
      <div class="btn-group">
        <a href="https://us02web.zoom.us/j/9829596972" class="btn btn--primary" target="_blank" rel="noopener">Join on Zoom</a>
      </div>
    </div>
  </section>

  <!-- SCHEDULE -->
  <section class="section">
    <div class="container" style="max-width:780px;">
      <div class="text-center" style="margin-bottom:var(--space-md);">
        <h4>Regular Schedule</h4>
        <h2>Weekly Sessions</h2>
        <div class="divider"></div>
      </div>

      <div class="schedule-block">
        <h3>Every Monday</h3>
        <p class="schedule-meta">11:00am UK Time &nbsp;·&nbsp; Online only</p>
        <p>Arcturian Light Transmissions — weekly channelled guided meditation and transmissions.</p>
        <p style="color:var(--color-cream);">Exchange: <strong>£10</strong></p>
        <div class="btn-group">
          <a href="https://us02web.zoom.us/j/9829596972" class="btn btn--outline" target="_blank" rel="noopener">Join Live on Zoom</a>
          <a href="https://www.paypal.com/paypalme/CarolNayach" class="btn btn--primary" target="_blank" rel="noopener">Pay via PayPal</a>
        </div>
      </div>

      <div class="schedule-block">
        <h3>Every Wednesday</h3>
        <p class="schedule-meta">7:00pm – 8:15pm UK Time &nbsp;·&nbsp; In person &amp; Online</p>
        <p>Arcturian Light Transmissions — weekly channelled guided meditations and transmissions. In-person venue: please <a href="mailto:nayachcarol@gmail.com">email Carol</a> for the current address.</p>
        <p style="color:var(--color-cream);">Exchange: <strong>£10</strong> — cash in person or via PayPal</p>
        <div class="btn-group">
          <a href="https://us02web.zoom.us/j/9829596972" class="btn btn--outline" target="_blank" rel="noopener">Join Live on Zoom</a>
          <a href="https://www.paypal.com/paypalme/CarolNayach" class="btn btn--primary" target="_blank" rel="noopener">Pay via PayPal</a>
        </div>
      </div>

      <div class="text-center" style="margin:var(--space-lg) 0 var(--space-md);">
        <h4>Special Events</h4>
        <h2>Weekend Retreats</h2>
        <div class="divider"></div>
        <p>Weekend retreat dates are updated regularly. Please <a href="contact.html">contact Carol</a> or check back here for the latest schedule.</p>
        <!-- TODO: Add upcoming weekend retreat blocks here when Carol provides dates -->
        <!-- Example block:
        <div class="schedule-block" style="margin-top:var(--space-md);text-align:left;">
          <h3>Weekend — [Date Range]</h3>
          <p class="schedule-meta">[Theme] &nbsp;·&nbsp; Online only</p>
          <p>Saturday [Date] 2pm – 4pm UK Time — personal work</p>
          <p>Sunday [Date] 4pm – 6pm UK Time — service to Gaia</p>
          <p style="color:var(--color-cream);">Exchange: <strong>£10 per session</strong></p>
          <div class="btn-group" style="justify-content:flex-start;">
            <a href="https://us02web.zoom.us/j/9829596972" class="btn btn--outline" target="_blank">Join on Zoom</a>
            <a href="https://www.paypal.com/paypalme/CarolNayach" class="btn btn--primary" target="_blank">Pay via PayPal</a>
          </div>
        </div>
        -->
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-attribution">
        Our work is connected to the work of David K Miller with the Arcturians.
        For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>.
      </p>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Visually verify in browser**

  - Schedule blocks render with gold-bordered cards on dark surface
  - Zoom details section is clearly highlighted
  - PayPal and Zoom buttons are both visible per session
  - Weekend retreat section shows the placeholder comment (not visible to users)

- [ ] **Step 3: Commit**

```bash
git add meditations.html
git commit -m "feat: add Meditations & Schedule page with recurring sessions and Zoom/PayPal integration"
```

---

## Task 7: Healing page (`healing.html`)

**Files:**
- Create: `healing.html`

- [ ] **Step 1: Create `healing.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personal Healing Sessions — Arcturian Light London</title>
  <meta name="description" content="Book a personal Arcturian healing session with Carol Nayach. Raise your vibration, connect with higher beings and enter Arcturian healing chambers.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAV -->
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html" aria-current="page">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="container">
      <p class="label">✦ One to One</p>
      <h1>Personal Healing Sessions</h1>
      <p>Open to the light and receive powerful Arcturian healing energies</p>
    </div>
  </section>

  <!-- WHAT IS A SESSION -->
  <section class="section">
    <div class="container" style="max-width:780px;">
      <div class="text-center">
        <h4>About Sessions</h4>
        <h2>What to Expect</h2>
        <div class="divider"></div>
      </div>
      <p>Personal sessions are available online. They are excellent for:</p>
      <ul style="list-style:none;margin:var(--space-sm) 0 var(--space-md);display:grid;gap:0.75rem;">
        <li style="display:flex;gap:0.75rem;align-items:flex-start;"><span style="color:var(--color-gold);flex-shrink:0;">✦</span> Opening to the light and connecting to many higher beings</li>
        <li style="display:flex;gap:0.75rem;align-items:flex-start;"><span style="color:var(--color-gold);flex-shrink:0;">✦</span> Raising your vibration and increasing your spiritual light quotient</li>
        <li style="display:flex;gap:0.75rem;align-items:flex-start;"><span style="color:var(--color-gold);flex-shrink:0;">✦</span> Entering Arcturian healing chambers on the starship Athena to receive powerful healing</li>
        <li style="display:flex;gap:0.75rem;align-items:flex-start;"><span style="color:var(--color-gold);flex-shrink:0;">✦</span> Creating a personal corridor to the Arcturian Crystal Temple</li>
      </ul>
      <p>The Arcturians have created for us all the spiritual technology we need for the ascension. They wish to teach us how to heal ourselves and this beautiful planet, the Blue Jewel.</p>
      <p>They wish to help us to fulfil our soul mission as Lightworkers and Starseeds. Their energy transmissions are very powerful.</p>
    </div>
  </section>

  <!-- TESTIMONIAL PLACEHOLDER -->
  <section class="section section--accent">
    <div class="container" style="max-width:680px;">
      <div class="text-center">
        <h4>Experiences</h4>
        <h2>What People Say</h2>
        <div class="divider"></div>
      </div>
      <!-- TODO: Replace with real testimonials from Carol -->
      <blockquote class="testimonial">
        "Testimonial to be added — Carol to supply." 
      </blockquote>
    </div>
  </section>

  <!-- CTA -->
  <section class="section text-center">
    <div class="container" style="max-width:560px;">
      <span class="star-sep">✦ ✦ ✦</span>
      <h2>Book a Session</h2>
      <div class="divider"></div>
      <p>If you would like to learn more and join us in our work, or to book a personal healing session, please get in touch with Carol.</p>
      <div class="btn-group">
        <a href="contact.html" class="btn btn--primary">Contact Carol</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-attribution">
        Our work is connected to the work of David K Miller with the Arcturians.
        For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>.
      </p>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Visually verify in browser** — bulleted list renders with gold ✦ markers, testimonial quote has gold left border, CTA button links to contact page.

- [ ] **Step 3: Commit**

```bash
git add healing.html
git commit -m "feat: add Healing page with session description, testimonial placeholder and contact CTA"
```

---

## Task 8: Videos page (`videos.html`)

**Files:**
- Create: `videos.html`

- [ ] **Step 1: Create `videos.html`**

Note: The YouTube video IDs below are placeholders taken from Carol's existing channel link. Replace `VIDEO_ID_1` … `VIDEO_ID_6` with actual video IDs from Carol's YouTube channel (`https://bit.ly/2J3hsRz`) when she provides them. To get a video ID, take the last part of a YouTube URL: `https://www.youtube.com/watch?v=XXXXXXXXXXX` → ID is `XXXXXXXXXXX`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Videos — Arcturian Light London</title>
  <meta name="description" content="Watch past Arcturian light transmission meditations and teachings from Carol Nayach on YouTube.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAV -->
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html" aria-current="page">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="container">
      <p class="label">✦ Recorded Sessions</p>
      <h1>Videos</h1>
      <p>Past Arcturian light transmissions and teachings</p>
    </div>
  </section>

  <!-- INTRO + CHANNEL LINK -->
  <section class="section text-center">
    <div class="container" style="max-width:640px;">
      <p>All meditations and teachings are available on Carol's YouTube channel. They are very powerful and transforming — many people experience profound results listening at home.</p>
      <div class="btn-group">
        <a href="https://bit.ly/2J3hsRz" class="btn btn--primary" target="_blank" rel="noopener">Visit YouTube Channel</a>
      </div>
    </div>
  </section>

  <!-- VIDEO GRID -->
  <section class="section section--accent">
    <div class="container">
      <div class="video-grid">

        <!-- TODO: Replace VIDEO_ID_1 through VIDEO_ID_6 with real YouTube video IDs from Carol's channel -->
        <!-- To find a video ID: open the video on YouTube, copy the part after ?v= in the URL -->

        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Arcturian Light Transmission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Arcturian Light Transmission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_3"
            title="Arcturian Light Transmission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_4"
            title="Arcturian Light Transmission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_5"
            title="Arcturian Light Transmission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_6"
            title="Arcturian Light Transmission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-attribution">
        Our work is connected to the work of David K Miller with the Arcturians.
        For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>.
      </p>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Visually verify in browser** — video grid renders as 2-column on desktop, 1-column on mobile. Placeholder iframes show YouTube's default "video unavailable" state, which is acceptable until real IDs are added.

- [ ] **Step 3: Commit**

```bash
git add videos.html
git commit -m "feat: add Videos page with YouTube embed grid (placeholder IDs — to be updated)"
```

---

## Task 9: Contact page (`contact.html`)

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Create `contact.html`**

Note: The Formspree form action URL contains a placeholder ID `FORMSPREE_ID`. To get a real ID: create a free account at formspree.io, create a new form pointing to `nayachcarol@gmail.com`, and replace `FORMSPREE_ID` with the ID provided (e.g. `xpzgkwrb`).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact — Arcturian Light London</title>
  <meta name="description" content="Get in touch with Carol Nayach to join a meditation session or book a personal healing session.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAV -->
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html" aria-current="page">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="container">
      <p class="label">✦ Get in Touch</p>
      <h1>Contact</h1>
      <p>We would love to hear from you</p>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section class="section">
    <div class="container">
      <div class="text-center" style="margin-bottom:var(--space-md);">
        <h4>Send a Message</h4>
        <h2>Write to Carol</h2>
        <div class="divider"></div>
      </div>
      <!-- TODO: Replace FORMSPREE_ID with the real Formspree form ID -->
      <form class="contact-form" action="https://formspree.io/f/FORMSPREE_ID" method="POST">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="Your full name">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="your@email.com">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" required placeholder="Your message to Carol..."></textarea>
        </div>
        <div class="btn-group" style="justify-content:flex-start;">
          <button type="submit" class="btn btn--primary">Send Message</button>
        </div>
      </form>
    </div>
  </section>

  <!-- SOCIAL LINKS -->
  <section class="section section--accent">
    <div class="container" style="max-width:680px;text-align:center;">
      <h4>Find Us Online</h4>
      <h2>Social &amp; Contact</h2>
      <div class="divider"></div>
      <div class="social-links">
        <a href="mailto:nayachcarol@gmail.com">Email Carol</a>
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube Channel</a>
      </div>
      <p style="margin-top:var(--space-md);color:var(--color-cream);">
        Zoom Meeting ID: <strong>982 959 6972</strong> &nbsp;·&nbsp; Password: <strong>Arcturus</strong>
      </p>
    </div>
  </section>

  <!-- NEWSLETTER SIGNUP -->
  <section class="section text-center">
    <div class="container" style="max-width:560px;">
      <h4>Stay Connected</h4>
      <h2>Newsletter</h2>
      <div class="divider"></div>
      <p>Sign up to receive the Arcturian Light newsletter.</p>
      <!-- TODO: Replace with Mailchimp embed snippet from Carol's account -->
      <div style="margin-top:var(--space-md);padding:var(--space-md);border:1px dashed var(--color-accent);border-radius:6px;color:var(--color-violet);font-size:0.85rem;">
        [Mailchimp signup embed — insert snippet here]
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-attribution">
        Our work is connected to the work of David K Miller with the Arcturians.
        For more information refer to <a href="http://groupofforty.com/" target="_blank" rel="noopener">David Miller Group of Forty</a>.
      </p>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Visually verify in browser** — form renders with dark-themed inputs, social links render as bordered tags, newsletter placeholder visible.

- [ ] **Step 3: Commit**

```bash
git add contact.html
git commit -m "feat: add Contact page with Formspree form, social links and newsletter placeholder"
```

---

## Task 10: Privacy Policy and Terms pages

**Files:**
- Create: `privacy-policy.html`
- Create: `terms.html`

- [ ] **Step 1: Create `privacy-policy.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy — Arcturian Light London</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>Privacy Policy</h1>
    </div>
  </section>

  <section class="section">
    <div class="container" style="max-width:780px;">
      <!-- TODO: Paste updated Privacy Policy text here — carried over from arcturianlight.co.uk/privacy-policy/ -->
      <p style="color:var(--color-violet);">[Privacy Policy content to be inserted — carry over from existing WordPress page and update as needed.]</p>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `terms.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terms of Service — Arcturian Light London</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html" class="nav-brand">✦ Arcturian Light</a>
        <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="meditations.html">Meditations &amp; Schedule</a></li>
          <li><a href="healing.html">Healing</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>Terms of Service</h1>
    </div>
  </section>

  <section class="section">
    <div class="container" style="max-width:780px;">
      <!-- TODO: Paste updated Terms of Service text here — carried over from arcturianlight.co.uk/terms-of-service/ -->
      <p style="color:var(--color-violet);">[Terms of Service content to be inserted — carry over from existing WordPress page and update as needed.]</p>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-social">
        <a href="http://fb.com/arcturianlightlondon" target="_blank" rel="noopener">Facebook</a>
        <a href="http://instagram.com/arcturian_light_london" target="_blank" rel="noopener">Instagram</a>
        <a href="https://bit.ly/2J3hsRz" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:nayachcarol@gmail.com">Email</a>
      </div>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="terms.html">Terms of Service</a>
      </div>
      <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> Carol Nayach</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Commit**

```bash
git add privacy-policy.html terms.html
git commit -m "feat: add Privacy Policy and Terms of Service pages (content placeholders)"
```

---

## Task 11: Final review, mobile check and polish

**Files:**
- Modify: `css/style.css` (any fixes found during review)

- [ ] **Step 1: Open each page in a browser and check the following**

  For each of the 8 pages (`index.html`, `about.html`, `meditations.html`, `healing.html`, `videos.html`, `contact.html`, `privacy-policy.html`, `terms.html`):

  - Page loads without console errors
  - Nav brand links back to `index.html`
  - Active nav link has `aria-current="page"` set correctly
  - Footer social links all present
  - Footer legal links point to correct pages
  - Footer copyright year renders (not blank)

- [ ] **Step 2: Resize browser to 375px wide and check mobile layout**

  - Hamburger button visible, desktop nav hidden
  - Clicking hamburger opens the nav dropdown
  - Clicking again closes it
  - No horizontal overflow / scroll
  - Buttons stack vertically if they don't fit
  - Card grids are single column
  - Video grid is single column

- [ ] **Step 3: Check all internal links work**

  Open each page and click every internal link (nav, CTAs, footer links). Verify no 404s.

- [ ] **Step 4: Add `.gitignore`**

```bash
cat > .gitignore << 'EOF'
.superpowers/
*.DS_Store
Thumbs.db
EOF
```

- [ ] **Step 5: Final commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore; all pages complete and verified"
```

---

## Task 12: Netlify deployment

**Files:** None (deployment config only)

- [ ] **Step 1: Create a free Netlify account at netlify.com** (if not already done)

- [ ] **Step 2: Deploy via drag-and-drop**

  In the Netlify dashboard, go to **Sites → Add new site → Deploy manually**. Drag the entire `nayach/` project folder onto the upload area. Netlify will give you a random URL like `https://random-name-123.netlify.app`.

- [ ] **Step 3: Verify the live deploy**

  Open the Netlify URL. Check all pages load, nav works, and no broken styles.

- [x] **Step 4: Add custom domain**

  **Actual deployment used Vercel, not Netlify.** Site deployed to https://arcturian-light.vercel.app via GitHub integration (repo: `pentagonalcycles/arcturian-light`). To point `arcturianlight.co.uk` to Vercel: go to Vercel Project Settings → Domains, add the domain, and update DNS at the registrar with Vercel's provided records. DNS propagation up to 48 hours — keep old WordPress site live until complete.

- [x] **Step 5: Enable HTTPS**

  Vercel auto-provisions HTTPS once the custom domain resolves. No manual action required.

---

## Execution Notes (post-build)

The plan was executed using the subagent-driven development skill. The following deviations and improvements were made during execution:

| Area | Change from original plan |
|---|---|
| Hosting | Switched from Netlify to **Vercel** (client preference). No code changes required — plain static HTML deploys identically to both. |
| GitHub | Repo created at `pentagonalcycles/arcturian-light` and pushed. Auto-deploy from `main` configured. |
| Accessibility | Added `<main>` landmark, skip-to-content link, `aria-controls` on nav toggle, `aria-hidden` on decorative icons, `focus-visible` styles on cards/social links/form inputs, `prefers-reduced-motion` guard |
| Heading hierarchy | Eyebrow labels changed from `<h4>` to `<p class="label">` throughout to preserve correct DOM heading order |
| Hero CSS | Extracted hero inline styles to `.hero-inner` CSS class in `style.css` |
| Nav | Added `position: relative` to `.nav` to correctly contain mobile dropdown; added nav-close-on-link-click to `js/main.js` |
| Copyright year | Replaced `document.write()` with DOM-safe `getElementById` approach inside `DOMContentLoaded` |
| External links | All external links updated to `https://`; all use `rel="noopener noreferrer"` |
| Videos page | Broken iframe placeholders replaced with graceful "coming soon" state; iframe template preserved as commented-out HTML |
| Legal pages | Added `footer-attribution` paragraph to `privacy-policy.html` and `terms.html` (was missing) |
| `.gitignore` | Added `node_modules/` to the standard entries |

---

## Open Items (pending before go-live on arcturianlight.co.uk)

See the spec document (`docs/superpowers/specs/2026-04-02-arcturian-light-redesign.md` Section 12) for the full tracked list. Summary:

| Item | File | Status |
|---|---|---|
| Formspree form ID | `contact.html` | Pending — create at formspree.io |
| Mailchimp embed snippet | `index.html`, `contact.html` | Pending — get from Carol's account |
| YouTube video IDs | `videos.html` | Pending — Carol to supply |
| ~~Carol's photo~~ | `images/CarolNayach.png` | **Done** — added to About page (`3ac576d`) |
| Privacy Policy text | `privacy-policy.html` | Pending — copy from existing WP page |
| Terms of Service text | `terms.html` | Pending — copy from existing WP page |
| Testimonials | `healing.html` | Pending — Carol to supply |
| Weekend retreat dates | `meditations.html` | Pending — Carol to supply |
| DNS cutover | Vercel dashboard | Pending — after content items resolved |

---

## Post-Launch Changes

| Date | Change | Commit |
|---|---|---|
| 2026-04-02 | Removed public Zoom password from `meditations.html`. Zoom Meeting ID remains visible but password is withheld — visitors are prompted to contact Carol via the contact form to receive it. Direct "Join on Zoom" buttons replaced with "Get Zoom Password" → `contact.html` on all session blocks. | `e299f17` |
| 2026-04-02 | Replaced shortened `bit.ly/2J3hsRz` YouTube link with direct channel URL `https://www.youtube.com/@ArcturianLight` across all 8 HTML files (12 occurrences). | `5c8c4b8` |
| 2026-04-02 | Added Carol's photo (`images/CarolNayach.png`) to the About page two-column section. | `3ac576d` |
