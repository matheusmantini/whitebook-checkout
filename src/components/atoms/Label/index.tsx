import React from "react";
import { LabelProps } from "@/types/labelProps";
import styles from "./label.module.scss";

const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  hasError = false,
  ...props
}) => {
  const labelClasses = `${styles.Label} ${hasError ? styles.hasError : ""}`;

  return (
    <label
      htmlFor={htmlFor}
      className={labelClasses.trim()}
      aria-invalid={hasError ? "true" : undefined}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
