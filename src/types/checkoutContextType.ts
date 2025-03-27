import { SubscribedPlanInfo } from "./subscribedPlanInfo";

export interface CheckoutContextType {
  subscribedPlanInfo: SubscribedPlanInfo | null;
  setSubscribedPlanInfo: React.Dispatch<
    React.SetStateAction<SubscribedPlanInfo | null>
  >;
}
