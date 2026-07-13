import React from "react";

/**
 * Footer — the site footer band. Dark (footer token) surface with a
 * type-set wordmark, a lede, and link columns, plus a bottom bar with
 * a copyright line and inline links.
 *
 * Pass `columns` as [{ heading, links: [{ label, href }] }] and
 * `bottomLinks` as [{ label, href }].
 */
export function Footer({
  brand = "Calibre",
  brandSuffix = "by Daftar",
  tagline = "Reduce hiring noise. Define what good looks like, then read every candidate against it.",
  columns = [],
  copyright = "© 2026 Calibre by Daftar",
  bottomLinks = [],
  ...rest
}) {
  return (
    <footer
      style={{
        background: "var(--color-footer)",
        color: "rgb(255 255 255 / 0.66)",
        fontFamily: "var(--font-sans)",
        padding: "4rem 0",
      }}
      {...rest}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 3rem",
          display: "grid",
          gridTemplateColumns: `2fr repeat(${Math.max(columns.length, 1)}, 1fr)`,
          gap: "3rem",
          marginBottom: "4rem",
        }}
      >
        <div style={{ maxWidth: "22rem" }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1.875rem",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            {brand}{" "}
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontStyle: "normal",
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "rgb(255 255 255 / 0.5)",
                verticalAlign: "middle",
              }}
            >
              {brandSuffix}
            </span>
          </span>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.75rem",
              lineHeight: 1.6,
              color: "rgb(255 255 255 / 0.55)",
              margin: 0,
            }}
          >
            {tagline}
          </p>
        </div>

        {columns.map((col, i) => (
          <div key={i}>
            <h5
              style={{
                color: "#fff",
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                margin: "0 0 1rem",
              }}
            >
              {col.heading}
            </h5>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {(col.links || []).map((l, j) => (
                <li key={j}>
                  <a href={l.href} style={{ color: "rgb(255 255 255 / 0.66)", textDecoration: "none", fontSize: "0.75rem" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "2rem 3rem 0",
          borderTop: "1px solid rgb(255 255 255 / 0.12)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.75rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-display)", color: "rgb(255 255 255 / 0.5)", margin: 0 }}>{copyright}</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {bottomLinks.map((l, i) => (
            <a key={i} href={l.href} style={{ color: "rgb(255 255 255 / 0.66)", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
