import { useState, useEffect } from "react"
/*import { getProductById } from "../../asyncMock" */
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useAsync } from "../../hooks/useAsync"
import { getProductsById } from "../../services/firebase/firestore/products"


const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const asyncFunction = () => getProductsById(itemId)

    const { data: product, loading, error} = useAsync(asyncFunction, [itemId])

    if(loading) {
        return <h1>Producto cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error cargando el producto. Inténtelo de nuevo más tarde</h1>
    }

    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             setProduct(response)
    //         })
    // }, [itemId])


    return (
        <div style={{ background: 'orange'}}>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer