// import axios from "axios";
// import {
//     addCustomerRequested,
//     addCustomerSuccess,
//     addCustomerError,
//     loginCustomerRequested,
//     loginCustomerSuccess,
//     loginCustomerError,
// } from "../actions/customer.actions";

// const fetchProducts = () => (dispatch) => {
//     dispatch(downloadAllProductsRequested());
//     axios
//       .get("http://localhost:5000/api/products")
//       .then((products) => {
//         dispatch(downloadAllProductsSuccess(products));
//       })
//       .catch(() => {
//         dispatch(downloadAllProductsError());
//       });
//   };

//   export default fetchProducts;