import React from "react";
import "./ItemListContainer.css"

function ItemListContainer (props) {
    
    return (
        <div>
            <h2 className="h2Color">{props.greet}</h2>
        </div>
    )
}

export default ItemListContainer;