# Content Guide

How to update the site without breaking it. No coding experience needed, just a text editor. We recommend [VS Code](https://code.visualstudio.com/) (free); it highlights mistakes as you type.

**Golden rules**
1. Change the words *between* the quote marks or tags, not the punctuation around them.
2. Preview locally before publishing (see the [README](../README.md#preview-it-locally-2-minutes)).
3. If something breaks, undo your last change. With Git, `git checkout -- <file>` restores the last saved version.

---

## Contents
- [Site settings (phone, email, form, booking link)](#site-settings)
- [Lists: partners, investors, stats, testimonials, FAQ…](#lists)
- [Page text](#page-text)
- [Add Kim's photo or a logo](#images)
- [Publish an article](#publish-an-article)
- [Replace the NIL toolkit PDF](#replace-the-toolkit)
- [Change the menu](#change-the-menu)

---

## Site settings

File: `assets/js/config.js`

| Setting | What it does |
|---|---|
| `email`, `phone`, `location` | Shown in the footer and on the Contact page, everywhere at once |
| `social` | Paste a full profile URL to show its icon in the footer. Leave `""` to hide it. |
| `formEndpoint` | Where Contact-form submissions go. Blank = opens the visitor's email app instead. |
| `newsletterEndpoint` | Where footer sign-ups go. Blank = uses `formEndpoint`. |
| `bookingUrl` | A Calendly / Cal.com link. Adds "Book a call" on the Contact page and after a form is sent. |
| `plausibleDomain` | Turns on privacy-friendly analytics |
| `toolkitPdf` | Path to the toolkit PDF |
| `showDrafts` | `true` = review mode (placeholders highlighted). `false` = live mode. |

Example: changing the phone number:
```js
  phone: "803-203-5435",
```
becomes
```js
  phone: "704-555-0100",
```

---

## Lists

File: `assets/js/content.js`

Every repeating item on the site (stats, services, network, career timeline, credentials, investors, partners, testimonials, articles, FAQ, and the Readiness Check questions) comes from this file. Edit an entry once and it updates on every page that shows it.

### Add a strategic partner
Find `partners: [`, copy one complete entry (from `{` to `},`), paste it on a new line, and edit:

```js
    { name: "Carolina Sports Law", category: "Legal", logo: "assets/img/partners/carolina-sports-law.svg", url: "https://example.com", blurb: "Independent contract review for athletes and families." },
```

- `category` shows as a small tag: Legal, Financial, Brand, Media, Education, or anything you like
- `logo` is optional. Without one, the card shows the partner's initials.
- `url` is optional. Without one, there's no "Visit" link.
- **Get the partner's permission before listing them.**

### Add an investor
Same as above, in `investors: [`. Use `type` instead of `category` (e.g., "Lead investor", "Advisor & investor"). Investors appear on the Partners page *and* in the logo strip on the home page.

### Remove a placeholder
Entries with `draft: true` are placeholders. Either:
- **Replace** the bracketed text with real content and delete `, draft: true`, or
- **Delete** the whole entry, from `{` through `},`

If a section ends up with no real entries, it hides itself automatically in live mode.

### Testimonials
Only publish quotes you have **written permission** to use. For minors, get it from a parent or guardian.

### FAQ
Each entry is `{ q: "Question?", a: "Answer." }`. To use a double quote inside the text, write `\"`.

### Readiness Check questions
In `quiz: [`, each question has `q` (the question), `topic` (short label), and `tip` (advice shown if the visitor answers "Partly" or "Not yet"). Scores are calculated automatically.

### Common mistakes
- A **missing comma** between entries is the #1 cause of a blank section. Each `}` needs a `,` after it, except the last one in a list (a trailing comma there is fine too).
- Smart quotes (`“ ”`) pasted from Word break the file. Use straight quotes (`" "`). VS Code shows red squiggles if something is off.

---

## Page text

Headlines and paragraphs live directly in the page files (`index.html`, `about.html`, etc.). Open the file, find the sentence (Ctrl/Cmd+F), and edit the words between the tags:

```html
<h2>Representation built around the long game.</h2>
```

Yellow-highlighted text on the site is a placeholder. In the file it looks like `<span class="ph">[…]</span>`. Replace the whole thing, including the `<span class="ph">` and `</span>`, with your real sentence.

---

## Images

| Image | Where | Size |
|---|---|---|
| Kim's headshot | `assets/img/kim-dexter.jpg` (exact name) | Vertical, ≥1200×1500, under 400 KB |
| Partner/investor logos | `assets/img/partners/` | SVG preferred; PNG with a transparent background otherwise, ~400 px wide |
| Social share image | `assets/img/og-image.png` | 1200×630 |

Compress photos at [squoosh.app](https://squoosh.app) before adding them.

---

## Publish an article

1. In `insights/`, copy `_article-template.html` and rename it, e.g. `coach-contracts.html` (lowercase, hyphens).
2. Replace everything in `[brackets]`, and delete the `<meta name="robots" content="noindex">` line.
3. In `assets/js/content.js`, add an entry at the **top** of `insights: [`:
   ```js
   { title: "What coaches should know before their next contract", category: "Coaches", date: "2026-11-01", summary: "One-sentence teaser.", url: "insights/coach-contracts.html" },
   ```
   The three newest entries (the top three) appear on the home page.
4. Add the page to `sitemap.xml`.

To link to an article published elsewhere (a podcast, an interview), skip steps 1–2 and put the full URL in `url`.

---

## Replace the toolkit

Save the new PDF over `assets/docs/before-you-sign-nil-toolkit.pdf`, keeping the same name, and update `toolkitEdition` in `config.js`. Every download button points to it automatically.

---

## Change the menu

The menu is defined once at the top of `assets/js/main.js` in the `NAV` list. Add, remove, or reorder lines there; the header and footer menus update on every page.
