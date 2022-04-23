import { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import ProductCard from "../../ui/components/ProductCard/ProductCard.jsx";
import { downloadRequestStates } from "../constants/index";
import {
  cartSelector,
  productsSelector,
} from "../../store/selectors/selectors";

import { writeCartToDatabase } from "../../store/thunks/cart.thunks";
import { height } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  yourCartHeading: {
    width: "900px",
    marginBottom: "40px !important",
    marginTop: "40px !important",
    fontWeight: "bold !important",
    marginLeft: "160px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
  titleContainer: {
    marginLeft: "165px",
    marginBottom: "20px",
    display: "flex",
    width: "900px",
    justifyContent: "space-around",
  },
  title: {
    opacity: "0.7"
  },
  productTitle: {
    width: "600px",
    opacity: "0.7"
  },
  cartItem: {
    display: "flex",
    "& .MuiPaper-root": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& .MuiCardMedia-img": {
        width: "90px",
        height: "90px",
      },
      "& .MuiTypography-root": {
        fontSize: "14px",
        LineHeight: "24.95px",
        margin: "20px",
      },
    },
  },
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  cartList: {
    display: "flex",
    flexDirection: "column",
    width: "900px",
    marginLeft: "115px",
  },
  totalPrice: {
    marginLeft: "160px",
    fontSize: "20px",
    color: theme.palette.primary.main,
    width: "350px",
  },
  continueButton: {
    margin: "40px",
    marginLeft: "160px",
    width: "130px",
    height: "50px"
  }
}));

const Cart = ({ loading }) => {
  let totalPrice = 0;
  const products = useSelector(productsSelector) || [];
  const cart = useSelector(cartSelector);
  // const isLoggedIn = useSelector(loginStateSelector);

  const classes = useStyles();

  // const dispatch = useDispatch();

  if (loading !== downloadRequestStates.SUCCESS) {
    return <p>Loading</p>;
  }
  if (Array.isArray(cart) && !cart.length) {
    return <p> No Products in Cart</p>;
  }

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(writeCartToDatabase());
  //   }
  // }, [isLoggedIn]);

  const cartList = cart.map((cartItem) => {
    const cartProduct = products.find(
      (product) => product._id === cartItem.product
    );

    if (!cartProduct) return null;

    totalPrice +=
      Number(cartItem.cartQuantity) * Number(cartProduct.currentPrice);

    return (
      <Box component="li" className={classes.cartItem} key={cartItem.id}>
        <ProductCard
          product={{
            ...cartProduct,
            isBasket: true,
            cartQuantity: cartItem.cartQuantity,
          }}
          loading={loading}
        />
      </Box>
    );
  });

  return (
    <>
      <Typography
        className={classes.yourCartHeading}
        variant="h2"
        component="h2"
      >
        Your cart.
      </Typography>
      <Box className={classes.titleContainer}>
        <Typography className={classes.productTitle}>
          PRODUCT DETAILS
        </Typography>
        <Typography className={classes.title}>AMOUNT</Typography>
        <Typography className={classes.title}>PRICE</Typography>
        <Typography className={classes.title}>TOTAL</Typography>
      </Box>
      <Box component="main" className={classes.cartContainer}>
        <ul className={classes.cartList}>{cartList}</ul>
        {
          <Box className={classes.totalPrice}>
            TOTAL PRICE {totalPrice.toFixed(2)}
          </Box>
        }
        <Button variant="contained" className={classes.continueButton}>Continue</Button>
      </Box>
    </>
  );
};

Cart.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
};

export default Cart;
