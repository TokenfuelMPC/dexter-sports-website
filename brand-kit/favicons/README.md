# Favicon options

Every option carries the **Howard-red dot** (#E51937), a quiet nod to Kim's alma mater. Keep the dot red if you make new versions.

`all-options-preview.png` shows every option at full size, at 16/32/48 px, in a dark browser tab, and as a phone home-screen icon.

| Folder | Look | Notes |
|---|---|---|
| electric | Blue tile, cream D, red dot | The original brand mark |
| **chrome** | Liquid-silver D on midnight, red dot | **Live on the site now (Oct 2026)**: the lead theme, matching the liquid-silver design |
| mercury | Liquid-silver tile, ink D, red dot | Bright and metallic; strongest on dark tab bars |
| midnight | Black tile, cream D, red dot | Quiet and premium; matches the header and footer |
| gradient | Blue gradient tile, white D, red dot | A slightly richer take on electric |
| round | Blue circle, cream D, red dot | Best for social avatars (Instagram, LinkedIn, X) |
| cream | Cream tile, ink D, red dot | Light option for print and partner decks |

Each folder contains:
- `favicon.svg` (modern browsers)
- `favicon.ico` (16/32/48, for older browsers and Google results)
- PNGs at 16, 32, 48, 192, 512, and 1024 px
- `apple-touch-icon.png` (180 px, iPhone home screen)
- `icon-maskable-512.png` (Android home screen)

## Switching the live favicon (2 minutes, no code)
Copy these files from the chosen folder, overwriting the existing ones:

| From the folder | To |
|---|---|
| `favicon.ico`, `apple-touch-icon.png` | the repo root |
| `favicon.svg`, `favicon-16.png`, `favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `icon-maskable-512.png` | `assets/img/` |

Commit and push. Browsers cache favicons heavily, so check in a private window.
