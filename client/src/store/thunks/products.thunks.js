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
  downloadFilteredProductsRequested,
  downloadFilteredProductsSuccess,
  downloadFilteredProductsError,
  uploadProductRatingRequested,
  uploadProductRatingError,
  uploadProductRatingSuccess,
} from "../actions/products.actions";

const fetchProducts =
  (uri = `${API}`) =>
  (dispatch) => {
    dispatch(downloadAllProductsRequested());
    dispatch(downloadFilteredProductsRequested());
    axios
      .get(uri)
      .then((products) => {
        console.log(products);
        dispatch(downloadAllProductsSuccess(products.data.products));
        dispatch(downloadFilteredProductsSuccess(products.data.products));
        return products;
      })
      .catch(() => {
        dispatch(downloadAllProductsError());
        dispatch(downloadFilteredProductsError());
      });
  };

const fetchFilteredProducts = (queryParams) => (dispatch) => {
  dispatch(downloadFilteredProductsRequested());
  axios
    .get(`${API}products/filter?${queryParams}`)
    .then((filteredProducts) => {
      dispatch(downloadFilteredProductsSuccess(filteredProducts.data.products));
      console.log(filteredProducts);
      return filteredProducts;
    })
    .catch(() => {
      dispatch(downloadFilteredProductsError());
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

export {
  filterProductsByCategory,
  fetchProducts,
  fetchFilteredProducts,
  addProduct,
  rateProduct,
};
