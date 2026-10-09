# Domain setup: pointing dextersportsco.com at Netlify (DNS managed in Wix)

**Goal:** `www.dextersportsco.com` and `dextersportsco.com` load the new site on Netlify, while Kim's email (Google Workspace) keeps working.
**Time:** about 10 minutes in Wix, then 5–60 minutes for DNS to update.
**Who:** someone who can log in to the Wix account that owns dextersportsco.com.

Netlify is already set up for the domain: project **dexter-sports**, with `www.dextersportsco.com` as the primary address and `dextersportsco.com` as an alias. The only remaining work is in Wix.

---

## 1. Current records (checked Oct 9, 2026)

The domain uses Wix nameservers (`ns4.wixdns.net`, `ns5.wixdns.net`), so DNS records are edited in Wix. **Don't change the nameservers.**

| Type | Host | Value now | Action |
|---|---|---|---|
| A | `@` (dextersportsco.com) | 185.230.63.107 · 185.230.63.171 · 185.230.63.186 (Wix) | **CHANGE** to `75.2.60.5` |
| CNAME | `www` | `cdn3.wixdns.net` (Wix) | **CHANGE** to `dexter-sports.netlify.app` |
| MX | `@` | `aspmx.l.google.com` (priority 10) | Keep (email) |
| MX | `@` | `alt1.aspmx.l.google.com` (20) | Keep |
| MX | `@` | `alt2.aspmx.l.google.com` (30) | Keep |
| MX | `@` | `alt3.aspmx.l.google.com` (40) | Keep |
| MX | `@` | `alt4.aspmx.l.google.com` (50) | Keep |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | Keep (email) |
| TXT | `@` | `google-site-verification=tTbH…` | Keep (Google) |

There are no AAAA or CAA records today. If any appear on `@` or `www`, delete them, because they would conflict with Netlify.

## 2. Records after the change

| Type | Host | Value | TTL |
|---|---|---|---|
| A | `@` | `75.2.60.5` (only this one value) | 1 hour (or Wix default) |
| CNAME | `www` | `dexter-sports.netlify.app` | 1 hour (or Wix default) |

Every other record stays exactly as it is.

## 3. Step by step in Wix

1. Sign in at **wix.com** → profile menu (top right) → **Domains**.
2. Next to **dextersportsco.com**, click **⋯ (Domain Actions)** → **Manage DNS Records**.
3. **A record (host `@`):**
   - Click **Edit** on the A record row.
   - Delete the three `185.230.63.x` values, so that only **one** value remains.
   - Enter **`75.2.60.5`** → **Save**.
4. **CNAME (`www`):**
   - Click **Edit** on the `www` CNAME row.
   - Replace `cdn3.wixdns.net` with **`dexter-sports.netlify.app`** (no `https://` and no trailing slash) → **Save**.
5. **Leave the MX and TXT sections alone.**
6. If Wix warns that the domain won't point to the Wix site any more, confirm. That's the intended result.

**If the A or `www` rows are greyed out or not editable**, the domain is still connected to the old Wix site:

1. In **Domains → ⋯ → Assign to a different site** (or **Disconnect from site**), choose to keep the domain in the account but not connected to any site. **Don't** choose "Remove" or "Transfer away".
2. Go back to **Manage DNS Records** and repeat steps 3–4.

## 4. Check that it worked

1. **DNS:** wait 5–60 minutes. Then, at https://dnschecker.org:
   - check the **A** record for `dextersportsco.com`; it should show `75.2.60.5`;
   - check the **CNAME** for `www.dextersportsco.com`; it should show `dexter-sports.netlify.app`.
2. **HTTPS:**
   - In Netlify → **dexter-sports → Domain management → HTTPS**, the certificate is issued automatically once DNS resolves. If it still says "waiting" after an hour, click **Verify DNS configuration**, then **Provision certificate**.
   - Then turn on **Force HTTPS** if it isn't already on.
3. **Browse:** open both https://dextersportsco.com and https://www.dextersportsco.com. Both should show the new site with a padlock, and the bare domain should redirect to `www`.
4. **Email:** send a test email to kim@dextersportsco.com from an outside account and confirm it arrives.
5. **Forms:** submit one test each on `/contact.html` and `/urgent.html` (name "TEST – ignore"), and confirm the notifications reach kim@.

## 5. After launch

- **Keep the domain registration** (if it's registered with Wix) on auto-renew. The domain is separate from the Wix website plan.
- After the new site has been live for about a week, the **Wix Premium site plan** can be cancelled. Check first whether the domain came "free" with that plan; if so, it will renew at Wix's normal domain price, or you can transfer it to a cheaper registrar later (WEBMASTER-GUIDE §2a).
- Optional, for better email deliverability, in Google Workspace admin: set up DKIM (Gmail → Authenticate email) and add a DMARC TXT record: host `_dmarc`, value `v=DMARC1; p=none; rua=mailto:kim@dextersportsco.com`. Neither exists today.

## 6. Undo (back to the old Wix site)

In **Manage DNS Records**:

1. Set the `@` A record back to `185.230.63.107`, `185.230.63.171`, and `185.230.63.186`.
2. Set the `www` CNAME back to `cdn3.wixdns.net`.
3. Re-connect the domain to the Wix site if it was disconnected.

Email is unaffected either way.

## 7. Managing DNS after cancelling Wix

Cancelling the **Wix site plan** (Premium) does **not** cancel the **domain**. They are separate purchases. As long as the domain is registered with Wix, DNS stays editable in Wix → Domains → Manage DNS Records, even with no Wix site or plan. The domain renews yearly (currently due **May 26, 2027**). If it came "free for one year" with the Premium plan, the renewal is billed at Wix's regular domain price.

To leave Wix completely, choose one of these:

| Option | Cost per year | Where you manage DNS | Effort |
|---|---|---|---|
| A. Keep the domain at Wix | Wix's domain renewal price | Wix dashboard | None |
| **B. Transfer to Cloudflare Registrar (recommended)** | about $10–11 (at-cost .com pricing, no markup) | Cloudflare dashboard (free) | About 30 minutes, plus up to 5 days of waiting |
| C. Transfer to Porkbun or Namecheap | about $11–15 | That registrar's dashboard | About 30 minutes, plus up to 5 days of waiting |

### Option B: transfer to Cloudflare (Kim's own account)
1. **Create a Cloudflare account** with kim@dextersportsco.com (Free plan) → **Add a domain** → `dextersportsco.com` → **Free**.
2. **Check the imported DNS records.** Cloudflare copies the existing records; make sure all of these are present:
   - A `@` → `75.2.60.5`, set to **DNS only (grey cloud)**. Netlify serves HTTPS itself, so don't proxy.
   - CNAME `www` → `dexter-sports.netlify.app`, set to **DNS only (grey cloud)**.
   - All 5 Google MX records, the SPF TXT record, and the google-site-verification TXT record.
3. **Switch the nameservers in Wix:** Domains → ⋯ → **Advanced → Edit name servers**, and replace `ns4/ns5.wixdns.net` with the two Cloudflare nameservers shown. Wait until Cloudflare shows the domain as **Active** (usually within an hour). DNS now runs on Cloudflare.
4. **Unlock the domain and get the transfer code in Wix:** Domains → ⋯ → **Transfer away from Wix**. Wix emails the authorization (EPP) code.
5. **Start the transfer in Cloudflare:** **Domain Registration → Transfer domains** → select `dextersportsco.com` → paste the code → pay for one year (this is added on top of the current expiry date). Approve the confirmation email if one arrives. Transfers finish within 5 days.
6. **Check:** the site and email keep working throughout, because the DNS records never change. Afterward, the domain only needs to be managed from Cloudflare.

Notes:
- A domain can't be transferred within 60 days of registration or an ownership change. That window passed in summer 2026.
- Turn on **auto-renew** at the new registrar.
- Keep the Cloudflare login in Kim's password manager. Whoever controls this account controls the website **and** the email routing.
