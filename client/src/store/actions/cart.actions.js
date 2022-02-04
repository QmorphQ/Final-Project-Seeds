export const DOWNLOAD_CART_REQUESTED = "DOWNLOAD_CART_REQUESTED";
export const downloadCartRequested = () => ({
  type: DOWNLOAD_CART_REQUESTED,
});

export const  DOWNLOAD_CART_SUCCESS = "DOWNLOAD_CART_SUCCESS";
export const downloadCartSuccess = (cart) => ({
  type: DOWNLOAD_CART_SUCCESS,
  payload: cart,
});

export const DOWNLOAD_CART_ERROR = "DOWNLOAD_CART_ERROR";
export const downloadCartError = () => ({
  type: DOWNLOAD_CART_ERROR,
});

export const ADD_CART_REQUESTED = "ADD_CART_REQUESTED";
export const addCartRequested = () => ({
  type: ADD_CART_REQUESTED,
});

export const  ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const addCartSuccess = (cart) => ({
  type: ADD_CART_SUCCESS,
  payload: cart,
});

export const ADD_CART_ERROR = "ADD_CART_ERROR";
export const addCartError = () => ({
  type: ADD_CART_ERROR,
});

export const PRODUCT_TO_CART_REQUESTED = "PRODUCT_TO_CART_REQUESTED";
export const addProductToCartRequested = () => ({
  type: PRODUCT_TO_CART_REQUESTED,
});

export const  PRODUCT_TO_CART_SUCCESS = "PRODUCT_TO_CART_SUCCESS";
export const addProductToCartSuccess = (product) => ({
  type: PRODUCT_TO_CART_SUCCESS,
  payload: product,
});

export const PRODUCT_TO_CART_ERROR = "PRODUCT_TO_CART_ERROR";
export const addProductToCartError = () => ({
  type: PRODUCT_TO_CART_ERROR,
});

