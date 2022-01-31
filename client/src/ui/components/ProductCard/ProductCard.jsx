import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Rating, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import { useStyles } from "./productCardStyles";
import { CardOnProductPageStyle } from "./CardOnProductPageStyle";
import { CardInBasket } from "./CardInBasket";
import Fetch from "../../../app/hoc/Fetch";
import { Box } from "@mui/system";

const ProductCard = ({ product, loading }) => {
  return (
    <Fetch
      loading={loading}
      data={product}
      renderSuccess={ProductCardRender}
      loadingFallback={<p>Loading...</p>}
      renderError={<p>Error</p>}
    />
  )
}

export const ProductCardRender = ({data}) => {
  const {name, currentPrice, imageUrls, isProductPage, categories, quantity, isBasket} = data;
  let classes = null;
  console.log(data);
  
  if(isProductPage) {
    classes = CardOnProductPageStyle();
  } else if(isBasket) {
    classes = CardInBasket();
  } else {
    classes = useStyles();
  }

  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", currencyDisplay: 'symbol'
  });

  if(isBasket) {
    return (
      <Card>
        <CardMedia
          className={classes.productCardMedia}
          component="img"
          width="294px"
          image={`${imageUrls}`}
          alt={name}
        />
        <Typography 
          className={classes.productCardName} 
          variant="h3" 
          color="text.primary"
        >{name}</Typography>        
      </Card>
    )
  }

  return (
    <Grid item xs={!isProductPage && 12} md={!isProductPage && 6} lg={!isProductPage && 4}>
      <Card className={classes.productCard}>
      {!isProductPage &&
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
        />}
        <Container>
          <Grid container={isProductPage} columnSpacing={isProductPage && { xs: 1, sm: 2, md: 3 }}>
            <Grid item
              className={classes.productCardMediaWrapper} 
              xs={isProductPage && 12} md={isProductPage && 5} lg={isProductPage && 5}
            >
              <CardMedia
                className={classes.productCardMedia}
                component="img"
                width="294px"
                image={`${imageUrls}`}
                alt={name}
              />
              {!isProductPage && <Rating 
                className={classes.productCardRating}
                name="half-rating" defaultValue={2.5} precision={0.5}
                onChange={e => e}
              />}
            </Grid>

            <Grid item xs={isProductPage && 12} md={isProductPage && 7} lg={isProductPage && 7}>
              <CardContent className={classes.productCardContent}>
                <Typography 
                  className={classes.productCardName} 
                  variant="h3" 
                  color="text.primary"
                >{name}</Typography>
                {isProductPage && 
                  <Box>
                    <Button 
                      className={classes.productCardAvailable} 
                      variant="contained" 
                      disabled
                    ><CheckIcon />{quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</Button>
                    <Button 
                      className={classes.productCardAvailable} 
                      variant="outlined" 
                      disabled
                    >{categories.toUpperCase()}</Button> {/* HERE MUST BE AN ICON */}
                  </Box>
                }
                {!isProductPage && <Typography 
                  className={classes.productCardPrice} 
                  component="span" 
                  variant="h5" 
                  color="text.primary"
                >{localPrice.format(currentPrice)}</Typography>}
              </CardContent>
              <CardActions className={classes.productActionsBox}>
              {isProductPage && <Typography 
                  className={classes.productCardPrice} 
                  component="span" 
                  variant="h5" 
                  color="text.primary"
                >{localPrice.format(currentPrice)}</Typography>}
                <Box >
                  {isProductPage &&
                  <IconButton 
                    className={classes.productCardButton} 
                    color="primary" 
                    aria-label="add to favourite"
                  ><FavoriteBorderIcon />
                  </IconButton>}
                  {!isProductPage ? <IconButton 
                    className={classes.productCardButtonBasket} 
                    aria-label="add to basket" 
                    color="primary" variant="contained"
                  ><ShoppingCartIcon />
                  </IconButton> : <Button variant="contained">Add to card</Button>}                
                </Box>
              </CardActions>
            </Grid>
          </Grid>
        </Container>
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