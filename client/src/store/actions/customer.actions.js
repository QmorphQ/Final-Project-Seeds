export const ADD_CUSTOMER_REQUESTED = "ADD_CUSTOMER_REQUESTED";
export const addCustomerRequested = () => ({
  type: ADD_CUSTOMER_REQUESTED,
});

export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const addCustomerSuccess = (customer) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
});

export const ADD_CUSTOMER_ERROR = "ADD_CUSTOMER_ERROR";
export const addCustomerError = () => ({
  type: ADD_CUSTOMER_ERROR,
});

export const LOGIN_CUSTOMER_REQUESTED = "LOGIN_CUSTOMER_REQUESTED";
export const loginCustomerRequested = () => ({
  type: LOGIN_CUSTOMER_REQUESTED,
});

export const LOGIN_CUSTOMER_SUCCESS = "LOGIN_CUSTOMER_SUCCESS";
export const loginCustomerSuccess = (loginResult) => ({
  type: LOGIN_CUSTOMER_SUCCESS,
  payload: loginResult,
});

export const LOGIN_CUSTOMER_ERROR = "LOGIN_CUSTOMER_ERROR";
export const loginCustomerError = () => ({
  type: LOGIN_CUSTOMER_ERROR,
});

export const GET_CUSTOMER_REQUEST = "GET_CUSTOMER_REQUEST";
export const getCustomerRequest = () => ({
  type: GET_CUSTOMER_REQUEST,
})

export const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";
export const getCustomerSuccess = () => ({
  type: GET_CUSTOMER_SUCCESS,
})

export const GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR";
export const getCustomerError = () => ({
  type: GET_CUSTOMER_ERROR,
})

export const UPDATE_CUSTOMER_REQUEST = "UPDATE_CUSTOMER_REQUEST";
export const customerUpdateRequest = () => ({
  type: UPDATE_CUSTOMER_REQUEST,
})

export const UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS";
export const customerUpdateSuccess = () => ({
  type: UPDATE_CUSTOMER_SUCCESS,
})

export const UPDATE_CUSTOMER_ERROR = "UPDATE_CUSTOMER_ERROR";
export const customerUpdateError = () => ({
  type: UPDATE_CUSTOMER_ERROR,
})

