import { Plan } from "./planType";

export interface AvailablePlansProps {
  offers: Plan[];
  handleSelectedOffer: (offer: Plan) => void;
}
