import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const {
    values: { user, cart },
    setters: { setUser, setCart },
  } = useOutletContext();

  const handleQuanityChange = () =>
    setCart(changeQty(cart, productId, item.qty - 1));

  return (
    <>
      {cart.map((item) => {
        return (
          <div>
            <h2>Item: {item.title}</h2>
            <p>Qty: {item.qty}</p>
            {/* add qty button */}
            <button>+</button>
            {/* reduce qty button */}
            <button onClick={handleQuanityChange}>-</button>
            {/* remove item */}
            <button>Remove</button>
            <p>Description: {item.description.slice(0, 25) + "..."}</p>
            <p>Unit Price: {item.price}</p>
            <p>Line Price: {item.price * item.qty}</p>
          </div>
        );
      })}
      <h2>
        Total Price:{" "}
        {cart.reduce((total, item) => {
          return item.price * item.qty + total;
        }, 0)}
      </h2>
      <button>Buy Now</button>
    </>
  );
};

export default Cart;
