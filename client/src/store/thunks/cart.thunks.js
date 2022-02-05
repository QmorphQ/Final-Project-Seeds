import axios from "axios";
import { API } from "../../app/constants";
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
  (uri = `${API}cart`) =>
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
          dispatch(downloadCartSuccess(cart.data));
          return cart;
        })
        .catch(() => {
          dispatch(downloadCartError());
        });
    } else {
      const cartFromLS = JSON.parse(localStorage.getItem("cart"));
      dispatch(downloadCartSuccess(cartFromLS));
    }
  };

const addCart = (cart) => (dispatch) => {
  dispatch(addCartRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .post(`${API}cart`, cart, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((addedCart) => {
        dispatch(addCartSuccess(addedCart.data));
        return addedCart;
      })
      .catch(() => {
        dispatch(addCartError());
      });
  } else {
    dispatch(addCartSuccess(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const addProductToCart = (productId) => (dispatch) => {
  dispatch(addProductToCartRequested());
  const token = localStorage.getItem("jwt");

  if (token) {
    axios
      .put(`${API}cart/${productId}`, false, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedCart) => {
        dispatch(addProductToCartSuccess(updatedCart.data));
        return updatedCart;
      })
      .catch(() => {
        dispatch(addProductToCartError());
      });
  } else {
    const newProduct = {
      product: productId,
      cartQuantity: 1,
    };
    const oldCart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = [...oldCart];
    updatedCart.push(newProduct);
    dispatch(addProductToCartSuccess(updatedCart));
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

export { fetchCart, addCart, addProductToCart };
