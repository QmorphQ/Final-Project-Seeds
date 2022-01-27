import { Container, Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard.jsx';


const ProductsList = () => (
  <Container>
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <ProductCard  />
      <ProductCard  />
      <ProductCard  />
      <ProductCard  />
      <ProductCard  />
      <ProductCard  />
    </Grid>
  </Container>
)

export default ProductsList;