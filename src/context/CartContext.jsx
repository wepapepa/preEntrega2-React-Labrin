import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log('CART: ', cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.error('El producto ya se encuentra en el carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let acumulador = 0

        cart.forEach(prod => {
            acumulador += prod.quantity
        })

        return acumulador
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let acumulador = 0

        cart.forEach(prod => {
            acumulador += prod.quantity * <prod className="price"></prod>
        })

        return acumulador
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )

}

export default CartContext