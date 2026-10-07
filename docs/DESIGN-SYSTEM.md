# Design System

The look carries over the original site's identity (electric blue on warm cream, with an orange call-to-action) and adds a serif display face for authority.

## Color
Defined in `:root` at the top of `assets/css/styles.css`.

| Token | Hex | Use |
|---|---|---|
| `--blue` | `#0052FF` | Primary brand: hero, links, icons, key panels |
| `--blue-deep` | `#0038B8` | Hover / pressed |
| `--blue-ink` | `#001A5C` | Dark "Access" panels |
| `--orange` | `#FF7A1A` | Primary call-to-action buttons and accents. Use sparingly. |
| `--cream` | `#FFFCF7` | Page background |
| `--sand` | `#F4EEE4` | Alternate section background |
| `--ink` | `#0B1020` | Body text, footer |
| `--ink-soft` / `--ink-mute` | `#3D4459` / `#6B7185` | Secondary text / captions |
| `--line` | `#E4DDD0` | Borders on cream |

Orange buttons use dark text (`--ink`) for contrast. Text on blue is white.

## Type
| Role | Font | Where |
|---|---|---|
| Display | **Playfair Display** (600; italic 500 for emphasis) | h1, h2, quotes, big numbers |
| Body | **Inter** (400–700) | Paragraphs, h3, forms |
| Label | **Montserrat** (600–800, uppercase, tracked) | Eyebrows, buttons, nav, wordmark |

Loaded from Google Fonts in each page's `<head>`. Sizes are fluid (`--step--1` through `--step-4`).

**Signature move:** headlines end with an *italic serif phrase*, e.g. `<h1>Protect the talent. <em>Build what lasts.</em></h1>`.

## Components
| Class | What |
|---|---|
| `.hero`, `.hero--page` | Blue header band (home / inner pages) |
| `.section`, `--sand`, `--blue`, `--ink`, `--tight` | Section spacing and backgrounds |
| `.container`, `.split`, `.split--wide`, `.grid .grid-2/3/4` | Layout |
| `.eyebrow` | Small uppercase label above headings |
| `.lead` | Larger intro paragraph |
| `.btn` + `--primary` (orange) / `--blue` / `--ghost` / `--sm` | Buttons |
| `.arrow-link` | Text link with an arrow |
| `.card`, `.card--flat` | White content card |
| `.checks` | Checkmark list |
| `.steps` | Numbered process row |
| `.pull-quote`, `.callout`, `.disclaimer` | Editorial elements |
| `.cta-band` | Rounded blue call-to-action block |
| `.prose` | Article body width and rhythm |

## Logo
The current mark is an interim "D" monogram (`assets/img/favicon.svg`, also inline in `main.js` as `MARK`) with a Montserrat wordmark. If Kim has an official logo, replace the `MARK` SVG in `main.js` and `favicon.svg`, and regenerate `og-image.png` (1200×630).

## Voice
Calm, protective, plain-spoken. Speak to families as capable partners. Prefer "ask," "understand," and "protect" over hype. Always keep the athlete at the center. Never promise outcomes or give legal or tax advice, and keep the "not a law firm" disclaimer wherever advice-adjacent content appears.
