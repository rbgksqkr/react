import React from "react";
import Head from "next/head";
import "../src/global.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>To you - 당신을 위한</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
