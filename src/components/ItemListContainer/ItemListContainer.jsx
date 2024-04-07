import { useState, useEffect } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { QuerySnapshot, getDocs } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, 'products')

        getDocs(productsCollection)
            .then(QuerySnapshot => {
                console.log(querySnapshot)
                const productsAdapted = querySnapshots.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })

                setProducts(productsAdapted)
            })
            .catch()


        setLoading(true)

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
    }, [categoryId]) //EL ARRAY DEBE ESTAR SIEMPRE! si no está esa necesidad de array de dependencias no tendria ningun sentido el use effect


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