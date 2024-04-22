import { memo } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"


const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()

    // const { showNotification } = useNotification()
    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])



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

    if(error) {
        return <h1>Hubo un error cargando los productos, inténtelo más tarde</h1>
    }


    return (
        <div style={{ background: 'pink'}} onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{ greeting }</h1>
            <ItemListMemoized products={products} />
        </div>
    )


}

export default ItemListContainer