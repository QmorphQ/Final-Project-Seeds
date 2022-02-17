import axios from "axios";
import { useSelector } from "react-redux";
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
  }
};

const addProductToCart = (productId, amount) => (dispatch) => {

  dispatch(addProductToCartRequested());
  const token = localStorage.getItem("jwt");

  const newProduct = [
    {
      product: productId,
      cartQuantity: amount,
    }
  ]

  if (token) {
    axios
      .put(`${API}cart/${productId}`, newProduct, {
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
      cartQuantity: amount,
    };
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cart.map(item => {
      if(item.product === productId) {
        item.cartQuantity += amount;
      }
    })
    if(!cart.find(item => item.product === productId)) {
      cart.push(newProduct);
    }

    dispatch(addProductToCartSuccess(cart));
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
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
          const localCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
          localCart.forEach(item => {
            dispatch(addProductToCartRequested());
            axios
              .put(`${API}cart/${item.product}`, item, {
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
          });
          localStorage.removeItem("cart");
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

export {
  fetchCart,
  addCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
};
