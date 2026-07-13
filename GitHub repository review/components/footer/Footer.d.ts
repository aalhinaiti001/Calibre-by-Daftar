import * as React from "react";

export interface FooterLink {
  label: React.ReactNode;
  href: string;
}

export interface FooterColumn {
  heading: React.ReactNode;
  links: FooterLink[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark, set in italic display serif. @default "Calibre" */
  brand?: React.ReactNode;
  /** Sans qualifier after the wordmark. @default "by Daftar" */
  brandSuffix?: React.ReactNode;
  tagline?: React.ReactNode;
  columns?: FooterColumn[];
  copyright?: React.ReactNode;
  bottomLinks?: FooterLink[];
}

/**
 * Site footer band.
 * @startingPoint section="Components" subtitle="Dark footer w/ link columns" viewport="1000x340"
 */
export function Footer(props: FooterProps): JSX.Element;
