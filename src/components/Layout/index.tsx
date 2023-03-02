import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from "next/head";
import { FloatingBtn } from "../FloatingBtn/index";


function Layout(props: React.PropsWithChildren) {

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
      </main >
    </>
  );
}

export default Layout;
