import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, query, where, documentId } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
    const { cart, total } = useContext(CartContext)

    const createOrder = async (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total
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
            console.log(id)
        } else {
            console.error('Lo sentimos, hay productos que no tienen stock disponible')
        }



    }
    return (
        <div>
            <h1>Checkout</h1>
            <h3>Formulario de compra</h3>
            
            <button onClick={createOrder}> Generar orden de compras </button>
        </div>
    )
}

export default Checkout