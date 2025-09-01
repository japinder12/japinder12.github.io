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

### Custom Domain on Vercel

1. Add domain: Vercel Project → Settings → Domains → `japindernarula.com` (and `www.japindernarula.com`).
2. DNS (choose one):
   - Vercel DNS (simplest): switch nameservers to Vercel's.
   - Keep current DNS: set A record for apex `japindernarula.com` to `76.76.21.21` and CNAME `www` to `cname.vercel-dns.com`.
3. Set primary domain and enable redirect from `www` → apex in Vercel.

For email sending with Resend, verify `japindernarula.com` in Resend (Dashboard → Domains) and update `RESEND_FROM` to an address on that domain, e.g. `"Japinder <hello@japindernarula.com>"`.

### Environment Variables (Vercel)

Set these in Vercel: Project → Settings → Environment Variables. See `.env.example` for names.

- Server-side (secrets): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `RESEND_FROM`
- Public: `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_RESUME_URL`

For local development, create `.env.local` (do not commit) based on `.env.example`.
