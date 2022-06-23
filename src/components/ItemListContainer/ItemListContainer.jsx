import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { productos } from "../../mook/productos";
import ItemList from "../itemList/ItemList";

function ItemListContainer({saludo}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const llamarProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    llamarProductos.then((res) => {
     setProducts(res);
    }).catch((error) =>{
        console.log(error);
    })
  }, []);
  console.log(products);
  return (
    <div>
      <h2 className="h2Color">{saludo}</h2>
      <ItemList items={productos}/>
      <a href="/detalle">ir a url detalle</a>
    </div>
  );
}

export default ItemListContainer;
