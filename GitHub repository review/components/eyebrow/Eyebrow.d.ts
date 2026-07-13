import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading hairline rule (hero style). @default false */
  rule?: boolean;
  /** @default "warm" */
  tone?: "warm" | "accent";
  children?: React.ReactNode;
}

/** Section micro-label. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
