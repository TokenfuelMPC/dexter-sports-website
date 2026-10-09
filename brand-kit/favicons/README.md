# Favicon options

`all-options-preview.png` shows every option at full size, at 16/32/48 px, in a dark browser tab, and as a phone home-screen icon.

| Folder | Look | Notes |
|---|---|---|
| **electric** | Blue tile, cream D, orange dot | **Live on the site now** (the original brand mark) |
| chrome | Liquid-silver D on midnight | Matches the site's silver / mercury accents |
| mercury | Liquid-silver tile, ink D, blue dot | Bright and metallic; strongest on dark tab bars |
| midnight | Black tile, cream D, blue dot | Quiet and premium; matches the header and footer |
| gradient | Blue gradient tile, white D, orange dot | A slightly richer take on electric |
| round | Blue circle, cream D, no dot | Best for social avatars (Instagram, LinkedIn, X) |
| cream | Cream tile, ink D, blue dot | Light option for print and partner decks |

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
