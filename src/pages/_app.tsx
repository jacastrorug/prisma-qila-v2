import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/configStore";
import Script from "next/script";

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
      <Script src="/assets/js/jquery.js" />
      <Script src="/assets/js/popper.min.js" />
      <Script src="/assets/js/owl.js" />
      <Script src="/assets/js/wow.js" />
      <Script src="/assets/js/validation.js" />
      <Script src="/assets/js/jquery.fancybox.js" />
      <Script src="/assets/js/appear.js" />
      <Script src="/assets/js/jquery.countTo.js" />
      <Script src="/assets/js/scrollbar.js" />
      <Script src="/assets/js/jquery.nice-select.min.js" />

      <Script src="/assets/js/script.js" />
    </Provider>
  );
}

export default wrapper.withRedux(App);
