import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  hasError?: boolean;
  children: React.ReactNode;
}
