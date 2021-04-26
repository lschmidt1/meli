import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/header/header";
import ProductsList from "../../components/productsList/productsList";

export default function Items() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  /* GET SEARCH VARIABLE FROM URL */
  useEffect(() => {
    let search = router.query.search;
    if (search) {
      setSearchValue(search);
    }
  });

  return (
    <div id="main">
      <Head>
        <title>
          {searchValue ? searchValue + "   |   " : ""}Mercado Libre
        </title>
        <meta
          name="description"
          content={searchValue ? searchValue : ""}
        ></meta>
        <link rel="icon" href="/Logo_ML.png" />
      </Head>
      <ProductsList />
    </div>
  );
}
