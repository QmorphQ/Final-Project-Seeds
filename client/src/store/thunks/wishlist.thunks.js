import axios from "axios";
import { API } from "../../app/constants";
import {
  downloadWishlistRequested,
  downloadWishlistSuccess,
  downloadWishlistError,
  addWishlistRequested,
  addWishlistSuccess,
  addWishlistError,
  addProductToWishlistRequested,
  addProductToWishlistSuccess,
  addProductToWishlistError,
} from "../actions/wishlist.actions";

const fetchWishlist =
  (uri = `${API}wishlist`) =>
  (dispatch) => {
    const token = localStorage.getItem("jwt");
    dispatch(downloadWishlistRequested());
    if (token) {
      axios
        .get(uri, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((wishlist) => {
          dispatch(downloadWishlistSuccess(wishlist.data));
          return wishlist;
        })
        .catch(() => {
          dispatch(downloadWishlistError());
        });
    } else {
      console.log("GET AUTHORIZED!");
    }
  };

const addWishlist = (wishlist) => (dispatch) => {
  dispatch(addWishlistRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .post(`${API}wishlist`, wishlist, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((addedWishlist) => {
        dispatch(addWishlistSuccess(addedWishlist.data));
        return addedWishlist;
      })
      .catch(() => {
        dispatch(addWishlistError());
      });
  } else {
    console.log("GET AUTHORIZED!");
  }
};

const addProductToWishlist = (productId) => (dispatch) => {
  dispatch(addProductToWishlistRequested());
  const token = localStorage.getItem("jdffd");

  if (token) {
    axios
      .put(`${API}wishlist/${productId}`, false, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedWishlist) => {
        dispatch(addProductToWishlistSuccess(updatedWishlist.data));
        return updatedWishlist;
      })
      .catch(() => {
        dispatch(addProductToWishlistError());
      });
  } else {
    console.log("GET AUTHORIZED!");
  }
};

export { fetchWishlist, addWishlist, addProductToWishlist };
