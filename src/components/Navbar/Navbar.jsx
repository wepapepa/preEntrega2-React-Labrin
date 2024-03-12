import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <header>
        <nav>
            <Link to='/category/zapatillas'>Zapatillas</Link>
            <Link to='/category/accesorios'>Accesorios</Link>
            <Link to='/category/polerones'>Polerones</Link>

            <CartWidget />
        </nav>
        </header>
    )
}

export default Navbar