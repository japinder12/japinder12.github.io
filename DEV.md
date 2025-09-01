## Developer Guide

This document contains the implementation details, local setup, environment variables, and deployment steps for this portfolio.

### Stack

- Next.js 14 (App Router), React 18, TypeScript
- Email: Resend (API)
- Icons: `react-icons` (Simple Icons, Font Awesome, Tabler)
- Asset generation: `sharp` (SVG → PNG)

### Local Development

1) Install
- `npm install`

2) Environment
- Copy `.env.example` → `.env.local` and fill values.
- Public (safe to expose):
  - `NEXT_PUBLIC_CONTACT_EMAIL`
  - `NEXT_PUBLIC_GITHUB_URL`
  - `NEXT_PUBLIC_LINKEDIN_URL`
  - `NEXT_PUBLIC_RESUME_URL`
- Server (secrets):
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `RESEND_FROM` (e.g., `"Japinder's Portfolio <hello@japindernarula.com>"`)

3) Run
- `npm run dev`
- Open http://localhost:3000

### Contact API

- Route: `src/app/api/contact/route.ts`
- Validates `name`, `email`, `message`, then POSTs to Resend with `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO_EMAIL`.
- For UI: `src/components/Footer.tsx` handles form submission and status.

### Icons & Favicons

- Source icon: `src/app/icon.svg`
- Prebuild script: generates `src/app/icon.png` (512×512) and `src/app/apple-icon.png` (180×180)
  - Script: `scripts/gen-icons.mjs` (runs via `prebuild`)
- Metadata references in `src/app/layout.tsx` (with `?v=3` cache‑buster for Safari).

### Editing Content

- Hero: `src/components/Hero.tsx` (`fullTitle`, subline, tags)
- Projects: `src/components/ProjectsGrid.tsx` (`projects` array; set each `href`)
- Skills: `src/components/Skills.tsx` (chip list + icons)
- Experience: `src/components/Experience.tsx`
- Styles: `src/styles/globals.css`

### Deploy (Vercel)

1) Import repo into Vercel
2) Env vars (Project → Settings → Environment Variables)
   - Server: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `RESEND_FROM`
   - Public: `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_RESUME_URL`
3) Build: defaults (Next.js). Script: `next build`
4) Domain: add `japindernarula.com` (+ `www`)
   - GoDaddy DNS → A apex `76.76.21.21`, CNAME `www` `cname.vercel-dns.com`, or switch to Vercel nameservers
5) Resend: verify domain before using a custom From address

Safari icon caching
- Safari caches site icons aggressively. Versioned URLs (`?v=3`) help, but you may need to clear website data or test in a Private window.

### Static Export (optional)

If deploying to GitHub Pages (no serverless functions):
- `next.config.mjs`: uncomment `output: 'export'` and set `images.unoptimized = true`
- `package.json`: set `"build": "next build && next export"`
- Publish `out/` and replace the contact API with a third‑party endpoint or separate serverless function

### Troubleshooting

- Skills icon import errors → check icon names in `react-icons/si`, component falls back to initials safely.
- Form submission shows error despite sending → ensure `Footer.tsx` caches `e.currentTarget` before await; this repo already fixes it.
- `.next` tracked by git → `git rm -r --cached .next` then commit.

### License

MIT

