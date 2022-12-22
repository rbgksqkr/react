import React from "react";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <title>React + Nextjs</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
