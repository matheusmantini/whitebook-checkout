import "@/styles/_globals.scss";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <main className={dmSans.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </main>
    </FormProvider>
  );
}

App.getInitialProps = async (context: NextPageContext) => {
  const { res, err } = context;
  let statusCode = 500;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode || 500;
  }

  return {
    pageProps: {
      statusCode,
    },
  };
};
