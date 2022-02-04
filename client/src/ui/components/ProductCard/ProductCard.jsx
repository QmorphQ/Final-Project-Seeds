import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, FilledInput, Grid, IconButton, Input, Paper, Rating, Stack, TextField, Typography } from "@mui/material";
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
import { useState } from "react";
import Icon from "../Icon/Icon.jsx";
import { useSelector } from "react-redux";
import { mainCategoriesSelector } from "../../../store/selectors/selectors";
import CloseIcon from '@mui/icons-material/Close';
import { AutoSizer, Column, Table } from 'react-virtualized';
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
  const {name, currentPrice, imageUrls, isProductPage, categories, quantity, isBasket} = data;
  const [isFavourite, toggleIsFavourite] = useState(false);
  const [isOnBasket, toggleisOnBasket] = useState(false);
  const [productAmount, setProductAmount] = useState(1);

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
      <Container>
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
                    label={categories.toUpperCase()}
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
              
                <PriceTable localPrice={localPrice} currentPrice={currentPrice} quantity={quantity}/>    


                <Box>
                  <Typography 
                    className={productPageClasses.productCardPrice} 
                    component="span" 
                    variant="h5" 
                    color="text.primary"
                  >
                    {localPrice.format(currentPrice)}
                  </Typography>
                  <ButtonGroup className={productPageClasses.amountInputGroup} color="primary" variant="outlined" aria-label="outlined primary button group">
                    <Button 
                      onClick={() => setProductAmount(+productAmount - 1)} 
                      variant="text"
                      disabled={productAmount <= 1}
                    >
                      {"-"}
                    </Button>
                    <FilledInput
                      inputProps={{sx:{textAlign:"center"}}} 
                      disableUnderline="true" 
                      hiddenLabel="true" 
                      defaultValue="1"
                      value={productAmount}
                      onChange={e => setProductAmount(+e.target.value)}
                      id="product-amount" 
                      className={productPageClasses.productAmountInput} 
                    />
                    <Button 
                      onClick={() => setProductAmount(+productAmount + 1)} 
                      variant="text"
                      disabled={productAmount >= quantity}
                    >
                      {"+"}
                    </Button>
                  </ButtonGroup>
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
              </CardActions>
            </Grid>
          </Grid>
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