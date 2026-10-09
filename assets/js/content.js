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
    { value: "10+", label: "Years building partnerships, sponsorships & major-gift relationships" }
  ],

  /* ---- Services (services page + home; home shows the first 6). Order = priority.
         icon: shield | handshake | whistle | spark | compass | book | target | building ---- */
  services: [
    {
      id: "coaches",
      icon: "whistle",
      title: "Coach Representation",
      summary: "Contract and career representation for head and assistant coaches in every sport, with a specialty in uplifting women coaches and the mid-career assistants the big agencies overlook.",
      points: [
        "New contracts, extensions, and renegotiations",
        "Buyouts, guarantees, and multi-year terms",
        "Incentives, supplemental income, and staff resources",
        "Career planning and personal-brand development"
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
      id: "placement",
      icon: "target",
      title: "Job Search & Placement",
      summary: "Strategy and advocacy for your next move, from assistant to coordinator to head coach, at mid-major, D-II, D-III, and beyond.",
      points: [
        "Career-move strategy and target-program mapping",
        "Candidacy materials and interview preparation",
        "Introductions and outreach to decision-makers",
        "Offer evaluation and negotiation"
      ]
    },
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

  /* ---- Kim's network / access (home + about "Access" sections). Add only relationships Kim confirms. ---- */
  network: [
    { title: "Inside university advancement", text: "Kim worked inside an SEC university's development and external relations office. She knows how decision-makers, donors, and athletic leadership connect." },
    { title: "Corporate partners & sponsors", text: "A decade of building corporate partnerships and sponsorships. Kim knows how businesses decide what to fund and why." },
    { title: "HBCU & women's sports", text: "A former Howard University student-athlete with roots in HBCU athletics and women's sports, communities the largest agencies don't prioritize." }
  ],

  /* ---- Kim's career highlights (about page timeline). Source: Kim's LinkedIn, Oct 2026. ---- */
  timeline: [
    { when: "Present", title: "Founder, Dexter Sports Co.", text: "Founded Dexter Sports Co. to protect talent, shape opportunity, and help athletes and coaches build lasting value beyond the game." },
    { when: "2024–2026", title: "Major Gifts Officer, Population Connection", text: "Cultivated and stewarded major-donor relationships for a national organization." },
    { when: "2022–2023", title: "Director of Institutional Giving, Black Women's Health Imperative", text: "Led institutional and corporate giving for a national health-equity organization." },
    { when: "2021–2022", title: "Associate Director of Development & External Relations, University of Arkansas", text: "Built donor and external relationships inside a major SEC university." },
    { when: "2018–2020", title: "Director of Development & Communications, The Arc of Southwest Georgia", text: "Ran fundraising and communications for a community nonprofit." },
    { when: "2016–2017", title: "Development Manager, The Independence Fund", text: "Raised support for a national veterans' organization." },
    { when: "Education", title: "Juris Master, Florida State University", text: "Legal Risk Management, Contracting, and Compliance: the disciplines at the heart of evaluating any NIL or coaching agreement. (A JM is not a law license; Kim works alongside attorneys, not in place of them.)" },
    { when: "Education", title: "B.S., Howard University · NCAA Division I volleyball", text: "Competed for the Howard Bison after starting her collegiate career at the junior-college level. She knows recruiting, transfers, and the student-athlete experience firsthand." }
  ],

  /* ---- Credentials / affiliations (about page). ---- */
  credentials: [
    { title: "CFRE: Certified Fund Raising Executive", text: "An internationally recognized credential for fundraising professionals, awarded by CFRE International and grounded in demonstrated experience, education, and an ethics commitment." },
    { title: "Juris Master (JM), Florida State University", text: "Graduate legal education in Legal Risk Management, Contracting, and Compliance. It is not a law license, and Dexter Sports Co. is not a law firm." },
    { title: "B.S., Howard University", text: "Former NCAA Division I volleyball student-athlete." }
  ],

  /* ---- Investors (partners page + home logo strip). ---- */
  investors: [],

  /* ---- Strategic partners. category examples: Legal, Financial, Brand, Media, Education ---- */
  partners: [],

  /* ---- Recent wins (home). Like a "recent deals" board. Publish only with the client's written OK.
         result = the headline outcome; detail = one line of context. ---- */
  wins: [],

  /* ---- Press / in the news (home). outlet, title, date (YYYY-MM-DD), url ---- */
  press: [],

  /* ---- Testimonials. Only publish with written permission from the person quoted. ---- */
  testimonials: [],

  /* ---- Insights / articles. url can point to insights/*.html or an outside article. ---- */
  insights: [
    {
      title: "Beyond the base salary: seven terms every assistant coach should negotiate",
      category: "Coaches",
      date: "2026-10-07",
      summary: "Salary is the headline. Guarantees, buyouts, and what happens when the head coach leaves are the fine print that shapes a career.",
      url: "insights/beyond-base-salary.html"
    },
    {
      title: "Same fee, different deal: why scope matters more than the number",
      category: "NIL",
      date: "2026-09-09",
      summary: "Two $750 offers can be very different commitments. How usage rights and exclusivity change the math.",
      url: "insights/same-fee-different-deal.html"
    },
    {
      title: "Before you sign: six questions every athlete family should ask",
      category: "NIL",
      date: "2026-08-12",
      summary: "The first offer changes the conversation. A simple process for getting the full picture before anyone signs.",
      url: "insights/before-you-sign.html"
    }
  ],

  /* ---- FAQ (home + contact). ---- */
  faqs: [
    { q: "Who do you work with?", a: "Coaches and athletes in every sport, with a specialty in uplifting women, especially women coaches and mid-career assistants at mid-major, Division II, and Division III programs. We also represent athletes, guide the families supporting them, and work with brands that want to partner with athletes and coaches the right way." },
    { q: "Do you only represent women coaches?", a: "No. We represent coaches and athletes of every gender in every sport. Uplifting women in sport is our specialty, because women coaches are under-served by the large agencies, not because we turn anyone away." },
    { q: "I'm an assistant coach. Is representation worth it at my level?", a: "Often, yes. The terms that matter most, such as guarantees, buyouts, what happens if the head coach leaves, and supplemental income, are set early in a career and carry forward. A conversation costs nothing and will tell you whether representation makes sense right now." },
    { q: "Is Dexter Sports Co. a law firm?", a: "No. Dexter Sports Co. LLC is not a law firm and does not provide legal, tax, or investment advice. We work alongside qualified attorneys and CPAs and can refer you to vetted professionals for independent review." },
    { q: "What does representation cost?", a: "It depends on the scope of the work. We explain services, fees, and what income is covered in writing before any agreement, and we encourage every family to have a representation agreement reviewed independently." },
    { q: "My athlete is in high school. Is it too early?", a: "Not for preparation. Rules differ by state and association, so the right first step is often a family priorities conversation and a clear process for evaluating offers when they arrive. Our free toolkit is a good place to start." },
    { q: "We have an offer with a deadline. What should we do?", a: "Don't sign under time pressure. Ask for the complete agreement and every attachment, and request time to review in writing. Then use the Urgent Offer Help form (in the menu). Requests are triaged by deadline, and offers due within 24 hours escalate to a call or text." },
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
