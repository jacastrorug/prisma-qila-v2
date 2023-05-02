import Head from "next/head";
import React from "react";
import { FloatingBtn } from "../FloatingBtn/index";
import Footer from "../Footer";
import Header from "../Header";

function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>PrismaQila</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="boxed_wrapper">
        <Header />
        <main className="page-main-content">{props.children}</main>
        <FloatingBtn />
        <Footer />
      </main>
    </>
  );
}

export default Layout;
