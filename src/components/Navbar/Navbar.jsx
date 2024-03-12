import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <header>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F303214%2Fnike-4-logo&psig=AOvVaw1QC91nkGnTZGsAer-untOT&ust=1710367270730000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiom97c74QDFQAAAAAdAAAAABAE" style={{ width: 100 , height: 20 , }}/>
        <nav>
            <Link to='/category/zapatillas'>Zapatillas</Link>
            <Link to='/category/accesorios'>Accesorios</Link>
            <Link to='/category/polerones'>Polerones</Link>
            <Link to='/'>Ver todo</Link>

            <CartWidget />
        </nav>
        </header>
    )
}

export default Navbar