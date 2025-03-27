import { HTMLAttributes } from "react";
import InputMask from "react-input-mask";
import { MASKS } from "./masks";
import styles from "./input.module.scss";
import { FieldError } from "react-hook-form";
import Label from "@/components/atoms/Label";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  register?: any;
  maskKey?: keyof typeof MASKS;
  error?: FieldError;
}

export const Input = ({
  id,
  label,
  placeholder,
  maskKey,
  register,
  type,
  error,
  ...restProps
}: InputProps) => {
  return (
    <div className={`${styles.FormItem} ${error ? styles.HasError : ""}`}>
      <Label htmlFor={id} title={label} hasError={!!error}>
        {label}
      </Label>
      {maskKey ? (
        <InputMask
          mask={MASKS[maskKey]}
          title={label}
          id={id}
          placeholder={placeholder}
          type={type}
          maskChar={null}
          {...restProps}
          {...register}
        />
      ) : (
        <input
          title={label}
          id={id}
          placeholder={placeholder}
          type={type}
          {...restProps}
          {...register}
        />
      )}
      {error && <span className={styles.ErrorMessage}>{error.message}</span>}
    </div>
  );
};
