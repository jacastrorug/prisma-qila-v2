import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/configStore";
import { appWithTranslation } from "next-i18next";
import TemplateScripts from "@/components/TemplateScripts";

function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <TemplateScripts />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(appWithTranslation(App));
