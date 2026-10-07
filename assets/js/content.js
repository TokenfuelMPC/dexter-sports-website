/* ==========================================================================
   SITE CONTENT — lists that repeat across the site live here so they can be
   updated without touching page layouts.

   HOW TO EDIT
   - Each list is an array of { ... } entries. Copy an entry, paste it below,
     and change the text. Keep the commas between entries.
   - draft: true  = placeholder that still needs real information. Shown with
     a yellow "Placeholder" badge while config.showDrafts is true, hidden
     when it is false. Delete the line (or set false) once the entry is real.
   - Logos/images: put the file in assets/img/ and give the path, e.g.
     logo: "assets/img/partners/acme.svg". Leave "" to show initials instead.
   Full walkthrough: docs/CONTENT-GUIDE.md
   ========================================================================== */
window.DSC_CONTENT = {

  /* ---- Credibility numbers (home + about). Replace with real figures. ---- */
  stats: [
    { value: "[XX]+", label: "Years in sports business & athlete development", draft: true },
    { value: "[XX]",  label: "Athletes & coaches advised", draft: true },
    { value: "[XX]",  label: "Brand & institutional relationships", draft: true },
    { value: "[$X]M", label: "In partnership value negotiated", draft: true }
  ],

  /* ---- Services (services page + home). icon: shield | handshake | whistle | spark | compass | book ---- */
  services: [
    {
      id: "athletes",
      icon: "shield",
      title: "Athlete Representation",
      summary: "Advocacy for high school, college, and professional athletes, so opportunities move on the athlete's terms.",
      points: [
        "Opportunity sourcing and evaluation",
        "Offer review alongside your attorney and advisers",
        "Negotiation support and deal management",
        "Compliance coordination with school and association rules"
      ]
    },
    {
      id: "coaches",
      icon: "whistle",
      title: "Coach Representation",
      summary: "Career strategy and contract support for coaches building programs and their own professional brand.",
      points: [
        "Career planning and positioning",
        "Contract and compensation preparation",
        "Speaking, clinic, and media opportunities",
        "Reputation and personal-brand development"
      ]
    },
    {
      id: "nil",
      icon: "handshake",
      title: "NIL & Brand Partnerships",
      summary: "Structure name, image, and likeness deals that fit the athlete's goals, schedule, and future options.",
      points: [
        "Brand matching built on genuine fit",
        "Deliverables, usage rights, and exclusivity mapping",
        "Campaign workflow, records, and payment follow-up",
        "Pitch development for athlete-led partnerships"
      ]
    },
    {
      id: "families",
      icon: "compass",
      title: "Family Advisory",
      summary: "A steady guide for parents and guardians navigating recruiting, first offers, and long-term planning.",
      points: [
        "Family priorities and boundaries session",
        "Plain-language walk-through of offers",
        "Referrals to vetted attorneys, CPAs, and financial professionals",
        "Ongoing check-ins as opportunities grow"
      ]
    },
    {
      id: "brands",
      icon: "spark",
      title: "For Brands & Businesses",
      summary: "Connect with athletes and coaches whose values and audiences match your business, with clean, compliant execution.",
      points: [
        "Athlete and coach talent matching",
        "Campaign design and deliverable planning",
        "Disclosure and compliance-aware execution",
        "Local, regional, and collective partnerships"
      ]
    },
    {
      id: "education",
      icon: "book",
      title: "NIL Education & Workshops",
      summary: "Practical sessions for teams, schools, and parent groups, built on the Before You Sign toolkit.",
      points: [
        "Parent and athlete NIL workshops",
        "Team and booster-club sessions",
        "Custom materials for programs",
        "Free Before You Sign toolkit"
      ]
    }
  ],

  /* ---- Kim's network / access (home "Access" section). Confirm wording with Kim. ---- */
  network: [
    { title: "Collegiate athletics", text: "Working relationships with athletic departments, compliance offices, and coaching staffs.", draft: true },
    { title: "Brands & marketers", text: "Direct lines to regional and national brands, agencies, and NIL collectives.", draft: true },
    { title: "Legal & tax professionals", text: "A vetted referral bench of sports attorneys and CPAs for independent review.", draft: true },
    { title: "Wealth & financial planning", text: "Trusted advisers for athletes' first earnings and long-term planning.", draft: true },
    { title: "Media & content", text: "Producers, photographers, and outlets to tell the athlete's story well.", draft: true },
    { title: "Pro & coaching pathways", text: "Connections across professional, coaching, and front-office networks.", draft: true }
  ],

  /* ---- Kim's career highlights (about page timeline). REPLACE ALL. ---- */
  timeline: [
    { when: "[Year]–Present", title: "Founder, Dexter Sports Co.", text: "Founded Dexter Sports Co. to protect talent, shape opportunity, and help athletes and coaches build lasting value beyond the game." },
    { when: "[Year]–[Year]", title: "[Previous role, organization]", text: "[One or two sentences on what Kim led or achieved here.]", draft: true },
    { when: "[Year]–[Year]", title: "[Previous role, organization]", text: "[One or two sentences on what Kim led or achieved here.]", draft: true },
    { when: "2005", title: "NCAA Division I volleyball, Howard University", text: "Competed for the Howard Bison women's volleyball team as an upperclassman after starting her collegiate career at the junior-college level. She knows recruiting, transfers, and the student-athlete experience firsthand." },
    { when: "[Year]", title: "[Degree, Howard University / other education]", text: "[Degree and field of study, plus any certification or honor.]", draft: true }
  ],

  /* ---- Credentials / affiliations (about page). REPLACE ALL. ---- */
  credentials: [
    { title: "[Certification or registration]", text: "[e.g., state athlete-agent registration, professional association membership]", draft: true },
    { title: "[Professional association]", text: "[Membership or role]", draft: true },
    { title: "[Board or advisory seat]", text: "[Organization and role]", draft: true }
  ],

  /* ---- Investors (partners page + home logo strip). ---- */
  investors: [
    { name: "[Investor name]", type: "Lead investor", logo: "", url: "", blurb: "[One sentence on who they are and why they back Dexter Sports Co.]", draft: true },
    { name: "[Investor name]", type: "Investor", logo: "", url: "", blurb: "[One sentence on who they are and why they back Dexter Sports Co.]", draft: true },
    { name: "[Investor name]", type: "Advisor & investor", logo: "", url: "", blurb: "[One sentence on who they are and why they back Dexter Sports Co.]", draft: true }
  ],

  /* ---- Strategic partners. category examples: Legal, Financial, Brand, Media, Education ---- */
  partners: [
    { name: "[Partner name]", category: "Legal", logo: "", url: "", blurb: "[What this partner provides to Dexter Sports Co. clients.]", draft: true },
    { name: "[Partner name]", category: "Financial", logo: "", url: "", blurb: "[What this partner provides to Dexter Sports Co. clients.]", draft: true },
    { name: "[Partner name]", category: "Brand", logo: "", url: "", blurb: "[What this partner provides to Dexter Sports Co. clients.]", draft: true },
    { name: "[Partner name]", category: "Media", logo: "", url: "", blurb: "[What this partner provides to Dexter Sports Co. clients.]", draft: true }
  ],

  /* ---- Testimonials. Only publish with written permission from the person quoted. ---- */
  testimonials: [
    { quote: "[Short quote from an athlete family about working with Kim.]", name: "[Name]", role: "[Parent of a college athlete]", draft: true },
    { quote: "[Short quote from a coach about Kim's guidance.]", name: "[Name]", role: "[Head coach, program]", draft: true },
    { quote: "[Short quote from a brand partner.]", name: "[Name]", role: "[Title, company]", draft: true }
  ],

  /* ---- Insights / articles. url can point to insights/*.html or an outside article. ---- */
  insights: [
    {
      title: "Before you sign: six questions every athlete family should ask",
      category: "NIL",
      date: "2026-10-06",
      summary: "The first offer changes the conversation. A simple process for getting the full picture before anyone signs.",
      url: "insights/before-you-sign.html"
    },
    {
      title: "Same fee, different deal: why scope matters more than the number",
      category: "NIL",
      date: "2026-10-06",
      summary: "Two $750 offers can be very different commitments. How usage rights and exclusivity change the math.",
      url: "insights/same-fee-different-deal.html"
    },
    {
      title: "[Article title: e.g., what coaches should know before their next contract]",
      category: "Coaches",
      date: "2026-10-06",
      summary: "[One-sentence summary.]",
      url: "",
      draft: true
    }
  ],

  /* ---- FAQ (home + contact). ---- */
  faqs: [
    { q: "Who do you work with?", a: "High school, college, and professional athletes, coaches, and the families supporting them, plus brands and businesses that want to partner with athletes the right way." },
    { q: "Is Dexter Sports Co. a law firm?", a: "No. Dexter Sports Co. LLC is not a law firm and does not provide legal, tax, or investment advice. We work alongside qualified attorneys and CPAs and can refer you to vetted professionals for independent review." },
    { q: "What does representation cost?", a: "It depends on the scope of the work. We explain services, fees, and what income is covered in writing before any agreement, and we encourage every family to have a representation agreement reviewed independently." },
    { q: "My athlete is in high school. Is it too early?", a: "Not for preparation. Rules differ by state and association, so the right first step is often a family priorities conversation and a clear process for evaluating offers when they arrive. Our free toolkit is a good place to start." },
    { q: "We already have an offer in hand. What should we do?", a: "Do not sign under time pressure. Ask for the complete agreement and every attachment, request time to review, and reach out. We can help you organize the offer and prepare questions for your attorney." },
    { q: "I'm a brand. How do we work with your athletes?", a: "Use the Start a Conversation form and choose \"Brand or business.\" Tell us about your goals, audience, and timeline and we'll follow up with fit and next steps." }
  ],

  /* ---- NIL Readiness Check (toolkit page). weight: points for "Yes". ---- */
  quiz: [
    { q: "Has your family agreed on what the athlete wants from NIL, and what they would turn down?", topic: "Family priorities", tip: "Complete the Family Brief (page 4 of the toolkit) together before the first offer arrives." },
    { q: "Do you know which school, association, or state rules apply to your athlete?", topic: "Compliance", tip: "Ask the school compliance office which rules, disclosures, and reporting deadlines apply, and get it in writing." },
    { q: "If an offer arrived today, would you know to request the complete agreement and every attachment?", topic: "Getting the full offer", tip: "Use the Offer Snapshot to record what's provided and write \"not provided\" wherever something is missing." },
    { q: "Could you explain the difference between creating a post and granting usage rights?", topic: "Usage rights", tip: "Creating content and permitting a brand to reuse it are different parts of a deal. Record both." },
    { q: "Do you know how exclusivity could limit future partnerships?", topic: "Exclusivity", tip: "Ask which specific businesses and activities a restriction would cover, and for how long." },
    { q: "Have you estimated cash remaining after expenses and representative fees?", topic: "Compensation", tip: "Try the calculator below. Track products and services separately from spendable cash." },
    { q: "Do you have an attorney or adviser lined up to review an agreement?", topic: "Professional review", tip: "Line up independent review before you need it. We can provide referrals." },
    { q: "Is there a system for tracking deliverables, invoices, and payments?", topic: "Records", tip: "Keep one campaign record and one payment record per partnership." }
  ]
};
