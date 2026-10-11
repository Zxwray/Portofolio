# Portfolio — Wini Dimas Muharromsyah

Static site (HTML + CSS + vanilla JS). No build step. Open `index.html` with Live Server, or host on Netlify / Vercel / GitHub Pages.

## File structure

```
portfolio/
├── index.html
├── css/style.css
├── js/
│   ├── data.js            ← EDIT CONTENT HERE (projects, features, links, timeline)
│   └── main.js
└── assets/
    ├── cv/
    │   └── Wini-Dimas-Muharromsyah-CV.pdf
    ├── img/
    │   ├── profile/
    │   │   ├── hero.jpg                 (3:4 portrait, half-body, slight angle, hand near cheek)
    │   │   └── about.jpg                (3:4 portrait)
    │   ├── projects/
    │   │   ├── cakrawala-pandawa/       01-dashboard.png … 07-student-borrow.png
    │   │   ├── lumbung-harmoni/         01-home.png … 05-responsive.png
    │   │   └── solotrek/                01-ai-planner.png … 11-fingerprint.png
    │   ├── roblox/                      01.png … 05.png
    │   ├── design/                      01.jpg … 06.jpg  (4:5 Instagram posts)
    │   └── video/                       01.jpg … 03.jpg  (thumbnails)
    └── video/                           01.mp4, 02.mp4 (or use a YouTube id in data.js)
```

Any image that is missing shows a striped placeholder with the exact path to add.

## Things to edit in js/data.js
- Lumbung Harmoni `link` (your hosted URL) and its feature list.
- Roblox map description.
- Video entries (`src` for a local file or `yt` for a YouTube id).
- Add/remove features per project: each feature = one screenshot.
