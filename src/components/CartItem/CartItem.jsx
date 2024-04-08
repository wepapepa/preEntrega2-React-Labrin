import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CartItem = () => {
    const { name, id, totalQuantity } = useContext(CartContext)

    return (
        <div>
            <img src={img} />
            <h3 clasName="Name" alt={id}>{name}</h3>
            <h4>{totalQuantity}</h4>

            <Link to='/App'>Seguir navegando</Link>

        </div>
    )
}

export default CartItem