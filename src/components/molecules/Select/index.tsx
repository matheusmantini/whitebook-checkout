import styles from "./select.module.scss";
import Label from "@/components/atoms/Label";
import ChevronDown from "@/components/atoms/Icons/ChevronDown";
import { SelectProps } from "@/types/selectProps";

export const Select = ({
  id,
  label,
  options,
  register,
  error,
  ...otherProps
}: SelectProps) => {
  return (
    <div className={`${styles.FormItem} ${error ? styles.HasError : ""}`}>
      <Label htmlFor={id} title={label} hasError={!!error}>
        {label}
      </Label>
      <div className={styles.SelectWrapper}>
        <select
          id={id}
          {...register}
          {...otherProps}
          className={`${styles.Select} ${error ? styles.HasError : ""}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className={styles.ChevronIcon} />
      </div>
      {error && <span className={styles.ErrorMessage}>{error.message}</span>}
    </div>
  );
};
