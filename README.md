# La Zhuo — Island Portfolio

A floating 3D island portfolio built with three.js. Hosted on GitHub Pages.

## What's where

| File | What it holds |
| --- | --- |
| `index.html` | Page structure: intro text, buttons, panels. Edit wording here. |
| `css/style.css` | All styling: colors, fonts, layout. |
| `js/island.js` | The 3D island: every model, the camera stops, projects, weather. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. Leave it in. |
| `CHANGELOG.md` | A short note for each update. |

### Handy places in `js/island.js`

Search the file for these words to jump to them:

- `PROJECTS` — titles, descriptions and links for each project.
- `STOPS` — the camera stops, their titles and captions.
- `WX` — the weather moods (sky colors, light, fog, clouds).
- `SHOW_WEATHER_BUTTONS` — set to `true` to show the weather preview buttons to everyone.
- `MOCHI`, `PEN`, `CACT`, `LAKE`, `GH_X` — where each area sits on the island.

## Previewing

- **On your computer:** double-click `index.html` to open it in a browser.
- **Weather moods:** add `#dawn`, `#night`, `#storm` or `#snow` to the address, or `?preview` to show the buttons.

## Updating the site

1. Edit the files (or replace them with a new version).
2. In `index.html`, bump the version on the CSS and JS links (`?v=1` → `?v=2`) so visitors get the new files instead of old cached ones.
3. Add a line to `CHANGELOG.md`.
4. Commit with a short message and push. The live site updates within a few minutes.

To undo a bad update, revert that commit in GitHub Desktop (History → right-click the commit → Revert).

The island's weather follows Boston's live weather (from Open-Meteo) and Boston time.
