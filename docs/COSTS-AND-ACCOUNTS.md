# Costs & Accounts

The site is built so Dexter Sports Co. pays for as little as possible, owns every account, and can hand day-to-day upkeep to any low-cost webmaster.

> Prices and free-tier limits were checked in **October 2026** and change often. Confirm on each vendor's pricing page before signing up.

## Recommended stack

| Need | Service | Plan | Approx. cost | Why |
|---|---|---|---|---|
| Domain | Current registrar (move from Wix if Wix is the registrar) | Annual renewal | Typically $10–25/yr for a .com | Already owned |
| Hosting | **Netlify** | Free (credit-based) | $0 | Free plan covers a site this size. Includes HTTPS, auto-deploy from GitHub, and honors `_redirects` / `_headers` (keeps `_strategy/` private) |
| Contact + urgent forms | **Netlify Forms** | Included with hosting | $0 | Form submissions are free on Netlify's credit-based plans; email notifications to Kim are built in |
| Newsletter + toolkit wall | **Kit** (kit.com) | Newsletter (free) | $0 up to 10,000 subscribers | Unlimited sends, unlimited forms, one automation (enough for the toolkit welcome / "incentive" email) |
| Booking (optional) | Calendly or Cal.com | Free | $0 | One event type is enough ("15-minute intro call") |
| Analytics (optional) | Cloudflare Web Analytics | Free | $0 | Cookieless page views, so no cookie banner needed |
| Code repository | GitHub | Free private repo | $0 | Webmaster gets collaborator access |
| Email (existing) | Kim's current provider for kim@dextersportsco.com | Existing | — | Keep as is; don't touch MX records during the cutover |

**Expected recurring cost after launch: about $0/month plus the domain renewal**, until the newsletter passes 10,000 subscribers or Kim wants paid features.

### Why not Mailchimp?
As of 2026, Mailchimp's free plan allows only 250 contacts and 500 sends a month, with no automations. That means no automatic toolkit delivery and no room to grow a monthly list. MailerLite's free plan is also capped at 250 subscribers. The site still supports Mailchimp (set `newsletter.provider: "mailchimp"`) if Kim already pays for it.

### When to pay for something
| Trigger | Upgrade | Rough cost |
|---|---|---|
| Want multi-step email sequences (e.g., a 5-email NIL course) | Kit Creator plan | From ~$39/mo |
| Want event tracking (registrations by role, urgent requests) | Plausible | From ~$9/mo |
| Want urgent requests to send a **text message** to Kim | Zapier or Make (Netlify form → SMS) | ~$0–20/mo depending on volume |
| Netlify free credits run out (many deploys or very high traffic) | Netlify Personal | ~$9–19/mo, or move to Cloudflare Pages (free) |

## Account ownership (important)

Every account is created **with a Dexter Sports Co. email address and billed to Dexter Sports Co.** The person helping set it up and the webmaster are added as members or collaborators, never owners. That way, changing vendors or webmasters never risks losing the site, the list, or the domain.

| Account | Owner login | Who else needs access | Notes |
|---|---|---|---|
| Domain registrar | kim@dextersportsco.com | None (Kim only) | Turn on auto-renew and 2-factor authentication |
| GitHub (repository) | Dexter Sports Co. GitHub account or org | Webmaster as collaborator | Transfer from the setup account; see DEPLOYMENT.md |
| Netlify | kim@dextersportsco.com | Optional. A webmaster editing through GitHub doesn't need Netlify access | Form notifications → Kim's email |
| Kit | kim@dextersportsco.com | None, or Kim's assistant | Owns the subscriber list. Export a CSV backup every quarter |
| Calendly / Cal.com | kim@dextersportsco.com | None | |
| Cloudflare (analytics) | kim@dextersportsco.com | Webmaster read-only, optional | |

Store all logins in a password manager Kim controls (e.g., 1Password or Bitwarden), with 2-factor authentication turned on everywhere.

## What the webmaster does (basic-needs retainer)

A small monthly or per-task retainer is enough. Typical tasks:
- Update text, partners, testimonials, and stats (`assets/js/content.js`)
- Publish the monthly article (copy the template; about 30 minutes)
- Swap the toolkit PDF when a new edition comes out
- Check that the forms still deliver (monthly test submission)
- Renew or verify integrations if a vendor changes

Not included: redesigns, new features, or legal review of content. Everything a webmaster needs is in `docs/CONTENT-GUIDE.md`.
