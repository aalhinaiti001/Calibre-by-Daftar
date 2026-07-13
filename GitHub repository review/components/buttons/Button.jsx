import React from "react";

/**
 * Button — the primary call-to-action across Calibre by Daftar.
 * Variants: "primary" (accent fill), "dark" (ink fill, hovers to accent),
 * "ghost" (text only). Uppercase, wide-tracked labels by default.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  uppercase = true,
  href,
  onClick,
  ...rest
}) {
  const pads = size === "sm" ? "9px 16px" : "14px 26px";
  const fs = size === "sm" ? "0.6875rem" : "0.8125rem";

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: fs,
    letterSpacing: uppercase ? "0.1em" : "0",
    textTransform: uppercase ? "uppercase" : "none",
    textDecoration: "none",
    padding: pads,
    borderRadius: "var(--radius-md)",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
  };

  const variants = {
    primary: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
    },
    dark: {
      background: "var(--color-footer)",
      color: "#fff",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text)",
      borderColor: "var(--color-border)",
    },
  };

  const style = { ...base, ...(variants[variant] || variants.primary) };
  const Tag = href ? "a" : "button";

  return (
    <Tag href={href} onClick={onClick} style={style} {...rest}>
      {children}
    </Tag>
  );
}
