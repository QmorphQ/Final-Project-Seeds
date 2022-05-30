import PropTypes from "prop-types";
import { Box } from "@mui/material";
import OurProducts from "../components/OurProducts/OurProducts.jsx";
import { API, downloadRequestStates, PRODUCTS_NUMBER_ON_MAIN_PAGE } from "../constants";
import MainPageCarousel from "../components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsList from "../components/ProductsList/ProductsList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { downloadCategoriesRequestStateSelector, downloadProductsRequestStateSelector, downloadSlidesRequestStateSelector } from "../../store/selectors/selectors.js";
import Preloader from "../../ui/components/Preloader/Preloader.jsx";
import fetchSlides from "../../store/thunks/slides.thunks.js";
import { useEffect } from "react";
import { fetchProducts } from "../../store/thunks/products.thunks.js";

const Home = () => {
  const carouselStatus = useSelector(downloadSlidesRequestStateSelector);
  const categoriesStatus = useSelector(downloadCategoriesRequestStateSelector);
  const productsStatus = useSelector(downloadProductsRequestStateSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
    dispatch(fetchProducts(`${API}products/filter?perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}`));
  }, []);

  if(carouselStatus === "loading" || categoriesStatus === "loading" || productsStatus === "loading") {
    return (
      <Preloader />
    )
  }

  return (
    <>
      <Box component="main">
        <MainPageCarousel />
        <OurProducts />
        <ProductsList />
      </Box>
    </>
  );
};

// Home.propTypes = {
//   loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
//   productList: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       currentPrice: PropTypes.number,
//       categories: PropTypes.string,
//       description: PropTypes.string,
//       imageUrls: PropTypes.any,
//       quantity: PropTypes.number,
//       popular: PropTypes.bool,
//     })
//   ),
// };

export default Home;
