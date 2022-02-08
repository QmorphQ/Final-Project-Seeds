import PropTypes from "prop-types";
import { Box } from "@mui/material";
import OurProducts from "../components/OurProducts/OurProducts.jsx";
import { downloadRequestStates } from "../constants";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/ Footer/Footer.jsx";
import MainPageCarousel from "../components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsList from "../components/ProductsList/ProductsList.jsx";

const Home = ({ loading, productList, allCategories, categories }) => (
  <>
    <Box component="header">
      <Header
        loading={loading}
        allCategories={allCategories}
        categories={categories}
      />
    </Box>
    <Box component="main">
      <MainPageCarousel />
      <OurProducts loading={loading} productList={productList} />
      <ProductsList loading={loading} productList={productList} />
    </Box>
    <Box component="footer">
      <Footer />
    </Box>
  </>
);

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
  allCategories: PropTypes.array,
  categories: PropTypes.array,
};

export default Home;
