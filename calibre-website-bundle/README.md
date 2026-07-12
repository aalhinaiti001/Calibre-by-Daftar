# Calibre by Daftar — Website

A fast, dependency-free marketing site for **Calibre by Daftar**, the hiring-decision
diagnostic. Pure HTML/CSS/JS — no build step, no framework, no server required.

## Contact details

Wired throughout the site (email links, phone links, WhatsApp, and the contact form):

- **Email:** ahmad@daftaradvisory.com
- **Phone / WhatsApp:** +962 79 888 0035

To change them, edit the `SITE` object at the top of [`js/main.js`](js/main.js) and the
`mailto:` / `tel:` links in [`index.html`](index.html) (search for the current values).

## Project structure

```
calibre-website/
├── index.html        # The full page
├── css/
│   └── styles.css    # All styling (design tokens as CSS variables at the top)
├── js/
│   └── main.js       # Score animation, method stepper, and the contact form
├── favicon.svg       # Brand mark (also used in the header)
├── 404.html          # Friendly not-found page
├── robots.txt        # Search-engine directives
└── README.md
```

## Running it locally

It's a static site, so just open `index.html` in a browser. To serve it over HTTP
(recommended, so relative paths and the form behave exactly as in production):

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then visit http://localhost:8000.

## The contact form

The form is live via [Formspree](https://formspree.io) — submissions POST directly to
ahmad@daftaradvisory.com with no page reload, using the endpoint configured in
`SITE.formEndpoint` in [`js/main.js`](js/main.js). If that endpoint is ever unset, the
form automatically falls back to a `mailto:` link (zero backend, zero setup).

## Linking to Daftar Advisory

Calibre is a sibling site to the main [Daftar Advisory](https://daftaradvisory.com)
website, cross-linked on the established subdomain scheme:

| Site | URL |
|---|---|
| Daftar Advisory (main) | `https://daftaradvisory.com` |
| Calibre by Daftar (this site) | `https://calibre.daftaradvisory.com` |

- **This site → Daftar Advisory:** the "Daftar Advisory" credibility strip and footer
  link already point to `https://daftaradvisory.com`.
- **Daftar Advisory → Calibre:** the main site's "From the practice" band links here via
  `https://calibre.daftaradvisory.com/` (currently a placeholder pending DNS — see the
  `TODO` comment in that site's `index.html`, right above the link).

Once this bundle is deployed at the `calibre.daftaradvisory.com` subdomain, remove that
`TODO` comment on the main site — the link will resolve immediately since the URL is
already correct.

## Deploying

`calibre-website-bundle.zip` (one level up from this folder) is a ready-to-upload copy
of everything in this directory — hand it to any static host, or unzip it directly onto
the `calibre.daftaradvisory.com` subdomain root. To rebuild it after edits:

```powershell
Compress-Archive -Path "calibre-website\*" -DestinationPath "calibre-website-bundle.zip" -Force
```

Any static host works — point it at this folder (or the unzipped bundle):

- **Netlify / Vercel:** drag-and-drop the folder/zip, or connect the repo. No build
  command; publish directory is the project root. Set the custom domain to
  `calibre.daftaradvisory.com`.
- **GitHub Pages:** push to a repo, enable Pages on the `main` branch (root), and add a
  `CNAME` file containing `calibre.daftaradvisory.com`.
- **Cloudflare Pages / S3 / any web server:** upload the files as-is and point the
  subdomain's DNS (CNAME record) at the host.

Whichever host you pick, add a DNS `CNAME` record for `calibre` → the host's target, then
update the TODO'd link on the main site as noted above.

## Customising

- **Colours & type:** all design tokens live as CSS variables in `:root` at the top of
  [`css/styles.css`](css/styles.css).
- **Copy:** edit directly in [`index.html`](index.html) — sections are clearly commented.
- **Fonts:** Inter (UI/body) + JetBrains Mono (labels/eyebrows) + Fraunces (the "Daftar"
  brand mark), loaded from Google Fonts in the `<head>`.
