import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import AccountPage from './components/AccountPage'
//import RegistrationPage from './components/RegistrationPage'
//import LoginPage from './components/LoginPage'
import ProductsPage from './components/ProductsPage'
//import SingleProduct from './components/SingleProduct'
//import CartPage from './components/CartPage'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductsPage />
      },
      // {
      //   path: '/account',
      //   element: <AccountPage />
      // },
      // {
      //   path: '/register',
      //   element: <RegistrationPage />
      // },
      // {
      //   path: '/login',
      //   element: <LoginPage />
      // },
      {
        path: '/products',
        element: <ProductsPage />
      },
      // {
      //   path: '/products/:productId',
      //   element: <SingleProduct />
      // },
      // {
      //   path: '/cart',
      //   element: <CartPage />
      // },
    ]
  }
])

const root = document.getElementById('root')
const app = createRoot(root)
app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)