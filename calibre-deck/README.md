# Calibre by Daftar — Slide Deck

A slide-deck version of the Calibre by Daftar one-pager, built with the
`deck-stage` web component (11 slides: title, proof, problem, method,
method modules, outputs, who it's for, differentiators, pilot, contact,
Daftar close).

- `deck.html` — the interactive deck. Serve the folder over HTTP and open
  it (arrow keys / space to navigate).
- `deck-stage.js` — the deck-stage component powering navigation, the
  thumbnail rail, and print/PDF support.
- `Calibre-by-Daftar-Deck.pptx` — a pixel-faithful PPTX export (one
  full-bleed 1920×1080 image per slide), ready to open in PowerPoint /
  Google Slides / Keynote.

To re-export the PPTX after editing `deck.html`, render each slide with a
headless browser at 1920×1080 (2x scale) and assemble the images into a
16:9 PPTX with `python-pptx`.
