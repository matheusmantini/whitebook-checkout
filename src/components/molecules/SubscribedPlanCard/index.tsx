import React from "react";
import styles from "./subscribedPlanCard.module.scss";
import StarIcon from "@/components/atoms/Icons/StarIcon";
import { useCheckout } from "@/contexts/CheckoutContext";
import { formatCurrencyBRL } from "@/utils/formatCurrency";

const SubscribedPlanCard = () => {
  const { subscribedPlanInfo } = useCheckout();

  const { selectedOffer, email, cpf } = subscribedPlanInfo || {};
  const { fullPrice, discountAmmount, installments, title, description } =
    selectedOffer || {};

  const totalPrice =
    fullPrice && discountAmmount ? fullPrice - discountAmmount : 0;
  const installmentPrice =
    totalPrice && installments ? totalPrice / installments : 0;

  const formattedTotalPrice = totalPrice ? formatCurrencyBRL(totalPrice) : "-";
  const formattedInstallmentPrice = installmentPrice
    ? formatCurrencyBRL(installmentPrice)
    : "-";

  return (
    <div className={styles.Card} data-testid="subscribed-plan">
      <div className={styles.Header}>
        <span className={styles.Icon}>
          <StarIcon />
        </span>
        <div className={styles.HeaderInfo}>
          <h3 className={styles.SelectedPlan}>
            {title} | {description}
          </h3>
          <p className={styles.Price}>
            {formattedTotalPrice} | {installments}x {formattedInstallmentPrice}
          </p>
        </div>
      </div>
      <div className={styles.Details}>
        <span className={styles.Detail}>
          <p className={styles.Label}>E-mail</p>
          <p className={styles.Value}>{email}</p>
        </span>

        <span className={styles.Detail}>
          <p className={styles.Label}>CPF</p>
          <p className={styles.Value}>
            {cpf
              ? cpf
                  .replace(/\D/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
              : "-"}
          </p>
        </span>
      </div>
    </div>
  );
};

export default SubscribedPlanCard;
