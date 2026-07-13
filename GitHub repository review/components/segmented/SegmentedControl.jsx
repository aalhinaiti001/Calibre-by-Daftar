import React from "react";

/**
 * SegmentedControl — the mood/voice/density switcher from the "Feel"
 * panel. Controlled: pass `options`, the active `value`, and `onChange`.
 */
export function SegmentedControl({ options = [], value, onChange, label, ...rest }) {
  return (
    <div {...rest}>
      {label ? (
        <div
          style={{
            fontSize: "0.625rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "var(--color-text-muted)",
            marginBottom: "0.5rem",
          }}
        >
          {label}
        </div>
      ) : null}
      <div style={{ display: "flex", gap: "0.375rem" }}>
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lbl = typeof opt === "string" ? opt : opt.label;
          const on = val === value;
          return (
            <button
              key={val}
              type="button"
              aria-pressed={on}
              onClick={() => onChange && onChange(val)}
              style={{
                flex: 1,
                border: "1px solid",
                borderColor: on ? "var(--color-accent)" : "var(--color-border)",
                background: on ? "var(--color-accent)" : "var(--color-surface-alt)",
                color: on ? "var(--color-on-accent)" : "var(--color-text)",
                borderRadius: "var(--radius-md)",
                padding: "9px 6px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
              }}
            >
              {lbl}
            </button>
          );
        })}
      </div>
    </div>
  );
}
