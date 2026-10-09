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
