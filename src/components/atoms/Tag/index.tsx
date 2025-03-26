import React from "react";
import styles from "./Tag.module.scss";
import { TagProps } from "@/types/tagProps";

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className={styles.Container}>
      <p className={styles.TextContent}>{text}</p>
    </div>
  );
};

export default Tag;
