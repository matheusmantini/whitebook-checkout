import Link from "next/link";
import ChevronLeft from "@/components/atoms/Icons/ChevronLeft";
import { BackButtonProps } from "@/types/backButtonProps";
import styles from "./backButton.module.scss";

export const BackButton = ({
  ariaLabel = "Ir para a página inicial",
  href,
  ...otherProps
}: BackButtonProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    {...otherProps}
    className={styles.Container}
  >
    <ChevronLeft />
  </Link>
);
