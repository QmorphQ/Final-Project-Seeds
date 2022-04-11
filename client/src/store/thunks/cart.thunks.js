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
  editStart,
  editSuccess,
  editError,
} from "../actions/cart.actions";

const fetchCart =
  (uri = `${API}cart`) =>
  (dispatch, getState) => {
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
      const { cart } = getState();
      dispatch(downloadCartSuccess(cart.cart));
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
  }
};

const changeLocalCart = (cart, productId, calculateCartQuantity) => {
  let cartCopy;
  if (!cart) {
    cartCopy = [];
  } else {
    cartCopy = [...cart];
  }
  const product = cartCopy.find((cartItem) => productId === cartItem.id);
  if (product) {
    const newProduct = {
      ...product,
      cartQuantity: calculateCartQuantity(product.cartQuantity),
    };
    const productIndex = cartCopy.findIndex(
      (cartItem) => productId === cartItem.id
    );
    cartCopy.splice(productIndex, 1, newProduct);
    return cartCopy;
  }
  const newProduct = {
    id: productId,
    cartQuantity: calculateCartQuantity(),
  };
  const newCart = [...cartCopy, newProduct];
  return newCart;
};

const addProductToCart = (productId) => (dispatch, getState) => {
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
    const { cart } = getState().cart;
    const calculateQuantity = (quantity) => (quantity ? quantity + 1 : 1);
    const updatedCart = changeLocalCart(cart, productId, calculateQuantity);
    dispatch(addProductToCartSuccess(updatedCart));
  }
};

const changeProductQuantity = (productId, quantity) => (dispatch, getState) => {
  dispatch(editStart());
  const token = localStorage.getItem("jwt");
  const { cart } = getState().cart;
  if (token) {
    const calculateQuantity = () => quantity;
    const updatedCart = changeLocalCart(cart, productId, calculateQuantity);
    const cartForAPI = updatedCart.map((item) => ({
      product: item.id,
      cartQuantity: item.cartQuantity,
    }));
    axios
      .put(
        `${API}cart`,
        { products: cartForAPI },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((newCart) => {
        dispatch(editSuccess(newCart.data));
        return updatedCart;
      })
      .catch(() => {
        dispatch(editError());
      });
  } else {
    const calculateQuantity = () => quantity;
    const updatedCart = changeLocalCart(cart, productId, calculateQuantity);
    dispatch(editSuccess(updatedCart));
  }
};

const decreaseProductQuantity = (productId) => (dispatch, getState) => {
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
  } else {
    const { cart } = getState().cart;
    const calculateQuantity = (quantity) => (quantity ? quantity - 1 : 1);
    const updatedCart = changeLocalCart(cart, productId, calculateQuantity);
    dispatch(deleteProductFromCartSuccess(updatedCart));
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
  changeProductQuantity,
  changeLocalCart,
};
