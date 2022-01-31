import PropTypes from "prop-types";
import TabsSection from "../components/TabsSection/TabsSection.jsx";
import { downloadRequestStates } from "../constants";
import Header from "../../ui/components/Header/Header.jsx";
import Footer from "../../ui/components/ Footer/Footer.jsx";
import MainPageCarousel from "../../ui/components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsListSection from "../../ui/components/ProductsList/ProductsList.jsx";




const Home = ({loading, productList}) => (
    <>
    <Header />
    <MainPageCarousel />
     <TabsSection loading={loading} productList={productList} />
     <ProductsListSection products={productList} loading={loading} />
     <Footer />
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