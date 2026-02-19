# TraceCharter Landing

Production-ready landing site built with React + TypeScript + Vite.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs the deployable files to `dist/`.

## Deploy to `www.tracecharter.com`

This site is static and works with Vercel, Netlify, Cloudflare Pages, AWS Amplify, and similar hosts.

Recommended quick path (Vercel):

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click `Add New Project` and import the repo.
3. Framework preset: `Vite` (auto-detected).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.
7. Add domains in Vercel project settings:
   - `tracecharter.com`
   - `www.tracecharter.com`
8. Set `www.tracecharter.com` as the primary domain and redirect apex to `www`.

## DNS records (typical)

Use the exact DNS values shown by your host dashboard. If you deploy on Vercel, these are the usual records:

- `A` record
  - Host/Name: `@`
  - Value: `76.76.21.21`
- `CNAME` record
  - Host/Name: `www`
  - Value: `cname.vercel-dns.com`

Notes:

- Remove conflicting old `A`, `AAAA`, or `CNAME` records for `@` or `www`.
- Keep only one CNAME for `www`.
- DNS propagation can take a few minutes to 24 hours.

## Included SEO files

- `public/robots.txt`
- `public/sitemap.xml`
- canonical + Open Graph + Twitter + Organization schema in `index.html`