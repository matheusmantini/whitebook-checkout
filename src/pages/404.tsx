import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/404.module.scss";
import Button from "@/components/atoms/Button";
import { BUTTON_VARIANTS } from "@/components/atoms/Button/variants";

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Página não encontrada - Whitebook</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className={styles.Container}>
        <div className={styles.Content}>
          <h1 className={styles.StatusCode}>404</h1>

          <div className={styles.Message}>
            <h2 className={styles.Title}>Página não encontrada</h2>
            <p className={styles.Description}>
              A página que você está procurando pode ter sido removida ou está
              temporariamente indisponível
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

export default NotFoundPage;
