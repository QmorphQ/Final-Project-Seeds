import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import catalog from "./reducers/catalog.reducer";
import products from "./reducers/products.reducer";
import slides from "./reducers/slides.reducer";
import customer from "./reducers/customer.reducer";
import cart from "./reducers/cart.reducer";
import wishlist from "./reducers/wishlist.reducer";
import filters from "./reducers/filters.reducer";

const reduxDevToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
  catalog,
  products,
  slides,
  customer,
  cart,
  wishlist,
  filters
  
});

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
