import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";
import { BUTTON_VARIANTS } from "./variants";
import { ButtonProps } from "@/types/buttonProps";

const Button = ({
  children,
  variant = BUTTON_VARIANTS.Primary,
  href,
  disabled,
  ariaLabel,
  rel,
  target,
  fontSize,
  fontWeight,
  type = "button",
  ...otherProps
}: ButtonProps) => {
  const className = `${styles.Button} ${styles[variant]} ${
    disabled ? styles.Disabled : ""
  }`;

  const customStyles = {
    fontSize: fontSize
      ? typeof fontSize === "number"
        ? `${fontSize}px`
        : fontSize
      : undefined,
    fontWeight: fontWeight?.toString(),
  };

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        rel={rel}
        target={target}
        tabIndex={disabled ? -1 : 0}
        style={customStyles}
        {...(otherProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      style={customStyles}
      type={type}
      {...(otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
