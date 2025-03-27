import Head from "next/head";
import styles from "../styles/home.module.scss";
import Button from "@/components/atoms/Button";
import { BUTTON_VARIANTS } from "@/components/atoms/Button/variants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whitebook</title>
        <meta
          name="description"
          content="Whitebook: app de médicos para médicos com mais de 9000 conteúdos de diferentes especialidades, trazendo segurança para você tomar a melhor decisão clínica."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.Container}>
        <section className={styles.Wrapper}>
          <h1 className={styles.Title}>Whitebook.</h1>
          <p className={styles.Text}>
            De médicos para médicos, melhorando a sua tomada de decisão clínica.
          </p>
          <span className={styles.BtnWrapper}>
            <Button
              variant={BUTTON_VARIANTS.Primary}
              fontSize={14}
              href="/checkout"
            >
              Ir para o Checkout
            </Button>
          </span>
        </section>
      </main>
    </>
  );
}
