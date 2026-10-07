# Launch Checklist

Everything that needs to happen between "built" and "live." Work through it top to bottom. Items marked **Kim** need her input; the rest can be handled by whoever manages the site.

> **Find every placeholder at once:** with `showDrafts: true`, browse the site; yellow highlights and "Placeholder" badges mark everything left. Developers can also search the project for `class="ph"` and `draft: true`.

---

## 1. Content from Kim

### Bio & story: `about.html`, `index.html`
Kim's career, education, and credentials were added from her LinkedIn (Oct 2026): CFRE; Juris Master (FSU, Legal Risk Management, Contracting & Compliance); B.S. Howard + D-I volleyball; roles at Population Connection, Black Women's Health Imperative, University of Arkansas, The Arc of Southwest Georgia, and The Independence Fund.
- [ ] **Kim:** Review the About page and timeline. Approve naming each past employer, and edit the one-line role descriptions (they were written from job titles only).
- [ ] **Kim:** Year Dexter Sports Co. was founded (timeline, "[Year]–Present")
- [ ] **Kim:** The turning point: why she started Dexter Sports Co. (About, placeholder paragraph)
- [ ] **Kim:** How she works today, and what she won't do (About, placeholder paragraph)
- [ ] **Kim:** *(Optional)* One fundraising result she's proud of (About)
- [ ] **Kim:** Approve or rewrite the suggested pull quote on the home page ("The first offer changes the conversation…")
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
- [ ] Verify the four women-in-coaching figures on the home page (41%, ~7%, ~2/3, 5–6%) against the latest NCAA demographics data and WeCOACH, and update the numbers and source line if needed
- [ ] **Kim:** Decide on the school-paid "For Athletic Departments" search desk. It exists as a draft service (hidden at launch). Publish only once it's decided *and* the conflict policy below exists.
- [ ] **Kim:** Write the conflict-of-interest policy, then replace the placeholder FAQ "How do you handle conflicts of interest?" (required before any search-desk or NFLPA work)
- [ ] **Counsel:** Confirm nothing on the public site counts as soliciting investment for a private raise. The Partners page lists investors but intentionally doesn't invite investment.
- [ ] Keep fees (3%, $6K floor), competitor names and financials, NFLPA plans, and fundraising details **off** the public site unless Kim decides otherwise

### Toolkit wall, newsletter & urgent requests
- [ ] **Kim:** Approve the urgent-request response promises and urgent hours (`config.js → urgent`). Only promise what can be kept every time.
- [ ] **Kim:** Name a backup contact for urgent requests (optional, recommended)
- [ ] Set up urgent alerts, at least levels 1–2 in [URGENT-REQUESTS.md](URGENT-REQUESTS.md) (email + phone notification), and run the test
- [ ] Create the Kit account, forms, `role` field, and toolkit incentive email; set `newsletter` in `config.js`
- [ ] Choose `toolkitGate`: `"reveal"` (recommended to start) or `"email"`
- [ ] Register once on the live toolkit page; confirm the subscriber in Kit and that the download or email works
- [ ] **Kim:** Plan the first monthly newsletter (Kit → Broadcasts) before the list starts growing

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
