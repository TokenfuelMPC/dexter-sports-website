# Design System

**Direction:** modern and editorial, with a clear point of view. A dark, cinematic frame (header, hero, footer) with electric-blue light, set against warm paper-toned content. Headlines are tight and heavy, softened by serif-italic accent words. Small monospace labels add a precise, data-forward feel. The goal is to look nothing like the typical agency or search-firm site in this space.

All tokens live at the top of `assets/css/styles.css`. Change them there; never hard-code colors in pages.

## Color

| Token | Hex | Use |
|---|---|---|
| `--blue` | `#0052FF` | Signature brand blue (from the original site): primary buttons, links, accents, glow |
| `--blue-soft` | `#7AA2FF` | Blue text and details on dark backgrounds |
| `--night` | `#07080C` | Header, hero, footer, dark sections, dark cards |
| `--cream` | `#F5F2EB` | Page background ("paper") |
| `--sand` | `#EBE6DB` | Alternate light sections |
| `--ink` / `--ink-soft` / `--ink-mute` | `#0B0D12` / `#3A3F4D` / `#6C7080` | Text hierarchy |
| `--line` / `--line-dark` | `#DCD6C9` / 10% white | Hairlines on light / dark |
| `--alert` | `#E5372A` | **Urgent requests only.** Never decorative |
| `--orange` | `#FF7A1A` | Reserved; legacy brand color, use sparingly if at all |

**Rhythm:** alternate dark and light sections. Don't place two blue sections next to each other.

## Type

| Role | Font (Google Fonts) | Use |
|---|---|---|
| Display | **Inter Tight** 600–800, tight tracking (−0.035 to −0.05em) | h1–h3, big numbers, wordmark |
| Accent | **Instrument Serif** italic | The emphasized phrase in a headline, quotes, the marquee's alternating words |
| Body | **Inter** 400–600 | Paragraphs, forms, buttons |
| Label | **JetBrains Mono** 500, uppercase | Eyebrows, indexes (01 / For coaches), tags, small meta |

**Signature move:** every major headline ends with an *italic serif* phrase:
```html
<h2>The coaches the big agencies <em>overlook.</em></h2>
```
In the hero, that phrase gets a white-to-blue gradient automatically.

## Components

| Class | What |
|---|---|
| `.hero` / `.hero--page` | Dark hero with blue glow, grid lines, and grain (home / inner pages) |
| `.hero-home`, `.hero-portrait`, `.chips` | Home hero layout with Kim's portrait and credential chips |
| `.lanes` / `.lane` | The two specialty lanes (Coaches / NIL) under the home hero |
| `.marquee` | Scrolling ticker of what we negotiate (pauses on hover; still under reduced motion) |
| `.section`, `--sand`, `--blue`, `--ink`, `--tight` | Section spacing and backgrounds |
| `.bento` | Home services grid: card 1 (dark) and card 6 span two columns; card 2 is blue |
| `.network-grid` / `.network-item` | Dark tiles with a cursor-following blue spotlight |
| `.stats` / `.stat` | Big numbers with hairline dividers |
| `.card`, `.card--flat` | White cards; hover lifts with a blue border |
| `.btn` + `--primary` (blue) / `--blue` (black) / `--ghost` / `--alert` (urgent) / `--sm` | Pill buttons; links get an animated arrow automatically |
| `.eyebrow`, `.index`, `.tag` | Mono labels |
| `.checks`, `.steps`, `.timeline` | Lists, process, career history |
| `.toolkit-cover` | CSS-drawn cover of the Before You Sign toolkit |
| `.gate` | Toolkit registration card |
| `.cta-band` | Dark call-to-action block with glow and grain |
| `.alert-band`, `.tier-chip`, `.urgent-steps` | Urgent-request UI |
| `.footer-word` | Giant outlined "Dexter *Sports*" wordmark in the footer |
| `.reveal` / `.rise` | Scroll-in and hero entrance animations (respect `prefers-reduced-motion`) |

## Imagery
- **Kim's portrait** (`assets/img/kim-dexter.jpg`, 4:5): the current file is cropped from a 400 px LinkedIn photo. **Replace it with a high-resolution original (≥1200×1500) as soon as possible.**
- Future photography: candid, editorial, natural light (on the sideline, in a film room, with clients). Avoid stock "handshake" photos.
- Logos for partners: monochrome SVG preferred; they're shown in grayscale until hovered.

## Logo
An interim "D" monogram (`favicon.svg`, and `MARK` in `main.js`) plus the wordmark "Dexter *Sports Co.*" set in Inter Tight + Instrument Serif. If Kim commissions a logo, replace `MARK` and `favicon.svg`, and regenerate `og-image.png` (1200×630).

## Voice
Calm, protective, plain-spoken. Speak to coaches and families as capable partners. Prefer "ask," "understand," and "protect" over hype. Never promise outcomes or give legal or tax advice, and keep the "not a law firm" disclaimer wherever advice-adjacent content appears.
