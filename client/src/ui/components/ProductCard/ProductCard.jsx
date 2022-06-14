import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
  Box,
  ButtonGroup,
  Chip,
  FilledInput,
  Stack,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  ListItem,
  List,
  Link,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel"; 

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; 
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'; 
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckIcon from "@mui/icons-material/Check"; 

// import { Link, useNavigate } from "react-router-dom";
import RenderComponent from "../../../app/hoc/RenderComponent.jsx";
import { useMainStyles } from "./useMainStyles";
import { useProductPageStyles } from "./useProductPageStyles";
import { useBasketStyles } from "./useBasketStyles";
import { useFiltersStyles } from "./useFiltersStyles";
import Icon from "../Icon/Icon.jsx";

import { cartSelector, 
         mainCategoriesSelector, 
         wishlistSelector, 
         isAdminStateSelector, 
         adminDeleteProductRequestSelector } from "../../../store/selectors/selectors";
import { addProductToCart, 
         fetchCart, 
         decreaseProductQuantity, 
         changeProductQuantity } from "../../../store/thunks/cart.thunks"; 
import { adminDeleteProduct } from "../../../store/thunks/admin.thunks";

import { adminDeleteProductIdle } from "../../../store/actions/admin.actions";


import AddToCartModal from "../AddToCardModal/AddToCartModal.jsx";
import { imgURLs } from "./ProductMedia";
import {
  addProductToWishlist,
  deleteProductFromWishlist,
  fetchWishlist,
} from "../../../store/thunks/wishlist.thunks";
import Spinner from "../Spinner/Spinner.jsx";

export const ProductCardRender = ({ data }) => {
  const {
    name,
    currentPrice,
    imageUrls,
    isProductPage,
    isFiltersPage,
    categories,
    quantity,
    isBasket,
    discountPrice,
    itemNo,
    _id,
    cartQuantity
  } = data;
  
console.log(data);
  const [isFavourite, toggleIsFavourite] = useState(false);
  const [isOnModal, toggleIsOnModal] = useState(false);
  const [productAmount, setProductAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(currentPrice);
  const [discontStart] = useState(10);

  const dispatch = useDispatch();
  const navigation = useNavigate(); 

  const wishlist = useSelector(wishlistSelector); 
  const isAdmin = useSelector(isAdminStateSelector); 
  const cart = useSelector(cartSelector);
  const isProductDeleted = useSelector(adminDeleteProductRequestSelector); 


  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);


  useEffect(() => {
    if (wishlist) {
      toggleIsFavourite(!!wishlist.products.find((item) => item._id === _id));
    }
  }, [wishlist]);

  const media = imgURLs.filter((item) => +item.itemNo === +itemNo);
  // console.log(JSON.stringify(data));
  // console.log(JSON.stringify(imgURLs));

  useEffect(() => {
    // productAmount <= discontStart ? setTotalPrice(productAmount*currentPrice) : setTotalPrice(productAmount*discountPrice) // MVP change
    setTotalPrice((prevProductAmount) =>
      prevProductAmount <= discontStart
        ? productAmount * currentPrice
        : productAmount * discountPrice
    );
  }, [productAmount, discontStart]);

  const navigate = useNavigate();

  const mainClasses = useMainStyles();
  const productPageClasses = useProductPageStyles();
  const basketClasses = useBasketStyles();
  const filtersClasses = useFiltersStyles();

  const mainCategory = useSelector(mainCategoriesSelector).find((category) =>
    categories.includes(category.name)
  );

  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  }); 

  
  const reloadAfterDelete = () => {
      setTimeout(() => {
        dispatch(adminDeleteProductIdle());
        navigation(-1)
         
      }, 3000); 
  }


  if (isBasket) {
    return (
      <Card>
        <Box className={basketClasses.productCardContainer} >
        <CardMedia
          className={basketClasses.productCardMedia}
          component="img"
          width="294px"
          image={`${imageUrls}`}
          alt={name}
          />
        <Box className={basketClasses.productCardNameContainer}>
          <Typography
            className={basketClasses.productCardName}
            variant="h3"
            color="text.primary"
          >
            {name}
          </Typography>
        </Box>
        <ButtonGroup 
            className={basketClasses.productCardButtonGroup}
            color="primary" 
            variant="outlined" 
            aria-label="outlined primary button group"
            >
            <Button 
              onClick={() => {
                dispatch(decreaseProductQuantity(_id));
              }} 
              variant="text"
              disabled={cartQuantity <= 1}
              className={basketClasses.productCardButton}
            >
              {"-"}
            </Button>
            <FilledInput
              className={basketClasses.productCardAmount}
              inputProps={{sx:{textAlign:"center"}}} 
              disableUnderline={true} 
              hiddenLabel={true} 
              value={cartQuantity}
              onChange={e => dispatch(changeProductQuantity(_id, +e.target.value))}
              id="product-amount" 
              />
            <Button 
              onClick={() => {
                dispatch(addProductToCart(_id));
              }} 
              variant="text"
              disabled={cartQuantity >= quantity}
              className={basketClasses.productCardButton}
              >
              {"+"}
            </Button>
          </ButtonGroup>
          
        <Typography
          className={basketClasses.productCardName}
          variant="h3"
          color="text.primary"
          >
          {currentPrice}
        </Typography>

        <Typography
          className={basketClasses.productCardName}
          variant="h3"
          color="text.primary"
          >
          {(currentPrice * cartQuantity).toFixed(2)}
        </Typography>        
        
        </Box>
      </Card>
    );
  }

  if (isProductPage) {

    return (
      <Container sx={{ marginTop: "50px" }}>
        <Card className={productPageClasses.productCard}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid
              item
              className={productPageClasses.productCardMediaWrapper}
              xs={12}
              md={5}
              lg={5}
            >
              <Carousel
                m={"auto"}
                navButtonsAlwaysVisible={false}
                navButtonsWrapperProps={{
                  style: {
                    maxHeight: "421px",
                  },
                }}
                interval="5000"
                animation="slide"
                duration="500"
                autoPlay={false}
                indicatorContainerProps={{
                  style: {
                    marginTop: "22px",
                  },
                }}
                IndicatorIcon={media[0].url.map((url, i) => (
                  <CardMedia
                    key={i}
                    sx={{ width: "67px" }}
                    className={productPageClasses.productCardMediaSmall}
                    component="img"
                    width="67px"
                    image={`${url}`}
                    alt={name}
                  />
                ))}
                indicatorIconButtonProps={{
                  style: {
                    margin: "8px",
                    maxWidth: "67px",
                    maxHeight: "auto",
                  },
                }}
              >
                {media[0].url.map((item, i) => (
                  <CardMedia
                    key={i}
                    className={productPageClasses.productCardMedia}
                    component="img"
                    width="294px"
                    pr="300px"
                    image={`${item}`}
                    alt={name}
                  />
                ))}
              </Carousel>
            </Grid>

            <Grid item xs={12} md={7} lg={7}>
              <CardContent className={productPageClasses.productCardContent}>
                <Typography
                  className={productPageClasses.productCardName}
                  variant="h3"
                  color="text.primary"
                >
                  {name}
                </Typography>

                <Stack
                  sx={{ marginBottom: "15px" }}
                  direction="row"
                  spacing={1}
                >
                  <Chip
                    color="disable"
                    label={quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"}
                    icon={
                      quantity > 0 ? (
                        <CheckIcon className={productPageClasses.buttonIcon} />
                      ) : (
                        <CloseIcon className={productPageClasses.buttonIcon} />
                      )
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
                      />
                    }
                    variant="outlined"
                  />
                </Stack>
                <TableContainer
                  className={productPageClasses.productTableInfo}
                  component={Paper}
                >
                  <Table>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Package Dimensions
                        </TableCell>
                        <TableCell align="right">
                          {media[0].packageDimensions}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Item Weight
                        </TableCell>
                        <TableCell align="right">
                          {media[0].itemWeight}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          ASIN
                        </TableCell>
                        <TableCell align="right">{media[0].ASIN}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
              <CardActions className={productPageClasses.productActionsBox}>
                <Box
                  className={productPageClasses.customScrollbar}
                  sx={{ width: "100%" }}
                >
                  <Typography component="div" color="text.primary">
                    Size{" "}
                    <Typography component="span" sx={{ fontSize: "16px" }}>
                      {+productAmount} PACK
                    </Typography>
                  </Typography> 

                  {isAdmin === false && 
                    <ButtonGroup
                      className={productPageClasses.amountInputGroup}
                      color="primary"
                      variant="outlined"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        onClick={() => {
                          setProductAmount(
                            (prevProductAmount) => +prevProductAmount - 1
                          );
                        }}
                        variant="text"
                        disabled={productAmount <= 1}
                      >
                        {"-"}
                      </Button>
                      <FilledInput
                        inputProps={{ sx: { textAlign: "center" } }}
                        disableUnderline={true}
                        hiddenLabel={true}
                        value={productAmount}
                        onChange={(e) => setProductAmount(+e.target.value)}
                        id="product-amount"
                        className={productPageClasses.productAmountInput}
                      />
                      <Button
                        onClick={() => {
                          setProductAmount(+productAmount + 1);
                        }}
                        variant="text"
                        disabled={productAmount >= quantity}
                      >
                        {"+"}
                      </Button>
                    </ButtonGroup>
                  } 

                </Box>
                <Box className={productPageClasses.productCardActionBtns}>
                  <Box>
                    {productAmount > discontStart && (
                      <Typography
                        className={productPageClasses.productCardOldPrice}
                        component="div"
                        variant="h5"
                        color="text.primary"
                      >
                        {localPrice.format(productAmount * +currentPrice)}
                      </Typography>
                    )}
                    <Typography
                      className={productPageClasses.productCardPrice}
                      component="div"
                      variant="h5"
                      color="text.primary"
                    >
                      {localPrice.format(totalPrice)}
                    </Typography>
                  </Box>

                  {isAdmin === false && 
                    <Box className={productPageClasses.productCardButtons}>
                      <IconButton
                        className={productPageClasses.productCardButton}
                        color="primary"
                        aria-label="add to favourite"
                        onClick={
                          isFavourite
                            ? () => dispatch(deleteProductFromWishlist(_id))
                            : () => dispatch(addProductToWishlist(_id))
                        }
                      >
                        {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <Button
                        className={productPageClasses.productCardButtonBasket}
                        variant="contained"
                        onClick={() =>
                          dispatch(addProductToCart(_id, productAmount))
                        }
                      >
                        Add to card
                      </Button>
                    </Box> 
                  }  

                  {isAdmin && isProductDeleted === 'idle' && 
                  <IconButton onClick={() => {
                                          dispatch(adminDeleteProduct(_id)); 
                                          reloadAfterDelete(); 
                                          }} >
                    < DeleteOutlinedIcon sx={{ fontSize: '32px',  
                                               color: '#FF6D6D' }} 
                    />
                  </IconButton>} 

                  {isAdmin && isProductDeleted === 'success' && 
                  <span style={{ margin: '10px 0 5px 30px', 
                                 color: '#FF6D6D', 
                                 fontFamily: "'Lexend', sans-serif", }}>
                                         product has been deleted successfully
                  </span>}

                </Box>
              </CardActions>
            </Grid>
          </Grid>
          <CardContent className={productPageClasses.productCardContent}>
            <Typography
              className={productPageClasses.productCardAboutHeader}
              component="h2"
              variant="h2"
              color="text.primary"
            >
              Product information.
            </Typography>
            <List
              className={productPageClasses.productCardAboutHeader}
              variant="body1"
              color="text.primary"
            >
              {media[0].itemAbout.map((item, i) => (
                <ListItem key={i}>
                  <Typography>{item}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    );
  }

  if (isFiltersPage) {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className={filtersClasses.productCard}>
          <CardHeader
            className={mainClasses.productCardHeader}
            action={
              <IconButton
                className={mainClasses.productCardButton}
                color="warning"
                aria-label="add to favourite"
                onClick={
                  isFavourite
                    ? () => dispatch(deleteProductFromWishlist(_id))
                    : () => dispatch(addProductToWishlist(_id))
                }
              >
                {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            }
          />

          <CardMedia
            className={filtersClasses.productCardMedia}
            component="img"
            width="250px"
            image={`${imageUrls}`}
            alt={name}
          />

          <Rating
            className={mainClasses.productCardRating}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            onChange={(e) => e}
          />

          <CardContent className={mainClasses.productCardContent}>
            <Link
              to={`/${itemNo}`}
              style={{
                color: "inherit",
                textDecoration: "inherit",
                height: "50px",
                display: "block",
                overflow: "hidden",
              }}
              color="text.primary"
              underline="hover"
              variant="h3"
            >
              <Typography
                className={mainClasses.productCardName}
                to={`/${itemNo}`}
                variant="h3"
                color="text.primary"
                onClick={() => navigate(`${itemNo}`)}
              >
                {name}
              </Typography>
            </Link>
            <Typography
              className={mainClasses.productCardPrice}
              component="span"
              variant="h6"
              color="text.primary"
            >
              {localPrice.format(currentPrice)}
            </Typography>
          </CardContent>

          <CardActions className={mainClasses.productActionsBox}>
            <IconButton
              className={filtersClasses.productCardButtonBasket}
              aria-label="add to basket"
              color="primary"
              variant="contained"
              onClick={() => {
                toggleIsOnModal(true);
              }}
            >
              <ShoppingCartOutlinedIcon />
              <AddToCartModal
                data={data}
                discontStart={discontStart}
                localPrice={localPrice}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                isOnModal={isOnModal}
                toggleIsOnModal={toggleIsOnModal}
                cart={cart}
                _id={_id}
              />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid item xs={12} md={6} lg={4} sx={{display: "flex", justifyContent:"center"}}>
      <Card className={mainClasses.productCard}>
        <CardHeader
          className={mainClasses.productCardHeader}
          action={
            <IconButton
              onClick={
                isFavourite
                  ? () => dispatch(deleteProductFromWishlist(_id))
                  : () => dispatch(addProductToWishlist(_id))
              }
              className={mainClasses.productCardButton}
              color="warning"
              aria-label="add to favourite"
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
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          onChange={(e) => e}
        />

        <CardContent className={mainClasses.productCardContent}>
          <Link
            style={{
              color: "inherit",
              textDecoration: "inherit",
              height: "50px",
              display: "block",
              overflow: "hidden",
            }}
            color="text.primary"
            underline="hover"
            variant="h3"
          >
            <Typography
              className={mainClasses.productCardName}
              variant="h3"
              color="text.primary"
              onClick={() => navigate(`/products/${itemNo}`)}
            >
              {name}
            </Typography>
          </Link>
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
            color="primary"
            variant="contained"
            onClick={() => {
              toggleIsOnModal(true);
            }}
          >
            <ShoppingCartOutlinedIcon />
            <AddToCartModal
              data={data}
              discontStart={discontStart}
              localPrice={localPrice}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              isOnModal={isOnModal}
              toggleIsOnModal={toggleIsOnModal}
              cart={cart}
              _id={_id}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

const ProductCard = ({ product, loading }) => 
  (
    <RenderComponent
      loading={loading}
      data={product}
      renderSuccess={ProductCardRender}
      loadingFallback={Spinner}
      renderError={<p>Error</p>}
    />
  );


ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.array, // !!! MVP: string ---> array
    isProductPage: PropTypes.bool,
    isFiltersPage: PropTypes.bool,
    categories: PropTypes.string,
    quantity: PropTypes.number,
    isBasket: PropTypes.bool,
    discountPrice: PropTypes.number,
    itemNo: PropTypes.string, // MVP: string ---> number
    _id: PropTypes.string,
    cartQuantity: PropTypes.number
  }),
  loading: PropTypes.any, // !!! < -----MVP: oneOf(Object.values) ---> any;
};
ProductCardRender.propTypes = {
  data: PropTypes.object,
};

export default ProductCard;
