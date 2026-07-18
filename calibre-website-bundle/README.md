# Calibre by Daftar — Website

A fast, **fully self-contained** marketing site for **Calibre by Daftar**, the
hiring-decision diagnostic. Pure HTML/CSS/JS — no build step, no framework, no server,
and **zero external requests at runtime** (fonts, styles, and icons are all vendored
locally, so the page renders identically on any network — including locked-down ones).

## Design

This is the **Guesswork** design: a warm, editorial treatment (Lora serif display +
Plus Jakarta Sans body) with four built-in themes — `paper` (default), `ink`, `clay`,
and `midnight` — toggled by the **Feel** control in the bottom-right. It's the sibling
voice to the [Daftar Advisory](https://daftaradvisory.com) site.

## Contact details

Wired throughout the page as direct links (no build config):

- **Email:** ahmad@daftaradvisory.com
- **Phone / WhatsApp:** +962 79 888 0035
- **Book a call:** Calendly link in the contact section

To change them, edit the links directly in [`index.html`](index.html) — the contact
section is clearly commented.

## Project structure

```
calibre-website-bundle/
├── index.html          # The full page (all copy + inline SVG icons + inline JS)
├── css/
│   └── tailwind.css    # Tailwind utilities, prebuilt (no CDN) — see "Rebuilding" below
├── fonts/
│   ├── fonts.css       # @font-face rules → the local woff2 files
│   ├── lora-normal.woff2, lora-italic.woff2
│   └── jakarta-normal.woff2, jakarta-italic.woff2
├── favicon*.png / icon*.{png,svg}   # Favicons + PWA icons
├── site.webmanifest    # PWA manifest (Guesswork theme colours)
├── 404.html            # Friendly not-found page (self-contained)
├── robots.txt          # Search-engine directives
└── README.md
```

There is **no `js/` directory** — the theme toggle, scroll-reveal, and the count-up
animation are small inline `<script>` blocks at the bottom of `index.html`. Icons are
inline SVGs (vendored from [Lucide](https://lucide.dev), ISC-licensed), not a runtime
icon library.

## Running it locally

It's a static site, so just open `index.html` in a browser. To serve it over HTTP
(recommended, so relative paths resolve exactly as in production):

```bash
python -m http.server 8000    # then visit http://localhost:8000
```

## Rebuilding `css/tailwind.css`

The stylesheet is a prebuilt Tailwind file (the original prototype used the Tailwind Play
CDN; it was compiled to a static file so the site has no external dependency). If you add
or change Tailwind utility classes in `index.html`, regenerate it:

```bash
npx tailwindcss@3 -c tailwind.config.js -i input.css -o css/tailwind.css --minify
```

…with a `tailwind.config.js` whose `content` points at `index.html` and whose
`theme.extend` carries the `paper` / `ink` / `forest` / `clay` colour scale and the
`Lora` / `Plus Jakarta Sans` font families (the same tokens defined as CSS variables in
the `<style>` block of `index.html`).

## Fonts

**Lora** (serif display) and **Plus Jakarta Sans** (UI/body) are vendored as variable
woff2 files under `fonts/` and declared in `fonts/fonts.css`. They were sourced from the
[Fontsource](https://fontsource.org) packages `@fontsource-variable/lora` and
`@fontsource-variable/plus-jakarta-sans` — no Google Fonts CDN call is made.

## Linking to Daftar Advisory

Calibre is a sibling site to the main [Daftar Advisory](https://daftaradvisory.com)
website, cross-linked on the subdomain scheme:

| Site | URL |
|---|---|
| Daftar Advisory (main) | `https://daftaradvisory.com` |
| Calibre by Daftar (this site) | `https://calibre.daftaradvisory.com` |

The header "Scope a call" strip and the footer already link back to Daftar Advisory.

## Deploying

Any static host works — point it at this folder:

- **Netlify:** `netlify.toml` (repo root) already sets `publish = "calibre-website-bundle"`.
- **GitHub Pages:** `.github/workflows/deploy-pages.yml` uploads this folder as the Pages
  artifact.
- **Cloudflare Pages / S3 / any web server:** upload the files as-is and point the
  `calibre.daftaradvisory.com` DNS `CNAME` at the host.

## Customising

- **Colours & themes:** the palette lives as CSS variables (`--c-paper-*`, `--c-forest-*`,
  `--c-clay-*`, `--c-ink-*`) in the `<style>` block at the top of `index.html`; each
  `html[data-theme="…"]` block retargets them.
- **Copy:** edit directly in `index.html` — sections are clearly commented.
- **Icons:** inline SVGs; swap any by pasting a different [Lucide](https://lucide.dev)
  glyph's `<path>` set into the corresponding `<svg>`.
