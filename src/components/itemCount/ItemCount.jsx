import React, {useState} from "react";
import "./itemCount.css"

const ItemCount = ({initial, stock,}) => {
    const [count, setCount] =useState(initial)

    const suma =() => {
        if (count < stock) {
         setCount(count +1)
        }
    }
    const resta =() => {
        if (count > initial) {

            setCount(count -1)
        }
    }
    return (
        <div className="count container row ">
            <div className="buttons d-flex">
                <button className="contador" onClick={suma}>+</button>
                <p>{count}</p>
                <button className="contador" onClick={resta}>-</button>
            </div>
            <div className="add-cart">
                <button className="botonCarrito">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;