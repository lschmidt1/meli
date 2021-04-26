import { useSelector } from "react-redux";

import Head from "next/head";
import Header from "../../components/header/header";
import ProductDetail from "../../components/productDetail/productDetail";

export default function ItemId() {
  const product = useSelector((state) => state.productsReducer.productDetail);

  return (
    <div id="main">
      <Head>
        <title>{product ? product.title + "   |   " : ""}Mercado Libre</title>
        <link rel="icon" href="/Logo_ML.png" />
        <meta name="description" content={product ? product.title : ""}></meta>
      </Head>
      <ProductDetail />
    </div>
  );
}
