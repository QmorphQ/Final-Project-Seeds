import axios from "axios";
import { API } from "../../app/constants";
import {
  addCustomerRequested,
  addCustomerSuccess,
  addCustomerError,
  loginCustomerRequested,
  loginCustomerSuccess,
  loginCustomerError,
  getUserDetailsRequested, 
  getUserDetailsSuccess, 
  getUserDetailsError
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



const getUserDetails = () => (dispatch) => {

  dispatch(getUserDetailsRequested()); 
  axios
    .get(`${API}customers/customer`, {
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`, 
      },
    })
    .then((userDetails) => {
        dispatch(getUserDetailsSuccess(userDetails.data.isAdmin));
    })
    .catch(() => {
      dispatch(getUserDetailsError());
    });
};



const loginCustomer = (userData) => (dispatch) => {
  dispatch(loginCustomerRequested());
  axios
    .post(`${API}customers/login`, userData)
    .then((loginResult) => {
      localStorage.setItem("jwt", loginResult.data.token);
      dispatch(loginCustomerSuccess(loginResult)); 

      dispatch(getUserDetails()); 
      
    })
    .catch(() => {
      dispatch(loginCustomerError());
    });
}; 




export { addCustomer, loginCustomer, getUserDetails };
