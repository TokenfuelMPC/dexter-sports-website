/* ==========================================================================
   SITE SETTINGS — the one place to change contact details, integrations,
   and launch switches. No code knowledge needed: edit the values in quotes.
   See docs/CONTENT-GUIDE.md ("Site settings") for what each one does.
   ========================================================================== */
window.DSC_CONFIG = {
  /* ---- Business details (shown in header, footer, contact page) ---- */
  businessName: "Dexter Sports Co.",
  legalName: "Dexter Sports Co. LLC",
  dba: "Dexter Sports Management",
  founder: "Kim Dexter",
  email: "kim@dextersportsco.com",
  phone: "803-203-5435",
  location: "Charlotte, NC",
  siteUrl: "https://www.dextersportsco.com",

  /* ---- Social links (leave "" to hide an icon) ---- */
  social: {
    instagram: "",
    linkedin: "",
    x: "",
    tiktok: ""
  },

  /* ---- Forms --------------------------------------------------------
     formEndpoint: where the "Start a conversation" form is sent.
       Works with Formspree, Basin, Getform, or any endpoint that accepts
       a JSON POST. Example: "https://formspree.io/f/abcdwxyz"
       If left "", the form falls back to opening the visitor's email app
       pre-filled to the address above (nothing is lost, just less smooth).
     newsletterEndpoint: same idea for the email sign-up in the footer.
       If "", the sign-up uses formEndpoint with a "newsletter" tag.     */
  formEndpoint: "",
  newsletterEndpoint: "",

  /* ---- Scheduling --------------------------------------------------
     A Calendly / Cal.com / SavvyCal link. If set, a "Book a call" button
     appears on the contact page and after the intake form is sent.     */
  bookingUrl: "",

  /* ---- Analytics ---------------------------------------------------
     Paste a Plausible domain (privacy-friendly, no cookie banner needed)
     e.g. "dextersportsco.com". Leave "" for no analytics.              */
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
