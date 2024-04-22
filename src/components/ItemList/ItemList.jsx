import Item from "../Item/Item"
import classes from './ItemList.module.css'

const ItemList = ( { products }) => {
    return (
        <div className={classes.container} onClick={() => console.log('hice click en el itemlist')}>
            {
                products.map(product => {
                    return <Item key={product.id} {...product} />
                })
            }
        </div>
    )
}

export default ItemList