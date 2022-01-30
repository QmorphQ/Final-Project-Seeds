import PropTypes from "prop-types";
import Fetch from "../../hoc/Fetch.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection.jsx";

const ProductsList = ({ products, loading }) => 
    <Fetch
      loading={loading}
      data={products}
      renderSuccess={ProductsListSection}
      loadingFallback={<p>Loading...</p>}
      renderError={<p>Error</p>}
    />
  


ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.string,
};


export default ProductsList;
