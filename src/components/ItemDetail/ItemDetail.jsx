import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { //ARMÉ EL OBJETO CON DATOS BASE
            id, name, price
        }
        
        addItem(item, quantity) //Info entregada al addItem con las cantidades
    }

    return (
        <article>
            <header>
                <h3>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100 }}/>
            </picture>
            <section>
                <p>Categoria: {category} </p>
                <p>Descripción: {description} </p>
                <p>Precio: {price} </p>
                <p>Disponible: {stock} </p>
            </section>
            <footer>
               
               { 
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
               }
            </footer>
        </article>
    )
}


export default ItemDetail