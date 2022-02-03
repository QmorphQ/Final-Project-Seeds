import {
  DOWNLOAD_CART_REQUESTED,
  DOWNLOAD_CART_SUCCESS,
  DOWNLOAD_CART_ERROR,
  ADD_CART_REQUESTED,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  PRODUCT_TO_CART_REQUESTED,
  PRODUCT_TO_CART_SUCCESS,
  PRODUCT_TO_CART_ERROR,
} from "../actions/cart.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadRequestState: downloadRequestStates.IDLE,
  addCartRequestState: downloadRequestStates.IDLE,
  addProductToCartRequestState: downloadRequestStates.IDLE,
  cart: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_CART_REQUESTED:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_CART_SUCCESS:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.SUCCESS,
        cart: action.payload,
      };

    case DOWNLOAD_CART_ERROR:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.ERROR,
      };

    case ADD_CART_REQUESTED:
      return {
        ...state,
        addCartRequestState: downloadRequestStates.LOADING,
      };

    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartRequestState: downloadRequestStates.LOADING,
        cart: action.payload,
      };

    case ADD_CART_ERROR:
      return {
        ...state,
        addCartRequestState: downloadRequestStates.ERROR,
      };

    case PRODUCT_TO_CART_REQUESTED:
      return {
        ...state,
        addProductToCartRequestState: downloadRequestStates.LOADING,
      };

    case PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        addProductToCartRequestState: downloadRequestStates.LOADING,
        cart: action.payload,
      };

    case PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        addProductToCartRequestState: downloadRequestStates.ERROR,
      };

    default:
      return state;
  }
};

export default cartReducer;
