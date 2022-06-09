
export const ADMIN_ADD_PRODUCT_IDLE = "ADMIN_ADD_PRODUCT_IDLE";
export const adminAddProductIdle = () => ({
  type: ADMIN_ADD_PRODUCT_IDLE,
});

export const ADMIN_ADD_PRODUCT_REQUESTED = "ADMIN_ADD_PRODUCT_REQUESTED";
export const adminAddProductRequested = () => ({
  type: ADMIN_ADD_PRODUCT_REQUESTED,
});

export const ADMIN_ADD_PRODUCT_SUCCESS = "ADMIN_ADD_PRODUCT_SUCCESS";
export const adminAddProductSuccess = () => ({ 
  type: ADMIN_ADD_PRODUCT_SUCCESS, 
});

export const ADMIN_ADD_PRODUCT_ERROR = "ADMIN_ADD_PRODUCT_ERROR";
export const adminAddProductError = () => ({
  type: ADMIN_ADD_PRODUCT_ERROR,
});