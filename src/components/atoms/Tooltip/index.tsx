import React from "react";
import styles from "./tooltip.module.scss";
import { TooltipProps } from "@/types/tooltipProps";

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className={styles.Tooltip}>
      {children}
      <span className={styles.Text}>{content}</span>
    </div>
  );
};

export default Tooltip;
