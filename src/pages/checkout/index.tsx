import CardBrands from "@/components/molecules/CardBrands";
import Header from "@/components/organisms/Header";
import PaymentForm from "@/components/paymentForm";
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/checkout.module.scss";
import Tag from "@/components/atoms/Tag";
import HelpIcon from "@/components/atoms/Icons/HelpIcon";
import Tooltip from "@/components/atoms/Tooltip";
import AvailablePlans from "@/components/organisms/AvailablePlans";
import { GetServerSideProps } from "next";
import { getOffers } from "@/services/getOffers";
import { CheckoutProps } from "@/types/checkoutProps";
import NodeCache from "node-cache";
import { Plan } from "@/types/planType";

const Checkout: React.FC<CheckoutProps> = ({ offers }) => {
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedOffer, setSelectedOffer] = useState<null | Plan>(null);

  const handleSelectedCard = (cardSelected: string) => {
    setSelectedCard(cardSelected);
  };

  const handleSelectedOffer = (offer: Plan) => {
    setSelectedOffer(offer);
  };

  return (
    <main>
      <Head>
        <title>Whitebook - Checkout</title>
        <meta
          name="description"
          content="Finalize sua assinatura do Whitebook, o app de médicos para médicos. Escolha o plano ideal, acesse conteúdos de diversas especialidades e tenha a segurança de tomar a melhor decisão clínica."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <section className={styles.Section}>
            <span className={styles.InfoContainer}>
              <h2 className={styles.Title}>Estamos quase lá!</h2>
              <h3 className={styles.Subtitle}>
                Insira seus dados de pagamento abaixo:
              </h3>
            </span>
            <CardBrands selectedCard={selectedCard} />
            <PaymentForm
              handleSelectedCard={handleSelectedCard}
              selectedOffer={selectedOffer}
            />
          </section>

          <section className={styles.Section}>
            <span className={styles.InfoContainer}>
              <h2 className={styles.Title}>Confira o seu plano:</h2>
              <Tag text="fulano@cicrano.com.br" />
            </span>

            <div>
              <AvailablePlans
                offers={offers}
                handleSelectedOffer={handleSelectedOffer}
              />
            </div>

            <div className={styles.Help}>
              <Tooltip content="Informações sobre a cobrança">
                <p>Sobre a cobrança</p>
                <HelpIcon />
              </Tooltip>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const cache = new NodeCache({ stdTTL: 60 });

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const cachedOffers = cache.get("offers");

    if (cachedOffers) {
      return { props: { offers: cachedOffers } };
    }

    const offers = await getOffers();

    if (!offers || offers?.length === 0) {
      throw new Error("Erro ao obter os dados necessários");
    }

    cache.set("offers", offers);

    return { props: { offers } };
  } catch {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};

export default Checkout;
