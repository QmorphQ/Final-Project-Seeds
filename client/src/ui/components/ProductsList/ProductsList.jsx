import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Fetch from "../../hoc/Fetch.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductsListSection = ({ data }, totalLength = 6) => {

  const productsFlteredArr = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter((product, index) => index < totalLength);
    
  return (
    <Container fixed={true} sx={{marginTop:"30px", marginBottom:"89px"}}>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {productsFlteredArr.map((product, i) => (
          <ProductCard key={product.id || i} product={product} />/* MVP-key of Product Card */
        ))}
      </Grid>
    </Container>
  );
};

const ProductsList = ({ products, loading }) => (
  <Fetch
    loading={loading}
    data={products}
    renderSuccess={ProductsListSection}
    loadingFallback={<p>Loading...</p>}
    renderError={<p>Error</p>}
  />
)

ProductsListSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.string,
};


export default ProductsList;
