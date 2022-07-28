import React from "react";

const Footer = ({ fecha }) => {
  /* ANotar el paso d fecha entre llaves en el cuaderno La envio desde el app y c la envio a la funcion y de ahi la muestro en el return*/
  return (
    <footer>
      <p>Todos los Derechos Reservados &copy;{fecha}</p> 
    </footer>
  );
};

export default Footer;

/*PONER Q SI va la
      {fecha} q habia quitado */