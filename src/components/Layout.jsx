import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>RoPi Store</title>
        <meta name="description" content="Tienda Ecommerce creadad con NextJS y Sanity" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
