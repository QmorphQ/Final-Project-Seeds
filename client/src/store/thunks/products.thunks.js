import axios from "axios";
import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
  filterByCategory,
} from "../actions/products.actions";

const fetchProducts = () => (dispatch) => {
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

const filterProductsByCategory = (category) => (dispatch) => {
  dispatch(filterByCategory(category));
};

export { fetchProducts, filterProductsByCategory };
