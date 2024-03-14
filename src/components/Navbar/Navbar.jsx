import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    const navigate = useNavigate()
    console.log(classes)

    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')} style={{ color: 'red', fontSize: 10, cursor: 'pointer'}}>Nike Chile</h2> 
            <img src="./logo.png" style={{ width: 100 , height: 20 , }}/>
            <nav>
                <Link to='/category/zapatillas' className='btn btn-primary'>Zapatillas</Link>
                <Link to='/category/accesorios'  className='btn btn-secondary'>Accesorios</Link>
                <Link to='/category/polerones'  className='btn btn-secondary'>Polerones</Link>
                <Link to='/'  className='btn btn-secondary'>Ver todo</Link>
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar