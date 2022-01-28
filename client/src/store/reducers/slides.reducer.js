/*eslint-disable*/
import {
  DOWNLOAD_ALL_SLIDES_REQUESTED,
  DOWNLOAD_ALL_SLIDES_SUCCESS,
  DOWNLOAD_ALL_SLIDES_ERROR,
} from "../actions/slides.actions";

const initialState = {
  downloadRequestState: "idle",
  slideList: [],
};

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_SLIDES_REQUESTED:
      return {
        ...state,
        downloadRequestState: "loading",
      };

    case DOWNLOAD_ALL_SLIDES_SUCCESS:
      return {
        ...state,
        downloadRequestState: "success",
        slideList: action.payload.data,
      };

    case DOWNLOAD_ALL_SLIDES_ERROR:
      return {
        ...state,
        downloadRequestState: "error",
      };

    default:
      return state;
  }
};

export default slidesReducer;
