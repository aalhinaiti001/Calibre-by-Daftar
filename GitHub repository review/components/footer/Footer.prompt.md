Dark site-footer band with a type-set wordmark, a tagline, link columns, and a bottom copyright bar. Always dark (uses the `--color-footer` token), so it reads the same in both moods.

```jsx
<Footer
  tagline="Reduce hiring noise. Define what good looks like, then read every candidate against it."
  columns={[
    { heading: "Product", links: [
      { label: "The Noise", href: "#noise" },
      { label: "The Method", href: "#method" },
      { label: "Outputs", href: "#outputs" },
    ]},
    { heading: "Get in touch", links: [
      { label: "ahmad@daftaradvisory.com", href: "mailto:ahmad@daftaradvisory.com" },
      { label: "Daftar Advisory", href: "https://daftaradvisory.com" },
    ]},
  ]}
  copyright="© 2026 Calibre by Daftar"
  bottomLinks={[{ label: "Email", href: "#" }, { label: "Daftar", href: "#" }]}
/>
```
