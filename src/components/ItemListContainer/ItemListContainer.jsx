import { useState, useEffect, memo } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { QuerySnapshot, getDocs } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    // const { showNotification } = useNotification()

    useEffect(() => {
        setLoading(true)

        const productsCollection = collection(db, 'products')

        getDocs(productsCollection)
            .then(QuerySnapshot => {
                console.log(QuerySnapshot)
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                alert('error', 'Hubo un error cargando los productos, intentelo mas tarde')
            })


        }, [categoryId])

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        // asyncFunction(categoryId)
        //     .then(result => {
        //     setProducts(result)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
 //EL ARRAY DEBE ESTAR SIEMPRE! si no está esa necesidad de array de dependencias no tendria ningun sentido el use effect


    if(loading) {
        return <h1>Cargando listado de productos...</h1>
    }


    return (
        <div style={{ background: 'pink'}}>
            <h1>{ greeting }</h1>
            <ItemList products={products} />
        </div>
    )


}

export default ItemListContainer