# Calibre landing page

A single long-scroll landing page for **Calibre Verdict**, structured hiring advisory for finance roles by Daftar Advisory. It sits alongside the guided five-room site in `../calibre-verdict-site/`. Both use the same copy.

It is one file: `index.html`. Tailwind and the Lucide icons load from CDNs at runtime, so there is no build step.

## Run it locally

Open `index.html` in a browser, or serve the folder:

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

- **Colours:** the brand tokens are set in the `tailwind.config` block in `<head>`. Tailwind's `stone` greys are remapped to the brand neutrals, so utility classes stay on-brand.
- **Fonts:** Lora, Plus Jakarta Sans and IBM Plex Sans Arabic only, with no monospace.
- **Radii:** `rounded-btn` is 8px, `rounded-tile` is 9px and `rounded-card` is 12px.
- **Not used:** shadows, gradients and the retired colours (#FAF8F5, #B25B3C, #2B3A36).
- **Footer:** carries the attribution line and the full four-sentence use statement.
- **Claims:**
  - Use the mandatory phrasing: "Scored independently against a role-specific standard", "Finalists presented in entry order", "One written recommendation, with the reasons and risks named".
  - Never rank, predict or automate a hiring conclusion.
  - Do not use the language the audit retired, such as "diagnostic", "DOL 30%" or any bad-hire statistic.

## Deploy

**Netlify:** create a site from this repository and set **Base directory** to `calibre-landing`. `netlify.toml` publishes that folder, and there is no build command.

**Before production:** replace the Tailwind Play CDN with a built stylesheet using the Tailwind CLI and the same config. The CDN compiles CSS in the browser at runtime.
