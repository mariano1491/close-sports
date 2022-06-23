import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
const urlDetalle = `/plant/${item.id}` 

    const styles = {
        maxWidth: "380px",
        margin: "5px 15px"
    };

    return( 
    <div className='mb-5 py-3 itemlist-card text center' style={styles} key={item.id}>
        <div>
            <img width="200" src={item.img} alt="" />
        </div>
        <div>
            <h2 className='mt-5 mb-3 text-xs'>{item.nombre}</h2>
            <h2>${item.precio}</h2>
            <h2>{item.stock}</h2>
            <h2>{item.categoria}</h2>
            <h2>{item.descripcion}</h2>
            <Link to ={urlDetalle}>
                <button>ver detalle</button>
            </Link>
        </div>
    </div>
    );
};

export default Item;