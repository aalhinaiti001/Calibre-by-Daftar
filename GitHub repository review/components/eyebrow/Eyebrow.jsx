import React from "react";

/**
 * Eyebrow — the wide-tracked uppercase micro-label that opens most
 * sections. Optional leading hairline rule (the hero treatment).
 */
export function Eyebrow({ children, rule = false, tone = "warm", ...rest }) {
  const color = tone === "accent" ? "var(--color-accent)" : "var(--color-warm)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)",
        color,
      }}
      {...rest}
    >
      {rule ? (
        <span
          aria-hidden="true"
          style={{ height: "1px", width: "2rem", background: color }}
        />
      ) : null}
      {children}
    </span>
  );
}
