import axios from "axios";
import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
} from "../actions/products.actions";

const fetchProducts = (uri = "http://localhost:5000/api/products") => (dispatch) => {
    dispatch(downloadAllProductsRequested());
    axios
      .get(uri)
      .then((products) => {
        dispatch(downloadAllProductsSuccess(products));
        return products;
      })
      .catch(() => {
        dispatch(downloadAllProductsError());
      });
  };

export default fetchProducts;
