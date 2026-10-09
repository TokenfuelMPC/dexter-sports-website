/* ==========================================================================
   SITE SETTINGS: the one place to change contact details, integrations,
   and launch switches. No code knowledge needed: edit the values in quotes.
   See docs/CONTENT-GUIDE.md ("Site settings") and docs/COSTS-AND-ACCOUNTS.md.
   ========================================================================== */
window.DSC_CONFIG = {
  /* ---- Business details (shown in header, footer, contact page) ---- */
  businessName: "Dexter Sports Co.",
  legalName: "Dexter Sports Co. LLC",
  dba: "Dexter Sports Management",
  founder: "Kim Dexter",
  email: "kim@dextersportsco.com",
  phone: "803-203-5435",
  location: "Charlotte, NC",          // headquarters (used in structured data, not repeated on pages)
  serviceArea: "Serving clients nationwide",
  serviceAreaLong: "Headquartered in Charlotte, NC, a central hub on the East Coast, we serve clients from the Mid-Atlantic down through the Northeast and Southeast, and across the Midwest and West Coast.",
  siteUrl: "https://www.dextersportsco.com",

  /* ---- Social links (leave "" to hide an icon) ---- */
  social: {
    instagram: "",
    linkedin: "",
    x: "",
    tiktok: ""
  },

  /* ---- Contact (intake) form ---------------------------------------
     formProvider:
       "netlify"  = Netlify Forms (free, unlimited on Netlify hosting).
                    Submissions appear in Netlify > Forms and can be emailed
                    to Kim. Recommended when the site is hosted on Netlify.
       "endpoint" = POST JSON to formEndpoint (Formspree, Basin, etc.).
       ""         = fallback: opens the visitor's email app, pre-filled.  */
  formProvider: "",
  formEndpoint: "",

  /* ---- Monthly newsletter + toolkit registration wall -----------------
     provider:
       "kit"       = Kit (kit.com). RECOMMENDED: free up to 10,000 subscribers.
                     Paste the numeric form IDs from Kit > Grow > Landing
                     Pages & Forms (the number in the form's URL).
                     kitToolkitFormId    = form used by the toolkit wall
                                           (turn on its "incentive email" to
                                           deliver the PDF by email)
                     kitNewsletterFormId = footer sign-up (may be the same)
       "mailchimp" = Mailchimp. Paste the "action" URL from an embedded
                     form, e.g. https://xxxx.us21.list-manage.com/subscribe/post?u=...&id=...
                     Optional tag IDs per source in mailchimpTags.
       "endpoint"  = POST JSON {email, first_name, role, source} to endpoint
                     (Zapier/Make webhook, Formspree, etc.)
       ""          = not connected yet (sign-ups are NOT saved; console warns)
     Full setup: docs/DEPLOYMENT.md#newsletter                           */
  newsletter: {
    provider: "",
    kitToolkitFormId: "",
    kitNewsletterFormId: "",
    mailchimpUrl: "",
    mailchimpTags: { toolkit: "", newsletter: "", inquiry: "" },
    endpoint: ""
  },

  /* toolkitGate:
       "reveal" = visitor registers, then the download appears on the page
                  (remembered in their browser). Simple; a determined person
                  could still find the PDF link. RECOMMENDED to start.
       "email"  = visitor registers and the link arrives only by email
                  (Kit "incentive email" or a Mailchimp/automation welcome).
                  Strongest gate; verifies the email address.
       "off"    = no wall; anyone can download.                          */
  toolkitGate: "reveal",

  /* ---- Urgent offer requests (urgent.html) ---------------------------
     For live / exploding offers. Requests are triaged by time-to-deadline:
       P1 = deadline within 24h (or passed), P2 = within 72h, P3 = later.
     formEndpoint: optional SEPARATE endpoint so urgent requests can trigger
       louder alerts (e.g. its own Formspree form or a Zapier/Make webhook
       that texts Kim). Leave "" to use formProvider (Netlify form "urgent").
     cutoff: the same-day rule. Requests received before cutoff.hour on a
       business day (cutoff.days, 0 = Sunday) get a same-day response;
       anything later gets a response the next business day.
     response: the promise shown for each case.
     backup: optional second contact (e.g. a partner attorney) shown when
       a request is submitted. Leave name "" to hide.
     Playbook: docs/URGENT-REQUESTS.md                                    */
  urgent: {
    formEndpoint: "",
    cutoff: { hour: 12, days: [1, 2, 3, 4, 5], timezone: "America/New_York", label: "12:00 pm ET" },
    response: {
      sameDay: "Your request arrived before the 12:00 pm ET cutoff, so Kim will respond today.",
      nextDay: "Your request arrived after the 12:00 pm ET cutoff, so Kim will respond by the next business day."
    },
    allowText: true,
    backup: { name: "", phone: "", email: "", note: "" }
  },

  /* ---- SECTION SWITCHES ---------------------------------------------
     Turn whole sections on (true) or off (false). Hidden sections stay in
     the code with their content, so turning one back on is instant.
     investors    = "Backed by & built with" logo strip (home) + Investors
                    section (Partners page). Content: content.js → investors
     recentWins   = "Recent wins" (home). Content: content.js → wins
     testimonials = "In their words" (home). Content: content.js → testimonials
     press        = "In the news" (home). Content: content.js → press
     keyStats     = the 4-figure band under the home ticker and on About
                    (years, clients advised, relationships, value negotiated).
                    Content: content.js → stats
     Even when switched on, a section only appears once it has real
     (non-draft) entries in live mode.                                    */
  features: {
    investors: false,
    recentWins: false,
    testimonials: false,
    press: false,
    keyStats: false
  },

  /* ---- Home hero background video --------------------------------
     Muted, looping clips behind the home-page headline. Keep each clip
     under ~3 MB (720p, 8–15 s). desktop/mobile are playlists that crossfade.
     mirror: flip desktop clips horizontally so the athlete sits on the
     right, away from the headline. Credits: docs/DESIGN-SYSTEM.md#imagery */
  heroVideo: {
    enabled: true,
    desktop: ["assets/video/hero-volleyball.mp4", "assets/video/hero-volleyball-approach.mp4", "assets/video/hero-volleyball-fullbody.mp4", "assets/video/hero-volleyball-ball.mp4"],
    mobile: ["assets/video/hero-volleyball-mobile.mp4", "assets/video/hero-volleyball-hold-mobile.mp4", "assets/video/hero-volleyball-closeup-mobile.mp4", "assets/video/hero-volleyball-approach-mobile.mp4", "assets/video/hero-volleyball-fullbody-mobile.mp4", "assets/video/hero-volleyball-ball-mobile.mp4"],
    poster: "assets/video/hero-poster.jpg",
    mobilePoster: "assets/video/hero-poster-mobile.jpg",
    mirror: false   // framing is baked into the files (see brand-kit/video/README.md)
  },

  /* ---- Scheduling: Calendly / Cal.com link (free tiers work) ---- */
  bookingUrl: "",

  /* ---- Analytics (both optional) ------------------------------------
     cloudflareAnalyticsToken: free, cookieless page views (Cloudflare
       Web Analytics). RECOMMENDED for the lowest budget.
     plausibleDomain: paid, adds event tracking (registrations, inquiries). */
  cloudflareAnalyticsToken: "",
  plausibleDomain: "",

  /* ---- Downloads ---- */
  toolkitPdf: "assets/docs/before-you-sign-nil-toolkit.pdf",
  toolkitEdition: "October 2026 Edition",

  /* ---- LAUNCH SWITCH ------------------------------------------------
     true  = placeholder copy is highlighted yellow and placeholder
             entries (draft: true in content.js) are shown with a badge.
             Use while reviewing with Kim.
     false = placeholder entries are hidden and highlights are off.
             Set to false before going live (see docs/LAUNCH-CHECKLIST.md). */
  showDrafts: true
};
