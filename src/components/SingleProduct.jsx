import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  // const []
  // const {
  //   values: { products },
  // } = useOutletContext();
  // console.log(productId, products)
  // const product = products.filter( product=> productId === product.id )
  // console.log(product)
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const singleProductData = await getSingleProduct(productId);
      console.log("Response: ", singleProductData);
      setProduct(singleProductData);
    };
    fetchSingleProduct();
  }, []);

  return (
    <div>
      <h1>This Product</h1>
      {product && product.id && (
        <div>
          <p>{product.title}</p>  
          <p>${product.price}</p>
          <p>Product ID: {product.id}</p>
          <p>Product Category: {product.category}</p>
          <p>{product.description}</p>
          <img src={product.image} />
        </div>
      )}
    </div>
  );
};
export default SingleProduct;
