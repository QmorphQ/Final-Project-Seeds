import PropTypes from "prop-types";
import RenderComponent  from "../../hoc/RenderComponent.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection.jsx";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
import Spinner from "../../../ui/components/Spinner/Spinner.jsx";

const ProductsList = ({loading, productList, totalLength}) => (
    <RenderComponent
      loading={loading}
      data={{products: productList, totalLength: totalLength}}
      renderSuccess={ProductsListSection}
      loadingFallback={Spinner}
      renderError={<ErrorHandler errorMessage="There is some problem with products downloading"/>}
    />
  )

ProductsList.propTypes = {
  productList: PropTypes.array,
  loading: PropTypes.string,
};


export default ProductsList;
