import {
  ADD_CUSTOMER_REQUESTED,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
  LOGIN_CUSTOMER_REQUESTED,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_ERROR, 
  GET_USERDETAILS_REQUESTED, 
  GET_USERDETAILS_SUCCESS, 
  GET_USERDETAILS_ERROR
} from "../actions/customer.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  addRequestState: downloadRequestStates.IDLE,
  newCustomer: null,
  loginRequestState: downloadRequestStates.IDLE,
  isLoggedIn: Boolean(localStorage.getItem('jwt')), 
  getUserDetailsRequestState: downloadRequestStates.IDLE,
  isAdmin: false, 
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_REQUESTED:
      return {
        ...state,
        addRequestState: downloadRequestStates.LOADING,
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        addRequestState: downloadRequestStates.SUCCESS,
        newCustomer: action.payload.data,
      };

    case ADD_CUSTOMER_ERROR:
      return {
        ...state,
        addRequestState: downloadRequestStates.ERROR,
      };

    case LOGIN_CUSTOMER_REQUESTED:
      return {
        ...state,
        loginRequestState: downloadRequestStates.LOADING,
      };

    case LOGIN_CUSTOMER_SUCCESS:
      return {
        ...state,
        loginRequestState: downloadRequestStates.SUCCESS,
        isLoggedIn: action.payload.data.success,
      };

    case LOGIN_CUSTOMER_ERROR:
      return {
        ...state,
        loginRequestState: downloadRequestStates.ERROR,
      };

    case GET_USERDETAILS_REQUESTED:
      return {
        ...state,
        getUserDetailsRequestState: downloadRequestStates.LOADING,
      };

    case GET_USERDETAILS_SUCCESS:
      return {
        ...state,
        getUserDetailsRequestState: downloadRequestStates.SUCCESS,
        isAdmin: action.payload,
      };

    case GET_USERDETAILS_ERROR:
      return {
        ...state,
        getUserDetailsRequestState: downloadRequestStates.ERROR,
      };

    default:
      return state;
  }
};

export default customerReducer;

