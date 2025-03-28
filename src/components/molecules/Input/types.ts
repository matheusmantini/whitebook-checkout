import { FieldError } from "react-hook-form";
import { MASKS } from "./masks";
import React from "react";

export type MaskType = keyof typeof MASKS | string;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  register?: any;
  maskKey?: keyof typeof MASKS;
  error?: FieldError;
}
