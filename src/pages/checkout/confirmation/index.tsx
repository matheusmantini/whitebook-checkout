import { parseCookies, destroyCookie } from "nookies";
import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "@/components/organisms/Header";
import styles from "@/styles/confirmation.module.scss";
import SubscribedPlanCard from "@/components/molecules/SubscribedPlanCard";
import { CheckoutProvider } from "@/contexts/CheckoutContext";
import CheckIcon from "@/components/atoms/Icons/CheckIcon";
import Button from "@/components/atoms/Button";
import { BUTTON_VARIANTS } from "@/components/atoms/Button/variants";

const ConfirmationPage = () => {
  return (
    <CheckoutProvider>
      <main>
        <Head>
          <title>Whitebook - Checkout Confirmation</title>
          <meta
            name="description"
            content="Sua assinatura do Whitebook foi concluída com sucesso! Acesse agora todos os conteúdos exclusivos e tenha a segurança de tomar a melhor decisão clínica."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />
        <div className={styles.Container}>
          <div className={styles.Wrapper}>
            <span className={styles.IconContainer}>
              <CheckIcon />
            </span>

            <h3 className={styles.Title}>Parabéns!</h3>
            <p className={styles.Subtitle}>
              Sua assinatura foi realizada <br /> com sucesso.
            </p>

            <SubscribedPlanCard />

            <span className={styles.BtnWrapper}>
              <Button
                variant={BUTTON_VARIANTS.Transparent}
                fontSize={12}
                href="#gerenciar-assinaturas"
              >
                Gerenciar assinatura
              </Button>
              <Button variant={BUTTON_VARIANTS.Primary} fontSize={12} href="/">
                IR PARA A HOME
              </Button>
            </span>
          </div>
        </div>
      </main>
    </CheckoutProvider>
  );
};

export default ConfirmationPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const accessFlowCookie = cookies.subscribed;

  if (!accessFlowCookie) {
    return {
      redirect: {
        destination: "/checkout",
        permanent: false,
      },
    };
  }

  destroyCookie(ctx, "subscribed", {
    path: "/",
  });

  return { props: {} };
};
