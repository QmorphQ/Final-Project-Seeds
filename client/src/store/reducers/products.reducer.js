import {
  DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  DOWNLOAD_ALL_PRODUCTS_REQUESTED,
  DOWNLOAD_ALL_PRODUCTS_ERROR,
  FILTER_BY_CATEGORY
} from "../actions/products.actions";

const initialState = {
  downloadRequestState: "idle",
  productList: [],
  selectedCategories: "all",
};

const productsReducer = (action, state = initialState) => {
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

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategories: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
