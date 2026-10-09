# Launch Checklist

Everything that needs to happen between "built" and "live." Work through it top to bottom. Items marked **Kim** need her input; the rest can be handled by whoever manages the site.

> **Find every placeholder at once:** with `showDrafts: true`, browse the site; yellow highlights and "Placeholder" badges mark everything left. Developers can also search the project for `class="ph"` and `draft: true`.

---

## 1. Content from Kim

### Bio & story: `about.html`, `index.html`
Kim's career, education, and credentials were added from her LinkedIn (Oct 2026): CFRE; Juris Master (FSU, Legal Risk Management, Contracting & Compliance); B.S. Howard + D-I volleyball; roles at Population Connection, Black Women's Health Imperative, University of Arkansas, The Arc of Southwest Georgia, and The Independence Fund.
- [x] Career timeline hidden on the About page (Oct 8); the Experience section now links to Kim's LinkedIn. Timeline entries remain in `content.js` if it's ever brought back
- [ ] **Kim:** Make sure her LinkedIn is ready for prospects, since the site now sends visitors there for her career history
- [ ] **Kim:** Year Dexter Sports Co. was founded (timeline, "[Year]–Present")
- [x] Founding story: Kim's own first-person story is on the About page (received Oct 8, 2026); her quote replaces the suggested home-page pull quote
- [x] Positioning decided (Oct 8): **all sports, with a specialty in uplifting women.** Site copy aligned
- [x] NFLPA mention removed from the public site (Oct 8). Keep NFLPA plans private until the conflict-of-interest policy exists
- [ ] **Kim:** Approve the one reworded sentence in her story (About page): "That includes representing coaches and athletes across all sports, with a specialty in uplifting women in sport, and supporting athletes navigating NIL." (Originally named college football coaches and NFLPA certification.)
- [ ] **Kim:** Approve the "Giving back" scholarship section on About (worded as a plan, "in development")
- [ ] **Kim:** Update her LinkedIn headline/banner to reference Dexter Sports Co. Prospects will look her up, and the profile currently reads "Nonprofit Fundraising Executive" and #OpenToWork. Then add the URL to `config.js` → `social.linkedin`.

### Headshot
- [ ] **Kim:** High-resolution original of her portrait. The current photo is cropped and upscaled from the 400 px LinkedIn image with the #OpenToWork ring removed. Get the original file (the LinkedIn photo works well; a screenshot is too low-resolution), vertical, at least 1200×1500 px. Save as `assets/img/kim-dexter.jpg`. The site picks it up automatically on Home and About.

### Lists: `assets/js/content.js`
- [ ] **Kim:** `stats`: "10+ years" is confirmed; supply or remove the other three (clients, relationships, value)
- [ ] **Kim:** `credentials`: CFRE, JM, and B.S. are in. Add any athlete-agent registration, associations, or boards. *(Many states require athlete agents to register; families are told to verify credentials. Listing them builds trust.)*
- [ ] **Kim:** `network`: confirm each of the six "Access" categories is accurate; edit or delete as needed
- [ ] **Kim:** `investors`: names, one-line blurbs, logos, and links, **with each investor's written OK to be listed**
- [ ] **Kim:** `partners`: same, with each partner's OK
- [ ] **Kim:** `testimonials`: real quotes, **with written permission** from each person (for minors, from a parent/guardian)
- [ ] Third article in `insights`: write it or delete the placeholder entry

### Claims to confirm
- [ ] **Kim:** "Kim reviews every inquiry and will be in touch within two business days" (Contact page, home CTA, form success message). Adjust if needed.
- [ ] **Kim:** Fee language in the FAQ ("explained in writing before any agreement")
- [ ] **Kim:** Social media profile URLs → `config.js` → `social`

### Strategy alignment (see `_strategy/dexter-competitive-landscape.md`)
The site now leads with coach representation and the women-coaches focus. Before launch:
- [ ] **Kim:** Approve the coach-first positioning and the "Why we exist" section on the home page
- [x] Women-in-coaching figures verified (Oct 7, 2026) against the WIA Report summary of *Women in NCAA Intercollegiate Athletics: The Legacy Revisited* (The Collective Think Tank, Mar 2026): ~2/3 of full-time assistant coaches; 46% of coaches for women's teams (2024); 6 in 100 coaches of men's teams; 43% of NCAA varsity athletes. The earlier "41%" figure was replaced. Women-of-color figure now sourced: 7.3% of head coaches of women's teams at 94 D-I schools (Tucker Center / WeCOACH Women in College Coaching Report Card, 2025–26).
- [ ] *(Optional)* Confirm in the full report whether "two-thirds of full-time assistant coaches" refers to women's teams only or to all teams, and tighten the wording if needed
- [x] `_strategy/` landscape doc and slides updated to match (Oct 7)
- [ ] **Kim:** Decide on the school-paid "For Athletic Departments" search desk. It exists as a draft service (hidden at launch). Publish only once it's decided *and* the conflict policy below exists.
- [ ] **Kim:** Write the conflict-of-interest policy, then replace the placeholder FAQ "How do you handle conflicts of interest?" (required before any search-desk or NFLPA work)
- [ ] **Counsel:** Confirm nothing on the public site counts as soliciting investment for a private raise. The Partners page lists investors but intentionally doesn't invite investment.
- [ ] Keep fees (3%, $6K floor), competitor names and financials, NFLPA plans, and fundraising details **off** the public site unless Kim decides otherwise

### Toolkit wall, newsletter & urgent requests
- [x] Urgent response rule set: same day if received by 12:00 pm ET on a business day, otherwise next business day (`config.js → urgent.cutoff`)
- [ ] **Kim:** Confirm business days are Mon–Fri (current setting)
- [ ] **Kim:** Name a backup contact for urgent requests (optional, recommended)
- [ ] Set up urgent alerts, at least levels 1–2 in [URGENT-REQUESTS.md](URGENT-REQUESTS.md) (email + phone notification), and run the test
- [ ] Create the Kit account, forms, `role` field, and toolkit incentive email; set `newsletter` in `config.js`
- [ ] Choose `toolkitGate`: `"reveal"` (recommended to start) or `"email"`
- [ ] Register once on the live toolkit page; confirm the subscriber in Kit and that the download or email works
- [ ] **Kim:** Plan the first monthly newsletter (Kit → Broadcasts) before the list starts growing

### Hidden sections (Oct 9, 2026)
Investors, Recent wins, In their words, In the news, and the key-stats band (`keyStats`) are switched **off** in `config.js → features`. Turn each on only when it has real, permission-cleared entries. See [CONTENT-GUIDE.md](CONTENT-GUIDE.md#turn-sections-on-or-off).

## 2. Setup

- [ ] **Forms.** On Netlify: enable form detection, set `formProvider: "netlify"`, and add email notifications for the *inquiry* and *urgent* forms. See [DEPLOYMENT.md](DEPLOYMENT.md#forms).
- [ ] Send one test submission from **each** role on the Contact page and confirm it arrives
- [ ] Test the newsletter sign-up in the footer
- [ ] *(Optional)* Booking link → `config.js` → `bookingUrl` (Calendly, Cal.com…)
- [ ] *(Optional)* Analytics → `config.js` → `cloudflareAnalyticsToken` (free) or `plausibleDomain` (paid)
- [ ] All accounts created under a Dexter Sports Co. login and billed to the company. See [COSTS-AND-ACCOUNTS.md](COSTS-AND-ACCOUNTS.md)
- [ ] **Privacy policy:** have counsel review `privacy.html`, fill in the named providers, set the "Last updated" date, and remove the template notice
- [ ] Confirm the toolkit PDF in `assets/docs/` is the current edition

## 3. Pre-launch QA

- [ ] Set `showDrafts: false` in `config.js`
- [ ] Browse every page: no yellow highlights, no "[brackets]" visible anywhere
- [ ] Open the browser console (F12) on each page: no `[Dexter Sports] placeholder` warnings
- [ ] Check on a phone: menu opens and closes, forms are usable, nothing scrolls sideways
- [ ] Click every button and link once
- [ ] Share a page link in a text message or on LinkedIn and confirm the preview image appears
- [ ] Update `sitemap.xml` if any pages were added or removed
- [ ] After deploying, confirm `/_strategy/README.md` returns 404 on the live site

## 4. Go live

- [ ] Deploy (see [DEPLOYMENT.md](DEPLOYMENT.md))
- [ ] Point the domain from Wix to the new host
- [ ] Confirm HTTPS works on both `dextersportsco.com` and `www.dextersportsco.com`
- [ ] Submit `https://www.dextersportsco.com/sitemap.xml` in Google Search Console
- [ ] Update the Google Business Profile, LinkedIn, and Instagram links if they changed
- [ ] Keep the Wix plan for about 2 weeks after cutover, then cancel it

## 5. After launch (ongoing)

- [ ] Add an Insights article about once a month (see [CONTENT-GUIDE.md](CONTENT-GUIDE.md#publish-an-article))
- [ ] Review the stats and partner list each quarter
- [ ] Refresh the toolkit when NIL rules change, and update `toolkitEdition` in `config.js`
