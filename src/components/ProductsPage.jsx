import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllProducts } from "../api";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const {
    values: { cart, user, products },
    setters: { setCart, setUser, setProducts },
  } = useOutletContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log("products: ", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <img src={product.image} />
            <button onClick={() => navigate(`/product/${product.id}`)}>
              see product
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
