import cart from '../../assets/react.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to='/cart'>
            <img src={cart} />
        </Link>
    )
}

export default CartWidget