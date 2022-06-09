
import { ADMIN_ADD_PRODUCT_IDLE, 
         ADMIN_ADD_PRODUCT_ERROR, 
         ADMIN_ADD_PRODUCT_REQUESTED, 
         ADMIN_ADD_PRODUCT_SUCCESS } from "../actions/admin.actions"; 

import { downloadRequestStates } from "../../app/constants"; 



  
const initialState = {
    adminAddProductRequestState: downloadRequestStates.IDLE,
};
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_ADD_PRODUCT_REQUESTED:
        return {
            ...state,
            adminAddProductRequestState: downloadRequestStates.LOADING,
        };
  
      case ADMIN_ADD_PRODUCT_SUCCESS:
        return {
            ...state,
            adminAddProductRequestState: downloadRequestStates.SUCCESS,
        };
  
      case ADMIN_ADD_PRODUCT_ERROR:
        return {
            ...state,
            adminAddProductRequestState: downloadRequestStates.ERROR,
        };

      case ADMIN_ADD_PRODUCT_IDLE:
        return initialState;
  
  
      default:
        return state;
    }
};
  
export default adminReducer;