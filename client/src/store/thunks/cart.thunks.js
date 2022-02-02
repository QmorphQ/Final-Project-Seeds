import axios from "axios";
import {
  downloadCartSuccess,
  downloadCartRequested,
  downloadCartError,
  addCartRequested,
  addCartSuccess,
  addCartError,
  addProductToCartRequested,
  addProductToCartSuccess,
  addProductToCartError,
} from "../actions/cart.actions";

const fetchCart =
  (uri = "http://localhost:5000/api/cart") =>
  (dispatch) => {
    const token = localStorage.getItem("jwt");
    dispatch(downloadCartRequested());
    if (token) {
      axios
        .get(uri, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((cart) => {
          dispatch(downloadCartSuccess(cart));
          return cart;
        })
        .catch(() => {
          dispatch(downloadCartError());
        });
    } else {
      const cartFromLS = JSON.parse(localStorage.getItem("cart"));
      console.log(cartFromLS);
      dispatch(downloadCartSuccess(cartFromLS));
    }
  };

const addCart = (cart) => (dispatch) => {
  dispatch(addCartRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .post("http://localhost:5000/api/cart", cart, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((addedCart) => {
        dispatch(addCartSuccess(addedCart));
        return addedCart;
      })
      .catch(() => {
        dispatch(addCartError());
      });
  } else {
    dispatch(addCartSuccess(cart));
    console.log("added cart to LS");
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const addProductToCart = (productId) => (dispatch) => {
  dispatch(addProductToCartRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .put(`http://localhost:5000/api/cart/${productId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedCart) => {
          console.log(updatedCart)
        dispatch(addProductToCartSuccess(updatedCart));
        return updatedCart;
      })
      .catch(() => {
        dispatch(addProductToCartError());
      });
  } else {
    const oldCart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = { ...oldCart, ...oldCart.products[productId] };
    dispatch(addProductToCartSuccess(updatedCart));
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(updatedCart);
  }
};

export { fetchCart, addCart, addProductToCart };
