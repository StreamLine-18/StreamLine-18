# Development notes

Portfolio site built with React, Vite, Anime.js v4, and three.js (Lanyard card).
This file is separate from `README.md` because this repository is also the GitHub profile repository.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Requires Node.js 18 or newer (LTS recommended).

## Content

All text (profile, skills, projects, experience, certifications) lives in `src/data.js`.

## Deployment (GitHub Pages)

- Pages source must be **GitHub Actions** (Settings → Pages → Source).
- Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.
- The custom domain comes from `public/CNAME`, which is copied into `dist/` on every build.
- `vite.config.js` uses `base: '/'`, which is correct for a custom domain. Without a custom domain the site would be served from a subpath and `base` would need to change.

## Other folders

- `legacy/` holds the previous static HTML version. It is not part of the build.
- `index old.html`, `index.html.old`, and `img.png` in the root are kept from the old site and are not part of the build.
