// types.ts
import { FieldError } from "react-hook-form";
import { IMask } from "imask";
import { MASKS } from "./masks";

export type MaskType = keyof typeof MASKS | string;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    IMask.MaskOptions {
  label?: string;
  error?: FieldError;
  maskType?: MaskType;
  onAccept?: (value: string) => void;
}
