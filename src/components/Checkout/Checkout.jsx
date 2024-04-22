import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, query, where, documentId, writeBatch, addDoc, Timestamp, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async (userData) => {
        

        const objOrder = {
            buyer: userData,
            items: cart,
            total,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock =[]

        const ids = cart.map(prod => prod.id)
        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
        
        // getDocs(productsCollection)
        //     .then(querySnapshot => console.log(querySnapshot.docs)) //esto ya no va

        const querySnapshot = await getDocs(productsCollection)
        const { docs } = querySnapshot

        docs.forEach(doc => {
            const data = doc.data()
            const stockDb = data.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity }) //lo mismo que la funcion doc en itemListContainer
            } else {
                outOfStock.push({ id: doc.id, ...data })
            }
        })

        if(outOfStock.length === 0) {
            batch.commit()

            const orderCollection = collection(db, 'orders')
            const { id } = await addDoc(orderCollection, objOrder)

            clearCart()
            setOrderId(id)
            console.log(id)
        } else {
            console.error('Lo sentimos, hay productos que no tienen stock disponible')
        }

        if (mail = !mailConfirm) {
            alert('Verifica que tu mail coincida en ambos campos')
        } else {
            disabled(botonCompra)
        }
    }

    if(loading) {
        return <h1>Su orden está siendo generada...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h3>Formulario de compra</h3>
            <form action="/db" method="post">
                <label for="username">Username</label>
                <input type="text" id="buyer"></input>

                <label for="mail">Email</label>
                <input type="text" id="mail"></input>

                <label for="mail">Confirma tu email</label>
                <input type="text" id="mailConfirm"></input>
            </form>
            
            <button className="botonCompra" onClick={createOrder}> Generar orden de compras </button>
        </div>
    )
}

export default Checkout