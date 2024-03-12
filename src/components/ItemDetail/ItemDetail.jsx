import { useState } from "react"
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, category, price, img, description, stock }) => {

    const handleOnAdd = (quantity) => {
        console.log('cantidad del producto: ' + quantity)
        setQuantity(quantity)
    }

    return (
        
            <article>
            <h4>{name}</h4>
            <img src={img} style= {{ width: 100 }} />
            <h4>categoria: {category}</h4>
            <h4>${price}</h4>
            <h4>descripcion: {description}</h4>
            {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <button>Finalizar compra</button>}
        </article>
        

    )
}

export default ItemDetail