# Webmaster Guide — running dextersportsco.com

The single document a webmaster needs to run the site day to day: every account and subscription, what each costs, routine tasks, how to publish changes, and what to do when something breaks. For deeper detail it links to the other guides in `docs/`.

---

## 1. The site in one paragraph
A static website (plain HTML, CSS, and JavaScript; no build step, no database) stored in a private GitHub repository and hosted on Netlify. Content edits happen in two files (`assets/js/content.js` and `assets/js/config.js`) or directly in the page HTML. Pushing to GitHub publishes automatically. Forms go to Netlify Forms, newsletter sign-ups go to Kit, and the home page plays a short background video stored in the repo.

## 2. Accounts & subscriptions
All accounts belong to **Dexter Sports Co.** (login: kim@dextersportsco.com) and are billed to the company. The webmaster is added as a collaborator or team member and is never the owner. Store every login in Kim's password manager, with two-factor authentication on.

| Service | What it does for the site | Plan | Cost (Oct 2026) | Webmaster access | Status |
|---|---|---|---|---|---|
| **Domain registrar** (wherever dextersportsco.com is registered; currently via Wix) | Owns the web address | Annual | ~$10–25/yr | None (Kim only) | ✅ Exists. Move DNS at launch |
| **GitHub** | Stores the site's code and media; history of every change | Free (private repo) | $0 | Collaborator (write) | ✅ Exists (transfer to Kim's account; see DEPLOYMENT.md) |
| **Netlify** | Hosting, HTTPS, auto-deploy from GitHub, **contact & urgent forms** | Free | $0 | Team member, or none if editing only through GitHub | ✅ **Live at https://dexter-sports.netlify.app** (Oct 9, 2026), currently on Marcus's "Mpact Capital" team; **Kim to take over (§2b)** |
| **Kit** (kit.com) | Monthly NIL newsletter; toolkit registration wall | Newsletter (free, ≤10,000 subscribers) | $0 | Optional, Kim's choice | ⏳ Create (setup in DEPLOYMENT.md) |
| **Cloudflare Web Analytics** | Page-view analytics without cookies | Free | $0 | Read-only | Optional |
| **Calendly / Cal.com** | "Book a call" button | Free | $0 | None | Optional |
| **Email** (kim@dextersportsco.com) | Receives form alerts | Existing | Existing | None | ✅ Exists. **Don't change MX records** |
| **Google Fonts** | Inter, Inter Tight, Instrument Serif, JetBrains Mono | Free, no account | $0 | n/a | ✅ In use |
| **Pexels** | Source of the hero video footage | Free, no account | $0 | n/a | ✅ Licensed (see brand-kit/video/README.md) |
| ~~Vercel preview~~ | Old temporary review link (dexter-sports-preview.vercel.app), superseded by Netlify | — | $0 | — | 🗑 Delete (no longer updated) |

**Expected running cost: about $0/month plus the domain renewal.** Paid upgrades (only if needed) are in [COSTS-AND-ACCOUNTS.md](COSTS-AND-ACCOUNTS.md#when-to-pay-for-something).

## 2a. Web hosting & connecting the dextersportsco.com URL

> **Quick version for the Wix DNS change:** see [DNS-SETUP.md](DNS-SETUP.md) (exact before/after records as of Oct 9, 2026).

How to put the site on Netlify and point **dextersportsco.com** at it, replacing the current Wix site. Budget about an hour of work, plus up to 48 hours for DNS to update worldwide. Nothing here touches email.

> DNS values below were checked against Netlify's documentation in October 2026. If Netlify's dashboard shows different values when you do this, **use what the dashboard shows**.

### Step 0 — Before you start (10 min)
1. **Find where the domain is registered.** Log in to Wix → **Domains**. If dextersportsco.com is listed there, Wix is the registrar and the DNS host. If it isn't, check the registrar Kim used (GoDaddy, Namecheap, Google/Squarespace) and do Step 3 there instead.
2. **Screenshot every existing DNS record** (Wix → Domains → ⋯ next to the domain → **Manage DNS Records**). This is your undo button.
3. **Note the email records.** MX, and TXT records containing `spf`, `dkim`, `google`, or `outlook`, keep kim@dextersportsco.com working. **Never edit or delete them.**
4. Don't cancel the Wix plan yet (see Step 6).

### Step 1 — Create the Netlify site from GitHub (15 min)
1. Sign up at **netlify.com** with **kim@dextersportsco.com** (Dexter owns the account).
2. **Add new site → Import an existing project → GitHub.** Authorize Netlify for the GitHub account that owns `dexter-sports-website`, then pick that repository.
3. Build settings: **Branch:** `main` · **Build command:** *(leave empty)* · **Publish directory:** `/` (the repository root). Click **Deploy**.
4. When it's done, Netlify gives you a temporary address like `random-name-123.netlify.app`. Rename it under **Site configuration → Site details → Change site name** to something like `dexter-sports`, which makes the address **`dexter-sports.netlify.app`**. You'll need this name in Step 3.
5. Open that address and click through every page. The internal folders must stay private: confirm that `dexter-sports.netlify.app/_strategy/README.md` and `/brand-kit/README.md` show **"Page not found"** (the repo's `_redirects` file handles this).
6. **Forms:** Site configuration → **Forms → Enable form detection**, then **Deploys → Trigger deploy**. Set email notifications for the `inquiry` and `urgent` forms (see [URGENT-REQUESTS.md](URGENT-REQUESTS.md)).

### Step 2 — Add the domain in Netlify (5 min)
1. **Domain management → Add a domain** → enter **`www.dextersportsco.com`** → confirm you own it.
2. Netlify adds both `www.dextersportsco.com` and `dextersportsco.com`. Set **www.dextersportsco.com as the primary domain**. Netlify recommends www as primary when DNS is hosted elsewhere, and the bare domain will redirect to it automatically.
3. Netlify now shows "Awaiting external DNS." That's expected until Step 3 is done.

### Step 3 — Point the domain at Netlify (15 min)
In Wix → **Domains → ⋯ → Manage DNS Records** (or the DNS page at your registrar):

| Type | Host / Name | Value / Points to | Action |
|---|---|---|---|
| **A** | `@` (or leave blank) | **`75.2.60.5`** | Replace Wix's A record(s). Keep **only this one** A record on `@` |
| **CNAME** | `www` | **`dexter-sports.netlify.app`** (your site name from Step 1) | Replace Wix's `www` CNAME |
| AAAA | `@` | — | **Delete** any AAAA records (Netlify doesn't use IPv6 here, and leftovers break HTTPS) |
| MX / email TXT | — | — | **Leave untouched** |

- If your DNS provider offers an **ALIAS / ANAME / flattened CNAME** for `@`, Netlify prefers that, pointed to `apex-loadbalancer.netlify.com`, instead of the A record. Wix offers A records only, so use `75.2.60.5`.
- **Wix gotcha:** Wix reserves `www` and the main A record for Wix sites. If it won't let you change them, first **disconnect the domain from the Wix site** (Wix → Domains → ⋯ → assign or disconnect from the site), then edit the records. If Wix still blocks it, transfer the domain out (Step 3b).

### Step 3b — Optional: move the domain away from Wix
To stop depending on Wix entirely, transfer dextersportsco.com to a low-cost registrar such as **Cloudflare Registrar** (sells at cost), **Porkbun**, or **Namecheap**, typically ~$10–12/yr for a .com.
1. Wix → Domains → ⋯ → **Transfer away from Wix** → unlock it and copy the authorization (EPP) code.
2. Start the transfer at the new registrar, then approve the confirmation email sent to the domain owner's address.
3. It takes about 5–7 days. Domains can't be transferred within 60 days of registration or a previous transfer.
4. **Recreate every DNS record from your Step 0 screenshot** at the new registrar *before* the transfer completes, especially the email records. Then apply the Step 3 values.

### Step 4 — HTTPS (automatic, 5 min to confirm)
Once DNS resolves, Netlify issues a free Let's Encrypt certificate on its own. Check under **Domain management → HTTPS**. If it says "Waiting on DNS propagation", give it time, then click **Verify DNS configuration → Provision certificate**. HTTPS is enforced automatically once the certificate is active.

### Step 5 — Verify (10 min, after DNS updates)
- On **dnschecker.org**, check `dextersportsco.com`, type **A**: it should show **75.2.60.5** worldwide. Then check `www.dextersportsco.com`, type **CNAME**: it should show **dexter-sports.netlify.app**.
- Open `https://dextersportsco.com` and `https://www.dextersportsco.com`. Both should load the new site with a padlock, and the bare domain should redirect to www.
- Submit a test on the contact form and the urgent form, and send yourself a test email to kim@ to prove email still works.
- Confirm `https://www.dextersportsco.com/_strategy/README.md` shows "Page not found".

### Step 6 — After the cutover
- [ ] Add the site to **Google Search Console** and submit `https://www.dextersportsco.com/sitemap.xml`.
- [ ] Update the website link on Kim's LinkedIn, Google Business Profile, Instagram, and email signature.
- [ ] Keep the Wix plan about **2 weeks** as a fallback, then cancel the **site plan**. If the domain is still registered at Wix, **don't cancel the domain**. Keep it on auto-renew, or transfer it (Step 3b).
- [ ] Delete the temporary Vercel preview project (`dexter-sports-preview`).
- [ ] Record the final DNS values and registrar in Kim's password manager notes.

### Undo (if something goes wrong)
Put back the records from your Step 0 screenshot. The old Wix site returns as DNS updates (minutes to a few hours). Netlify keeps the new site running at `dexter-sports.netlify.app` in the meantime.

### Day-to-day hosting
After launch, nothing needs managing: every push to `main` on GitHub deploys within about a minute. To roll back a bad change, go to Netlify → **Deploys**, pick an earlier deploy, and choose **Publish deploy**.

## 2b. Current Netlify setup & Kim's takeover

### What's set up now (Oct 9, 2026)
| Item | Value |
|---|---|
| Netlify project | **dexter-sports** → https://dexter-sports.netlify.app |
| Netlify team | "Mpact Capital" (owner: Marcus Martin, marcus@mpactcap.com), Free plan |
| Source | GitHub `TokenfuelMPC/dexter-sports-website`, branch `main`, publish directory `.` (repo root), no build command |
| Auto-deploy | Every push to `main` deploys in about 30 seconds (a read-only deploy key on the repo, plus a GitHub webhook to `api.netlify.com/hooks/github`). No broad GitHub app access was granted |
| Forms | Form detection **on**. Forms `inquiry` (contact page) and `urgent` (urgent offer page) |
| Email alerts | Every form submission → **kim@dextersportsco.com**. Subject lines come from the form (e.g. `[URGENT P1 · 10h] …`) |
| Privacy | `/_strategy/`, `/brand-kit/`, `/docs/`, and `README.md` return 404 on the live site (verified) |
| Custom domain | Not connected yet (see §2a, Step 2 onward) |
| Review mode | `showDrafts: true`, so placeholders are highlighted. Set it to `false` at launch |

### Handing Netlify over to Kim (about 15 minutes)
1. **Kim creates her account:** sign up at netlify.com with **kim@dextersportsco.com** (Free plan). This creates her own team.
2. **Kim invites Marcus to her team** (Team settings → Members → Invite) so he can move the project. Marcus accepts the email invite.
3. **Marcus transfers the project:** in the *dexter-sports* project → **Project configuration → General → Danger zone → Transfer project** → choose Kim's team. The site, its URL, deploy history, forms, and notification settings move with it.
4. **Kim confirms** that the project now appears in her team, then (optionally) removes Marcus from her team.
5. **If the GitHub repo also moves** to Kim's account or organization (see DEPLOYMENT.md, *Transferring this repository*), the deploy key and webhook move with it automatically. Then in Netlify, go to **Project configuration → Build & deploy → Repository** and confirm (or re-link) the new repository path, and push a small change to confirm auto-deploy still works.
6. **Billing & ownership:** everything stays on the Free plan. If anything is ever upgraded, it's billed to Kim's team.

> If the Free plan blocks inviting a second team member, use this alternative: after the GitHub repo moves to Kim, Kim clicks **Add new project → Import from Git** in her own team, picks the repo, and uses the same settings (branch `main`, publish directory `.`, no build command). Then she turns on **Forms → form detection** and re-creates the email notification (Forms → Form notifications → Email → kim@dextersportsco.com). Finally, delete the old project from Marcus's team.

### Testing the forms (do once after takeover, and monthly)
Submit a test on `/contact.html` and `/urgent.html` with the name "TEST – ignore". Confirm both appear in Netlify → Forms and that kim@ receives both emails (check spam the first time and mark them "not spam"), then delete the test submissions.

## 3. Where things live

| What | Where |
|---|---|
| Contact details, form/newsletter/booking settings, hero video playlist, launch switch, **section on/off switches** (`features`) | `assets/js/config.js` |
| Services, stats, partners, investors, wins, press, testimonials, articles, FAQ, quiz | `assets/js/content.js` |
| Page text | the `.html` files (index, about, services, nil-toolkit, partners, insights, contact, urgent, privacy) |
| Articles | `insights/` (copy `_article-template.html`) |
| Styling (colors, fonts) | `assets/css/styles.css`, tokens at the top |
| Images, video, PDF | `assets/img/`, `assets/video/`, `assets/docs/` |
| Brand assets, originals, brand guide | `brand-kit/` (not published) |
| Internal strategy, investor decks, proforma | `_strategy/` (**confidential**, never published) |

## 4. Publishing a change
1. Edit the file (VS Code recommended) and preview locally: `python -m http.server 8080`, then open http://localhost:8080.
2. Commit and push to `main` on GitHub. Netlify deploys automatically in about a minute.
3. Check the live page. If something broke, revert the commit in GitHub (Netlify redeploys the previous version).

Step-by-step content recipes (add a partner, publish an article, cite a statistic): [CONTENT-GUIDE.md](CONTENT-GUIDE.md).

## 5. Routine tasks

| When | Task | Time |
|---|---|---|
| **Monthly** | Test the urgent-request flow ([URGENT-REQUESTS.md §5](URGENT-REQUESTS.md)) and the contact form | 10 min |
| **Monthly** | Publish the month's Insights article, if Kim provides one | 30 min |
| **Monthly** | Check the toolkit wall: register a test address and confirm it appears in Kit, then delete it | 5 min |
| **Quarterly** | Export the Kit subscriber list (backup) and the Netlify form submissions | 10 min |
| **Quarterly** | Update stats, partners, wins, press, and testimonials with Kim | 30 min |
| **Quarterly** | Re-check cited statistics for new editions (Collective Think Tank; Tucker Center / WeCOACH) | 15 min |
| **Yearly** | Confirm domain auto-renew; review the privacy policy; refresh the toolkit PDF edition | 30 min |
| **As needed** | Swap hero footage ([brand-kit/video/README.md](../brand-kit/video/README.md)) | 30 min |

## 6. Launch-day settings (`config.js`)
- `showDrafts: false`: hides placeholders and turns off the yellow review highlights
- `formProvider: "netlify"`: plus form detection and email notifications in Netlify
- `newsletter`: `provider: "kit"` and the Kit form IDs
- `urgent`: confirm the noon ET cutoff, business days, and backup contact

Full list: [LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md).

## 7. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| A section of the page is blank | A typo in `content.js` (often a missing comma) | Open the browser console (F12) to see the error line; undo the last edit |
| Contact form opens an email app | `formProvider` isn't set | Set `formProvider: "netlify"` and enable form detection |
| Form submissions don't arrive | Netlify notification not set, or the email is in spam | Netlify → Forms → notifications; add a filter for `[URGENT` |
| Toolkit sign-up shows an error | Wrong Kit form ID, or Kit is down | Check `newsletter.kitToolkitFormId`; test the form in Kit |
| Hero video doesn't play | Visitor has reduced-motion or data-saver on (poster shows instead, by design), or the file path is wrong | Check `heroVideo` paths; keep files in `assets/video/` |
| Strategy files reachable online | Host not configured to block `_strategy/` | See the warning in DEPLOYMENT.md; confirm `/_strategy/README.md` returns 404 |
| Site down after a DNS change | Records misconfigured | Compare with the records Netlify shows; never touch MX/email records |

## 8. Hand-off checklist (giving the site to a new webmaster)
- [ ] Add them as a GitHub collaborator (write access)
- [ ] Add them to the Netlify team (optional)
- [ ] Share this guide plus `CONTENT-GUIDE.md` and `brand-kit/brand-guide.html`
- [ ] Never share Kim's passwords. Use invites, and remove access when the engagement ends
