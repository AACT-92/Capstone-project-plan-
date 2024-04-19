import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation'  


const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const context = {
    values: { cart, user, products, token },
    setters: { setCart, setUser, setProducts, setToken }
  }

  return (
    <div>
   <Navigation />
      <Outlet context={context}/>
    </div>
  )
}
export default App