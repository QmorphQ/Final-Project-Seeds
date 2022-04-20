// import { UpdateDisabled } from "@mui/icons-material";
import axios from "axios";
import { API } from "../../app/constants";
import {
  downloadCartSuccess,
  downloadCartRequested,
  downloadCartError,
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

const orderCart = (cart) => {
  const orderedCart = [];
  cart.data.products.forEach((item) => {
    const product = {
      product: item.product._id,
      cartQuantity: item.cartQuantity,
    };
    orderedCart.push(product);
  });

  return orderedCart;
};

const increaseQuantity = (cart, productId, quantity, input) => {
  const cartData = cart.map((item) => {
    if (item.product === productId) {
      if (input) {
        return {
          product: item.product,
          cartQuantity: quantity,
        };
      } else {
        return {
          product: item.product,
          cartQuantity: +item.cartQuantity + quantity,
        };
      }
    }
    return item;
  });

  return cartData;
};

const decreaseQuantity = (cart, productId, quantity) => {
  const cartData = cart.map((item) => {
    if (item.product === productId) {
      return {
        product: item.product,
        cartQuantity: +item.cartQuantity - quantity,
      };
    }
    return item;
  });

  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].cartQuantity <= 0) {
      cartData.splice(i, 1);
    }
  }

  return cartData;
};

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
          const orderedCart = [];
          cart.data.products.forEach((item) => {
            const product = {
              product: item.product._id,
              cartQuantity: item.cartQuantity,
            };
            orderedCart.push(product);
          });
          dispatch(editSuccess(orderedCart));
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

  // const writeCartToDatabase = () => (dispatch, getState) => {
  //   const token = localStorage.getItem("jwt");
  //   const { cart } = getState().cart;

  //   if(token) {
  //     axios
  //     .delete(`${API}cart`, {
  //       headers: {
  //         Authorization: `${token}`,
  //       },
  //     })
  //     .then(() => {
  //       axios
  //       .post(`${API}cart`, cart, {
  //         headers: {
  //           Authorization: `${token}`,
  //         },
  //       }).catch(() => {
  //         console.log("Some problem with writing down local cart to database");
  //       })
  //     })
  //     .catch(() => {
  //       console.log("Some problem with deleting expired cart from database")
  //     });
  //   }
    
  // }

const addCartToDatabase = (cartData, token) => (dispatch) => {
  axios
    .post(
      `${API}cart`,
      { products: cartData },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((addedCart) => {
      dispatch(editSuccess(orderCart(addedCart)));
      return addedCart;
    })
    .catch(() => {
      dispatch(editError());
    });
};

const updateCartInDatabase = (cartData, token) => (dispatch) => {
  axios
    .put(
      `${API}cart`,
      { products: cartData },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((updatedCart) => {
      dispatch(editSuccess(orderCart(updatedCart)));
      return updatedCart;
    })
    .catch(() => {
      dispatch(editError());
    });
};

const manageCart =
  (productId, quantity, input = false) =>
  (dispatch, getState) => {
    dispatch(editStart());

    const token = localStorage.getItem("jwt");
    const { cart } = getState().cart;

    let cartData = [];
    const existedProduct = cart.find((item) => item.product === productId);

    if (existedProduct) {
      cartData = increaseQuantity(cart, productId, quantity, input);
    } else {
      const newProduct = {
        product: productId,
        cartQuantity: quantity,
      };
      if (cart.length === 0) {
        cartData.push(newProduct);
      } else {
        cart.push(newProduct);
        cartData = [...cart];
      }
    }

    if (token) {
      if (cart.length === 0) {
        dispatch(addCartToDatabase(cartData, token));
      } else {
        dispatch(updateCartInDatabase(cartData, token));
      }
    } else {
      dispatch(editSuccess(cartData));
    }
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
        dispatch(addProductToCartSuccess(orderCart(updatedCart)));
        return updatedCart;
      })
      .catch(() => {
        dispatch(addProductToCartError());
      });
  } else {
    const { cart } = getState().cart;
    const updatedCart = increaseQuantity(cart, productId, 1);
    dispatch(addProductToCartSuccess(updatedCart));
  }
};

const decreaseProductQuantity = (productId) => (dispatch, getState) => {
  dispatch(decreaseQuantityRequested());

  const { cart } = getState().cart;
  let cartData = [];
  cartData = decreaseQuantity(cart, productId, 1);

  const token = localStorage.getItem("jwt");
  if (token) {
    if (cartData.length === 0) {
      axios
        .delete(`${API}cart`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then(() => {
          dispatch(editSuccess([]));
        })
        .catch(() => {
          dispatch(editError());
        });
    } else {
      axios
        .delete(`${API}cart/product/${productId}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((updatedCart) => {
          dispatch(decreaseQuantitySuccess(orderCart(updatedCart)));
          return updatedCart;
        })
        .catch(() => {
          dispatch(decreaseQuantityError());
        });
    }
  } else {
    const updatedCart = decreaseQuantity(cart, productId, 1);
    dispatch(decreaseQuantitySuccess(updatedCart));
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

const changeLocalCart = (cart, productId, calculateCartQuantity) => {
  let cartCopy;
  if (cart.length === 0) {
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

export {
  fetchCart,
  // writeCartToDatabase,
  manageCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  changeProductQuantity,
  changeLocalCart,
};
