import { Container, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard.jsx';

/* eslint-disable  */

const ProductsList = ({products, loading, totalLength = 6}) => {
  if(loading === "loading") return <div>Loading...</div>; // Here must be a loarer
  if(loading === "error") return <div>Error :(</div>; 

  return (
    <Container>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
          .filter((product, index) => product.popular && index < totalLength)
          .map(product => <ProductCard key={product.id} product={product} />)}
      </Grid>
    </Container>
  )
}


ProductsList.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.string,
}

export default ProductsList;