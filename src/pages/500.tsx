import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/errorPage.module.scss";
import Button from "@/components/atoms/Button";
import { BUTTON_VARIANTS } from "@/components/atoms/Button/variants";

const InternalServerErrorPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Erro interno - Whitebook</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className={styles.Container}>
        <div className={styles.Content}>
          <h1 className={styles.StatusCode}>500</h1>

          <div className={styles.Message}>
            <h2 className={styles.Title}>Erro interno no servidor</h2>
            <p className={styles.Description}>
              Oops! Algo deu errado no nosso lado. Nossa equipe já foi
              notificada e estamos trabalhando para resolver o problema.
            </p>
          </div>

          <Button
            variant={BUTTON_VARIANTS.Primary}
            onClick={() => router.push("/")}
          >
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </>
  );
};

export default InternalServerErrorPage;
