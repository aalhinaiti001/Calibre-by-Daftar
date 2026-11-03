# Calibre landing page

A single long-scroll landing page for **Calibre Verdict**, structured hiring advisory for finance roles by Daftar Advisory. It sits alongside the guided five-room site in `../calibre-verdict-site/`. Both use the same copy.

`index.html` is a single **self-contained** file of about 670 KB. It works offline and makes no CDN requests:

- Tailwind is compiled into an inline stylesheet.
- The Lucide icons are inline SVG.
- The brand fonts are embedded: Lora and Plus Jakarta Sans for Latin text, and IBM Plex Sans Arabic for Arabic.

The only outside links are the contact and website links.

## Files

```
index.html          Generated, self-contained page. Deploy this. Do not edit it by hand.
source.html         Editable source: Tailwind Play CDN, Lucide CDN, Google Fonts
build/build.js      Builds index.html from source.html
build/package.json  Pinned build tools: tailwindcss 3.4.17, lucide 0.460.0
netlify.toml        Netlify config
```

## Edit and rebuild

1. Edit `source.html`. Open it in a browser to preview; it loads Tailwind, Lucide and the fonts from their CDNs.
2. Rebuild `index.html`. This needs network access to fetch the fonts:

   ```sh
   cd calibre-landing/build
   npm install
   npm run build
   ```

3. Commit `source.html` and `index.html` together.

Brand tokens live in the `tailwind.config` block in `source.html`. The build compiles them into `index.html`.

## Run it locally

Open `index.html` in a browser by double-clicking it, or serve the folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Sections

| Section | Anchor |
| --- | --- |
| Hero, plus the "same finalist, two readers" card | top |
| The problem | `#noise` |
| The method (four steps and an example role standard) | `#method` |
| Deliverables (five documents) | `#outputs` |
| Who it's for | (no anchor) |
| How it runs, and the terms agreed at scoping | `#pilot` |
| FAQ | `#faq` |
| Contact (email, WhatsApp, Calendly, LinkedIn) | `#contact` |

## Brand

The page follows the **Calibre Unified Master Brand Handbook v2.0-Canon**:

- **Colours:** the brand tokens are set in the `tailwind.config` block in `source.html`. Tailwind's `stone` greys are remapped to the brand neutrals, so utility classes stay on-brand.
- **Fonts:** Lora, Plus Jakarta Sans and IBM Plex Sans Arabic only, with no monospace.
- **Radii:** `rounded-btn` is 8px, `rounded-tile` is 9px and `rounded-card` is 12px.
- **Not used:** shadows, gradients and the retired colours (#FAF8F5, #B25B3C, #2B3A36).
- **Footer:** carries the attribution line and the full four-sentence use statement.
- **Claims:**
  - Use the mandatory phrasing: "Scored independently against a role-specific standard", "Finalists presented in entry order", "One written recommendation, with the reasons and risks named".
  - Never rank, predict or automate a hiring conclusion.
  - Do not use the language the audit retired, such as "diagnostic", "DOL 30%" or any bad-hire statistic.

## Deploy

**Netlify:** create a site from this repository and set **Base directory** to `calibre-landing`. `netlify.toml` publishes that folder, and there is no build command, because `index.html` is committed already built.

**Anywhere else:** `index.html` is the whole site, so upload it on its own or attach it to an email.
