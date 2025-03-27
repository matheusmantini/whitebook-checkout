import React from "react";
import styles from "./radioButton.module.scss";
import { RadioButtonProps } from "@/types/radioButtonProps";

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked = false,
  onChange,
}) => {
  const handleChange = () => {
    onChange?.(checked);
  };

  return (
    <label className={styles.RadioLabel}>
      <input
        type="radio"
        className={styles.RadioInput}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.CustomRadio}></span>
      <span className={styles.LabelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
