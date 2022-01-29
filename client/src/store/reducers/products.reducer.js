/*eslint-disable*/
import {
  DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  DOWNLOAD_ALL_PRODUCTS_REQUESTED,
  DOWNLOAD_ALL_PRODUCTS_ERROR,
  FILTER_BY_CATEGORY
} from "../actions/products.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadRequestState: downloadRequestStates.IDLE,
  productList: [],
  selectedCategories: "all",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_PRODUCTS_REQUESTED:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.SUCCESS,
        productList: action.payload.data,
      };

    case DOWNLOAD_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.ERROR,
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
