import { Box, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// import ProductCard from "../../../ui/components/ProductCard/ProductCard.jsx";
import { downloadRequestStates } from "../../constants/index";
import CartList from "./CartList.jsx";

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

const Cart = ({ loading }) => {
  const totalPrice = 0;
  const cart = useSelector((state) => state.cart.cart) || [];
  const classes = useStyles();

  // if (loading !== downloadRequestStates.SUCCESS) {
  //   return <p>Loading</p>;
  // }
  // if (Array.isArray(cart) && !cart.length) {
  //   return <p> No Products in Cart</p>;
  // }

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
          <Box className={classes.totalPrice}>{totalPrice.toFixed(2)}</Box>
        </Box>
      </Box>
    </>
  );
};

Cart.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
};

export default Cart;


