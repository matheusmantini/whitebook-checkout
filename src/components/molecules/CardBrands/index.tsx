import CreditCardAmericanExpress from "@/components/atoms/Icons/CreditCardAmericanExpress";
import CreditCardDinnersClub from "@/components/atoms/Icons/CreditCardDinnersClub";
import CreditCardElo from "@/components/atoms/Icons/CreditCardElo";
import CreditCardMastercard from "@/components/atoms/Icons/CreditCardMastercard";
import CreditCardVisa from "@/components/atoms/Icons/CreditCardVisa";
import React, { JSX } from "react";
import { cardBrands } from "./cardsAvailableBrands";
import IuguLogo from "@/components/atoms/Icons/IuguLogo";
import styles from "./cardBrands.module.scss";
import { CardBrandsProps } from "@/types/cardBrandsProps";

const CardBrands: React.FC<CardBrandsProps> = ({ selectedCard }) => {
  const cardIcons: Record<string, JSX.Element> = {
    [cardBrands.ELO]: <CreditCardElo />,
    [cardBrands.VISA]: <CreditCardVisa />,
    [cardBrands.MASTERCARD]: <CreditCardMastercard />,
    [cardBrands.DINNERSCLUB]: <CreditCardDinnersClub />,
    [cardBrands.AMERICANEXPRESS]: <CreditCardAmericanExpress />,
  };

  const availableCardsBrands = Object.entries(cardIcons).map(
    ([brand, Icon]) => (
      <span
        key={brand}
        className={brand === selectedCard ? styles.Selected : styles.Grayscale}
      >
        {Icon}
      </span>
    ),
  );

  return (
    <div className={styles.Container}>
      <div className={styles.CardsContainer}>{availableCardsBrands}</div>
      <p className={styles.IuguText}>
        Pagamentos por <IuguLogo />
      </p>
    </div>
  );
};

export default CardBrands;
