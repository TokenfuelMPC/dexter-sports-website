# Developer Guide

Technical notes for whoever maintains or extends the site.

## Principles
- **Zero build.** Plain HTML/CSS/ES5-compatible JS. Open a file, edit, refresh. Don't introduce a bundler, framework, or package manager unless the business explicitly wants the maintenance cost.
- **Content in data, layout in HTML.** Repeating content lives in `assets/js/content.js`; settings in `assets/js/config.js`. Non-developers edit those two files.
- **Progressive, accessible, fast.** Semantic HTML, keyboard-navigable, `prefers-reduced-motion` respected, no third-party JS beyond Google Fonts (and Plausible, if enabled).

## How a page is assembled
Each page is a complete HTML document with:
```html
<body data-page="about">               <!-- highlights the active nav item -->
  <div id="site-header"></div>         <!-- replaced by main.js -->
  <main>…page content…</main>
  <div id="site-footer"></div>         <!-- replaced by main.js -->
  <script src="assets/js/config.js"></script>
  <script src="assets/js/content.js"></script>
  <script src="assets/js/main.js"></script>
</body>
```
Pages in a subfolder (e.g. `insights/`) set `data-root="../"` on `<body>` and use `../` in their asset paths. `404.html` uses absolute paths (`data-root="/"`) because hosts serve it from any URL depth.

**Why JS-injected header/footer?** With no build step, it keeps the menu and footer in one place instead of copied into every page. Content, headings, and links in `<main>` are static HTML, which search engines index fine.

## `main.js` features (opt-in via attributes)

| Attribute | Effect |
|---|---|
| `data-render="services"` | Fills the element from `DSC_CONTENT.services`. Renderers: `stats, services, network, timeline, credentials, logos, profiles, testimonials, insights, faqs` |
| `data-source="investors"` | Use a different content list with that renderer (e.g. `data-render="profiles" data-source="partners"`) |
| `data-limit="3"` | Show only the first N items |
| `data-brief` | On `services`: short cards linking to services.html |
| `data-hide-empty` | On a section: hide it if its list renders nothing (e.g. all drafts, live mode) |
| `data-bind="email"` | Fills text (and href for links) from `DSC_CONFIG` |
| `data-toolkit` | Sets href to `config.toolkitPdf` |
| `data-booking` | Shown only if `config.bookingUrl` is set |
| `data-quiz` | Mounts the NIL Readiness Check (questions from `content.quiz`) |
| `data-calc` | Wires the offer calculator form (inputs named `cash, expenses, fee, goods`; outputs `[data-out=…]`) |
| `data-intake` | Multi-step intake form (see below) |
| `data-newsletter` | Newsletter form (footer) |
| `.reveal` | Fade-up on scroll |
| `.accordion` | `<details>` list where opening one closes the others |
| `.ph` | Placeholder copy: highlighted in review mode, console warning in live mode |

To add a new list type: add data to `content.js`, add a function to `RENDER` in `main.js` returning an HTML string (always pass user content through `esc()`), then drop `<div data-render="yourType">` into a page.

## Intake form
- Steps are `<fieldset class="intake-step">`; progress bars are `.progress span` (one per step).
- Conditional fields: wrap them in `data-show-for="Athlete Coach"`. The value is a space-separated list of `role` values; write spaces *inside* a role as `%20` (e.g. `Brand%20or%20business`). Inputs with `data-req` become required only while visible.
- URL prefill: `contact.html?role=Coach` or `?topic=nil` (maps to `<option data-topic="nil">` and a default role). `?readiness=63` is passed through from the quiz.
- Submit sends JSON to `config.formEndpoint`; without one, it falls back to `mailto:`.

## Styling
See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md). All tokens are CSS custom properties at the top of `styles.css`.

## Testing checklist for changes
- Pages at 375 px, 768 px, 1024 px, and 1440 px wide: no horizontal scroll, and the menu collapses below 1080 px
- Keyboard: Tab through the header, forms, quiz, and FAQ; focus rings visible; Esc closes the mobile menu
- Console: no errors (a 404 for `kim-dexter.jpg` is expected until the headshot is added)
- Contact form: each role shows the right fields; can't advance with required fields empty
- `showDrafts` both `true` and `false`

## Possible next steps
- **Client portal / document exchange:** use a dedicated secure service rather than this static site
- **CMS:** if non-technical editors need a UI, [Decap CMS](https://decapcms.org) or [CloudCannon](https://cloudcannon.com) can edit `content.js`/HTML in Git without rebuilding the site
- **Athlete roster pages:** a `roster` list in `content.js` plus a `profiles`-style renderer. Publish only with written consent, and for minors, from a parent/guardian.
- **Events / speaking calendar:** the same pattern
