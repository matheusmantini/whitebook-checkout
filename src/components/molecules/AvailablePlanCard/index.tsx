import React from "react";
import styles from "./availablePlanCard.module.scss";
import RadioButton from "@/components/atoms/RadioButton";
import Tag from "@/components/atoms/Tag";
import { AvailablePlanCardProps } from "@/types/availablePlanCardProps";

const AvailablePlanCard: React.FC<AvailablePlanCardProps> = ({
  title,
  priceFrom,
  priceTo,
  discount,
  installment,
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className={`${styles.Card} ${selected ? styles.Selected : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.()}
    >
      <div className={styles.Content}>
        <span>
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Price}>
            De <span className={styles.Price}>{priceFrom}</span> | Por {priceTo}
          </p>
          {installment && <p className={styles.Installment}>{installment}</p>}
        </span>
        {discount && <Tag text={discount} isDiscount />}
      </div>

      <RadioButton name="plan" checked={selected} onChange={onSelect} />
    </div>
  );
};

export default AvailablePlanCard;
