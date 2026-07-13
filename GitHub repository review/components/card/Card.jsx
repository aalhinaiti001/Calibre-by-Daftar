import React from "react";

/**
 * Card — the bento surface used across the site (outputs grid, pilot
 * checklist, mock panels). Optional Roman numeral, title, body, and a
 * footer meta line. `highlight` swaps to the soft-accent treatment.
 */
export function Card({
  numeral,
  title,
  children,
  meta,
  highlight = false,
  ...rest
}) {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1.5rem",
    background: highlight ? "var(--color-accent-soft)" : "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    padding: "2rem",
    boxShadow: "var(--shadow-sm)",
  };

  return (
    <div style={style} {...rest}>
      <div>
        {numeral ? (
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1.875rem",
              color: highlight ? "var(--color-accent)" : "var(--color-text-muted)",
              opacity: highlight ? 0.5 : 0.6,
              marginBottom: "0.75rem",
            }}
          >
            {numeral}
          </div>
        ) : null}
        {title ? (
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: highlight ? "var(--color-accent)" : "var(--color-text)",
              margin: "0 0 0.75rem",
            }}
          >
            {title}
          </h3>
        ) : null}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            color: "var(--color-text-muted)",
          }}
        >
          {children}
        </div>
      </div>
      {meta ? (
        <span
          style={{
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 700,
            color: "var(--color-accent)",
          }}
        >
          {meta}
        </span>
      ) : null}
    </div>
  );
}
