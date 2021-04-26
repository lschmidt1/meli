import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  /* GET SEARCH VALUE FROM URL */
  const searchQuery = router ? router.query.search : "";
  /* SET VALUE IF FOUND IN URL, ELSE START EMPTY*/
  const [searchValue, setSearchValue] = useState(searchQuery || "");

  function handleSearchProducts(e) {
    e.preventDefault()
    if (searchValue && router) {
      router.push(`/items?search=${searchValue}`);
    }
  }

  function redirectHome(e) {
    e.preventDefault()
    if (router) {
      router.push(`/`);
      setSearchValue("")
    }
  }

  return (
    <div id="header">
      <img role="logo" onClick={(e) => redirectHome(e)} src="/Logo_ML@2x.png" alt="Mercado Libre" />
      <form role="submitForm" onSubmit={(e) => handleSearchProducts(e)}>
        <input
          data-testid="searchInput"
          role="searchInput"
          placeholder="Nunca dejes de buscar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button title="Busqueda" role="submitButton" type="submit">
          <img src="/ic_Search@2x.png" alt="Busqueda" />
        </button>
      </form>
    </div>
  );
}

export default Header;
