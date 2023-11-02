import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
// import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </Layout>
  );
}
