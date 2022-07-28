import React, { Fragment, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Producto from "./components/Producto"
import Carrito from './components/Carrito'

function App() {
  /* State de Listado de Productos */
  const [productos, guardarproductos] = useState([
    { id: 1, nombre: "Camisa React", precio: 50 },
    { id: 2, nombre: "Camisa Express", precio: 40 },
    { id: 3, nombre: "Camisa Electron", precio: 35 },
    { id: 4, nombre: "Camisa Vue", precio: 25 },
  ]);

  /* State carrito de compras */
  const [carrito, agregarProducto] = useState([]);
  /* ¿¿ pq c hace esto en arrays y pq lo unimos en la parte d abajo entre llaves??? */

  /* Fecha Actual */
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      

      <h1> Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          producto={producto}
          key={producto.id}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
      carrito = {carrito}
      agregarProducto = {agregarProducto} 
      />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
