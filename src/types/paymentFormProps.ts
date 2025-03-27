import { Plan } from "./planType";

export interface PaymentFormProps {
  handleSelectedCard: (cardSelected: string) => void;
  selectedOffer: Plan | null;
}
