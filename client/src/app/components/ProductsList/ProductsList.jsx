import PropTypes from "prop-types";
import RenderComponent  from "../../hoc/RenderComponent.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";

const ProductsList = ({loading, productList}) => {

  return (
    <RenderComponent
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
