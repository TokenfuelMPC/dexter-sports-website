# Video — sources, license, and how the web files were made

## License
All footage comes from **Pexels** under the [Pexels License](https://www.pexels.com/license/): free for commercial use, no attribution required, and modification allowed. Pexels prohibits presenting identifiable people in a bad light or implying they endorse a product or business. Use the footage as atmosphere only, never as if the person were a Dexter client. **Never digitally alter an athlete's body or face.**

## Source files (`source/`, unedited downloads, Oct 9, 2026)
| File | Pexels page | Content |
|---|---|---|
| `3444516-hd_1920_1080_30fps.mp4` | https://www.pexels.com/video/a-person-showing-her-boxing-skills-3444516/ | Woman boxer training, dark background. **Primary hero clip.** Note: Everlast logo visible on the gloves (incidental product branding) |
| `10350259-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/a-woman-holding-a-volleyball-10350259/ | Volleyball athlete close-up, black background with net. **Second hero clip** |
| `10350257-hd_720_1366_25fps.mp4` | https://www.pexels.com/video/woman-throwing-ball-against-black-background-10350257/ | Same series, vertical. **Phone hero (second clip)** |
| `10350261-hd_1366_720_25fps.mp4` | https://www.pexels.com/video/woman-in-white-t-shirt-holding-ball-against-black-background-10350261/ | Same series, full body. Alternate, not currently used |

## Web files (`web/`, copies of what's in `assets/video/`)
| File | Made from | Treatment |
|---|---|---|
| `hero-boxer.mp4` | 3444516 | 1280×720, brightened slightly (+5% brightness, +10% contrast), no audio, H.264 |
| `hero-boxer-mobile.mp4` | 3444516 | Center crop to vertical, 540×960 |
| `hero-2.mp4` | 10350259 | Mirrored so the athlete faces into the page, 1280 wide |
| `hero-mobile.mp4` | 10350257 | 720×1366 vertical |
| `hero-poster.jpg`, `hero-poster-mobile.jpg` | Frame at 5 s | Shown while video loads, and to visitors with reduced-motion or data-saver on |
| `hero-volleyball-fullbody-ALT.mp4` | 10350261 | Mirrored alternate (not on the site) |

Commands used (ffmpeg; any recent version):
```bash
ffmpeg -i SOURCE.mp4 -vf "eq=brightness=0.05:contrast=1.1:saturation=1.08,scale=1280:720" -r 25 -an -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart hero-boxer.mp4
ffmpeg -i SOURCE.mp4 -vf "eq=brightness=0.05:contrast=1.1:saturation=1.08,crop=608:1080:656:0,scale=540:960" -r 25 -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart hero-boxer-mobile.mp4
ffmpeg -ss 5 -i hero-boxer.mp4 -frames:v 1 -q:v 4 hero-poster.jpg
```

## Swapping or adding clips
1. Put the new file(s) in `assets/video/`. Keep each clip **under ~1.5 MB** (720p, 8–15 s, no audio).
2. List them in `assets/js/config.js → heroVideo` (`desktop` and `mobile` playlists crossfade in order).
3. Make a new poster frame, and save the original download in `brand-kit/video/source/` with its Pexels link in this README.
4. Best footage: a woman athlete in action against a dark background, with natural color, and the subject facing or moving toward the left (where the headline sits).
