import axios from "axios";
import { API } from "../../app/constants";
import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
  filterByCategory,
  uploadProductRatingRequested,
  uploadProductRatingError,
  uploadProductRatingSuccess,
} from "../actions/products.actions";

const fetchProducts =
  (uri = `${API}products`) =>
  (dispatch) => {
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

const rateProduct = (id, upddatedProduct) => (dispatch) => {
  dispatch(uploadProductRatingRequested());
  axios
    .put(`${API}products/${id}`, upddatedProduct, {
      headers: { Authorization: localStorage.getItem("jwt") },
    })
    .then((product) => {
      dispatch(uploadProductRatingSuccess(product));
      return product;
    })
    .catch((err) => {
      console.log(err);
      dispatch(uploadProductRatingError());
    });
};

const filterProductsByCategory = (category) => (dispatch) => {
  dispatch(filterByCategory(category));
};

export { filterProductsByCategory, fetchProducts, rateProduct };
