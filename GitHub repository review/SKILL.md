---
name: calibre-by-daftar-design
description: Use this skill to generate well-branded interfaces and assets for Calibre by Daftar (a hiring-decision diagnostic by Daftar Advisory), for production or throwaway prototypes/mocks. Contains design guidelines, a two-mood color system (Ink + Midnight), type, fonts, and UI kit components.
user-invocable: true
---

Read `readme.md` in this skill, then explore the token files under `tokens/`, the
foundation cards under `guidelines/`, the components under `components/`, and the
landing-page recreation under `ui_kits/calibre/`.

Key idea: everything is authored against **semantic CSS aliases** (`--color-bg`,
`--color-surface`, `--color-accent`, `--color-warm`, `--color-text`, …) and re-skins
between the two moods via `data-mood="ink"` (default) or `data-mood="midnight"` on
`<html>` or any wrapper.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the fonts
and tokens out and produce static HTML for the user to view. If working on
production code, copy assets and follow the rules here to design on-brand.

If invoked with no other guidance, ask what the user wants to build, ask a few
questions, and act as an expert designer who outputs HTML artifacts or production
code as needed.
