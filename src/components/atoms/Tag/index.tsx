import React from "react";
import styles from "./Tag.module.scss";
import { TagProps } from "@/types/tagProps";

const Tag: React.FC<TagProps> = ({ text, isDiscount = false }) => {
  return (
    <div className={`${styles.Container} ${isDiscount ? styles.Discount : ""}`}>
      <p
        className={`${styles.TextContent} ${isDiscount ? styles.DiscountText : ""}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Tag;
