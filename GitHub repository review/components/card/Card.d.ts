import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Editorial index, e.g. "I." "II." */
  numeral?: React.ReactNode;
  title?: React.ReactNode;
  /** Footer meta line (uppercase accent). */
  meta?: React.ReactNode;
  /** Soft-accent highlighted variant. @default false */
  highlight?: boolean;
  children?: React.ReactNode;
}

/**
 * Bento content surface.
 * @startingPoint section="Components" subtitle="Bento card w/ numeral" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
