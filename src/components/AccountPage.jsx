import { useEffect, useState } from "react";
import { account } from "../api";

export default function Account() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const userData = await account();

      console.log("Response", userData);

      setUser(userData);
    };

    fetchData();
  }, []);

  if (!user || !user.product) {
    return null;
  }

  return (
    <div>
      <h1>Account: </h1>
      {user && (
        <div>
          <p>user Id: {user.id}</p>
          <p>user Firstname: {user.firstname}</p>
          <p>user Lastname: {user.lastname}</p>
          <p>user Email: {user.email}</p>
          <p>user Books: </p>
          {user.product.length > 0
            ? user.products.map(function (product) {
                return (
                  <div key={product.id}>
                    <p>product Id: {product.id}</p>
                    <p>product Title: {product.title}</p>
                    <p>product Price: {product.price}</p>
                    <p>product Category: {product.category}</p>
                    <p>product Description: {product.description}</p>
                    <img src={product.image} />
                    {/* <button onClick={() => returnProduct(product.id)}>
                        return item
                    </button> */}
                  </div>
                );
              })
            : ""}
        </div>
      )}
    </div>
  );
}
