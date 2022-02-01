import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Rating, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import { useStyles } from "./productCardStyles";
import { CardOnProductPageStyle } from "./CardOnProductPageStyle";
import { CardInBasket } from "./CardInBasket";
import RenderComponent from "../../../app/hoc/RenderComponent";
import { Box } from "@mui/system";

const ProductCard = ({ product, loading }) => {
  return (
    <RenderComponent
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

  const mainClasses = useStyles();
  const productPageClasses = CardOnProductPageStyle();
  const basketClasses = CardInBasket();

  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", currencyDisplay: 'symbol'
  });

  if(isBasket) {
    return (
      <Card>
        <CardMedia
          className={basketClasses.productCardMedia}
          component="img"
          width="294px"
          image={`${imageUrls}`}
          alt={name}
        />
        <Typography 
          className={basketClasses.productCardName} 
          variant="h3" 
          color="text.primary"
        >{name}</Typography>        
      </Card>
    )
  }

  if(isProductPage) {
    return (
        <Card className={productPageClasses.productCard}>
          <Container>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              
              <Grid item
                className={productPageClasses.productCardMediaWrapper} 
                xs={12} md={5} lg={5}
              >
                <CardMedia
                  className={productPageClasses.productCardMedia}
                  component="img"
                  width="294px"
                  image={`${imageUrls}`}
                  alt={name}
                />
              </Grid>

              <Grid item xs={12} md={7} lg={7}>
                <CardContent className={productPageClasses.productCardContent}>
                  <Typography 
                    className={productPageClasses.productCardName} 
                    variant="h3" 
                    color="text.primary"
                  >{name}</Typography>
                  <Box>
                    <Button 
                      className={productPageClasses.productCardAvailable} 
                      variant="contained" 
                      disabled
                    >
                      <CheckIcon />{quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"}
                    </Button>
                    <Button 
                      className={productPageClasses.productCardAvailable} 
                      variant="outlined" 
                      disabled
                    >
                      {categories.toUpperCase()}
                    </Button> {/* HERE MUST BE AN ICON */}
                  </Box>
                </CardContent>
                <CardActions className={productPageClasses.productActionsBox}>
                <Typography 
                  className={productPageClasses.productCardPrice} 
                  component="span" 
                  variant="h5" 
                  color="text.primary"
                >
                  {localPrice.format(currentPrice)}
                </Typography>
                <Box>
                  <IconButton 
                    className={productPageClasses.productCardButton} 
                    color="primary" 
                    aria-label="add to favourite"
                  >
                    <FavoriteBorderIcon />
                  </IconButton>              
                </Box>
                </CardActions>
              </Grid>
            </Grid>
          </Container>
        </Card>
    )
  }

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={mainClasses.productCard}>
        <CardHeader 
          className={mainClasses.productCardHeader}
          action={
            <IconButton 
              className={mainClasses.productCardButton} 
              color="warning" 
              aria-label="add to favourite"
              onClick={(e) => {console.log(e)}}
            >
              <FavoriteBorderIcon />
            </IconButton>
          }
        />

        <CardMedia
          className={mainClasses.productCardMedia}
          component="img"
          width="294px"
          image={`${imageUrls}`}
          alt={name}
        />

        <Rating 
          className={mainClasses.productCardRating}
          name="half-rating" defaultValue={2.5} precision={0.5}
          onChange={e => e}
        />

        <CardContent className={mainClasses.productCardContent}>
          <Typography 
            className={mainClasses.productCardName} 
            variant="h3" 
            color="text.primary"
          >
            {name}
          </Typography>
          <Typography 
            className={mainClasses.productCardPrice} 
            component="span" 
            variant="h5" 
            color="text.primary"
          >
            {localPrice.format(currentPrice)}
          </Typography>
        </CardContent>

        <CardActions className={mainClasses.productActionsBox}>
          <IconButton 
            className={mainClasses.productCardButtonBasket} 
            aria-label="add to basket" 
            color="primary" variant="contained"
          ><ShoppingCartIcon />
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