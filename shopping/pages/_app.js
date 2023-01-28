import React from "react";
import Head from "next/head";
import "../src/styles/global.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const App = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Head>
      <meta charSet="utf-8" />
      <title>To you - 당신을 위한</title>
    </Head>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default App;
