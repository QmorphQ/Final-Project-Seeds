import { Box, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { downloadRequestStates } from "../../constants/index";
import CartList from "./CartList.jsx";
import OrderSummary from "./OrderSummary.jsx";

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
  // const totalPrice = 0;
  const classes = useStyles();

  // if (loading !== downloadRequestStates.SUCCESS) {
  //   return <p>Loading</p>;
  // }
  // if (Array.isArray(cart) && !cart.length) {
  //   return <p> No Products in Cart</p>;
  // }

  return (
    <>
      <Box className={classes.cartContainer}>
        <Box>
          <Typography
            className={classes.yourCartHeading}
            variant="h2"
            component="h2"
          >
            Your cart.
          </Typography>
          <Divider />
          <Box component="main" className={classes.cartContainer}>
            <CartList />
            {/* <Box className={classes.totalResultContainer}> */}
            {/* <Typography
            className={classes.orderSummeryHeading}
            variant="h3"
            component="h3"
          >
            Order Summery
          </Typography> */}
            {/* <Box className={classes.totalPrice}>{totalPrice.toFixed(2)}</Box> */}
          </Box>
        </Box>
        {/* </Box> */}

        <OrderSummary />
      </Box>
    </>
  );
};

Cart.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
};

export default Cart;
