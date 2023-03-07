import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { FloatingBtn } from "../FloatingBtn/index";
import { useTranslation } from "react-i18next";

function Layout(props: React.PropsWithChildren) {
  const { t } = useTranslation("common");
  console.log(t("layout.header.ask_quote"));

  return (
    <>
      <Head>
        <title>PrismaQila</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="boxed_wrapper">
        <Header />
        <main>{props.children}</main>
        <FloatingBtn />
        <Footer />
      </main>
    </>
  );
}

export default Layout;
