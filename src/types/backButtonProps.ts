import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

export interface BackButtonProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  ariaLabel?: string;
}
