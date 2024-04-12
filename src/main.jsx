import {StrictMode} from 'react'
import {createRoot} from 'react-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <SingleProduct />
      },
      {
        path: '/cart',
        element: <Cart />
      },
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