import React from 'react'

const Item = ({item}) => {
    const styles = {
        maxWidth: "380px",
        margin: "5px 15px"
    };

    return( 
    <div style={styles} key={item.id}>
        <div>
            <img width="200" src={item.img} alt="" />
        </div>
        <div>
            <h2>{item.nombre}</h2>
            <h2>${item.precio}</h2>
            <h2>{item.stock}</h2>
            <h2>{item.categoria}</h2>
            <h2>{item.descripcion}</h2>
        </div>
    </div>
    );
};

export default Item;