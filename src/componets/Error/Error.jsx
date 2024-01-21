import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>Ooops</h1>
      <h2>Error 404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe. 😵‍💫</p>
      <Link className="boton-inicio" to="/">
        Volver a la tienda
      </Link>
    </div>
  );
};

export default Error404;
