import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

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
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
      </CartProvider>
    </BrowserRouter>

    </>
  )
}

export default App
