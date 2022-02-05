import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Grid, IconButton, Rating, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckIcon from '@mui/icons-material/Check';
import { useMainStyles } from "./useMainStyles";
import { useProductPageStyles } from "./useProductPageStyles";
import { useBasketStyles } from "./useBasketStyles";
import RenderComponent from "../../../app/hoc/RenderComponent";
import { Box, width } from "@mui/system";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon.jsx";
import { useSelector } from "react-redux";
import { mainCategoriesSelector } from "../../../store/selectors/selectors";
import CloseIcon from '@mui/icons-material/Close';
import PriceTable from "./PriceTable";

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
  const {name, currentPrice, imageUrls, isProductPage, categories, quantity, isBasket, discountPrice} = data;
  console.log(data);
  const [isFavourite, toggleIsFavourite] = useState(false);
  const [isOnBasket, toggleisOnBasket] = useState(false);
  const [productAmount, setProductAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(currentPrice);
  const [discontStart] = useState(10);

  useEffect(() => {
    productAmount <= discontStart ? setTotalPrice(productAmount*currentPrice) : setTotalPrice(productAmount*discountPrice)
  },[productAmount])

  const mainClasses = useMainStyles();
  const productPageClasses = useProductPageStyles();
  const basketClasses = useBasketStyles();

  const mainCategory = 
    useSelector(mainCategoriesSelector)
      .find(category => categories
      .includes(category.name));

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
      <Container sx={{marginTop:"50px"}}>
        <Card className={productPageClasses.productCard}>
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

              <Box className={productPageClasses.productCardMediaSmallWrapper}>
                <CardMedia
                  className={productPageClasses.productCardMediaSmall}
                  component="img"
                  width="67px"
                  image={`/img/image-2.png`}
                  alt={name}
                />
                <CardMedia
                  className={productPageClasses.productCardMediaSmall}
                  component="img"
                  width="67px"
                  image={`/img/image-3.png`}
                  alt={name}
                />
                <CardMedia
                  className={productPageClasses.productCardMediaSmall}
                  component="img"
                  width="67px"
                  image={`/img/image-4.png`}
                  alt={name}
                />
                <CardMedia
                  className={productPageClasses.productCardMediaSmall}
                  component="img"
                  width="67px"
                  image={`/img/image-5.png`}
                  alt={name}
                />
                <CardMedia
                  className={productPageClasses.productCardMediaSmall}
                  component="img"
                  width="67px"
                  image={`/img/image-6.png`}
                  alt={name}
                />
                <CardMedia
                  className={productPageClasses.productCardMediaSmall}
                  component="img"
                  width="67px"
                  image={`/img/image-7.png`}
                  alt={name}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={7} lg={7}>
              <CardContent className={productPageClasses.productCardContent}>
                <Typography 
                  className={productPageClasses.productCardName} 
                  variant="h3" 
                  color="text.primary"
                >{name}</Typography>

                <Stack direction="row" spacing={1}>
                  <Chip 
                    color="disable"
                    label={quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"} 
                    icon={
                      quantity > 0 ? (
                        <CheckIcon
                          className={productPageClasses.buttonIcon}  
                        />) : (
                        <CloseIcon 
                          className={productPageClasses.buttonIcon}
                        />)
                    } 
                  />
                  <Chip 
                    color="primary"
                    className={productPageClasses.productCardAvailable}
                    label={mainCategory.name.toUpperCase()}
                    icon={
                      <Icon 
                        className={productPageClasses.buttonIcon}
                        icon={Icon.icons[mainCategory.icon]} 
                      />} 
                    variant="outlined" 
                  />
                </Stack>
              </CardContent>
              <CardActions className={productPageClasses.productActionsBox}>
                <Box className={productPageClasses.customScrollbar} sx={{width:"100%", scrollbarWidth:"3px"}}>   
                  <PriceTable 
                    currentPrice={currentPrice} 
                    discountPrice={discountPrice}
                    localPrice={localPrice}
                    quantity={quantity}
                    productAmount={productAmount}
                    setProductAmount={setProductAmount}
                    setTotalPrice={setTotalPrice}
                    discontStart={discontStart}
                  />    
                </Box>
                <Box className={productPageClasses.productCardActionBtns}>
                  <Box>
                    {productAmount > discontStart &&
                      <Typography 
                        className={productPageClasses.productCardOldPrice} 
                        component="div" 
                        variant="h5" 
                        color="text.primary"
                      >
                        {localPrice.format(productAmount * +currentPrice)}
                      </Typography>
                    }
                    <Typography 
                      className={productPageClasses.productCardPrice} 
                      component="div" 
                      variant="h5" 
                      color="text.primary"
                      >
                      {localPrice.format(totalPrice)}
                    </Typography>
                  </Box>
                    
                  <Box className={productPageClasses.productCardButtons}>
                    <IconButton 
                      className={productPageClasses.productCardButton} 
                      color="primary" 
                      aria-label="add to favourite"
                      onClick={() => toggleIsFavourite(() => !isFavourite)}
                    >
                      {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <Button 
                      className={productPageClasses.productCardButtonBasket} 
                      variant="contained"
                    >
                      Add to card
                    </Button>              
                  </Box>
                </Box>
              </CardActions>
            </Grid>
          </Grid>
          <CardContent className={productPageClasses.productCardContent}>
            <Typography className={productPageClasses.productCardAboutHeader}
              component="h2" 
              variant="h2" 
              color="text.primary"
            >
              Product information.
            </Typography>
            <Grid container>
              <Grid item xs={12} md={7} lg={7}>
                <Typography className={productPageClasses.productCardAboutHeader}
                  component="p" 
                  variant="body1" 
                  color="text.primary"
                > 
                  EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George
                  Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee
                  Cilantro common culinary uses: salsa, guacamole, pesto, salads, chutney, baked breads, pad thai, pico de gallo, rice, grilled shrimp skewers, falafel, and more
                  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
                  SEEDRA customer service - please contact us directly through Amazon with any questions or concerns about our products. We care about each customer and do our best to provide you with 100% satisfaction
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} lg={5}>

              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
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
              onClick={() => toggleIsFavourite(() => !isFavourite)}
            >
              {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
            onClick={() => toggleisOnBasket(() => !isOnBasket)}
          >
            {isOnBasket ? 
              <CheckBoxIcon sx={{width:"48px", height:"48px"}} /> : 
              <ShoppingCartOutlinedIcon />
            }
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