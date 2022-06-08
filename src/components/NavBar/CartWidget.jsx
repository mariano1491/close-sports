import React from "react";
import cardImage from "../../img/cart.png"

function CartWidget() {
    return (
        <div>
            <img  width="40" src={cardImage} alt="imagen" />
        </div>
    )
}

export default CartWidget;