import { SVGAttributes } from "react";

export interface AccessibleIconProps extends SVGAttributes<SVGSVGElement> {
  ariaLabel?: string;
}
