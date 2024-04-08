import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos'}/> } />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>

    </>
  )
}

export default App
