# Video — sources, license, and how the web files were made

## License
All footage comes from **Pexels** under the [Pexels License](https://www.pexels.com/license/): free for commercial use, no attribution required, and modification allowed. Pexels prohibits presenting identifiable people in a bad light or implying they endorse a product or business. Use the footage as atmosphere only, never as if the person were a Dexter client. **Never digitally alter an athlete's body or face.**

## Source files (`source/`, unedited downloads)
| File | Pexels page | Content |
|---|---|---|
| `10350259-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/a-woman-holding-a-volleyball-10350259/ | Volleyball close-up, black background with net. **Hero (desktop + phone crop)** |
| `10350261-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/woman-in-white-t-shirt-holding-ball-against-black-background-10350261/ | Same series, full body. **Hero (desktop + phone crop)** |
| `10350257-hd_720_1366_25fps.mp4` | https://www.pexels.com/video/woman-throwing-ball-against-black-background-10350257/ | Same series, vertical throw. **Hero (phone)** |
| `10350262-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/woman-in-white-t-shirt-holding-ball-against-black-background-10350262/ | Same series, full body moving to face close-up. **Hero (desktop + phone crop)** |
| `10350258-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/woman-holding-ball-10350258/ | Same series, handling the ball. **Hero (desktop + phone crop)** |
| `10350260-hd_720_1366_25fps.mp4` | https://www.pexels.com/video/woman-holding-ball-10350260/ | Same series, vertical, holding the ball. **Hero (phone)** |

Downloaded Oct 9, 2026 (the full six-clip volleyball series). Direction: **feature women of color**. Boxing, soccer, and basketball clips were tried and removed at the client's request (Oct 9). Requirements for any new sport footage: **a woman of color, in a real team jersey/uniform, in real game or training action** (not fitness or yoga wear). Free libraries (Pexels, Mixkit, Pixabay) have very little footage of Black women playing soccer or basketball; see "Upgrading footage" below.

## Web files (`web/`, copies of what's in `assets/video/`)
| File | Made from | Treatment |
|---|---|---|
| `hero-volleyball.mp4` | 10350259 | Desktop clip 1. Mirrored so the athlete sits on the right, 1280 wide |
| `hero-volleyball-fullbody.mp4` | 10350261 | Desktop clip 2. Mirrored, 1280 wide |
| `hero-volleyball-mobile.mp4` | 10350257 | Phone clip 1. 720×1366 vertical |
| `hero-volleyball-closeup-mobile.mp4` | 10350259 | Phone clip 2. Vertical crop (405×720 at x=344 → 540×960) |
| `hero-volleyball-fullbody-mobile.mp4` | 10350261 | Phone clip. Vertical crop (405×720 at x=290 → 540×960) |
| `hero-volleyball-approach.mp4` / `-mobile` | 10350262 | Desktop: mirrored 1280 wide · Phone: crop at x=344 |
| `hero-volleyball-ball.mp4` / `-mobile` | 10350258 | Desktop: mirrored 1280 wide · Phone: crop at x=454 |
| `hero-volleyball-hold-mobile.mp4` | 10350260 | Phone: 540 wide vertical |
| `hero-poster.jpg`, `hero-poster-mobile.jpg` | Volleyball clips, frame at 2 s | Shown while video loads, and to visitors with reduced-motion or data-saver on |

Commands used (ffmpeg; any recent version):
```bash
ffmpeg -i 10350259.mp4 -vf "hflip,scale=1280:-2" -an -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart hero-volleyball.mp4
ffmpeg -i 10350259.mp4 -vf "crop=405:720:344:0,scale=540:960" -r 25 -an -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart hero-volleyball-closeup-mobile.mp4
ffmpeg -ss 2 -i hero-volleyball.mp4 -frames:v 1 -q:v 4 hero-poster.jpg
```

## Upgrading footage (recommended)
To add soccer and basketball (women of color, real jerseys, real game action), the best sources are paid. Free libraries were searched Oct 9, 2026 (Pexels, Mixkit, Pixabay) without a suitable result:
- **Envato Elements** (one subscription, ~$16.50/mo; unlimited downloads with a commercial license): cancel after downloading, and the license for downloaded, registered items continues
- **iStock / Getty** (per clip, roughly $30–$170+): strongest selection of women's soccer and basketball featuring Black athletes
- **Best of all: real footage** of Dexter clients or HBCU athletes, filmed with signed releases

## Swapping or adding clips
1. Put the new file(s) in `assets/video/`. Keep each clip **under ~1.5 MB** (720p, 8–15 s, no audio).
2. List them in `assets/js/config.js → heroVideo` (`desktop` and `mobile` playlists crossfade in order).
3. Make a new poster frame, and save the original download in `brand-kit/video/source/` with its Pexels link in this README.
4. Best footage: a woman athlete in action against a dark background, with natural color, and the subject facing or moving toward the left (where the headline sits).
