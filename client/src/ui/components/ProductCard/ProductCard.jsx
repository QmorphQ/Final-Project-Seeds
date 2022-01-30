import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStyles } from "./productCardStyles";

const ProductCard = ({ product }) => {
  const {name, currentPrice, imageUrls} = product;

  const classes = useStyles();

  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", currencyDisplay: 'symbol'
  });

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.productCard}>
        <CardHeader 
          className={classes.productCardHeader}
          action={
            <IconButton 
              className={classes.productCardButton} 
              color="warning" 
              aria-label="add to favourite"
            >
              <FavoriteBorderIcon />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.productCardMedia}
          component="img"
          width="294px"
          image={`${imageUrls}`}
          alt={name}
        />
        <Rating 
          className={classes.productCardRating}
          name="half-rating" defaultValue={2.5} precision={0.5}
          onChange={e => e}
        />
        <CardContent className={classes.productCardContent}>
          <Typography 
            className={classes.productCardName} 
            variant="h3" 
            color="text.primary"
          >{name}</Typography>
          <Typography 
            className={classes.productCardPrice} 
            component="span" 
            variant="h5" 
            color="text.primary"
          >{localPrice.format(currentPrice)}</Typography>
        </CardContent>
        <CardActions>
          <IconButton 
            className={classes.productCardButtonBasket} 
            aria-label="add to basket" 
            color="primary"
          >
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

ProductCard.defaultProps = {
  product: {
    name: 'test name',
    currentPrice: 'test price',
    imageUrls: 'test imageUrls',
    categories: [''],
  }
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;