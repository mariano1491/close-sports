import React, { useState, useEffect } from "react";
import { productos } from "../../mook/productos";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams} from 'react-router-dom'


function ItemDetailContainer({saludo}) {
  const [product, setProduct] = useState({});
  const {itemId} = useParams();

  useEffect(() => {
    const llamarProducto = new Promise((res, rej) => {
      setTimeout(() => {
       const ItemFound = productos.find (plant => {
        return plant.id ==itemId
       })
       res(ItemFound)
      }, 600);
    });
    llamarProducto.then((res) => {
     setProduct(res);
    }).catch((error) =>{
        console.log(error);
    })
  }, []);
  console.log(product);
  return (
    <div>
      <h2 className="container mx-auto mt-5 h2Color">{saludo}</h2>
      <ItemDetail item={product}/>
   </div>
  );
}

export default ItemDetailContainer;
