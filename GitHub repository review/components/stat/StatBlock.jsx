import React from "react";

/**
 * StatBlock — a single figure + label, as used in the hero stat row.
 * Figure renders in the display serif; label is a mono-feel micro-caption.
 */
export function StatBlock({ value, label, ...rest }) {
  return (
    <div {...rest}>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "var(--color-accent)",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: "0.6875rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "var(--color-text-muted)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
