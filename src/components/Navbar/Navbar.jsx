import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')} style={{ color: 'red', fontSize: 10, cursor: 'pointer'}}>Nike Chile</h2> 
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F303214%2Fnike-4-logo&psig=AOvVaw1QC91nkGnTZGsAer-untOT&ust=1710367270730000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiom97c74QDFQAAAAAdAAAAABAE" style={{ width: 100 , height: 20 , }}/>
            <nav>
                <Link to='/category/zapatillas'>Zapatillas</Link>
                <Link to='/category/accesorios'>Accesorios</Link>
                <Link to='/category/polerones'>Polerones</Link>
                <Link to='/'>Ver todo</Link>
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar