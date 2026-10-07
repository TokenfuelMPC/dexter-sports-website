/* ==========================================================================
   Dexter Sports Co. — site behavior (no framework, no build step)
   --------------------------------------------------------------------------
   1. Shared header + footer        (edit NAV below to change the menu)
   2. Content renderers             (fill [data-render] blocks from content.js)
   3. Draft / placeholder mode
   4. UI: sticky header, mobile nav, scroll reveal, FAQ
   5. NIL Readiness Check (quiz)
   6. Offer cash calculator
   7. Newsletter connector (Kit / Mailchimp / endpoint), toolkit registration
      wall, intake form (contact page)
   8. Analytics (Cloudflare Web Analytics or Plausible)
   Pages opt in to features with data attributes, so most edits never
   need to touch this file. See docs/DEVELOPER-GUIDE.md.
   ========================================================================== */
(function () {
  "use strict";

  var CFG = window.DSC_CONFIG || {};
  var C = window.DSC_CONTENT || {};
  var ROOT = document.body.getAttribute("data-root") || ""; // "../" on pages in subfolders
  var PAGE = document.body.getAttribute("data-page") || "";

  /* ---- Main menu. href is relative to the site root. ---- */
  var NAV = [
    { id: "about", label: "About Kim", href: "about.html" },
    { id: "services", label: "Services", href: "services.html" },
    { id: "toolkit", label: "NIL Toolkit", href: "nil-toolkit.html" },
    { id: "partners", label: "Partners", href: "partners.html" },
    { id: "insights", label: "Insights", href: "insights.html" }
  ];

  /* ---- Small helpers ---- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function url(href) { return /^(https?:|mailto:|tel:|#)/.test(href) ? href : ROOT + href; }
  function tel(p) { return "tel:+1" + String(p).replace(/\D/g, ""); }
  function initials(name) {
    return String(name).replace(/\[|\]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase() || "DS";
  }
  function visible(list) { return (list || []).filter(function (i) { return CFG.showDrafts || !i.draft; }); }
  function badge(item) { return item.draft && CFG.showDrafts ? '<span class="draft-badge">Placeholder</span>' : ""; }
  function fmtDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return isNaN(d) ? "" : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  /* ---- Toolkit registration wall state (remembered in this browser only) ---- */
  var TK_KEY = "dsc_toolkit_unlocked";
  function gateMode() { return CFG.toolkitGate || "reveal"; } // "reveal" | "email" | "off"
  function toolkitUnlocked() {
    if (gateMode() === "off") return true;
    if (gateMode() === "email") return false; // link only ever arrives by email
    try { return localStorage.getItem(TK_KEY) === "1"; } catch (e) { return false; }
  }
  function rememberToolkit() { try { localStorage.setItem(TK_KEY, "1"); } catch (e) { /* private mode: fine */ } }
  function toolkitHref() { return toolkitUnlocked() ? url(CFG.toolkitPdf) : url("nil-toolkit.html#get-toolkit"); }
  function refreshToolkitLinks() {
    $$("[data-toolkit]").forEach(function (a) {
      a.href = toolkitHref();
      if (toolkitUnlocked()) a.setAttribute("download", ""); else a.removeAttribute("download");
    });
  }

  var ICONS = {
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    whistle: '<circle cx="8" cy="14" r="5"/><path d="M11 10l9-4v5l-7 2"/><path d="M8 14h.01"/>',
    handshake: '<path d="M3 11l4-4 5 3 5-3 4 4"/><path d="M7 7l-4 8 5 4 4-3 4 3 5-4-4-8"/><path d="M12 10l-3 3"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    building: '<path d="M4 21V9l8-5 8 5v12"/><path d="M9 21v-5h6v5M8 11h.01M12 11h.01M16 11h.01"/>',
    book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z"/><path d="M4 19a2 2 0 012-2h13"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
    linkedin: '<path d="M4 9h3v11H4zM5.5 4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM10 9h3v1.6c.5-.9 1.7-1.9 3.5-1.9 3.2 0 3.5 2.1 3.5 4.8V20h-3v-5.6c0-1.4 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-3z" fill="currentColor" stroke="none"/>',
    x: '<path d="M4 4l16 16M20 4L4 20"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5"/><path d="M14 3c.5 2.5 2.3 4 5 4"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.spark) + "</svg>";
  }
  var MARK = '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#0052ff"/><path d="M11 10h8.5C26 10 30 14 30 20s-4 10-10.5 10H11V10zm5 4.5v11h3.2c3.6 0 5.6-2.1 5.6-5.5s-2-5.5-5.6-5.5H16z" fill="#fffcf7"/><circle cx="31" cy="31" r="3" fill="#ffffff"/></svg>';

  /* ======================================================================
     1. Header + footer
     ====================================================================== */
  function renderHeader() {
    var mount = $("#site-header");
    if (!mount) return;
    var links = NAV.map(function (n) {
      return '<li><a href="' + url(n.href) + '"' + (n.id === PAGE ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a></li>";
    }).join("");
    mount.outerHTML =
      '<header class="site-header" id="top"><div class="container nav">' +
      '<a class="brand" href="' + url("index.html") + '" aria-label="' + esc(CFG.businessName) + ' home">' + MARK + '<span class="brand-word">Dexter <i>Sports Co.</i></span></a>' +
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>' +
      '<ul class="nav-links" id="nav-links">' + links +
      '<li class="nav-urgent"><a href="' + url("urgent.html") + '"' + (PAGE === "urgent" ? ' aria-current="page"' : "") + '>Urgent offer?</a></li>' +
      '<li class="nav-cta"><a class="btn btn--primary btn--sm" href="' + url("contact.html") + '">Start a conversation</a></li></ul>' +
      "</div></header>";
  }

  function renderFooter() {
    var mount = $("#site-footer");
    if (!mount) return;
    var social = Object.keys(CFG.social || {}).filter(function (k) { return CFG.social[k]; }).map(function (k) {
      return '<a href="' + esc(CFG.social[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + icon(k) + "</a>";
    }).join("");
    var y = new Date().getFullYear();
    mount.outerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div><a class="brand" href="' + url("index.html") + '">' + MARK + '<span class="brand-word">Dexter <i>Sports Co.</i></span></a>' +
      "<p>Coach representation &amp; NIL guidance. Protecting talent, shaping opportunity, and building lasting value beyond the game.</p>" +
      (social ? '<div class="social">' + social + "</div>" : "") + "</div>" +
      "<div><h4>Explore</h4><ul>" + NAV.map(function (n) { return '<li><a href="' + url(n.href) + '">' + esc(n.label) + "</a></li>"; }).join("") +
      '<li><a href="' + url("contact.html") + '">Contact</a></li>' +
      '<li><a href="' + url("urgent.html") + '">Urgent offer help</a></li></ul></div>' +
      "<div><h4>Contact</h4><ul>" +
      "<li>" + esc(CFG.location) + "</li>" +
      '<li><a href="' + tel(CFG.phone) + '">' + esc(CFG.phone) + "</a></li>" +
      '<li><a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + "</a></li></ul></div>" +
      "<div><h4>The monthly NIL newsletter</h4><p class=\"small\">Rule changes, deal trends, and practical guidance for athlete families and coaches. One email a month.</p>" +
      '<form class="newsletter" data-newsletter novalidate><label class="visually-hidden" for="nl-email">Email address</label>' +
      '<input id="nl-email" type="email" name="email" placeholder="you@email.com" required autocomplete="email">' +
      '<input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<button class="btn btn--primary btn--sm" type="submit">Join</button></form><div class="form-status" role="status" aria-live="polite"></div></div>' +
      "</div>" +
      '<div class="footer-word" aria-hidden="true">Dexter <i>Sports</i></div>' +
      '<div class="footer-legal"><span>' + esc(CFG.dba) + " is operated by " + esc(CFG.legalName) + ". " + esc(CFG.legalName) + " is not a law firm and does not provide legal, tax, or investment advice.</span>" +
      '<span>© ' + y + " " + esc(CFG.legalName) + '. All rights reserved. · <a href="' + url("privacy.html") + '">Privacy Policy</a></span></div>' +
      "</div></footer>";
  }

  /* ======================================================================
     2. Content renderers. In HTML: <div data-render="services"></div>
     Optional data-limit="3". A parent with data-hide-empty is hidden when
     the list has nothing to show (e.g. all entries are drafts at launch).
     ====================================================================== */
  var RENDER = {
    stats: function (items) {
      return items.map(function (s) {
        return '<div class="stat" style="position:relative">' + badge(s) + '<div class="stat-value">' + esc(s.value) + '</div><div class="stat-label">' + esc(s.label) + "</div></div>";
      }).join("");
    },
    services: function (items, el) {
      var brief = el.hasAttribute("data-brief");
      return items.map(function (s) {
        return '<article class="card reveal" id="' + esc(s.id) + '">' + badge(s) +
          '<div class="card-icon">' + icon(s.icon) + "</div><h3>" + esc(s.title) + "</h3><p>" + esc(s.summary) + "</p>" +
          (brief ? '<a class="arrow-link" href="' + url("services.html#" + s.id) + '">Learn more</a>' :
            '<ul>' + (s.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
            '<a class="arrow-link" href="' + url("contact.html?topic=" + s.id) + '">Ask about this</a>') +
          "</article>";
      }).join("");
    },
    network: function (items) {
      return items.map(function (n) {
        return '<div class="network-item" style="position:relative">' + badge(n) + "<h3>" + esc(n.title) + "</h3><p>" + esc(n.text) + "</p></div>";
      }).join("");
    },
    timeline: function (items) {
      return items.map(function (t) {
        return '<li style="position:relative">' + badge(t) + '<span class="when">' + esc(t.when) + "</span><h3>" + esc(t.title) + "</h3><p>" + esc(t.text) + "</p></li>";
      }).join("");
    },
    credentials: function (items) {
      return items.map(function (c) {
        return '<div class="card card--flat">' + badge(c) + "<h3 style=\"margin-top:0\">" + esc(c.title) + '</h3><p style="margin:0">' + esc(c.text) + "</p></div>";
      }).join("");
    },
    logos: function (items) {
      return items.map(function (p) {
        var inner = p.logo ? '<img src="' + url(p.logo) + '" alt="' + esc(p.name) + '" loading="lazy">' : esc(p.name);
        var tag = p.url ? "a" : "div";
        return "<" + tag + ' class="logo-tile"' + (p.url ? ' href="' + esc(p.url) + '" target="_blank" rel="noopener"' : "") + ">" + badge(p) + inner + "</" + tag + ">";
      }).join("");
    },
    profiles: function (items) {
      return items.map(function (p) {
        var logo = p.logo ? '<img src="' + url(p.logo) + '" alt="" loading="lazy">' : esc(initials(p.name));
        return '<article class="card partner-card reveal">' + badge(p) +
          '<div class="partner-logo">' + logo + "</div><div>" +
          '<span class="tag">' + esc(p.type || p.category || "Partner") + "</span>" +
          "<h3>" + esc(p.name) + "</h3><p>" + esc(p.blurb) + "</p>" +
          (p.url ? '<a class="arrow-link" href="' + esc(p.url) + '" target="_blank" rel="noopener">Visit</a>' : "") +
          "</div></article>";
      }).join("");
    },
    testimonials: function (items) {
      return items.map(function (t) {
        return '<figure class="quote-card reveal" style="position:relative">' + badge(t) + "<blockquote>" + esc(t.quote) + "</blockquote><figcaption><strong>" + esc(t.name) + "</strong>" + esc(t.role) + "</figcaption></figure>";
      }).join("");
    },
    insights: function (items) {
      return items.map(function (a) {
        var href = a.url ? url(a.url) : "#";
        return '<a class="card insight reveal" href="' + href + '">' + badge(a) +
          '<span class="tag">' + esc(a.category) + '</span><p class="meta">' + fmtDate(a.date) + "</p>" +
          "<h3>" + esc(a.title) + "</h3><p>" + esc(a.summary) + '</p><span class="arrow-link">Read</span></a>';
      }).join("");
    },
    faqs: function (items) {
      return items.map(function (f) {
        var tag = f.draft && CFG.showDrafts ? ' <span class="tag" style="background:#fff3a8;color:#5c4a00">Placeholder</span>' : "";
        return "<details><summary>" + esc(f.q) + tag + '</summary><div class="answer">' + esc(f.a) + "</div></details>";
      }).join("");
    }
  };
  function renderContent() {
    $$("[data-render]").forEach(function (el) {
      var kind = el.getAttribute("data-render");
      var key = el.getAttribute("data-source") || kind; // e.g. data-render="profiles" data-source="investors"
      var fn = RENDER[kind];
      if (!fn) return;
      var items = visible(C[key]);
      var limit = parseInt(el.getAttribute("data-limit"), 10);
      if (limit) items = items.slice(0, limit);
      el.innerHTML = fn(items, el);
      var wrap = el.closest("[data-hide-empty]");
      if (wrap && !items.length) wrap.hidden = true;
    });
    // Simple config bindings: <a data-bind="email"> / <span data-bind="phone">
    $$("[data-bind]").forEach(function (el) {
      var k = el.getAttribute("data-bind"), v = CFG[k];
      if (!v) return;
      el.textContent = v;
      if (el.tagName === "A") el.href = k === "email" ? "mailto:" + v : k === "phone" ? tel(v) : v;
    });
    refreshToolkitLinks();
    $$("[data-booking]").forEach(function (el) {
      if (CFG.bookingUrl) { el.hidden = false; if (el.tagName === "A") el.href = CFG.bookingUrl; }
      else el.hidden = true;
    });
  }

  /* ======================================================================
     3. Draft mode
     ====================================================================== */
  function draftMode() {
    var count = $$(".ph").length;
    if (!CFG.showDrafts) {
      if (count) console.warn("[Dexter Sports] " + count + " placeholder(s) (.ph) still on this page. See docs/LAUNCH-CHECKLIST.md");
      return;
    }
    document.documentElement.classList.add("show-drafts");
    var drafts = count + $$(".draft-badge").length;
    if (!drafts) return;
    var b = document.createElement("div");
    b.className = "draft-banner";
    b.innerHTML = "Review mode: " + drafts + " placeholder" + (drafts === 1 ? "" : "s") + " on this page need real content. <button type=\"button\">Hide</button>";
    b.querySelector("button").onclick = function () { b.remove(); };
    document.body.appendChild(b);
  }

  /* ======================================================================
     4. UI behaviors
     ====================================================================== */
  function ui() {
    // Spotlight hover on dark tiles: CSS reads --mx/--my
    document.addEventListener("pointermove", function (e) {
      var t = e.target.closest && e.target.closest(".network-item");
      if (!t) return;
      var r = t.getBoundingClientRect();
      t.style.setProperty("--mx", (e.clientX - r.left) + "px");
      t.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
    var header = $(".site-header");
    var toggle = $(".nav-toggle");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      $$(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { document.body.classList.remove("nav-open"); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") document.body.classList.remove("nav-open"); });
    }
    // Scroll reveal
    var els = $$(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
      els.forEach(function (el) { io.observe(el); });
    } else els.forEach(function (el) { el.classList.add("is-in"); });
    // FAQ: keep one open at a time
    $$(".accordion").forEach(function (acc) {
      acc.addEventListener("toggle", function (e) {
        if (e.target.open) $$("details", acc).forEach(function (d) { if (d !== e.target) d.open = false; });
      }, true);
    });
  }

  /* ======================================================================
     5. NIL Readiness Check  — <div data-quiz></div>
     ====================================================================== */
  function quiz() {
    var root = $("[data-quiz]");
    if (!root || !C.quiz) return;
    var qs = C.quiz, answers = [];
    var opts = [{ label: "Yes, we're set", pts: 2 }, { label: "Partly", pts: 1 }, { label: "Not yet", pts: 0 }];
    var html = '<div class="quiz-bar"><i></i></div>';
    qs.forEach(function (q, i) {
      html += '<div class="quiz-q" data-i="' + i + '"><span class="quiz-count">Question ' + (i + 1) + " of " + qs.length + " · " + esc(q.topic) + "</span><h3>" + esc(q.q) + '</h3><div class="quiz-options">' +
        opts.map(function (o) { return '<button type="button" data-pts="' + o.pts + '">' + o.label + "</button>"; }).join("") + "</div></div>";
    });
    html += '<div class="quiz-result" aria-live="polite"></div>';
    root.innerHTML = html;
    var bar = $(".quiz-bar i", root);
    function show(i) {
      $$(".quiz-q", root).forEach(function (q) { q.classList.toggle("is-active", +q.dataset.i === i); });
      bar.style.width = (i / qs.length * 100) + "%";
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-pts]");
      if (b) {
        var i = +b.closest(".quiz-q").dataset.i;
        answers[i] = +b.dataset.pts;
        if (i + 1 < qs.length) show(i + 1); else result();
      }
      if (e.target.closest("[data-quiz-restart]")) { answers = []; $(".quiz-result", root).classList.remove("is-active"); show(0); }
    });
    function result() {
      $$(".quiz-q", root).forEach(function (q) { q.classList.remove("is-active"); });
      bar.style.width = "100%";
      var score = answers.reduce(function (a, b) { return a + b; }, 0);
      var pct = Math.round(score / (qs.length * 2) * 100);
      var tier = pct >= 80 ? ["Game-ready", "Your family has a strong process. Keep records current and revisit as rules and opportunities change."]
        : pct >= 50 ? ["Building a base", "You have a good start. Close the gaps below before the next offer arrives."]
        : ["Early in the playbook", "That's normal; most families start here. Work through the gaps below, and don't sign anything under time pressure."];
      var gaps = qs.map(function (q, i) { return answers[i] < 2 ? "<li><strong>" + esc(q.topic) + ":</strong> " + esc(q.tip) + "</li>" : ""; }).join("");
      var el = $(".quiz-result", root);
      el.innerHTML = '<div class="split split--top" style="grid-template-columns:auto 1fr;gap:32px">' +
        '<div class="score-ring" style="--pct:' + pct + '"><b>' + pct + "%</b></div>" +
        '<div><span class="eyebrow" style="margin-bottom:8px">Your readiness</span><h3 style="font-family:var(--font-display);font-size:var(--step-2)">' + tier[0] + "</h3><p>" + tier[1] + "</p></div></div>" +
        (gaps ? '<h3 style="margin-top:12px">Where to focus next</h3><ul class="checks">' + gaps + "</ul>" : "") +
        '<div class="btn-row" style="margin-top:24px"><a class="btn btn--primary" href="' + url("contact.html?topic=nil&readiness=" + pct) + '">Talk it through with Kim</a>' +
        '<a class="btn btn--ghost" href="' + toolkitHref() + '">Get the free toolkit</a>' +
        '<button class="btn btn--ghost" type="button" data-quiz-restart>Retake</button></div>' +
        '<p class="disclaimer">Educational self-assessment only. It does not determine eligibility or provide legal advice.</p>';
      el.classList.add("is-active");
      track("Readiness Check Completed", { score: pct });
    }
    show(0);
  }

  /* ======================================================================
     6. Offer cash calculator — <form data-calc>
     ====================================================================== */
  function calc() {
    var f = $("[data-calc]");
    if (!f) return;
    var money = function (n) { return (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 }); };
    function run() {
      var cash = +f.cash.value || 0, exp = +f.expenses.value || 0, rate = +f.fee.value || 0, goods = +f.goods.value || 0;
      var fee = cash * rate / 100, net = cash - exp - fee;
      $("[data-out=cash]").textContent = money(cash);
      $("[data-out=expenses]").textContent = "−" + money(exp);
      $("[data-out=fee]").textContent = "−" + money(fee);
      $("[data-out=net]").textContent = money(net);
      $("[data-out=goods]").textContent = money(goods);
    }
    f.addEventListener("input", run);
    f.addEventListener("submit", function (e) { e.preventDefault(); });
    run();
  }

  /* ======================================================================
     7. Forms
     ====================================================================== */
  function send(endpoint, data) {
    return fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r; });
  }
  function mailtoFallback(subject, data) {
    var body = Object.keys(data).filter(function (k) { return data[k] && k.charAt(0) !== "_"; })
      .map(function (k) { return k + ": " + data[k]; }).join("\n");
    window.location.href = "mailto:" + CFG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }
  function status(el, ok, msg) {
    if (!el) return;
    el.className = "form-status " + (ok ? "is-ok" : "is-err");
    el.textContent = msg;
  }
  function formData(form) {
    var data = {};
    $$("input, select, textarea", form).forEach(function (i) {
      if (!i.name || i.disabled) return;
      if ((i.type === "radio" || i.type === "checkbox") && !i.checked) return;
      if (i.closest("[data-show-for]") && !i.closest("[data-show-for]").classList.contains("is-visible")) return;
      data[i.name] = data[i.name] ? data[i.name] + ", " + i.value : i.value;
    });
    return data;
  }

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* Newsletter connector. One function, several providers, chosen in
     config.js -> newsletter.provider. d = { email, first_name, role, source }
     source is "toolkit" | "newsletter" | "inquiry" (used for tagging).
     Returns a Promise that resolves when the provider accepts the sign-up.  */
  function subscribe(d) {
    var N = CFG.newsletter || {};
    var p = N.provider || "";

    if (p === "kit") { // Kit (ConvertKit) public form endpoint; CORS-enabled, no API key needed
      var id = (d.source === "toolkit" ? N.kitToolkitFormId : N.kitNewsletterFormId) || N.kitToolkitFormId || N.kitNewsletterFormId;
      if (!id) return Promise.reject(new Error("Kit form ID missing in config.js"));
      var body = new URLSearchParams();
      body.append("email_address", d.email);
      if (d.first_name) body.append("fields[first_name]", d.first_name);
      if (d.role) body.append("fields[role]", d.role); // needs a custom field named "role" in Kit
      return fetch("https://app.kit.com/forms/" + encodeURIComponent(id) + "/subscriptions", {
        method: "POST", headers: { Accept: "application/json" }, body: body
      }).then(function (r) { return r.json(); }).then(function (j) {
        if (!j || j.status === "failed") throw new Error((j && j.errors && j.errors.messages && j.errors.messages[0]) || "Kit rejected the sign-up");
        return j;
      });
    }

    if (p === "mailchimp") { // Mailchimp embedded-form URL via JSONP (Mailchimp has no CORS form API)
      return new Promise(function (resolve, reject) {
        if (!N.mailchimpUrl) { reject(new Error("mailchimpUrl missing in config.js")); return; }
        var cb = "dscMailchimp" + Date.now(), s = document.createElement("script"), done = false;
        var tag = (N.mailchimpTags || {})[d.source];
        var q = "&EMAIL=" + encodeURIComponent(d.email) +
          (d.first_name ? "&FNAME=" + encodeURIComponent(d.first_name) : "") +
          (d.role ? "&ROLE=" + encodeURIComponent(d.role) : "") +
          (tag ? "&tags=" + encodeURIComponent(tag) : "") + "&c=" + cb;
        function finish(fn, v) { if (done) return; done = true; try { delete window[cb]; } catch (e) { window[cb] = undefined; } s.remove(); fn(v); }
        window[cb] = function (r) {
          if (r && (r.result === "success" || /already subscribed/i.test(r.msg || ""))) finish(resolve, r);
          else finish(reject, new Error((r && r.msg) || "Mailchimp rejected the sign-up"));
        };
        s.src = N.mailchimpUrl.replace("/post?", "/post-json?") + q;
        s.onerror = function () { finish(reject, new Error("Could not reach Mailchimp")); };
        setTimeout(function () { finish(reject, new Error("Mailchimp timed out")); }, 12000);
        document.body.appendChild(s);
      });
    }

    if (p === "endpoint" && N.endpoint) { // any JSON endpoint: Formspree, Zapier/Make webhook, etc.
      return send(N.endpoint, { email: d.email, first_name: d.first_name || "", role: d.role || "", source: d.source, _subject: "Newsletter sign-up (" + d.source + ")" });
    }

    console.warn("[Dexter Sports] No newsletter provider configured (config.js -> newsletter). Sign-up not saved:", d.source);
    return Promise.resolve({ unsaved: true });
  }

  function newsletter() {
    $$("[data-newsletter]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var st = f.nextElementSibling, email = f.email.value.trim();
        if (f._gotcha.value) return;
        if (!EMAIL_RE.test(email)) { status(st, false, "Please enter a valid email."); return; }
        if (!(CFG.newsletter || {}).provider) { mailtoFallback("Newsletter sign-up", { email: email }); return; }
        subscribe({ email: email, source: "newsletter" })
          .then(function () { status(st, true, "You're on the list. Watch your inbox for the monthly newsletter."); f.reset(); track("Newsletter Signup"); })
          .catch(function () { status(st, false, "Something went wrong. Please email " + CFG.email + "."); });
      });
    });
  }

  /* Toolkit registration wall — <form data-toolkit-gate> on nil-toolkit.html */
  function toolkitGate() {
    var f = $("[data-toolkit-gate]");
    if (!f) return;
    var panel = f.parentNode, st = $(".form-status", panel);
    function unlocked(fresh) {
      var email = gateMode() === "email";
      panel.innerHTML = '<span class="eyebrow">' + (fresh ? "You're in" : "Welcome back") + "</span>" +
        "<h3 style=\"font-family:var(--font-display);font-size:var(--step-2)\">" +
        (email ? "Check your inbox." : "Your toolkit is ready.") + "</h3>" +
        "<p>" + (email ? "Confirm your email address and we'll send your download link right away. If you don't see it in a few minutes, check your promotions or spam folder."
          : "Download your copy below. " + (fresh ? "Kim's monthly NIL newsletter will arrive in your inbox, and you can unsubscribe anytime." : "")) + "</p>" +
        (email ? "" : '<a class="btn btn--primary" href="' + url(CFG.toolkitPdf) + '" download>Download the toolkit (PDF)</a>') +
        '<p class="small muted" style="margin-top:18px">Have an offer in hand? <a href="' + url("contact.html?topic=nil") + '">Talk it through with Kim</a>.</p>';
    }
    if (gateMode() === "off") { unlocked(false); return; }
    if (toolkitUnlocked()) unlocked(false);
    else f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f._gotcha.value) return;
      var email = f.email.value.trim(), btn = $("button[type=submit]", f);
      if (!EMAIL_RE.test(email)) { f.email.reportValidity(); status(st, false, "Please enter a valid email."); return; }
      if (!f.consent.checked) { status(st, false, "Please check the box to receive the toolkit and newsletter."); return; }
      btn.disabled = true; btn.textContent = "Sending…";
      subscribe({ email: email, first_name: f.first_name.value.trim(), role: f.role.value, source: "toolkit" }).then(function () {
        rememberToolkit(); refreshToolkitLinks(); unlocked(true); track("Toolkit Registration", { role: f.role.value || "unspecified" });
      }).catch(function (err) {
        console.error(err);
        btn.disabled = false; btn.textContent = "Send me the toolkit";
        status(st, false, "We couldn't complete your sign-up. Please try again, or email " + CFG.email + " and we'll send it to you.");
      });
    });
  }

  /* Send a lead form (intake or urgent) using config.formProvider.
     Returns a Promise, or null when no provider is set (caller falls back to email). */
  function sendForm(formName, d, endpointOverride) {
    var provider = CFG.formProvider || (CFG.formEndpoint ? "endpoint" : "");
    if (endpointOverride) return send(endpointOverride, d);
    if (provider === "netlify") { // the <form name="..." data-netlify="true"> in the page is detected at deploy
      var enc = new URLSearchParams();
      enc.append("form-name", formName);
      Object.keys(d).forEach(function (k) { enc.append(k, d[k]); });
      return fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: enc.toString() })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); });
    }
    if (provider === "endpoint" && CFG.formEndpoint) return send(CFG.formEndpoint, d);
    return null;
  }

  /* Intake: multi-step form on contact page — <form data-intake> */
  function intake() {
    var f = $("[data-intake]");
    if (!f) return;
    var steps = $$(".intake-step", f), bars = $$(".progress span", f), cur = 0;
    var back = $("[data-back]", f), next = $("[data-next]", f), submit = $("[data-submit]", f);
    var st = $(".form-status", f);

    function role() { var r = $("input[name=role]:checked", f); return r ? r.value : ""; }
    function applyRole() {
      var r = role();
      $$("[data-show-for]", f).forEach(function (el) {
        // space-separated role list; spaces inside a role are written as %20
        var on = el.getAttribute("data-show-for").split(" ").map(decodeURIComponent).indexOf(r) > -1;
        el.classList.toggle("is-visible", on);
        $$("input, select, textarea", el).forEach(function (i) { if (i.hasAttribute("data-req")) i.required = on; });
      });
    }
    function go(i) {
      cur = i;
      steps.forEach(function (s, n) { s.classList.toggle("is-active", n === i); });
      bars.forEach(function (b, n) { b.classList.toggle("is-on", n <= i); });
      back.hidden = i === 0;
      next.hidden = i === steps.length - 1;
      submit.hidden = i !== steps.length - 1;
      if (i === steps.length - 1) review();
      var first = $("input:not([type=hidden]):not(.hp), select, textarea", steps[i]);
      if (i > 0 && first) first.focus({ preventScroll: true });
      f.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function valid(step) {
      var bad = $$("input, select, textarea", step).filter(function (i) { return !i.checkValidity(); });
      if (bad.length) { bad[0].reportValidity(); return false; }
      if (step === steps[0] && !role()) { status(st, false, "Please choose the option that best describes you."); return false; }
      st.className = "form-status";
      return true;
    }
    function review() {
      var d = formData(f), labels = { role: "I am", name: "Name", email: "Email", phone: "Phone", position: "Position", sport: "Sport", level: "Level", organization: "School / org", company: "Company", timeline: "Timeline", topic: "Interested in", message: "Message" };
      $(".review-list", f).innerHTML = Object.keys(labels).filter(function (k) { return d[k]; }).map(function (k) {
        return "<dt>" + labels[k] + "</dt><dd>" + esc(d[k]) + "</dd>";
      }).join("");
    }
    f.addEventListener("change", function (e) {
      if (e.target.name === "role") { applyRole(); st.className = "form-status"; }
      if (e.target.name === "timeline") { var n = $("[data-urgent-nudge]", f); if (n) n.hidden = !/offer or deadline now/i.test(e.target.value); }
    });
    next.addEventListener("click", function () { if (valid(steps[cur])) go(cur + 1); });
    back.addEventListener("click", function () { go(cur - 1); });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!valid(steps[cur])) return;
      var d = formData(f);
      if (d._gotcha) return;
      d._subject = "New inquiry: " + (d.role || "Website") + " — " + (d.name || "");
      submit.disabled = true;
      if (d.newsletter === "Yes") subscribe({ email: d.email, first_name: (d.name || "").split(" ")[0], role: d.role, source: "inquiry" }).catch(function (e) { console.error(e); });
      var sending = sendForm(f.getAttribute("name") || "inquiry", d);
      if (!sending) { mailtoFallback(d._subject, d); submit.disabled = false; return; }
      sending.then(function () {
        f.innerHTML = '<div class="center" style="padding:24px 0"><span class="eyebrow">Received</span><h2>Thank you, ' + esc((d.name || "").split(" ")[0]) + ".</h2>" +
          '<p class="lead">Kim will be in touch within two business days.</p>' +
          (CFG.bookingUrl ? '<a class="btn btn--primary" href="' + esc(CFG.bookingUrl) + '" target="_blank" rel="noopener">Pick a time to talk now</a>' : "") + "</div>";
        track("Inquiry Submitted", { role: d.role });
      }).catch(function () {
        submit.disabled = false;
        status(st, false, "We couldn't send that. Please email " + CFG.email + " or call " + CFG.phone + ".");
      });
    });

    // Prefill from links like contact.html?topic=nil or ?role=brand
    var q = new URLSearchParams(location.search);
    var roleMap = { athletes: "Athlete", coaches: "Coach", placement: "Coach", departments: "Investor or partner", families: "Parent or guardian", brands: "Brand or business", nil: "Parent or guardian", education: "Parent or guardian", investor: "Investor or partner" };
    var pre = q.get("role") || roleMap[q.get("topic")];
    if (pre) { var r = $('input[name=role][value="' + pre + '"]', f); if (r) r.checked = true; }
    var topic = $("select[name=topic]", f);
    if (topic && q.get("topic")) { var o = $('option[data-topic="' + q.get("topic") + '"]', topic); if (o) o.selected = true; }
    if (q.get("readiness")) { var h = $("input[name=readiness]", f); if (h) h.value = q.get("readiness") + "%"; }
    applyRole();
    go(0);
    window.scrollTo(0, 0);
  }

  /* ======================================================================
     7b. Urgent offer requests — <form data-urgent> on urgent.html
     Triage by time-to-deadline, route to its own form/endpoint so it can
     trigger louder notifications, and give the requester immediate
     escalation options (call/text, backup contact, extension script).
     Playbook: docs/URGENT-REQUESTS.md
     ====================================================================== */
  var TIERS = {
    P1: { label: "Priority 1", desc: "Deadline within 24 hours" },
    P2: { label: "Priority 2", desc: "Deadline within 72 hours" },
    P3: { label: "Priority 3", desc: "Deadline more than 72 hours away" },
    PAST: { label: "Priority 1", desc: "The deadline has passed or is right now" }
  };
  function tierFor(value) {
    var t = new Date(value).getTime();
    if (!value || isNaN(t)) return null;
    var h = (t - Date.now()) / 36e5;
    return { key: h <= 0 ? "PAST" : h <= 24 ? "P1" : h <= 72 ? "P2" : "P3", hours: Math.max(0, Math.round(h)) };
  }
  /* Same-day rule: requests received by the cutoff (default noon ET) on a
     business day get a same-day response; later ones, the next business day. */
  function beforeCutoff() {
    var C = (CFG.urgent || {}).cutoff || {};
    try {
      var parts = new Intl.DateTimeFormat("en-US", { timeZone: C.timezone || "America/New_York", hour: "numeric", hourCycle: "h23", weekday: "short" }).formatToParts(new Date());
      var hour = +parts.filter(function (p) { return p.type === "hour"; })[0].value;
      var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.filter(function (p) { return p.type === "weekday"; })[0].value);
      return (C.days || [1, 2, 3, 4, 5]).indexOf(day) > -1 && hour < (C.hour == null ? 12 : C.hour);
    } catch (e) { return false; }
  }
  function urgent() {
    var f = $("[data-urgent]");
    if (!f) return;
    var U = CFG.urgent || {}, st = $(".form-status", f), chip = $("[data-tier]", f);
    var dl = f.deadline;
    // can't pick a deadline in the past by accident; default to tomorrow
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var now = new Date(); dl.min = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()) + "T00:00";
    function showTier() {
      var t = tierFor(dl.value);
      if (!t) { chip.hidden = true; return; }
      chip.hidden = false;
      chip.className = "tier-chip tier-" + t.key.toLowerCase();
      chip.innerHTML = "<strong>" + TIERS[t.key].label + "</strong> · " + (t.key === "PAST" ? TIERS.PAST.desc : "about " + t.hours + " hour" + (t.hours === 1 ? "" : "s") + " until your deadline");
    }
    dl.addEventListener("input", showTier);
    var hrs = $("[data-urgent-hours]");
    if (hrs) hrs.textContent = ((U.cutoff || {}).label) || "";

    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f._gotcha.value) return;
      var bad = $$("input, select, textarea", f).filter(function (i) { return !i.checkValidity(); });
      if (bad.length) { bad[0].reportValidity(); return; }
      var d = formData(f), t = tierFor(d.deadline) || { key: "P3", hours: 0 };
      var tier = t.key === "PAST" ? "P1" : t.key;
      var when = new Date(d.deadline);
      d.priority = tier;
      d.hours_to_deadline = String(t.hours);
      d.deadline_readable = when.toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
      d.response_commitment = beforeCutoff() ? "same day" : "next business day";
      d._subject = "[URGENT " + tier + " · " + t.hours + "h] " + (d.offer_type || "Offer") + " — " + (d.name || "");
      var btn = $("button[type=submit]", f);
      btn.disabled = true; btn.textContent = "Sending…";
      var sending = sendForm("urgent", d, U.formEndpoint);
      if (!sending) { mailtoFallback(d._subject, d); btn.disabled = false; btn.textContent = "Send urgent request"; return; }
      sending.then(function () { done(d, tier, t); track("Urgent Request", { priority: tier }); })
        .catch(function () {
          btn.disabled = false; btn.textContent = "Send urgent request";
          status(st, false, "We couldn't send that. Please call or text Kim now at " + CFG.phone + ".");
        });
    });

    function done(d, tier, t) {
      var sameDay = d.response_commitment === "same day";
      var digits = String(CFG.phone).replace(/\D/g, "");
      var smsBody = "URGENT offer (" + tier + "): " + (d.name || "") + ", " + (d.offer_type || "offer") + " from " + (d.offering_party || "?") + ", deadline " + d.deadline_readable + ". I submitted the website form.";
      var B = U.backup || {};
      var ext = "Hello [Name],\n\nThank you for the offer to " + (d.name || "[Name]") + ". We're excited about the opportunity and want to give it the attention it deserves. We would like until [new date] to review the agreement and obtain professional advice before making a decision. Please let us know if that timeline works.\n\nBest,\n" + (d.name || "[Name]");
      f.outerHTML =
        '<div class="intake urgent-done">' +
        '<span class="tier-chip tier-' + tier.toLowerCase() + '"><strong>' + TIERS[tier].label + "</strong> · " + (t.key === "PAST" ? "deadline now" : t.hours + "h to deadline") + "</span>" +
        "<h2 style=\"margin-top:16px\">Received. Kim has been alerted.</h2>" +
        '<p class="lead">' + esc((U.response || {})[sameDay ? "sameDay" : "nextDay"] || "Kim will respond as quickly as possible.") + "</p>" +
        (!sameDay && tier === "P1" ? '<div class="callout"><strong>Your deadline is close.</strong> Because this arrived after the ' + esc((U.cutoff || {}).label || "noon") + " cutoff, please also call or text Kim now.</div>" : "") +
        (tier !== "P3" ? '<div class="btn-row" style="margin:20px 0">' +
          '<a class="btn btn--alert" href="tel:+1' + digits + '">Call Kim now</a>' +
          (U.allowText !== false ? '<a class="btn btn--ghost" href="sms:+1' + digits + "?&body=" + encodeURIComponent(smsBody) + '">Text Kim</a>' : "") + "</div>" : "") +
        (B.name && (B.phone || B.email) ? '<p class="small"><strong>If you can\'t reach Kim:</strong> ' + esc(B.name) + (B.note ? " (" + esc(B.note) + ")" : "") + " · " +
          (B.phone ? '<a href="tel:+1' + String(B.phone).replace(/\D/g, "") + '">' + esc(B.phone) + "</a> " : "") + (B.email ? '<a href="mailto:' + esc(B.email) + '">' + esc(B.email) + "</a>" : "") + "</p>" : "") +
        "<h3 style=\"margin-top:28px\">While you wait</h3>" +
        '<ol class="prose" style="padding-left:1.2em"><li><strong>Don\'t sign yet.</strong> A deadline is not a reason to accept terms you haven\'t reviewed.</li>' +
        "<li><strong>Ask for time.</strong> Requesting review time is normal and professional. Copy the message below and adapt it.</li>" +
        "<li><strong>Gather everything.</strong> The full agreement, every attachment, and the deadline in writing. Kim will tell you how to share documents securely; don't send them through the website.</li></ol>" +
        '<label class="visually-hidden" for="ext-msg">Extension request message</label><textarea id="ext-msg" readonly style="min-height:190px">' + esc(ext) + "</textarea>" +
        '<div class="btn-row" style="margin-top:10px"><button class="btn btn--blue btn--sm" type="button" data-copy="#ext-msg">Copy message</button></div>' +
        '<p class="disclaimer">Dexter Sports Co. LLC is not a law firm. Submitting this request does not create a representation relationship. For legal advice about an agreement, consult a qualified attorney; ask us for a referral.</p></div>';
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-copy]");
      if (!b) return;
      var ta = $(b.getAttribute("data-copy"));
      ta.select();
      (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).catch(function () { document.execCommand("copy"); });
      b.textContent = "Copied";
    });
  }

  /* ======================================================================
     8. Analytics (Plausible, optional)
     ====================================================================== */
  function analytics() {
    if (CFG.cloudflareAnalyticsToken) { // free, cookieless page-view analytics
      var cf = document.createElement("script");
      cf.defer = true; cf.src = "https://static.cloudflareinsights.com/beacon.min.js";
      cf.setAttribute("data-cf-beacon", JSON.stringify({ token: CFG.cloudflareAnalyticsToken }));
      document.head.appendChild(cf);
    }
    if (!CFG.plausibleDomain) return;
    var s = document.createElement("script");
    s.defer = true; s.src = "https://plausible.io/js/script.js"; s.setAttribute("data-domain", CFG.plausibleDomain);
    document.head.appendChild(s);
    window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
    document.addEventListener("click", function (e) { var a = e.target.closest && e.target.closest("a[download]"); if (a) track("Toolkit Download"); });
  }
  function track(name, props) { if (window.plausible) window.plausible(name, props ? { props: props } : undefined); }

  /* ---- Boot ---- */
  renderHeader();
  renderFooter();
  renderContent();
  ui();
  quiz();
  calc();
  intake();
  newsletter();
  toolkitGate();
  urgent();
  analytics();
  draftMode();
})();
