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
| **Netlify** | Hosting, HTTPS, auto-deploy from GitHub, **contact & urgent forms** | Free | $0 | Team member, or none if editing only through GitHub | ⏳ Create at launch |
| **Kit** (kit.com) | Monthly NIL newsletter; toolkit registration wall | Newsletter (free, ≤10,000 subscribers) | $0 | Optional, Kim's choice | ⏳ Create (setup in DEPLOYMENT.md) |
| **Cloudflare Web Analytics** | Page-view analytics without cookies | Free | $0 | Read-only | Optional |
| **Calendly / Cal.com** | "Book a call" button | Free | $0 | None | Optional |
| **Email** (kim@dextersportsco.com) | Receives form alerts | Existing | Existing | None | ✅ Exists. **Don't change MX records** |
| **Google Fonts** | Inter, Inter Tight, Instrument Serif, JetBrains Mono | Free, no account | $0 | n/a | ✅ In use |
| **Pexels** | Source of the hero video footage | Free, no account | $0 | n/a | ✅ Licensed (see brand-kit/video/README.md) |
| ~~Vercel preview~~ | Temporary review link (dexter-sports-preview.vercel.app) | — | $0 | — | 🗑 Delete after launch |

**Expected running cost: about $0/month plus the domain renewal.** Paid upgrades (only if needed) are in [COSTS-AND-ACCOUNTS.md](COSTS-AND-ACCOUNTS.md#when-to-pay-for-something).

## 3. Where things live

| What | Where |
|---|---|
| Contact details, form/newsletter/booking settings, hero video playlist, launch switch | `assets/js/config.js` |
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
