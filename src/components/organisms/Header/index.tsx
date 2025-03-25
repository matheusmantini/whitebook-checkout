import React from "react";
import { BackButton } from "../../molecules/BackButton";
import WhitebookLogo from "../../atoms/WhitebookLogo";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.Container}>
      <BackButton
        href="/"
        ariaLabel="Ir para a página inicial"
        className={styles.Button}
      />
      <WhitebookLogo className={styles.Logo} ariaLabel="Logo do Whitebook" />
    </header>
  );
};

export default Header;
