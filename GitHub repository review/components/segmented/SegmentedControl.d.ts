import * as React from "react";

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
}

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<string | SegmentedOption>;
  value: string;
  onChange?: (value: string) => void;
  /** Optional micro-label above the control. */
  label?: React.ReactNode;
}

/** Segmented switch (the "Feel" panel control). */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
