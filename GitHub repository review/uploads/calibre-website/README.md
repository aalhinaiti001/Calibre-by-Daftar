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

The form works out of the box with **zero backend** via a `mailto:` fallback — on submit
it opens the visitor's email client with all fields pre-filled and addressed to
ahmad@daftaradvisory.com.

### Upgrade to inbox delivery (no page reload)

For a smoother experience that emails you directly without opening the visitor's mail app:

1. Create a free form at [Formspree](https://formspree.io) (or any endpoint that accepts
   a JSON `POST`) using ahmad@daftaradvisory.com.
2. Paste the endpoint URL into `SITE.formEndpoint` in [`js/main.js`](js/main.js):

   ```js
   formEndpoint: 'https://formspree.io/f/your-id'
   ```

That's it — the form auto-switches from `mailto:` to `fetch()` submission with inline
success/error messages.

## Deploying

Any static host works. Point it at this folder:

- **Netlify / Vercel:** drag-and-drop the folder, or connect the repo. No build command;
  publish directory is the project root.
- **GitHub Pages:** push to a repo and enable Pages on the `main` branch (root).
- **Cloudflare Pages / S3 / any web server:** upload the files as-is.

## Customising

- **Colours & type:** all design tokens live as CSS variables in `:root` at the top of
  [`css/styles.css`](css/styles.css).
- **Copy:** edit directly in [`index.html`](index.html) — sections are clearly commented.
- **Fonts:** Inter + JetBrains Mono, loaded from Google Fonts in the `<head>`.
