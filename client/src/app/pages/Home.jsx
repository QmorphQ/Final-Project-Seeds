import PropTypes from "prop-types";
import { Box } from "@mui/material";
import TabsSection from "../components/TabsSection/TabsSection.jsx";
import { downloadRequestStates } from "../constants";
import HeaderMobile from "../../ui/components/Header/HeaderMobile.jsx";
import HeaderDesktop from "../../ui/components/Header/HeaderDesktop.jsx";
import FooterDesktop from "../../ui/components/ Footer/FooterDesktop.jsx";
import FooterMobile from "../../ui/components/ Footer/FooterMobile.jsx";
import MainPageCarousel from "../../ui/components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsListSection from "../../ui/components/ProductsList/ProductsList.jsx";




const Home = ({loading, productList}) => (
    <>
    <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeaderMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeaderDesktop />
     </Box>
    <MainPageCarousel />
     <TabsSection loading={loading} productList={productList} />
     <ProductsListSection products={productList} loading={loading} />
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