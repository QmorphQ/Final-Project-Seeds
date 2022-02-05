import axios from "axios";
import { API } from "../../app/constants";
import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
  filterByCategory,
  addProductRequested,
  addProductSuccess,
  addProductError,
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

const addProduct = (product) => (dispatch) => {
  dispatch(addProductRequested());
  const token = localStorage.getItem("jwt");
  console.log(token);
  axios
    .post(`${API}products`, product, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((addedProduct) => {
      dispatch(addProductSuccess(addedProduct));
      return addedProduct;
    })
    .catch(() => {
      dispatch(addProductError());
    });
};

const rateProduct = (id, updatedProduct) => (dispatch) => {
  dispatch(uploadProductRatingRequested());
  axios
    .put(`${API}/products/${id}`, updatedProduct, {
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

export { filterProductsByCategory, fetchProducts, addProduct, rateProduct };
