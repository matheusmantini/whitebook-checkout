import AvailablePlanCard from "@/components/molecules/AvailablePlanCard";
import React, { useEffect, useState } from "react";
import styles from "./availablePlans.module.scss";
import { formatCurrencyBRL } from "@/utils/formatCurrency";
import { AvailablePlansProps } from "@/types/availablePlansProps";

const AvailablePlans: React.FC<AvailablePlansProps> = ({
  offers,
  handleSelectedOffer,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    offers[0].id.toString(),
  );

  useEffect(() => {
    if (offers.length > 0) {
      setSelectedPlan(offers[0].id.toString());
    }
  }, [offers]);

  useEffect(() => {
    const selectedOffer = offers?.filter(
      (offer) => offer?.id.toString() === selectedPlan,
    )[0];

    handleSelectedOffer(selectedOffer);
  }, [selectedPlan, offers, handleSelectedOffer]);

  return (
    <div className={styles.Container}>
      {offers.map((plan) => (
        <AvailablePlanCard
          key={plan.id}
          title={`${plan.title} | ${plan.description}`}
          priceFrom={formatCurrencyBRL(plan.fullPrice)}
          priceTo={formatCurrencyBRL(plan.fullPrice - plan.discountAmmount)}
          discount={`-${plan.discountPercentage * 100}%`}
          installment={`${plan.installments}x de ${formatCurrencyBRL((plan.fullPrice - plan.discountAmmount) / plan.installments)}/${plan.periodLabel}`}
          selected={Number(selectedPlan) === Number(plan.id)}
          onSelect={() => setSelectedPlan(plan.id.toString())}
        />
      ))}
    </div>
  );
};

export default AvailablePlans;
