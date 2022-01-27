export const DOWNLOAD_ALL_PRODUCTS_REQUESTED = "DOWNLOAD_ALL_PRODUCTS_REQUESTED";
export const downloadAllProductsRequested = () => ({
  type: DOWNLOAD_ALL_PRODUCTS_REQUESTED,
});

export const  DOWNLOAD_ALL_PRODUCTS_SUCCESS = "DOWNLOAD_ALL_PRODUCTS_SUCCESS";
export const downloadAllProductsSuccess = (products) => ({
  type: DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  payload: products,
});

export const DOWNLOAD_ALL_PRODUCTS_ERROR = "DOWNLOAD_ALL_PRODUCTS_ERROR";
export const downloadAllProductsError = () => ({
  type: DOWNLOAD_ALL_PRODUCTS_ERROR,
});
