import React, { useState } from "react";
import styles from "./radioButton.module.scss";
import { RadioButtonProps } from "@/types/radioButtonProps";

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newCheckedState = true;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  return (
    <label className={styles.RadioLabel}>
      <input
        type="radio"
        className={styles.RadioInput}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <span className={styles.CustomRadio}></span>
      <span className={styles.LabelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
