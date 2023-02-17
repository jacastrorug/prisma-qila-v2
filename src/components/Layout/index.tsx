import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Layout(props: React.PropsWithChildren) {
  return (
    <main className="boxed_wrapper">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </main>
  );
}

export default Layout;
