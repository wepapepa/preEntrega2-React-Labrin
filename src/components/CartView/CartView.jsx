import { useContext } from "react"
import {CartContext } from "../../context/CartContext"

const CartView = () => {
    const { cart } = useContext(CartContext)


    return (
        <div>
            <h1>Cart</h1>
            <section>
            {
                Cart.map(prod => {
                    return (
                        <article key={prod.id}>
                            <h4>{prod.name}</h4>
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