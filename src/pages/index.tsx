import Head from "next/head";

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

      <main>
        <h1>Bem vindo ao Whitebook!</h1>
      </main>
    </>
  );
}
