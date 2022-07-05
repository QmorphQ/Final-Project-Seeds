import axios from "axios";
import { API } from "../../app/constants";
import {
  downloadAllSlidesRequested,
  downloadAllSlidesSuccess,
  downloadAllSlidesError,
} from "../actions/slides.actions";

const fetchSlides =
  (uri = `${API}slides`) =>
  (dispatch) => {
    dispatch(downloadAllSlidesRequested());
    axios
      .get(uri)
      .then((products) => {
        const slidesItemId = products.data.map(item => item.productId);
        const slides = {
          products,
          slidesItemId
        }
         dispatch(downloadAllSlidesSuccess(slides));
        return slides;
      })
      .catch(() => {
        dispatch(downloadAllSlidesError());
      });
  };

export default fetchSlides;
