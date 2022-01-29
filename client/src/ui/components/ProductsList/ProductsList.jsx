import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductsList = ({ products, loading, totalLength = 6 }) => {
  if (loading === "loading") return <div>Loading...</div>; // Here must be a loarer
  if (loading === "error") return <div>Error :(</div>;
  const productsFlteredArr = products
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter((product, index) => product.popular && index < totalLength);
  console.log(products);
  return (
    <Container>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {productsFlteredArr.map((product, i) => (
          <ProductCard key={product.id || i} product={product} />/* MVP-key of Product Card */
        ))}
      </Grid>
    </Container>
  );
};

ProductsList.defaultProps = {
  totalLength: 6
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  totalLength: PropTypes.number,
  loading: PropTypes.string,
};

export default ProductsList;
