import { useState } from 'react'
import {Outlet} from 'react-router-dom'
// import Account from './components/Account'
// import Register from './components/Register'
// import Login from './components/Login'
// import Products from './components/Products'
// import SingleProduct from './components/SingleProduct'
// import Cart from './components/Cart'

const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [user, setUser] = useState()
  const [products, setProducts] = useState()
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const context = {
    values: { cart, user, products, token },
    setters: { setCart, setUser, setProducts, setToken }
  }

  return (
    <div>
      <NavBar/>
      {/* <Routes> */}
        {/* <Route to='/' element={<Products user={user} />}/>
        <Route to='/products/:productId' element={<SingleProduct />}/>
        <Route to='/register' element={<Register />}/>
        <Route to='/login' element={<Login />}/>
        <Route to='/account' element={<Account />}/>
        <Route to='/cart' element={<Cart />}/> */}
      {/* </Routes> */}
      <Outlet context={context}/>
      <Footer/>
    </div>
  )
}
export default App