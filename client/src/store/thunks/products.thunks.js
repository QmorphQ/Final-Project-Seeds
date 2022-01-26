import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
} from "../actions/products.actions";
import axios from "axios";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(downloadAllProductsRequested());
    axios
      .get("http://localhost:5000/api/products")
      .then((products) => {
        dispatch(downloadAllProductsSuccess(products));
      })
      .catch(() => {
        dispatch(downloadAllProductsError());
      });
  };
};
