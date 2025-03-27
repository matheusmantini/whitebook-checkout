import { HTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
  error?: FieldError;
}
