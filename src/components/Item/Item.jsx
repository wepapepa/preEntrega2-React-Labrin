import { Link } from "react-router-dom"

const Item = ({ name, category, price, img }) => {


    return (
        <div>
            <h4>categoría{category}</h4>
            <h3>{name}</h3>
            <img src={img} style={{ width: 150 }}/>
            <h4>${price}</h4>
            <Link to={'/item/${id}'}>ver detalle</Link>
        </div>
    )
}

export default Item