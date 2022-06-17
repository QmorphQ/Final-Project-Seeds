// import { useState, useEffect } from "react";
import { useEffect } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import {
  countTotalAmountOrder,
  fetchCart,
} from "../../../store/thunks/cart.thunks";
// import { downloadRequestStates } from "../../constants/index";
import CartList from "./CartList.jsx";
import Preloader from "../../../ui/components/Preloader/Preloader.jsx";

// import { Container } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  yourCartHeading: {
    marginBottom: "40px !important",
    marginTop: "40px !important",
    fontWeight: "bold !important",
  },

  cartContainer: {
    display: "flex",
    flexDirection: "row",
  },

  totalResultContainer: {
    width: "350px",
  },

  orderSummeryHeading: {
    fontWeight: "bold !important",
    marginLeft: "34px",
  },

  totalPrice: {
    color: theme.palette.primary.main,
    width: "350px",
  },
}));

const Cart = () => {
  // const  totalSumStore = useSelector((state) => state.cart.totalSum)
  const cart = useSelector((state) => state.cart.cart) || [];
  const totalSum = useSelector((state) => state.cart.totalSum);
  const loading = useSelector((state) => state.cart.downloadRequestState);
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);
  const dispatch = useDispatch();
  const classes = useStyles();

  // const [totalSum, setTotalSum] = useState(0);

  // useEffect(() => {
  //   const sumOrder = cart.reduce((accumulator, currentValue) => (
  //     accumulator + currentValue.currentPrice * currentValue.cartQuantity
  //  ), 0);
  //   setTotalSum(sumOrder)
  // }, [cart]);
  useEffect(() => {
    dispatch(fetchCart());
  }, [isLoggedIn]);
  useEffect(() => {
    dispatch(countTotalAmountOrder());
  }, [cart]);

  if (loading !==  "success") {
    return    <Preloader />
  }
  if (Array.isArray(cart) && !cart.length) {
    return (
    <Container>
      <Typography
        className={classes.yourCartHeading}
        variant="h2"
        component="h2"
        sx={{textAlign: "center"}}
      >
        No Products in Car
      </Typography>
    </Container>
    )
  }

  return (
    <>
      <Typography
        className={classes.yourCartHeading}
        variant="h2"
        component="h2"
      >
        Your cart.
      </Typography>

      <Divider variant="middle" />

      <Box component="main" className={classes.cartContainer}>
        <CartList />
        <Box className={classes.totalResultContainer}>
          <Typography
            className={classes.orderSummeryHeading}
            variant="h3"
            component="h3"
          >
            Order Summery
          </Typography>
          <Box className={classes.totalPrice}>${totalSum.toFixed(2)}</Box>
        </Box>
      </Box>
    </>
  );
};

// Cart.propTypes = {
//   loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
// };

export default Cart;
