import * as React from "react";

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
}

/** Single figure + caption for stat rows. */
export function StatBlock(props: StatBlockProps): JSX.Element;
