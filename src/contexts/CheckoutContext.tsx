import { CheckoutContextType } from "@/types/checkoutContextType";
import { SubscribedPlanInfo } from "@/types/subscribedPlanInfo";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const useCheckout = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout deve ser usado com um CheckoutProvider");
  }
  return context;
};

interface CheckoutProviderProps {
  children: ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const [subscribedPlanInfo, setSubscribedPlanInfo] =
    useState<SubscribedPlanInfo | null>(() => {
      if (typeof window !== "undefined") {
        const storedData = sessionStorage.getItem("subscribedPlanInfo");
        return storedData
          ? (JSON.parse(storedData) as SubscribedPlanInfo)
          : null;
      }
      return null;
    });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (subscribedPlanInfo) {
        sessionStorage.setItem(
          "subscribedPlanInfo",
          JSON.stringify(subscribedPlanInfo),
        );
      } else {
        sessionStorage.removeItem("subscribedPlanInfo");
      }
    }
  }, [subscribedPlanInfo]);

  return (
    <CheckoutContext.Provider
      value={{ subscribedPlanInfo, setSubscribedPlanInfo }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
