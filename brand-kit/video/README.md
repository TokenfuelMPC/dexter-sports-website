# Video — sources, license, and how the web files were made

## License
All footage comes from **Pexels** under the [Pexels License](https://www.pexels.com/license/): free for commercial use, no attribution required, and modification allowed. Pexels prohibits presenting identifiable people in a bad light or implying they endorse a product or business. Use the footage as atmosphere only, never as if the person were a Dexter client. **Never digitally alter an athlete's body or face.**

## Source files (`source/`, unedited downloads)
| File | Pexels page | Content |
|---|---|---|
| `10350259-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/a-woman-holding-a-volleyball-10350259/ | Volleyball close-up, black background with net. **Desktop hero clip** (loops) |
| `10350257-hd_720_1366_25fps.mp4` | https://www.pexels.com/video/woman-throwing-ball-against-black-background-10350257/ | Same series, vertical. **Phone hero clip** (loops) |
| `10350261-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/woman-in-white-t-shirt-holding-ball-against-black-background-10350261/ | Same series, full body. Alternate, not used |

Downloaded Oct 9, 2026. Direction: **feature women of color**. Boxing, soccer, and basketball clips were tried and removed at the client's request (Oct 9). Requirements for any new sport footage: **a woman of color, in a real team jersey/uniform, in real game or training action** (not fitness or yoga wear). Free libraries (Pexels, Mixkit, Pixabay) have very little footage of Black women playing soccer or basketball; see "Upgrading footage" below.

## Web files (`web/`, copies of what's in `assets/video/`)
| File | Made from | Treatment |
|---|---|---|
| `hero-volleyball.mp4` | 10350259 | Mirrored so the athlete faces into the page, 1280 wide |
| `hero-volleyball-mobile.mp4` | 10350257 | 720×1366 vertical |
| `hero-poster.jpg`, `hero-poster-mobile.jpg` | Volleyball clips, frame at 2 s | Shown while video loads, and to visitors with reduced-motion or data-saver on |
| `hero-volleyball-fullbody-ALT.mp4` | 10350261 | Mirrored alternate (not on the site) |

Commands used (ffmpeg; any recent version):
```bash
ffmpeg -i SOURCE.mp4 -vf "scale=1280:-2" -r 25 -an -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart hero-soccer.mp4
ffmpeg -i SOURCE_2048.mp4 -vf "crop=608:1080:720:0,scale=540:960" -r 25 -an -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart hero-basketball-mobile.mp4
ffmpeg -ss 3 -i hero-soccer.mp4 -frames:v 1 -q:v 4 hero-poster.jpg
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
