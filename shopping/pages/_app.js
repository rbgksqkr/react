import React from "react";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <title>쿠팡!</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
