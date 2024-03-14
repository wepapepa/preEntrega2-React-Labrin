import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {

    return (
        <article>
            <header>
                <h3>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={id} style={{ width: 100}}/>
            </picture>
            <section>
                <p>Categoria: {category} </p>
                <p>Descripción: {description} </p>
                <p>Precio: {price} </p>
                <p>Disponible: {stock} </p>
            </section>
            <footer>
               <ItemCount />
            </footer>
        </article>
    )
}


export default ItemDetail