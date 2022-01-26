/*eslint-disable*/
import {
  DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  DOWNLOAD_ALL_PRODUCTS_REQUESTED,
  DOWNLOAD_ALL_PRODUCTS_ERROR,
} from "../actions/products.actions";

const initialState = {
  downloadRequestState: "idle",
  productList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_PRODUCTS_REQUESTED:
      return {
        ...state,
        downloadRequestState: "loading",
      };

    case DOWNLOAD_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        downloadRequestState: "success",
        productList: action.payload.data,
      };

    case DOWNLOAD_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        downloadRequestState: "error",
      };

    default:
      return state;
  }
};

export default productsReducer;
