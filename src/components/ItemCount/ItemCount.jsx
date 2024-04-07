import { useState } from "react"

const ItemCount = ({ initialValue, stock, onAdd }) => {
    const [count, setCount] = useState(initialValue)
    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    
    const increment = () => {
        if(count < stock) {
            setCount(count+1)
        }
    }
 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            <button onClick={increment}>+</button>
        </div>

    )
}


export default ItemCount