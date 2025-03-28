import React from "react";
import { BackButton } from "@/components/molecules/BackButton";
import WhitebookLogo from "@/components/atoms/Icons/WhitebookLogo";
import styles from "./header.module.scss";
import { HeaderProps } from "@/types/headerProps";

const Header = ({ hasAction = true }: HeaderProps) => {
  return (
    <header className={styles.Container}>
      {hasAction && (
        <BackButton
          href="/"
          ariaLabel="Ir para a página inicial"
          className={styles.Button}
        />
      )}
      <WhitebookLogo className={styles.Logo} ariaLabel="Logo do Whitebook" />
    </header>
  );
};

export default Header;
