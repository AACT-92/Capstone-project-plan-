import {useEffect} from 'react'
import {useOutletContext} from 'react-router-dom'
import {getProducts } from './api.js' // wherever the path is

const Products = () => {
  const {
    values: { cart, user, products },
    setter: { setCart, setUser, setProducts }
  } = useOutletContext()

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )

}
export default Products