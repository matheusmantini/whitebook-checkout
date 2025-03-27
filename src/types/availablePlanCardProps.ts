export interface AvailablePlanCardProps {
  title: string;
  priceFrom: string;
  priceTo: string;
  discount?: string;
  installment?: string;
  selected?: boolean;
  onSelect?: () => void;
}
