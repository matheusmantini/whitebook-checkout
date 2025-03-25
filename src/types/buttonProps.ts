import React from "react";
import { BUTTON_VARIANTS } from "../components/atoms/Button/variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
  fontSize?: string | number;
  fontWeight?: string | number;
  href?: string;
  target?: string;
  ariaLabel?: string;
}
