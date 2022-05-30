import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { downloadRequestStates, PRODUCTS_NUMBER_ON_MAIN_PAGE } from "../../../app/constants";
import ProductCardLoader from "../ProductCard/ProductCardLoader.jsx";

// const userData = { /* UNUSED DATA!!! *//
//   loginOrEmail: "valeron",
//   password: "justdrink",
// };

const ProductsListSection = ({ data, loading, isLoading }) => {

  let productsFlteredArr = data?.products;

  return (
    <>
      <Container fixed={true} sx={{ marginTop: "30px", marginBottom: "89px" }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {isLoading ? 
          [...Array(PRODUCTS_NUMBER_ON_MAIN_PAGE)].map(() => (
            <ProductCardLoader />
          )) :
          productsFlteredArr?.map((product, i) => (
              <ProductCard
                key={product.id || i}
                product={product}
                loading={loading}
              />
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

ProductsListSection.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.string,
};

export default ProductsListSection;
