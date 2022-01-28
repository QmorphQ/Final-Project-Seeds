import axios from "axios";
import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
} from "../actions/products.actions";

const fetchProducts = () => (dispatch) => {
  dispatch(downloadAllProductsRequested());
  axios
    .get("Products.json")
    .then((products) => {
      dispatch(downloadAllProductsSuccess(products));
    })
    .catch(() => {
      dispatch(downloadAllProductsError());
    });
};

export default fetchProducts;
