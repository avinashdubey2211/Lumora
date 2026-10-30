import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;