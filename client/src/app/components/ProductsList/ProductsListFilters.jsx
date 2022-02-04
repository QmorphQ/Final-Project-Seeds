import PropTypes from "prop-types";
import RenderComponent from "../../hoc/RenderComponent.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection.jsx";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";

const ProductsListFilters = ({ loading, productList }) => {
  
  const data = productList.map((product) => {
    const updatedData = { ...product, isFiltersPage: true };
    return updatedData;
  });

  return (
    <RenderComponent
      loading={loading}
      data={data}
      renderSuccess={ProductsListSection}
      loadingFallback={<p>Loading...</p>}
      renderError={
        <ErrorHandler errorMessage="There is some problem with products downloading" />
      }
    />
  );
};

ProductsListFilters.propTypes = {
  productList: PropTypes.array,
  loading: PropTypes.string,
};

export default ProductsListFilters;
