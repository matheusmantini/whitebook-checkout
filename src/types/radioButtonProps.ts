export interface RadioButtonProps {
  name: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
