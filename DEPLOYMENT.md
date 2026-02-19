# Deployment and DNS Setup

This project builds to static files and can be hosted on any static host.

## 1. Build

```bash
npm install
npm run build
```

Deploy the `dist/` directory.

## 2. Connect domain

Target production URL:

- `https://www.tracecharter.com/` (primary)
- `https://tracecharter.com/` should redirect to `https://www.tracecharter.com/`

## 3. DNS records

The exact values depend on your host. Common Vercel setup:

| Type  | Name | Value                  | Purpose                     |
|-------|------|------------------------|-----------------------------|
| A     | @    | 76.76.21.21            | Apex/root domain            |
| CNAME | www  | cname.vercel-dns.com   | `www` subdomain             |

Rules:

- Keep only one `CNAME` record for `www`.
- Remove old conflicting `A`/`AAAA`/`CNAME` records.
- Leave TTL at default (usually 300 or 600) unless your DNS provider requires otherwise.

## 4. Verify after propagation

Check:

1. `https://www.tracecharter.com/` loads the site over HTTPS.
2. `https://tracecharter.com/` redirects to `https://www.tracecharter.com/`.
3. `https://www.tracecharter.com/robots.txt` returns robots file.
4. `https://www.tracecharter.com/sitemap.xml` returns sitemap.

Propagation time is usually minutes, but can take up to 24 hours.
