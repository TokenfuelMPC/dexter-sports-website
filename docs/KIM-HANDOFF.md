# Dexter Sports Co. Website Handoff Guide for Kim

*October 30, 2026. Prepared by Marcus Martin.*

This guide moves the live website at **www.dextersportsco.com** into accounts Kim owns. It takes about 1–2 hours, and everything here is free. Do Steps 1–4 first: that gives Kim full control of today's site, even if she later switches to a new template (see the last section).

**Live today:**
- **Hosting:** Netlify (project *dexter-sports*), currently in Marcus's team.
- **Code:** a private GitHub repository in Marcus's account. A full copy also comes as a zip.
- **Forms:** the Contact and Urgent forms email **kim@dextersportsco.com**.
- **Domain:** dextersportsco.com is registered with Wix, and its DNS is managed in Wix.
- **Email:** the mailbox runs on Google Workspace and is untouched by any of these steps.

| Account | What it does | Cost | When |
|---|---|---|---|
| GitHub | Stores the code, with every change saved and undoable | Free | Now (Step 1) |
| Netlify | Hosting, HTTPS, form submissions | Free | Now (Step 2) |
| Google Workspace | kim@dextersportsco.com mailbox | Existing | No action |
| Wix (domain + DNS) | Points the domain at Netlify and email at Google | Domain renewal (due May 26, 2027) | Check now (Step 4) |
| Password manager | Holds all logins | Free–$3/mo | Now |
| Kit (newsletter) | Saves toolkit and newsletter sign-ups | Free to 10,000 subscribers | Only if keeping this site (Step 5) |

Use kim@dextersportsco.com for every account. Store each login in a password manager, and turn on two-factor authentication everywhere.

---

## Step 1: GitHub (about 15 minutes)

1. Sign up at **github.com/signup** with kim@dextersportsco.com (Free plan) and choose a business username, e.g. `dextersportsco`. Turn on two-factor authentication.
2. Optional: create a free organization, *Dexter Sports Co*, so webmasters can be added and removed without sharing your login.
3. **Option A (recommended):**
   - Send Marcus your username.
   - Marcus opens the repository's **Settings → General → Danger Zone → Transfer ownership** and transfers it to you.
   - Accept the emailed invitation within a day.
   - The repository stays private and keeps its full history.
4. **Option B (from the zip):**
   - Unzip **dexter-sports-website-code.zip**.
   - Install **GitHub Desktop**.
   - Go to **File → Add local repository**, choose the folder, and select **create a repository**.
   - Click **Publish repository** and keep it private.
   - (The GitHub website's upload page can't handle this many files.)
5. **Where the instructions live:**
   - **README.md**: the repository's front page
   - **docs/KIM-HANDOFF.md**: this guide
   - **docs/WEBMASTER-GUIDE.md**: for a webmaster
   - **docs/CONTENT-GUIDE.md**: no-code edits
   - **docs/DNS-SETUP.md**: domain records
6. **Add a webmaster later:** go to **Settings → Collaborators → Add people**.

## Step 2: Netlify (about 20 minutes)

1. Sign up at **netlify.com** with your email (kim@dextersportsco.com) on the Free plan. Name the team *Dexter Sports Co* and turn on two-factor authentication.
2. **Option A (recommended): transfer.** The address, HTTPS, forms, and email alerts all stay the same, and no domain change is needed.
   1. **Kim:** go to **Team settings → Members → Invite members** and invite **marcus@mpactcap.com** as **Owner**. Only an owner of both teams can move a project.
   2. **Marcus:** in the **dexter-sports** project, go to **Project configuration → General → Danger zone → Transfer project** and choose Kim's team.
   3. **Kim:** check three things:
      - **Domain management** lists www.dextersportsco.com, with HTTPS active.
      - **Forms** lists *inquiry* and *urgent*.
      - **Deploys** shows a Published deploy.
   4. **Kim:** remove Marcus under **Team settings → Members**.
3. **Reconnect auto-publishing to your GitHub (after Step 1):**
   1. Go to **Project configuration → Build & deploy → Continuous deployment → Manage repository → Link to a different repository → GitHub**. Authorize Netlify (only select repositories is fine).
   2. Settings:
      - Branch: `main`
      - Base directory: blank
      - Build command: blank
      - Publish directory: `.`
   3. Test it: edit README.md on GitHub and commit. A new deploy should appear in Netlify within a minute.
   4. In GitHub, go to **Settings → Deploy keys** and **Settings → Webhooks**. Delete the older Netlify entries and keep the newest.
4. **Option B: fresh project (only if the transfer isn't possible).**
   1. Go to **Add new project → Import an existing project → GitHub → dexter-sports-website**, use the same settings, and click **Deploy**.
   2. Turn on **Forms → Enable form detection**, then redeploy.
   3. Add the email alert (Step 3).
   4. Move the domain:
      - Marcus removes the domain from his project.
      - Kim adds **www.dextersportsco.com** and **dextersportsco.com** under **Domain management**.
      - In Wix, change the **www** CNAME to Kim's new `*.netlify.app` address. The A record (75.2.60.5) stays.
   5. Expect up to an hour of downtime while HTTPS is re-issued. Export old submissions first.

## Step 3: Email in Netlify (about 10 minutes)

Netlify does **not** host the mailbox. kim@dextersportsco.com stays on Google Workspace. In Netlify, "email" means the login address and the form alerts.

1. **Account email:** your login address receives security, billing, and usage notices. To change it, go to **User settings → General → Email**.
2. **Form alerts:**
   1. Go to **Project configuration → Notifications → Emails and webhooks → Form submission notifications**.
   2. Confirm there's an **Email notification** for *Any form* going to kim@dextersportsco.com. If it's missing: **Add notification → Email notification → Any form → kim@dextersportsco.com**.
   3. Add a second notification for a backup person if you want one.
3. **Gmail filters:** alerts come from **formresponses@netlify.com**.
   - Create a filter on that sender with **Never send it to Spam**, **Star it**, and the label *Website leads*.
   - Create a second filter on subject `[URGENT` with **Always mark it as important**.
   - Turn on mobile notifications for important mail.
4. **Test:**
   1. Submit "TEST – ignore" on /contact.html and on /urgent.html.
   2. Confirm both emails arrive (check spam the first time).
   3. Delete the test entries under **Forms**.
   4. Repeat monthly.
5. **Your domain email records** (MX and SPF) are in Wix, not Netlify. Never change them.

## Step 4: Domain and DNS in Wix (about 10 minutes)

No change is needed with Option A. Confirm the following:

1. **wix.com → Domains** shows dextersportsco.com in your account.
2. Auto-renew is on (renewal is due May 26, 2027), and two-factor authentication is on.
3. **⋯ → Manage DNS Records** matches this table (checked Oct 30, 2026):

| Type | Host | Value | Purpose |
|---|---|---|---|
| A | @ | 75.2.60.5 | Bare domain → Netlify |
| CNAME | www | dexter-sports.netlify.app | www → Netlify |
| MX ×5 | @ | aspmx.l.google.com, alt1–alt4.aspmx.l.google.com | Email. **Never change** |
| TXT | @ | v=spf1 include:_spf.google.com ~all | Email anti-spoofing. **Never change** |
| TXT | @ | google-site-verification=… | Google ownership. **Never change** |

- **Option B in Step 2:** update only the www CNAME.
- **Cancelling the Wix website plan** doesn't cancel the domain. Keep the domain renewing.
- **Leaving Wix entirely** (optional): see DNS-SETUP.md §7 (Cloudflare Registrar, about $10–11/yr).

## Step 5: New vendors (only while keeping this site)

**Important:** newsletter and toolkit sign-ups are **not saved yet**. Visitors get the PDF, but their email isn't stored until a newsletter service is connected.

| Vendor | Why | Cost | Send the webmaster |
|---|---|---|---|
| Kit (kit.com) | Stores sign-ups, emails the toolkit, monthly newsletter | Free to 10,000 subscribers | The two form numbers |
| Calendly / Cal.com | "Book a 15-minute call" button | Free | Booking link |
| Cloudflare Web Analytics | Cookieless visitor counts | Free | Site token |
| Bitwarden / 1Password | Password manager | Free / about $3/mo | Nothing |

**Kit setup:**
1. Sign up on the free Newsletter plan.
2. Go to **Grow → Landing Pages & Forms → Create new → Form** and name it *NIL Toolkit*.
3. Turn on the **Incentive email**, linking to `https://www.dextersportsco.com/assets/docs/before-you-sign-nil-toolkit.pdf`.
4. Create a *Newsletter* form (or reuse the first).
5. Copy the form numbers from the web addresses (e.g. `/forms/1234567/edit`).

The webmaster then sets these in `assets/js/config.js`:
- `newsletter.provider: "kit"`
- `kitToolkitFormId` and `kitNewsletterFormId`
- `bookingUrl`
- `cloudflareAnalyticsToken`

Optional: text-message alerts for urgent offers. See URGENT-REQUESTS.md.

## Step 6: Final checklist

- [ ] Password manager set up; two-factor authentication on everywhere
- [ ] GitHub account created; repository transferred (Step 1)
- [ ] Netlify account created; project transferred (Step 2)
- [ ] Netlify relinked to your GitHub; test edit published
- [ ] Form alerts confirmed; Gmail filters made; both test submissions received (Step 3)
- [ ] Wix domain confirmed, auto-renew on, DNS matches the table (Step 4)
- [ ] Marcus removed from the Netlify team; old deploy key and webhook deleted in GitHub
- [ ] Kit connected, or deferred to the new template (Step 5)
- [ ] High-resolution headshot supplied (≥1200 × 1500 px)
- [ ] Reworded About-page sentence approved ("representing coaches and athletes across all sports, with a specialty in uplifting women in sport")
- [ ] Urgent-offer hours confirmed: same day if received by noon ET, Monday–Friday
- [ ] Optional: backup contact for urgent offers
- [ ] Privacy policy reviewed by your attorney
- [ ] Wix website plan cancelled last (keep the domain)

## Running the site, and switching to a new template later

**Day to day:**
- **Edits:** on GitHub, edit `assets/js/content.js` or a page's `.html` file and commit. The site updates in about a minute.
- **Undo:** use any earlier commit, or Netlify **Deploys → Publish deploy**.
- **A webmaster** needs only GitHub collaborator access (see WEBMASTER-GUIDE.md).
- **Cost:** $0/mo plus the domain renewal.
- **Privacy:** keep the repository private, and keep internal business documents off the public site.

**Switching to a new template:**
1. **Carry over:**
   - the domain and email;
   - `brand-kit/` (logo, favicons, colors, video with credits);
   - your About story, service text, articles, and the toolkit PDF.
2. **Rebuild:**
   - contact and urgent forms that email you;
   - the newsletter sign-up (Kit);
   - the privacy policy;
   - the cited statistics with their sources.
3. **Export** past form submissions: **Netlify Forms → Download as CSV**.
4. **Go live:**
   - **Plain-HTML template:** replace the files in GitHub; the same Netlify project publishes it.
   - **Website builder** (Squarespace, Wix, Framer, Webflow): follow its "connect a domain" steps in Wix DNS, changing **only** the A and www records.
5. **Redirect the old pages** to the new ones so links and Google rankings carry over: `/about.html`, `/services.html`, `/nil-toolkit.html`, `/contact.html`, `/urgent.html`, `/insights/...`
6. **Wind down:** keep the Netlify project for two weeks as a fallback, then delete it. Keep the GitHub repository as an archive.

## What's in the code package

`dexter-sports-website-code.zip` is a complete copy of the site and its brand kit. Unzip it and open `index.html` in a browser to view the site offline (the forms only work online).

| Path | What it is |
|---|---|
| `index.html`, `about.html`, `services.html`, `nil-toolkit.html`, `partners.html`, `insights.html`, `contact.html`, `urgent.html`, `privacy.html`, `404.html` | The site's pages |
| `insights/` | Articles, plus `_article-template.html` for new ones |
| `assets/js/config.js` | Settings: contact details, forms, newsletter, booking, analytics, section on/off switches |
| `assets/js/content.js` | Lists: services, FAQs, articles, network, credentials |
| `assets/css/styles.css` | All design (colors, type, layout) |
| `assets/img/`, `assets/video/`, `assets/docs/` | Photos, favicons, hero videos, the NIL toolkit PDF |
| `_redirects`, `_headers` | Netlify rules: private folders hidden, security headers |
| `brand-kit/` | Brand guide, logos (+ zip), 7 favicon styles, photography, video sources and credits |
| `docs/` | This guide and every setup guide |
| `README.md` | Start here; links to every guide |
