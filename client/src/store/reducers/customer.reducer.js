/*eslint-disable*/
import {
  ADD_CUSTOMER_REQUESTED,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
  LOGIN_CUSTOMER_REQUESTED,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_ERROR,
} from "../actions/customer.actions";

const initialState = {
  addRequestState: "idle",
  newCustomer: null,
  loginRequestState: "idle",
  isLoggedIn: false,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_REQUESTED:
      return {
        ...state,
        addRequestState: "loading",
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        addRequestState: "success",
        newCustomer: action.payload.data,
      };

    case ADD_CUSTOMER_ERROR:
      return {
        ...state,
        addRequestState: "error",
      };

    case LOGIN_CUSTOMER_REQUESTED:
      return {
        ...state,
        loginRequestState: "loading",
      };

    case LOGIN_CUSTOMER_SUCCESS:
      return {
        ...state,
        loginRequestState: "success",
        isLoggedIn: action.payload.data.success,
      };

    case LOGIN_CUSTOMER_ERROR:
      return {
        ...state,
        loginRequestState: "error",
      };

    default:
      return state;
  }
};

export default customerReducer;

