import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.js'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    console.log(classes)

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories', orderBy('order', 'asc')))

        getDocs(categoriesCollection)
        .then(querySnapshot => {
            const categoriesAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setCategories(categoriesAdapted)
        })
        .catch(error => {
            console.error('error')
        })
    }, [])


    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')}>Nike Chile</h2> 
            <img src="https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.1/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" style={{ width: 100 , height: 20 , }}/>
            <nav>
                {
                    categories.map(cat => {
                        return<Link key={cat.id} to={'/category/${cat.slug}'}>{cat.name}</Link>
                    })
                }
                {/*<Link to='/category/zapatillas' className='btn btn-primary'>Zapatillas</Link>
                <Link to='/category/accesorios'  className='btn btn-secondary'>Accesorios</Link>
                <Link to='/category/polerones'  className='btn btn-secondary'>Polerones</Link>
            <Link to='/'  className='btn btn-secondary'>Ver todo</Link>*/}
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar