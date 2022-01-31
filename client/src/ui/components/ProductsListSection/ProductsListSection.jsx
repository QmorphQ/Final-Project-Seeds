import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../../../store/thunks/customer.thunks.js";
import ProductCard from "../ProductCard/ProductCard.jsx";

const userData = {
  loginOrEmail: "valeron",
  password: "justdrink",
};

const ProductsListSection = ({ data, loading }, totalLength = 6) => {

  const productsFlteredArr = data
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  .filter((product, index) => index < totalLength);
  
  return (
    <>
      <Container fixed="true" sx={{marginTop:"30px", marginBottom:"89px"}}>
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {productsFlteredArr.map((product, i) => (
            <ProductCard key={product.id || i} product={product} loading={loading} />/* MVP-key of Product Card */
          ))}
        </Grid>
      </Container>
    </>
  );
};

ProductsListSection.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.string
}

export default ProductsListSection;