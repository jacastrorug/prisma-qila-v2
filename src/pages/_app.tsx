import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/index.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
