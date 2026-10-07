# Dexter Sports Co. — Website

The marketing and client-intake website for **Dexter Sports Co. LLC** (DBA *Dexter Sports Management*), the athlete and coach representation firm founded by **Kim Dexter** in Charlotte, NC.

It replaces the one-page Wix site at `dextersportsco.com` with a multi-page site that does more of the work:

- **Builds credibility.** Kim's story and career, her network, credentials, stats, testimonials, and an Insights library.
- **Converts prospects.** A guided, multi-step "Start a Conversation" intake form that routes coaches, athletes, parents, brands, partners, and media.
- **Handles exploding offers.** An **Urgent Offer Help** page that triages requests by deadline (P1/P2/P3) and escalates to Kim's phone.
- **Builds a list.** The free *Before You Sign* NIL toolkit sits behind a sign-up for Kim's monthly NIL newsletter (Kit, Mailchimp, or any endpoint), alongside an interactive NIL Readiness Check and an offer cash calculator.
- **Showcases backers.** Dedicated space for investors and strategic partners, plus a home-page logo strip.

**It is plain HTML, CSS, and JavaScript.** There is no build step, framework, database, or monthly platform fee. Any web developer, agency, or host can take it over.

---

## Start here (by role)

| You are… | Read |
|---|---|
| **Kim / the business owner** | [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md): what still needs your input before launch |
| **Someone updating content** (text, partners, articles) | [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md): step-by-step, no coding background needed |
| **Whoever hosts / launches the site** | [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md): hosting, domain cutover from Wix, forms, newsletter, analytics |
| **Whoever pays the bills** | [docs/COSTS-AND-ACCOUNTS.md](docs/COSTS-AND-ACCOUNTS.md): the $0/month stack, who owns which account |
| **Whoever answers urgent requests** | [docs/URGENT-REQUESTS.md](docs/URGENT-REQUESTS.md): triage tiers, alert setup, response runbook |
| **A developer or agency taking over** | [docs/DEVELOPER-GUIDE.md](docs/DEVELOPER-GUIDE.md) + [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) |

## Preview it locally (2 minutes)

Any static file server works. With Python (preinstalled on most Macs):

```bash
python -m http.server 8080
```

Then open <http://localhost:8080>. Or double-click `index.html`: everything works from the file system except the 404 page.

## Project map

```
index.html              Home
about.html              About Kim Dexter
services.html           Services
nil-toolkit.html        Free toolkit + Readiness Check + offer calculator
partners.html           Investors & strategic partners
insights.html           Article index
insights/*.html         Articles (copy _article-template.html to add one)
contact.html            Multi-step intake form
urgent.html             Urgent offer help (deadline triage + escalation)
privacy.html            Privacy policy (template, needs legal review)
404.html                Not-found page

assets/js/config.js     ⭐ Site settings: contact info, form endpoint, booking link, launch switch
assets/js/content.js    ⭐ Repeating content: stats, services, partners, investors, testimonials, articles, FAQ, quiz
assets/js/main.js       Shared header/footer + all interactive behavior
assets/css/styles.css   All styling; brand colors and fonts at the top
assets/img/             Favicon, social share image, Kim's headshot (add kim-dexter.jpg), logos
assets/docs/            The Before You Sign toolkit PDF

docs/                   Handoff guides (you are here)
_strategy/              INTERNAL ONLY: competitive landscape, comps data, investor slides. Never published (see _strategy/README.md)
_redirects, _headers    Netlify rules: keep _strategy/ private, keep the PDF out of search, security headers
robots.txt, sitemap.xml SEO
```

⭐ = the two files you'll edit most.

## Review mode vs. live mode

`assets/js/config.js` has a switch called `showDrafts`:

- `true` (current): every placeholder glows **yellow**, placeholder list entries get a **"Placeholder"** badge, and a banner counts what's left on each page. Use this while reviewing with Kim.
- `false`: placeholder list entries disappear, and any section with nothing real to show hides itself. **Set this before launch.**

## Status

- ✅ Design, all pages, interactive tools, and responsive layout are built and tested
- ✅ Confirmed facts in place: contact details, Charlotte base, NIL toolkit, and Kim's career, education & credentials (CFRE; JM, Florida State; B.S. and D-I volleyball, Howard)
- ⏳ Needs Kim's input: review of her bio, founding story, headshot file, remaining stats, investors, partners, testimonials (see the [Launch Checklist](docs/LAUNCH-CHECKLIST.md))
- ✅ Positioning aligned with the Oct 2026 competitive-landscape strategy: coach-first, with a focus on women coaches and assistants across all sports
- ⏳ Needs setup: form endpoint, optional booking link and analytics, domain cutover

---
Dexter Sports Co. LLC is not a law firm and does not provide legal advice. © Dexter Sports Co. LLC.
