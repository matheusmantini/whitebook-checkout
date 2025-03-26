import Header from "@/components/organisms/Header";
import Head from "next/head";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Whitebook - Checkout</title>
        <meta
          name="description"
          content="Finalize sua assinatura do Whitebook, o app de médicos para médicos. Escolha o plano ideal, acesse conteúdos de diversas especialidades e tenha a segurança de tomar a melhor decisão clínica."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Header />
      </main>
    </>
  );
}
