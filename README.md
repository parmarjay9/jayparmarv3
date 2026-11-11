# Jay Parmar — Portfolio

My personal site: projects, experience, education, and a few side quests.

**Live:** [jayparmarv3.vercel.app](https://jayparmarv3.vercel.app)

Built with React 18, Vite 5, and Tailwind CSS 3. There's no backend; everything is static and deployed on Vercel.

## Features

- **Project popups** with a screenshot carousel (arrow buttons, dots, ← → keys)
- **Side Quests** cards (cooking, YouTube, photography) that open a detail popup
- **Accessible popups**: Escape closes them, focus stays inside while open and returns afterward, and the page behind doesn't scroll
- **Interactive hero**: clicking Mumbai, Tempe, or ASU drops a polaroid photo
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Mobile menu that closes on an outside tap or Escape
- "Last updated" date in the footer, stamped automatically at build time

## Run locally

Requires Node 22.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Editing content

Almost all content lives in [`src/data.js`](src/data.js), so most updates don't touch any components.

| Export | What it controls |
| --- | --- |
| `LINKS` | Résumé, GitHub, LinkedIn, email, and other links |
| `PLACE_PHOTOS` | Polaroid photos dropped by the hero's place names |
| `PROJECTS` | Project cards and popups |
| `XP` | Experience entries, including logos |
| `EDUCATION` | Education cards and course lists |
| `SKILLS` | Skills section |
| `NOTES` | Side Quests cards |

### Adding project screenshots

1. Put the images in `public/screenshots/` with **lowercase** names, e.g. `leftoverlab-7.jpg`. Vercel is case-sensitive, so `.PNG` won't match `.png`.
2. Bump the count in that project's `screenshots` line in `data.js`, e.g. `[1, 2, 3, 4, 5, 6, 7]`.
3. The **first** screenshot is the preview on the project card, so lead with the strongest screen.

Keep images around 900px tall; the popup never shows them taller than 400px. Blur any real emails or personal data before adding them.

### Other images

| Folder | Used for |
| --- | --- |
| `public/side-quests/` | Side Quests card photos (shown at 4:3) |
| `public/logos/` | Experience logos |
| `public/` | Hero photo (`me.jpg`), place photos, résumé PDF, favicons |

## Project structure

```
index.html                 # meta tags, fonts, favicons
vite.config.js             # build-time "last updated" date
src/
  main.jsx                 # entry
  App.jsx                  # section order + scroll-reveal observer
  index.css                # Tailwind layers, grain, reveal, card hover styles
  data.js                  # all site content
  icons.js
  components/
    Nav.jsx                # sticky nav, smooth scroll, mobile menu
    Ticker.jsx
    Hero.jsx               # intro + polaroid place photos
    Projects.jsx           # project cards, popup, screenshot carousel
    Experience.jsx         # roles, logos, detail popup
    Education.jsx
    Skills.jsx
    SideQuests.jsx         # side quest cards + popup
    Footer.jsx
    ScrollProgress.jsx
    BackToTop.jsx
    BuildNotes.jsx         # sticky-note popup
    useModal.js            # shared popup behavior (focus, Escape, scroll lock)
```

## Deployment

Every push to `main` deploys automatically on Vercel.

A few things keep the build working:

- **Node 22**: set in `package.json` → `engines`. Vercel no longer builds on Node 20.
- **Vite stays on 5.x**: `@vitejs/plugin-react` 4.3.4 only supports Vite 4–6. Upgrade both together, never just Vite.
- **Don't run `npm audit fix --force`**: it jumps Vite to a version the plugin can't use, which breaks the Vercel install. The audit warnings are for the local dev server, not the live site.
