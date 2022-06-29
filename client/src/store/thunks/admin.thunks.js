
import axios from 'axios';
import { API } from '../../app/constants';
import { adminAddProductRequested, 
         adminAddProductError, 
         adminAddProductSuccess, 
         adminDeleteProductRequested, 
         adminDeleteProductError, 
         adminDeleteProductSuccess, 
         adminUpdateProductRequested, 
         adminUpdateProductError, 
         adminUpdateProductSuccess,
         adminAddToSliderRequested, 
         adminAddToSliderSuccess, 
         adminAddToSliderError, 
         adminDelFromSliderRequested, 
         adminDelFromSliderSuccess, 
         adminDelFromSliderError,
         adminUpdateSliderRequested, 
         adminUpdateSliderSuccess, 
         adminUpdateSliderError, } from '../actions/admin.actions';




const adminAddProduct = (product) => (dispatch) => { 

    dispatch(adminAddProductRequested()); 

    const token = localStorage.getItem('jwt');
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



const adminDeleteProduct = (productID) => (dispatch) => { 

    dispatch(adminDeleteProductRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .delete(`${API}products/${productID}`, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminDeleteProductSuccess()); 
        })
        .catch(() => {
            dispatch(adminDeleteProductError());
        });
    }
}; 



const adminUpdateProduct = (id, product) => (dispatch) => { 

    dispatch(adminUpdateProductRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .put(`${API}products/${id}`, product, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminUpdateProductSuccess()); 
        })
        .catch(() => {
            dispatch(adminUpdateProductError());
        });
    }
}; 



const adminAddProductToSlider = (slide) => (dispatch) => { 

    dispatch(adminAddToSliderRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .post(`${API}slides`, slide, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminAddToSliderSuccess()); 
        })
        .catch(() => {
            dispatch(adminAddToSliderError());
        });
    }
};  



const adminDelProductFromSlider = (slideID) => (dispatch) => { 

    dispatch(adminDelFromSliderRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .delete(`${API}slides/${slideID}`, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminDelFromSliderSuccess()); 
        })
        .catch(() => {
            dispatch(adminDelFromSliderError());
        });
    }
}; 



const adminUpdateSlider = (slide) => (dispatch) => { 

    dispatch(adminUpdateSliderRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .put(`${API}slides/${slide.customId}`, slide, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminUpdateSliderSuccess()); 
        })
        .catch(() => {
            dispatch(adminUpdateSliderError());
        });
    }
}; 


export { adminAddProduct, 
         adminDeleteProduct, 
         adminUpdateProduct, 
         adminAddProductToSlider, 
         adminDelProductFromSlider, 
         adminUpdateSlider, };