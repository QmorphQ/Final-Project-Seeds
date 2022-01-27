import { Container, Grid } from '@mui/material';
import ProductCard from './ProductCard.jsx';


const ProductsList = () => (
  <Container>
    <Grid container>
      <ProductCard  />
      <ProductCard  />
      <ProductCard  />
    </Grid>
  </Container>
)

export default ProductsList;