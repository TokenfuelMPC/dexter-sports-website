# Launch Checklist

Everything that needs to happen between "built" and "live." Work through it top to bottom. Items marked **Kim** need her input; the rest can be handled by whoever manages the site.

> **Find every placeholder at once:** with `showDrafts: true`, browse the site; yellow highlights and "Placeholder" badges mark everything left. Developers can also search the project for `class="ph"` and `draft: true`.

---

## 1. Content from Kim

### Bio & story: `about.html`, `index.html`
- [ ] **Kim:** Career since Howard: roles, organizations, years (About page, paragraph 2)
- [ ] **Kim:** The turning point: why she started Dexter Sports Co. (About, paragraph 3)
- [ ] **Kim:** How she works today, and what she won't do (About, paragraph 4)
- [ ] **Kim:** One-to-two-sentence career summary for the home page founder block
- [ ] **Kim:** Approve or rewrite the suggested pull quote on the home page ("The first offer changes the conversation…")
- [ ] **Kim:** Confirm or edit the Howard details now on the site: *Charlotte native; junior college, then NCAA Division I volleyball at Howard University (2005 roster).*

### Headshot
- [ ] **Kim:** Professional portrait, vertical, at least 1200×1500 px. Save as `assets/img/kim-dexter.jpg`. The site picks it up automatically on Home and About.

### Lists: `assets/js/content.js`
- [ ] **Kim:** `stats`: four real numbers (years, clients, relationships, value). Remove any she isn't comfortable publishing.
- [ ] **Kim:** `timeline`: career highlights, plus her Howard degree and field of study
- [ ] **Kim:** `credentials`: athlete-agent registrations, associations, boards. *(Many states require athlete agents to register; families are told to verify credentials. Listing them builds trust.)*
- [ ] **Kim:** `network`: confirm each of the six "Access" categories is accurate; edit or delete as needed
- [ ] **Kim:** `investors`: names, one-line blurbs, logos, and links, **with each investor's written OK to be listed**
- [ ] **Kim:** `partners`: same, with each partner's OK
- [ ] **Kim:** `testimonials`: real quotes, **with written permission** from each person (for minors, from a parent/guardian)
- [ ] Third article in `insights`: write it or delete the placeholder entry

### Claims to confirm
- [ ] **Kim:** "Kim reviews every inquiry and will be in touch within two business days" (Contact page, home CTA, form success message). Adjust if needed.
- [ ] **Kim:** Fee language in the FAQ ("explained in writing before any agreement")
- [ ] **Kim:** Social media profile URLs → `config.js` → `social`

## 2. Setup

- [ ] **Form endpoint.** Create a Formspree (or similar) form, send submissions to kim@dextersportsco.com, and paste the endpoint into `config.js` → `formEndpoint`. See [DEPLOYMENT.md](DEPLOYMENT.md#forms).
- [ ] Send one test submission from **each** role on the Contact page and confirm it arrives
- [ ] Test the newsletter sign-up in the footer
- [ ] *(Optional)* Booking link → `config.js` → `bookingUrl` (Calendly, Cal.com…)
- [ ] *(Optional)* Analytics → `config.js` → `plausibleDomain`
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
