import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext)


    return (
        <div>
            <h1>Cart</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <article key={prod.id} style={{ display: 'flex'}}>
                            <h4>{prod.name}</h4>
                            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </article>
                    )
                })
            }
            </section>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartView