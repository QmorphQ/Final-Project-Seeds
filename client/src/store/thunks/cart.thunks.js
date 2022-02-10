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
  decreaseQuantityRequested,
  decreaseQuantitySuccess,
  decreaseQuantityError,
  deleteProductFromCartRequest,
  deleteProductFromCartSuccess,
  deleteProductFromCartError,
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
      if(!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
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

const addProductToCart = (productId, amount) => (dispatch) => {
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
      .catch((err) => {
        console.log(err);
        dispatch(addProductToCartError());
      });
  } else {
    const newProduct = {
      product: productId,
      cartQuantity: amount,
    };
    const oldCart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = [...oldCart];
    updatedCart.push(newProduct);
    dispatch(addProductToCartSuccess(updatedCart));
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

const decreaseProductQuantity = (productId) => (dispatch) => {
  dispatch(decreaseQuantityRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .delete(`${API}cart/${productId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedCart) => {
        dispatch(decreaseQuantitySuccess(updatedCart.data));
        return updatedCart;
      })
      .catch(() => {
        dispatch(decreaseQuantityError());
      });
  }
};

const deleteProductFromCart = (productId) => (dispatch) => {
  dispatch(deleteProductFromCartRequest());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .delete(`${API}cart/${productId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedCart) => {
        dispatch(deleteProductFromCartSuccess(updatedCart.data));
        return updatedCart;
      })
      .catch(() => {
        dispatch(deleteProductFromCartError());
      });
  }
};
export {
  fetchCart,
  addCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
};
