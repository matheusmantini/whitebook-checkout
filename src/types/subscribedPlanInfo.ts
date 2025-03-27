import { Plan } from "./planType";

export interface SubscribedPlanInfo {
  selectedOffer: Plan | null;
  email: string;
  cpf: string;
}
