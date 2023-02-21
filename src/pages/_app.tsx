import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/configStore";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    //require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
