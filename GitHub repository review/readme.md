# Calibre by Daftar — Design System

Editorial, literary design language for **Calibre by Daftar**, a hiring-decision
diagnostic from the boutique finance-advisory practice Daftar. The system is
derived from the Calibre by Daftar landing page and is built around **two moods**.

> Set the File type to **Design System** in the Share menu so others in your org can use it.

## The two moods

Switch by setting `data-mood` on `<html>` (or any wrapper element). No attribute = **Ink**.

- **Ink** (default) — cool charcoal monochrome on cool paper. Architectural,
  restrained, "quiet authority". Accent is a deep ink-green; the warm role is a
  cool slate.
- **Midnight** — true dark. Near-black surfaces, light ink, a brightened sage
  accent and warm terracotta. Reads well as the default marketing look.

Both moods share one set of **semantic aliases** (`--color-bg`, `--color-surface`,
`--color-accent`, `--color-warm`, `--color-text`, …). Author against the aliases and
your UI re-skins automatically when the mood changes.

```html
<html data-mood="midnight">
  …everything uses var(--color-*)…
</html>
```

## Sources

- Landing page: `calibre-by-daftar.html` (this project root) — the ground truth
  for layout, copy, and interaction.
- Practice site referenced in copy: daftaradvisory.com (Daftar Advisory).
- Fonts: **Lora** (editorial display) + **Plus Jakarta Sans** (functional UI),
  loaded from Google Fonts. Icons: **Lucide** (CDN) in the UI kit.

## CONTENT FUNDAMENTALS

- **Voice:** plain, confident, senior. Short declarative sentences. Names the
  problem, then the fix. "Your hiring decisions are more guesswork than you think."
- **Person:** speaks to *you* (the buyer); the practice is *we*. "Tell us about
  one role… we'll walk your process."
- **Casing:** sentence case for headlines and body; UPPERCASE only for the
  wide-tracked eyebrow micro-labels and button text.
- **Numbers as story:** a single figure carries the argument (`Δ 41 pts`, `82` vs
  `41`). Data is sparse and purposeful — no stat slop.
- **No emoji.** Occasional editorial italic in the serif for emphasis.
- **Tone:** understated authority, tightened toward what it does.

## VISUAL FOUNDATIONS

- **Type:** Lora display (often italic for the emphasized clause), Plus Jakarta
  Sans body at 16px/1.7. Eyebrows are 12px uppercase, tracking 0.16em, 700.
  Mono (system) for data, IDs and labels.
- **Color:** see the two moods above. Accent + a single warm counterpoint;
  everything else is neutral surface/border/muted. Alpha is applied through the
  RGB triplets, e.g. `rgb(var(--c-accent) / 0.3)`.
- **Backgrounds:** flat paper/near-black. One motif: a soft radial *glow* in the
  dark contact card (`radial-gradient(... rgb(var(--c-warm)/0.16) ...)`). No
  photography, no busy gradients.
- **Cards:** 1px hairline border (`--color-border`), `--radius-lg` (12px) corners,
  soft paper shadow (`--shadow-card`). Hover lifts the accent border. A highlighted
  tile swaps to `--color-accent-soft`.
- **Borders:** hairline everywhere; section dividers are 1px muted rules.
- **Radii:** 6 / 8 / 12 / 16 px, plus pill for the floating "Feel" toggle.
- **Shadows:** low, diffuse, paper-like — never hard or colored.
- **Motion:** unhurried `cubic-bezier(0.16,1,0.3,1)`. Scroll-reveal fades + rise;
  count-up on the proof figures; growing score bars; arrow nudges on hover. All
  gated behind `prefers-reduced-motion`.
- **Hover:** accent border on cards; color shift on links/buttons; icon nudge.
- **Layout:** max width 1280px; generous section rhythm (compact/standard/airy =
  4 / 6 / 8.5rem vertical padding).

## ICONOGRAPHY

- **Lucide** line icons via CDN (`unpkg.com/lucide@latest`), ~1.5px stroke, used
  sparingly (nav, checklist ticks, contact tiles). Marked `aria-hidden`.
- Brand marks (LinkedIn) are inline brand SVGs.
- **No custom-drawn logo.** The wordmark is set in type: *Calibre* in Lora italic
  + "by Daftar" as a mono/sans qualifier. No logo file was provided; none was
  invented.
- Unicode arrows (↑ ↓ →) and the mathematical delta (Δ) are used as inline glyphs
  in the proof section.

## Index / manifest

- `styles.css` — entry point (`@import`s all tokens + fonts).
- `tokens/` — `fonts.css`, `colors.css` (the two moods), `typography.css`, `spacing.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing groups).
- `components/` — `buttons/` (Button), `card/` (Card), `eyebrow/` (Eyebrow),
  `segmented/` (SegmentedControl), `stat/` (StatBlock), `footer/` (Footer). Each has
  `.jsx` + `.d.ts` + `.prompt.md` + a preview card.
- `ui_kits/calibre/` — full landing-page recreation (`index.html`).
- `SKILL.md` — Agent-Skills-compatible entry.

### Intentional additions
- The components above are lifted from the single landing page (the only source
  surface). `SegmentedControl` generalizes the "Feel" panel switch; `StatBlock`
  generalizes the hero stat row.

## Caveats
- Fonts are Google-hosted, not self-hosted `@font-face` binaries — swap for
  production. Lucide + Tailwind (in the UI kit) load from CDN, so the UI kit needs
  a network connection.
- Only two moods (Ink, Midnight) per request; the source page also had Forest and
  Clay, which are intentionally dropped here.
