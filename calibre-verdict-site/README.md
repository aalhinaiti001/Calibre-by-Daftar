# Calibre Verdict — site

The guided five-room site for **Calibre Verdict**, structured hiring advisory for finance roles by Daftar Advisory.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```sh
cd calibre-verdict-site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
index.html        Page shell: header, the seven screens, footer
css/styles.css    All styling. Colours, type and spacing are tokens at the top
js/content.js     All site copy (rooms, steps, deliverables, FAQ, terms, email)
js/app.js         Rendering, hash routing, keyboard navigation, copy-email
assets/           Favicon
netlify.toml      Netlify config (publishes the repo root)
```

## Editing

- **Words:** change `js/content.js`. Headings and the landing copy are in `index.html`.
- **Colours and type:** change the tokens in the `:root` block of `css/styles.css`. Components only use tokens.
- **Adding a room:** add it to `rooms`, `routes` and `labels` in `content.js`, then add a `<section data-room="id">` to `index.html`.

## Navigation

Each screen has its own address, so you can link straight to it:

| Screen | Link |
| --- | --- |
| Landing | `/` |
| Method | `/#method` |
| Deliverables | `/#outputs` |
| Who it's for | `/#who` |
| How it runs | `/#pilot` |
| FAQ | `/#faq` |
| Contact | `/#contact` |

The left and right arrow keys move between screens.

## Deploy

This folder lives inside the `Calibre-by-Daftar` repository, so point the host at the folder:

**Netlify:** new site from this repository, **Base directory** `calibre-verdict-site`, no build command. The `netlify.toml` here publishes the folder. The repository's older Netlify site (`calibre-by-daftar`) was retired in PR #8 and has no config at the root, so it is not used for this.

**Any static host:** upload the contents of this folder as they are.

## Brand

The site follows the **Calibre Unified Master Brand Handbook v2.0-Canon**:

- Tokens in `css/styles.css` use the handbook's names and values (Forest, stone, mist, sage, clay; Lora, Plus Jakarta Sans, IBM Plex Sans Arabic).
- Radii: buttons 8px, monogram tile 9px, cards 12px. No shadows, gradients or monospace.
- Every screen ends with the attribution line and the full four-sentence use statement.
- Claims use the mandatory phrasing: "Scored independently against a role-specific standard", "Finalists presented in entry order", "One written recommendation, with the reasons and risks named". Never rank, predict or automate a hiring conclusion.

Layout also follows the designer golden rules applied to `calibre-design-canvas/Calibre Guided.dc.html` in PR #9.
