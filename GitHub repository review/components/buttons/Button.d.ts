import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "dark" | "ghost";
  /** @default "md" */
  size?: "sm" | "md";
  /** Uppercase + wide tracking. @default true */
  uppercase?: boolean;
  /** Renders as <a> when set. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button.
 * @startingPoint section="Components" subtitle="CTA button, 3 variants" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
