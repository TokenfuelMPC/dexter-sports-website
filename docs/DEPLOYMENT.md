# Deployment Guide

The site is a folder of static files, so any static host can serve it. Recommended options, all with free tiers and automatic HTTPS:

| Host | Best for | Notes |
|---|---|---|
| **Netlify** ⭐ recommended | Lowest cost + least setup | Free plan; built-in forms (free, used by this site); honors `404.html`, `_redirects`, `_headers` |
| **Cloudflare Pages** | Speed + DNS in one place | Connect the Git repo; auto-deploys on push |
| **GitHub Pages** | Already using GitHub | Free for public repos; private repos need a paid plan |
| **Vercel** | Developers | Connect the repo; zero config |

No build command. The publish/output directory is the **repository root**.

> ⚠️ **Internal files:** `_strategy/` holds internal strategy and investor material and must never be served publicly. GitHub Pages skips it automatically (folders starting with `_`), and on Netlify the root `_redirects` file blocks it. On **Cloudflare Pages, Vercel, or any other host**, exclude the folder from the upload or move it to a separate private repo. After every deploy, confirm `https://<site>/_strategy/README.md` returns **404**.

---

## Option A: Netlify (simplest)

1. Sign in at [netlify.com](https://netlify.com) with the business's own account (not a contractor's personal account).
2. **Add new site → Import from Git** (connect this repository), or **Deploy manually** and drag the project folder in.
3. Build command: *(leave empty)*. Publish directory: `/`.
4. You'll get a temporary URL such as `dexter-sports.netlify.app`. Review it before touching the domain.

## Option B: Cloudflare Pages / Vercel
Connect the repository, set the framework preset to **None / Other**, leave the build command empty, and set the output directory to `/`.

---

## Domain cutover from Wix

The live domain is **dextersportsco.com** (currently on Wix).

> Note: `dextersports.co` (no "co" before the dot) **does not exist**. Use `dextersportsco.com` everywhere.

1. **Find out where the domain is registered.** In Wix, open *Settings → Domains*. If Wix is the registrar, either point DNS from Wix or transfer the domain out (transfers take 5–7 days, so start early).
2. **Before switching:** confirm the new site works on its temporary URL, and that the forms deliver.
3. **Email:** if `kim@dextersportsco.com` runs through Google Workspace or Microsoft 365, **do not touch the MX, TXT (SPF/DKIM), or CNAME records for email.** Change only the records for the website.
4. In your host's dashboard, add the custom domain `www.dextersportsco.com` and the apex `dextersportsco.com`, then set the DNS records the host shows you. Typically:
   - `www` → `CNAME` → your host's address (e.g. `dexter-sports.netlify.app`)
   - `@` (apex) → `A` / `ALIAS` record(s) the host provides
5. Make `www.dextersportsco.com` the primary domain, with the apex redirecting to it. (The canonical tags and sitemap assume `www`.)
6. Wait for DNS to update (minutes to a few hours), then confirm HTTPS on both addresses.
7. Keep the Wix plan for about two weeks as a fallback, then cancel it.

---

## Forms

The site has two lead forms: the **Contact intake** (`contact.html`, form name `inquiry`) and **Urgent Offer Help** (`urgent.html`, form name `urgent`). Both are sent by `config.js → formProvider`.

### Netlify Forms (recommended, $0 on Netlify hosting)
1. Deploy on Netlify (both forms carry `data-netlify="true"`, so Netlify detects them at deploy).
2. Netlify → **Site configuration → Forms → Enable form detection**, then redeploy once.
3. In `config.js`: `formProvider: "netlify",`
4. Netlify → Forms → *inquiry* → **Form notifications → Email** → kim@dextersportsco.com. Repeat for *urgent*, and see [URGENT-REQUESTS.md](URGENT-REQUESTS.md) for the escalation setup.
5. Send a test from each form and confirm the emails arrive.

Spam protection: the hidden `_gotcha` honeypot field (`netlify-honeypot="_gotcha"`).

### Any other host: Formspree or similar
Set `formProvider: "endpoint"` and `formEndpoint: "https://formspree.io/f/xxxx"`. Formspree's free plan allows 50 submissions a month across all forms. For urgent requests, you can give them their own Formspree form in `urgent.formEndpoint`, so they can carry louder notifications.

### Without a provider
If `formProvider` is blank, submitting opens the visitor's email app pre-filled to kim@. Nothing is lost, but it's clunky, so set a provider before launch.

**Fields sent (intake):** `role, name, email, phone, timeline, position, sport, level, organization, company, topic, message, consent, newsletter, readiness`. Only fields relevant to the visitor's role are sent.
**Fields sent (urgent):** `name, role, phone, email, offer_type, offering_party, deadline, contact_method, have_documents, message, consent, priority, hours_to_deadline, deadline_readable, received_in_urgent_hours`.

Privacy: both forms ask visitors not to send contracts or account numbers. Exchange documents through a secure share instead.

---

## Newsletter & toolkit registration wall

The **Before You Sign** toolkit is behind a sign-up for Kim's monthly NIL newsletter (`nil-toolkit.html#get-toolkit`). Every "Get the free toolkit" button on the site leads there until the visitor registers; after that, their browser remembers them and the buttons download the PDF directly. The footer sign-up and the contact form's newsletter checkbox use the same connector.

### Kit setup (recommended, free up to 10,000 subscribers)
1. Create a Kit account with kim@dextersportsco.com (Newsletter / free plan).
2. **Custom field:** Subscribers → *Add a custom field* named `role`.
3. **Forms:** Grow → Landing Pages & Forms → create an inline form called **"Toolkit"** (and optionally a second, **"Newsletter"**, for the footer). Open each form; its numeric ID is the number in the URL.
4. **Tags (optional):** in each form's settings, add a tag (e.g., `toolkit`, `newsletter`) so Kim can see where subscribers came from.
5. **Deliver the PDF by email (recommended):** in the Toolkit form → Settings → **Incentive**, turn on the incentive email and attach the PDF or link to `https://www.dextersportsco.com/assets/docs/before-you-sign-nil-toolkit.pdf`. This also confirms the email address (double opt-in).
6. In `config.js`:
   ```js
   newsletter: {
     provider: "kit",
     kitToolkitFormId: "1234567",
     kitNewsletterFormId: "7654321",   // or the same ID
     ...
   },
   toolkitGate: "reveal",   // or "email" to deliver ONLY via the incentive email
   ```
7. Test: register on the toolkit page with a real address and confirm the subscriber appears in Kit with the role field and tag.

**Gate modes:**
- `"reveal"`: download appears on the page right after sign-up (plus the email, if the incentive is on). Smoothest experience.
- `"email"`: the page says "check your inbox"; the link arrives only by email. Strongest gate, and every address is verified.
- `"off"`: no wall.

> The PDF is a static file, so `"reveal"` is a soft gate: someone who finds the file URL can share it. `_headers` and `robots.txt` keep it out of search results. Use `"email"` if a stricter gate matters.

### Mailchimp (supported alternative)
1. Audience → Signup forms → **Embedded form**; copy the `<form action="…list-manage.com/subscribe/post?u=…&id=…">` URL.
2. Add an audience field with merge tag `ROLE` (text) if you want the role captured.
3. In `config.js`: `provider: "mailchimp"`, `mailchimpUrl: "<that URL>"`, and optional tag IDs in `mailchimpTags`.
4. Note the 2026 free-plan limits (250 contacts, no automations). See [COSTS-AND-ACCOUNTS.md](COSTS-AND-ACCOUNTS.md).

### Anything else
`provider: "endpoint"` with `endpoint: "https://…"` POSTs `{email, first_name, role, source}` as JSON (Zapier/Make webhook, Formspree, etc.), so any email platform can be connected.

---

## Booking link (optional)
Paste a Calendly or Cal.com link into `bookingUrl`. A "Book a call" button appears on the Contact page and after a successful submission.

## Analytics (optional)
- **Free:** create a site in Cloudflare → Web Analytics, copy the token, and set `cloudflareAnalyticsToken`. Page views only, no cookies.
- **Paid (more detail):** set `plausibleDomain: "dextersportsco.com"` and create the site at plausible.io. These events are tracked automatically: `Inquiry Submitted`, `Urgent Request` (with priority), `Toolkit Registration` (with role), `Toolkit Download`, `Newsletter Signup`, and `Readiness Check Completed`.

Google Analytics would require a cookie banner and privacy-policy changes; avoid it unless needed.

---

## Search engines
After launch:
1. Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://www.dextersportsco.com/sitemap.xml`.
2. Update the Google Business Profile website link.
3. Each page already has a title, description, canonical URL, and social preview tags. The home page includes structured business data (JSON-LD).

---

## Ownership & access (important for handoffs)

### Transferring this repository to Kim's team
The repository starts as a **private** repo under the developer's GitHub account. To hand it over:
1. Kim's team creates a GitHub account or organization (e.g. `dexter-sports-co`).
2. The current owner opens the repo → **Settings → General → Danger Zone → Transfer ownership** and enters the new owner. Issues, history, and settings move with it, and GitHub redirects the old URL.
3. The new owner accepts the transfer and adds collaborators under **Settings → Collaborators**.
4. Reconnect the host (Netlify, Cloudflare Pages, etc.) to the repo at its new location.

- Hosting, domain, form, and analytics accounts should be **owned by Dexter Sports Co.** (kim@dextersportsco.com), with contractors added as team members. That way, changing vendors never means losing the site.
- Keep this repository in a Git account the business controls. Contractors work on a branch or fork and open pull requests.
- Never commit passwords, API keys, client documents, or athlete personal information to this repository.
