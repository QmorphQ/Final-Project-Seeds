import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Preloader from "../../ui/components/Preloader/Prelodaer.jsx";
import OurProducts from "../components/OurProducts/OurProducts.jsx";
import { downloadRequestStates } from "../constants";
import MainPageCarousel from "../components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsList from "../components/ProductsList/ProductsList.jsx";
import { downloadProductsRequestStateSelector } from "../../store/selectors/selectors";


const Home = ({ loading, productList }) => {
  const downloadRequestState = useSelector(
    downloadProductsRequestStateSelector
  );

  if (downloadRequestState === "loading") {
    return <Preloader />;
  }

  return (
    <>
      <Box component="main">
        <MainPageCarousel />
        <OurProducts loading={loading} productList={productList} />
        <ProductsList loading={loading} productList={productList} />
      </Box>
    </>
  );
};

Home.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      currentPrice: PropTypes.number,
      categories: PropTypes.string,
      description: PropTypes.string,
      imageUrls: PropTypes.arrayOf(PropTypes.string),
      quantity: PropTypes.number,
      popular: PropTypes.bool,
    })
  ),
};

export default Home;
