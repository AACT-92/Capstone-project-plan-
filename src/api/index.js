//APIn used for products, singleProducts and cart
const BASE_URL = "https://fakestoreapi.com";

//API used for user, register and login
const BASE_URL_2 = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

const TOKEN = localStorage.getItem("token");

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (productId) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${productId}`);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  
//   export const checkOutBook = async (productId) => {
//     try{
//       const response = await fetch(`${BASE_URL_2}/api/books/${productId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           available: false,
//         }), headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${TOKEN}`,
//         },
//       });
//       const result = await response.json();
//       console.log(result);
//       return result.book;
//     } catch (err) {
//       console.error(err);
//     }
//   }


  export const login = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL_2}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };


  export const register = async (firstname, lastname, email, password) => {
    try {
      const response = await fetch(`${BASE_URL_2}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });
  
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  
  export const account = async () => {
    try {
      const response = await fetch(`${BASE_URL_2}/api/users/me`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const result = await response.json();
      console.log("RESULT:", result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };