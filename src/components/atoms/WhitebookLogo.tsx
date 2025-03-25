import React from "react";
import { AccessibleIconProps } from "../../types/accessibleIconProps";

const WhitebookLogo = ({
  width = "42",
  height = "29",
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
        d="M41.3879 6.4234C41.3879 9.14118 39.2352 11.3444 36.5796 11.3444C33.9241 11.3444 31.7713 9.14118 31.7713 6.4234C31.7713 3.70561 33.9241 1.50241 36.5796 1.50241C39.2352 1.50241 41.3879 3.70561 41.3879 6.4234Z"
        fill="#F5850B"
      />
      <path
        d="M2.75334 8.74773C1.56009 6.32906 2.55349 3.40103 4.97216 2.20778C7.39083 1.01453 10.3189 2.00793 11.5121 4.4266L19.2901 20.1924C20.4834 22.6111 19.49 25.5391 17.0713 26.7323C14.6527 27.9256 11.7246 26.9322 10.5314 24.5135L2.75334 8.74773Z"
        fill="#191847"
      />
      <path
        d="M17.4453 8.74773C16.252 6.32906 17.2454 3.40103 19.6641 2.20778C22.0828 1.01453 25.0108 2.00793 26.2041 4.4266L33.9821 20.1924C35.1753 22.6111 34.1819 25.5391 31.7633 26.7323C29.3446 27.9256 26.4166 26.9322 25.2233 24.5135L17.4453 8.74773Z"
        fill="#191847"
      />
      <path
        d="M17.1975 4.50826C18.2341 2.01841 21.0928 0.840306 23.5827 1.87688C26.0725 2.91344 27.2506 5.77217 26.214 8.26201L19.4573 24.4917C18.4207 26.9816 15.562 28.1597 13.0722 27.1231C10.5823 26.0866 9.40421 23.2278 10.4408 20.738L17.1975 4.50826Z"
        fill="#191847"
      />
    </svg>
  );
};

export default WhitebookLogo;
