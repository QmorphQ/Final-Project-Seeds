import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../../../store/thunks/customer.thunks.js";
import Fetch from "../../hoc/Fetch.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection";

const ProductsList = ({ products, loading }) => {
  return (
    <Fetch
      loading={loading}
      data={products}
      renderSuccess={ProductsListSection}
      loadingFallback={<p>Loading...</p>}
      renderError={<p>Error</p>}
    />
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.string,
};


export default ProductsList;
