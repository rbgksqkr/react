import React from "react";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <title>React + Nextjs</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
