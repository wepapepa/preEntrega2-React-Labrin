import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    const navigate = useNavigate()
    console.log(classes)

    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')}>Nike Chile</h2> 
            <img src="https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.1/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" style={{ width: 100 , height: 20 , }}/>
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