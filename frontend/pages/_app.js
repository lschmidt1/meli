import "../styles/App.scss";
import Head from "next/head";
import React from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/header/header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Mercado Libre</title>
        <link rel="icon" href="/Logo_ML.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
