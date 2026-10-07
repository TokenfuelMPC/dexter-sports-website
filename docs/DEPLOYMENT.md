# Deployment Guide

The site is a folder of static files, so any static host can serve it. Recommended options, all with free tiers and automatic HTTPS:

| Host | Best for | Notes |
|---|---|---|
| **Netlify** | Agencies / non-developers | Drag-and-drop deploys, built-in form handling, honors `404.html` |
| **Cloudflare Pages** | Speed + DNS in one place | Connect the Git repo; auto-deploys on push |
| **GitHub Pages** | Already using GitHub | Free for public repos; private repos need a paid plan |
| **Vercel** | Developers | Connect the repo; zero config |

No build command. The publish/output directory is the **repository root**.

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

The Contact intake form and the newsletter sign-up send JSON to the URL in `config.js → formEndpoint`.

### Formspree (recommended, works on any host)
1. Create an account at [formspree.io](https://formspree.io) using kim@dextersportsco.com.
2. Create a form named "Website inquiries." Copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `config.js`:
   ```js
   formEndpoint: "https://formspree.io/f/abcdwxyz",
   ```
4. Submit a test inquiry and confirm it in Formspree (the first submission may ask you to confirm the email address).
5. *(Optional)* Create a second form for the newsletter and put its endpoint in `newsletterEndpoint`, or connect Formspree to Mailchimp.

Built in: a hidden spam trap (`_gotcha` field, which Formspree recognizes) and a `_subject` line such as *"New inquiry: Parent or guardian — Jane Smith"*.

**Fields sent:** `role, name, email, phone, timeline, sport, level, organization, company, topic, message, consent, newsletter, readiness`. Only the fields relevant to the visitor's role are sent.

### Without an endpoint
If `formEndpoint` is blank, submitting opens the visitor's email app with everything pre-filled to `kim@dextersportsco.com`. Nothing is lost, but it's less smooth, so set up an endpoint before launch.

### Privacy
The form asks visitors not to send contracts or account numbers. If sensitive documents need to be exchanged, use a secure file-sharing tool, not this form.

---

## Booking link (optional)
Paste a Calendly or Cal.com link into `bookingUrl`. A "Book a call" button appears on the Contact page and after a successful submission.

## Analytics (optional)
Set `plausibleDomain: "dextersportsco.com"` and create the site at [plausible.io](https://plausible.io). It doesn't use cookies, so no cookie banner is needed. These events are tracked automatically:
- `Inquiry Submitted` (with role)
- `Readiness Check Completed` (with score)
- `Toolkit Download`
- `Newsletter Signup`

If you prefer Google Analytics, add its snippet to the `<head>` of each page and update `privacy.html`, which will then likely need a cookie consent banner.

---

## Search engines
After launch:
1. Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://www.dextersportsco.com/sitemap.xml`.
2. Update the Google Business Profile website link.
3. Each page already has a title, description, canonical URL, and social preview tags. The home page includes structured business data (JSON-LD).

---

## Ownership & access (important for handoffs)
- Hosting, domain, form, and analytics accounts should be **owned by Dexter Sports Co.** (kim@dextersportsco.com), with contractors added as team members. That way, changing vendors never means losing the site.
- Keep this repository in a Git account the business controls. Contractors work on a branch or fork and open pull requests.
- Never commit passwords, API keys, client documents, or athlete personal information to this repository.
