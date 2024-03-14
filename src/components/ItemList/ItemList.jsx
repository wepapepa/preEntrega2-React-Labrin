import Item from "../Item/Item"

const ItemList = ( { products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: column, backgroundColor: 'pink'}} onClick={() => console.log('hice click en itemlist')}>
            {
                products.map(product => {
                    return <Item key={product.id} { ... product} />
                })
            }
        </div>
    )
}

export default ItemList