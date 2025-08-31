## japinder12.github.io — Portfolio

Animated, lightweight portfolio scaffold built with Next.js (App Router) and designed for static export to GitHub Pages.

### Develop

1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Open: `http://localhost:3000`

### Build & Export (static)

Static export is configured via `output: 'export'` in `next.config.ts`.

- Build: `npm run build` (also runs `next export`)
- Output goes to `out/`

### Deploy to GitHub Pages

Option A — Use `out/` on `main` (username.github.io serves root):

- Copy contents of `out/` to repo root and push, or
- Configure your CI to build and publish `out/` to the root of this repo.

Option B — Use `gh-pages` branch:

- Use a deploy action or `gh-pages` package to publish `out/` to `gh-pages`.

Notes:
- `images.unoptimized = true` for static export.
- If using a project page (not username.github.io), set `assetPrefix`/`basePath` accordingly.

