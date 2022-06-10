import axios from "axios";
import { API } from "../../app/constants";
import {
  addCustomerRequested,
  addCustomerSuccess,
  addCustomerError,
  loginCustomerRequested,
  loginCustomerSuccess,
  loginCustomerError,
  customerUpdateError,
  getCustomerRequest,
  customerUpdateRequest,
  getCustomerSuccess,
  customerUpdateSuccess,
} from "../actions/customer.actions";

const addCustomer = (customer) => (dispatch) => {
  dispatch(addCustomerRequested());
  axios
    .post(`${API}customers`, customer)
    .then((savedCustomer) => {
      dispatch(addCustomerSuccess(savedCustomer));
    })
    .catch(() => {
      dispatch(addCustomerError());
    });
};

const loginCustomer = (userData) => (dispatch) => {
  dispatch(loginCustomerRequested());
  axios
    .post(`${API}customers/login`, userData)
    .then((loginResult) => {
      localStorage.setItem("jwt", loginResult.data.token);
      dispatch(loginCustomerSuccess(loginResult));
    })
    .catch(() => {
      dispatch(loginCustomerError());
    });
};

const getCustomer = () => (dispatch) => {
  const token = localStorage.getItem("jwt");
  dispatch(getCustomerRequest());
  axios.get(`${API}customers/customer`, {
    headers: {
      Authorization: `${token}`,
    },
  })
	.then(currentCustomer => {console.log(currentCustomer.data) 
    dispatch(getCustomerSuccess(currentCustomer.data))} )
  .catch(() => {
    dispatch(customerUpdateError());
  });
}

const updateCustomer = (modifyCustomer) => (dispatch)=> {
  const token = localStorage.getItem("jwt");
  console.log(modifyCustomer);
  dispatch(customerUpdateRequest())
  axios.put(`${API}customers`, modifyCustomer, {
    headers: {
      Authorization: `${token}`,
    },
  })
	.then(updatedCustomer => dispatch(customerUpdateSuccess(updatedCustomer)))
  .catch(() => {
    dispatch(customerUpdateError());
  });
}


export { addCustomer, loginCustomer, updateCustomer, getCustomer };
