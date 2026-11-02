# Dexter Sports Co. Website Handoff Guide for Kim

*Updated November 2, 2026. Prepared by Marcus Martin.*

This guide moves the live website at **www.dextersportsco.com** into accounts Kim owns. It takes about 1–2 hours, and everything here is free. Start with web hosting (Step 1), then do Steps 2–4. The checklist in Step 6 shows who does what, in order. Steps 1–4 give Kim full control of today's site, even if she later switches to a new template (see the last section).

**Live today:**
- **Hosting:** Netlify (project *dexter-sports*) in Marcus's team. Kim launches a fresh copy in her own free account, and Marcus releases the domain to it. No team invite is needed.
- **Code:** a private GitHub repository in Marcus's account. A full copy also comes as a zip.
- **Forms:** the Contact and Urgent forms email **kim@dextersportsco.com**.
- **Domain:** dextersportsco.com is registered with Wix, and its DNS is managed in Wix.
- **Email:** the mailbox runs on Google Workspace and is untouched by any of these steps.

| Account | What it does | Cost | When |
|---|---|---|---|
| GitHub | Stores the code, with every change saved and undoable | Free | Right after hosting (Step 2) |
| Netlify | Hosting, HTTPS, form submissions | Free | First (Step 1) |
| Google Workspace | kim@dextersportsco.com mailbox | Existing | No action |
| Wix (domain + DNS) | Points the domain at Netlify and email at Google | Domain renewal (due May 26, 2027) | Check now (Step 4) |
| Password manager | Holds all logins | Free–$3/mo | Now |
| Kit (newsletter) | Saves toolkit and newsletter sign-ups | Free to 10,000 subscribers | Only if keeping this site (Step 5) |

Use kim@dextersportsco.com for every account. Store each login in a password manager, and turn on two-factor authentication everywhere.

---

## Step 1: Move web hosting to your own Netlify account (about 30 minutes)

Kim launches a fresh copy of the site in her own free Netlify account. Then, at an agreed time, Marcus releases the domain and Kim attaches it to her copy.

Wix needs no changes, because Kim's project takes over the same name, *dexter-sports*. Pick a quiet time for the switch: the site may show a security warning for 5–15 minutes while Netlify issues its certificate.

**Create your account**
1. Sign up at **netlify.com** with your email (kim@dextersportsco.com) on the Free plan.
2. Name the team *Dexter Sports Co*.
3. Turn on two-factor authentication.

**Launch your copy (Kim, any time before the switch)**
1. Unzip **dexter-sports-website-code.zip**. Inside is a folder named *dexter-sports-website*, with `index.html` at its top level.
2. In Netlify, go to **Projects → Add new project → Deploy manually** and drag that folder onto the page. You get a temporary address, such as `random-name-123.netlify.app`.
3. Go to **Forms → Enable form detection**. Then in **Deploys**, drag the folder in again so Netlify registers the *inquiry* and *urgent* forms.
4. Visit the temporary address and click through the Home, About, and Contact pages.
5. Set up the form email alert now (Step 3, part 2).

**Switch over (Kim and Marcus together, about 15 minutes)**
1. **Marcus:** in the old project's **Domain management**:
   - remove **www.dextersportsco.com** and **dextersportsco.com**;
   - then, under **Project configuration → General → Project details → Change project name**, rename it `dexter-sports-old`. This frees up the name.
2. **Kim:** go to **Project configuration → General → Project details → Change project name** and enter `dexter-sports`. Your address becomes `dexter-sports.netlify.app`, exactly where Wix already points.
3. **Kim:** go to **Domain management → Add a domain**:
   - enter **www.dextersportsco.com**, and accept adding **dextersportsco.com** too (keep www as the primary);
   - under **HTTPS**, click **Verify DNS configuration**, then **Provision certificate** if it hasn't started on its own.
4. **Kim:** open https://www.dextersportsco.com and https://dextersportsco.com (both should show a padlock), then send the two test submissions (Step 3, part 4).
5. **Marcus:** download the old form submissions (**Forms → each form → Download as CSV**) and send them to Kim. After one week, delete *dexter-sports-old*.

**If the name *dexter-sports* isn't available:** use any name, then in Wix change the **www** CNAME to `<your-name>.netlify.app`. The A record (75.2.60.5) stays the same.

Until Step 2 links your GitHub, publish updates by dragging the folder into **Deploys**. After Step 2, changes publish automatically.

## Step 2: GitHub: take ownership of the code (about 15 minutes)

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
7. **Connect Netlify to your repository (automatic publishing):**
   1. In Netlify, go to **Project configuration → Build & deploy → Continuous deployment → Link repository → GitHub**. Authorize Netlify (only select repositories is fine).
   2. Settings:
      - Branch: `main`
      - Base directory: blank
      - Build command: blank
      - Publish directory: `.`
   3. Test it: edit README.md on GitHub and commit. A new deploy should appear in Netlify within a minute.
   4. In GitHub, go to **Settings → Deploy keys** and **Settings → Webhooks**. Delete the older Netlify entries left from Marcus's project, and keep the newest.

## Step 3: Email in Netlify (about 10 minutes)

Netlify does **not** host the mailbox. kim@dextersportsco.com stays on Google Workspace. In Netlify, "email" means the login address and the form alerts.

1. **Account email:** your login address receives security, billing, and usage notices. To change it, go to **User settings → General → Email**.
2. **Form alerts:**
   1. Go to **Project configuration → Notifications → Emails and webhooks → Form submission notifications**.
   2. A new project starts with no alerts. Click **Add notification → Email notification → Any form → kim@dextersportsco.com** and save.
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

Nothing in Wix changes, because your project takes the name *dexter-sports* in Step 1. Confirm the following:

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

- **If your project couldn't take the name *dexter-sports*:** update only the www CNAME to your project's Netlify address.
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

## Step 6: Handoff checklist (who does what, in order)

Work top to bottom.
- **KIM** marks your tasks.
- **MARCUS → after …** marks a task Marcus does once you've finished the step named. Send him a quick note each time you reach one.

Phase 1 moves web hosting first. The site stays live, apart from a short HTTPS gap during the switch.

**Phase 0: Get ready**

- [ ] **MARCUS:** send Kim this guide (Word and .md) and a Google Drive link to the code zip
- [ ] **KIM:** set up a password manager (Bitwarden or 1Password)

**Phase 1: Move web hosting (Netlify), Step 1**

- [ ] **KIM:** create a Netlify account with kim@dextersportsco.com, name the team *Dexter Sports Co*, and turn on two-factor authentication
- [ ] **KIM:** launch your copy by dragging in the unzipped folder, turn on form detection, redeploy, and add the form email alert
- [ ] **KIM:** check the temporary address works, then **agree a switch time with Marcus**
- [ ] **MARCUS → at the agreed time:** remove **www.dextersportsco.com** and **dextersportsco.com** from his old project, rename it `dexter-sports-old`, and tell Kim it's done
- [ ] **KIM → right after Marcus:** rename your project `dexter-sports`, add both domains, and confirm HTTPS (Step 1, "Switch over")
- [ ] **KIM:** check that https://www.dextersportsco.com loads with a padlock, create the Gmail filters, and send both test submissions (Step 3)
- [ ] **MARCUS → after Kim confirms the site works:** send Kim the old form submissions (CSV)

**Phase 2: Move the code (GitHub), Step 2**

- [ ] **KIM:** create a GitHub account with kim@dextersportsco.com, turn on two-factor authentication, and send Marcus your username
- [ ] **MARCUS → after Kim sends her username:** decide whether the private `_strategy/` folder goes to Kim (delete it first if not), then transfer the repository to her
- [ ] **KIM:** accept the transfer email within one day
- [ ] **KIM:** link your Netlify project to the repository and make a test edit (Step 2, item 7)
- [ ] **KIM:** in GitHub, delete the older Netlify deploy key and webhook, then tell Marcus it's done

**Phase 3: Close out Marcus's access**

- [ ] **MARCUS → one week after the switch:**
   - delete *dexter-sports-old* from his Netlify team;
   - delete the old Vercel preview (*dexter-sports-preview*);
   - remove any saved GitHub or Netlify links to the project on his computer.
- [ ] **KIM:** confirm Marcus no longer appears in GitHub **Settings → Collaborators**. He was never in your Netlify team.

**Phase 4: Domain (Wix), Step 4**

- [ ] **KIM:** confirm dextersportsco.com is in your Wix account, turn on auto-renew and two-factor authentication, and check that the DNS matches the table

**Phase 5: Optional, and content only you can supply**

- [ ] **KIM:** connect Kit so sign-ups are saved, or wait for the new template (Step 5)
- [ ] **KIM:** send a high-resolution headshot (at least 1200 × 1500 px)
- [ ] **KIM:** approve the reworded About-page sentence ("representing coaches and athletes across all sports, with a specialty in uplifting women in sport")
- [ ] **KIM:** confirm the urgent-offer hours: same day if received by noon ET, Monday–Friday; optionally name a backup contact
- [ ] **KIM:** have your attorney review the privacy policy
- [ ] **KIM:** cancel the Wix *website plan* last, once all of the above works (keep the domain)

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
