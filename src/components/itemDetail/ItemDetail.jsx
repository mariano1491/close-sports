import React from 'react'

function ItemDetail({item}) {
  return (
    <div>
        <h2>{item.nombre}</h2>
        <h3>{item.descripcion}</h3>
        <p>${item.precio}</p></div>
  )
}

export default ItemDetail