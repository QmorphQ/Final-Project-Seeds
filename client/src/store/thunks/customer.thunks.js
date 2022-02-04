import axios from "axios";
import { API } from "../../app/constants";
import {
  addCustomerRequested,
  addCustomerSuccess,
  addCustomerError,
  loginCustomerRequested,
  loginCustomerSuccess,
  loginCustomerError,
} from "../actions/customer.actions";

const addCustomer = (customer) => (dispatch) => {
  console.log(customer);
  dispatch(addCustomerRequested());
  axios
    .post(`${API}customers`, customer)
    .then((savedCustomer) => {
      console.log(customer);
      dispatch(addCustomerSuccess(savedCustomer));
    })
    .catch(() => {
      dispatch(addCustomerError());
    });
};

const loginCustomer = (userData) => (dispatch) => {
  console.log(userData);
  dispatch(loginCustomerRequested());
  axios
    .post(`${API}customers/login`, userData)
    .then((loginResult) => {
      console.log(userData);
      localStorage.setItem("jwt", loginResult.data.token);
      dispatch(loginCustomerSuccess(loginResult));
    })
    .catch(() => {
      dispatch(loginCustomerError());
    });
};

export { addCustomer, loginCustomer };
