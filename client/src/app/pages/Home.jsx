import PropTypes from "prop-types";
import { Box } from "@mui/material";
import OurProducts from "../components/OurProducts/OurProducts.jsx";
import { downloadRequestStates } from "../constants";
import HeaderMobile from "../components/Header/HeaderMobile.jsx";
import HeaderDesktop from "../components/Header/HeaderDesktop.jsx";
import FooterDesktop from "../components/ Footer/FooterDesktop.jsx";
import FooterMobile from "../components/ Footer/FooterMobile.jsx";
import MainPageCarousel from "../components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsList from "../components/ProductsList/ProductsList.jsx";
import Product from "./Product.jsx";


const Home = ({loading, productList}) => (
  <>
    <Product loading={loading} productList={productList} />
    <Box display={{ xs: "block", sm: "block", md: "none" }}>
      <HeaderMobile />
    </Box>
    <Box display={{ xs: "none", sm: "none", md: "block" }}>
      <HeaderDesktop />
    </Box>

    <Box component="main">
    <MainPageCarousel />
    <OurProducts loading={loading} productList={productList} />
    <ProductsList loading={loading} productList={productList} />
    </Box>

    <Box display={{ xs: "block", sm: "block", md: "none" }} >
    <FooterMobile />
    </Box>
    <Box display={{ xs: "none", sm: "none", md: "block" }}>
    <FooterDesktop  />
    </Box>
  </>
  )

Home.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
  productList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    categories: PropTypes.string,
    description: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    quantity: PropTypes.number,
    popular: PropTypes.bool,
  }))

}

export default Home;