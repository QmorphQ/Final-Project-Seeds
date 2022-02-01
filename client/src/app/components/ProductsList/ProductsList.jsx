import PropTypes from "prop-types";
import Fetch  from "../../hoc/Fetch.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";

const ProductsList = ({loading, productList}) => {

  return (
    <Fetch
      loading={loading}
      data={productList}
      renderSuccess={ProductsListSection}
      loadingFallback={<p>Loading...</p>}
      renderError={<ErrorHandler errorMessage="There is some problem with products downloading"/>}
    />
  );
}

ProductsList.propTypes = {
  productList: PropTypes.array,
  loading: PropTypes.string,
};


export default ProductsList;
