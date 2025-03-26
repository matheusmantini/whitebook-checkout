import React from "react";
import { AccessibleIconProps } from "../../../types/accessibleIconProps";

const ChevronDown = ({
  width = "16",
  height = "16",
  fill = "#666173",
  ariaLabel,
  ...otherProps
}: AccessibleIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      {...otherProps}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      <path
        d="M4.19526 6.9428L7.05719 9.80473C7.57789 10.3254 8.42211 10.3254 8.94281 9.80473L11.8047 6.9428C12.0651 6.68245 12.0651 6.26035 11.8047 6C11.5444 5.73965 11.1223 5.73965 10.8619 6L8 8.86193L5.13807 6C4.87772 5.73965 4.45561 5.73965 4.19526 6C3.93491 6.26035 3.93491 6.68245 4.19526 6.9428Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronDown;
