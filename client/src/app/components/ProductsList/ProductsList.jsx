import PropTypes from "prop-types";
import Fetch  from "../../hoc/Fetch.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection";

const ProductsList = ({loading, productList}) => {

  return (
    <Fetch
      loading={loading}
      data={productList}
      renderSuccess={ProductsListSection}
      loadingFallback={<p>Loading...</p>}
      renderError={<p>Error</p>}
    />
  );
}

ProductsList.propTypes = {
  productList: PropTypes.array,
  loading: PropTypes.string,
};


export default ProductsList;
