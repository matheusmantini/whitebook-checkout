import "@/styles/_globals.scss";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { FormProvider, useForm } from "react-hook-form";

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
      </main>
    </FormProvider>
  );
}
