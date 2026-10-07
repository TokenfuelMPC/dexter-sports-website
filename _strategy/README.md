# _strategy/ — INTERNAL ONLY

Internal working material for Kim Dexter and the Dexter Sports Co. team. **Not part of the public website.**

| File | What it is |
|---|---|
| `dexter-competitive-landscape.md` | Competitive landscape & strategy (Oct 2026): market map, competitor financials, pricing benchmarks, positioning, threats, 90-day plan |
| `comps.csv` | Data behind every table in the landscape doc |
| `dexter-comp-slides.pptx` | Investor-deck slides (positioning map + comp table). **Working draft, expect changes.** Regenerate from the script after edits |
| `build-comp-slides.js` | Script that generates the slides (`npm i pptxgenjs && node build-comp-slides.js`) |

## Keeping this folder private
The website deploys from the repository root, so hosts must be told not to serve this folder:
- **GitHub Pages:** folders starting with `_` are skipped automatically (Jekyll default). Don't add a `.nojekyll` file.
- **Netlify:** the root `_redirects` file returns 404 for `/_strategy/*`.
- **Cloudflare Pages / Vercel / others:** these don't honor that rule. Exclude the folder from the upload, or move it to a separate private repo before connecting the host. See docs/DEPLOYMENT.md.

After any deploy, confirm `https://<site>/_strategy/README.md` returns **404**.

## How the website uses this material
- Positioning: two co-equal specialties. **Coach representation** (women coaches & assistants, all sports, mid-major / D-II / D-III) and **NIL guidance** for athletes and families (per Oct 2026 direction, NIL remains a major focus) → home hero lanes, bento, services order
- Founder edge table → home "Why Dexter" and About "Built for this work"
- Women-in-coaching statistics → home "Why we exist" section, cited with asterisk footnotes. Verified Oct 7, 2026 against The Collective Think Tank (2026) via WIA Report; the earlier 41% / ~7% figures were corrected in the doc and slides
- **Deliberately NOT on the public site:** fees (3%, $6K floor), competitor names and financials, fundraising and valuation talk, NFLPA plans, and the school-paid search desk (still being modeled; a draft service entry exists, hidden at launch)
