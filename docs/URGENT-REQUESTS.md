# Urgent Requests: Playbook & Escalation

How the **Urgent Offer Help** page (`urgent.html`) works, how alerts reach Kim, and how to respond. Coaching contracts, NIL deals, and recruiting offers sometimes arrive with "exploding" deadlines. A fast, calm response is a core part of the service and a strong differentiator.

---

## 1. What the visitor experiences

1. Reaches the page from the red **Urgent offer?** link in the menu, the banner on the home page, the contact form (when they choose "I have an offer or deadline now"), the toolkit page, or the FAQ.
2. Fills in a short form: name, role, mobile, email, offer type, who made the offer, **response deadline**, best contact method, whether they have the full agreement, and a short description.
3. Sees their **priority tier** as soon as they enter the deadline.
4. After submitting, gets:
   - their tier and the response promise for that tier (set in `config.js`)
   - **Call Kim now** / **Text Kim** buttons for P1 and P2 (the text is pre-filled with the request summary)
   - an after-hours notice if it's outside urgent hours
   - a backup contact, if one is configured
   - immediate steps (don't sign, ask for time, gather documents), plus a copy-ready **extension request** message

## 2. Triage tiers

| Tier | Deadline | Default response promise (edit in `config.js → urgent.response`) |
|---|---|---|
| **P1** | Within 24 hours, or already passed | Response within 2 hours during urgent hours; visitor is prompted to call or text too |
| **P2** | Within 72 hours | Same-day response |
| **P3** | More than 72 hours | Within one business day |

Tiers are calculated in the visitor's browser and included in the submission: `priority`, `hours_to_deadline`, `deadline_readable`, `received_in_urgent_hours`. The email subject reads, for example:
`[URGENT P1 · 10h] Coaching contract or job offer — Jane Smith`

> ⚠️ **Kim must approve the response promises and urgent hours before launch.** Only promise what can be kept every time. Missing a promised window is worse than promising a longer one.

## 3. How alerts reach Kim (escalation ladder)

Set up at least levels 1–2 before launch. Levels 3–4 are optional upgrades.

| Level | Mechanism | Cost | Setup |
|---|---|---|---|
| **1. Dedicated email alert** | Netlify form **"urgent"** emails Kim with the `[URGENT P1…]` subject | $0 | Netlify → Forms → *urgent* → Form notifications → Email → kim@dextersportsco.com |
| **2. Phone notification** | A mail rule makes `[URGENT` emails break through: Gmail "important" plus a VIP / priority notification on the phone; Outlook "Focused" plus a phone notification rule | $0 | Create a filter: Subject contains `[URGENT` → star / mark important / never send to spam. On the phone, allow notifications for that label or VIP sender. |
| **3. Visitor-initiated call/text** | Built into the page for P1 and P2: one-tap call and a pre-filled text to Kim's number | $0 | Nothing to set up. Make sure the phone in `config.js` can receive texts |
| **4. Automated SMS / team alert** *(optional)* | Netlify outgoing webhook, or `urgent.formEndpoint`, sends to Zapier/Make, which texts Kim (and/or a backup), or posts to Slack | ~$0–20/mo | Zapier: trigger "Netlify: New Form Submission (urgent)" → filter `priority` is P1 → SMS by Zapier / Twilio → Kim. Add a second step 30 min later to text the backup if nobody has marked it handled |

**Backup coverage:** add a backup contact in `config.js → urgent.backup` (e.g., a partner attorney or associate) for travel, illness, or vacations. When Kim is unavailable for more than a day, either set a backup or temporarily change `urgent.response` to reflect the slower timing.

## 4. Response runbook (for Kim / team)

**Within the promised window:**
1. **Acknowledge.** Call or text using the requester's preferred method: "Got your request about [offer]. I'm on it." Note the time.
2. **Stabilize the deadline.** Help them send the extension request (the page already gave them a template). Most legitimate offers allow 48–72 hours for review.
3. **Get the documents securely.** Ask for the full agreement and attachments via a secure method (Google Drive/OneDrive share to kim@ with link expiry, or a client portal), *not* the website or open email if sensitive.
4. **Triage the substance.** Use the toolkit's Offer Snapshot and Questions to Bring to Counsel. Flag perpetual or irrevocable rights, broad exclusivity, buyouts, and personal guarantees.
5. **Bring in counsel early** for anything legal. Call the attorney referral bench. *Dexter Sports Co. LLC is not a law firm.*
6. **Decide on the engagement.** If this becomes representation, follow the standard intake and written-agreement process, including the conflict-of-interest check.
7. **Log it.** Record the request time, response time, outcome, and whether the promise was met. Review monthly.

**Conflict check before advising:** if Dexter represents anyone on the other side (e.g., the hiring school's search, or a coach and an athlete in the same deal), disclose and get written consent, or decline and refer out. See the conflict-of-interest policy (to be written; tracked in LAUNCH-CHECKLIST.md).

## 5. Testing (monthly, 5 minutes)

1. Submit a test on `urgent.html` with a deadline about 6 hours out and the name "TEST – ignore".
2. Confirm: the tier shows P1, the email arrives with an `[URGENT P1` subject, the phone notification fires, and (if set up) the SMS arrives.
3. Delete the test submission in Netlify → Forms.

## 6. Settings reference (`assets/js/config.js → urgent`)

| Key | What it does |
|---|---|
| `formEndpoint` | Optional separate endpoint (Formspree form, Zapier/Make webhook). Blank = Netlify form "urgent" |
| `hours` | Urgent-hours window, days (0 = Sunday), time zone, and the label shown to visitors |
| `response.P1/P2/P3` | The promise shown after submission. **Kim approves** |
| `allowText` | Show the "Text Kim" button (set `false` if the number can't receive texts) |
| `backup` | Name, phone, email, and note for a backup contact. Leave name blank to hide |
