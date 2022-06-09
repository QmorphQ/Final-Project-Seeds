
import axios from "axios";
import { API } from "../../app/constants";
import { adminAddProductRequested, 
         adminAddProductError, 
         adminAddProductSuccess } from "../actions/admin.actions";



const adminAddProduct = (product) => (dispatch) => { 

    dispatch(adminAddProductRequested()); 

    const token = localStorage.getItem("jwt");
    if (token) {
      axios
        .post(`${API}products`, product, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminAddProductSuccess()); 
        })
        .catch(() => {
            dispatch(adminAddProductError());
        });
    }
}; 

export { adminAddProduct };