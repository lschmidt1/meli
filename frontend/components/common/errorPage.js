import React from "react";

function ErrorPage() {
  return (
    <div id="errorPage">
      <img src="/broken-link.png" alt="broken link"></img>
      <h1>¡Uy! Algo salió mal.</h1>
      <p>
        Estamos intentado solucionar el problema. Por favor, intentá de nuevo en
        unos minutos.
      </p>
    </div>
  );
}

export default ErrorPage;
