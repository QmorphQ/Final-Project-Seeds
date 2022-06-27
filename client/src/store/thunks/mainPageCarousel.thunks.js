import axios from "axios";
import { API } from "../../app/constants";
import {
    receivedItemAddToCart,
    requestedItemAddToCart,
    receivedFailureItemAddToCart,
  } from "../actions/mainPageCarousel.actions";

export const fetchItemAddToCart = (itemNo) => (dispatch) => {
    dispatch(requestedItemAddToCart());
    axios
      .get(`${API}products/${itemNo}`)
      .then((res) => {
          console.log(res.data);
          dispatch(receivedItemAddToCart(res.data));
        throw new Error("received error!");
      })
      .catch((err) => {
        dispatch(receivedFailureItemAddToCart(err.message));
      });
  };
  


