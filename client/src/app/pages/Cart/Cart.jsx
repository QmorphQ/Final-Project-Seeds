import { useEffect } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import OrderSummary from "./OrderSummary.jsx";
// import { downloadRequestStates } from "../../constants/index";
import CartList from "./CartList.jsx";
import {
  countTotalAmountOrder,
  fetchCart,
} from "../../../store/thunks/cart.thunks";
import Preloader from "../../../ui/components/Preloader/Preloader.jsx";



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

  // const  totalSumStore = useSelector((state) => state.cart.totalSum)
  const cart = useSelector((state) => state.cart.cart) || [];
  // const totalSum = useSelector((state) => state.cart.totalSum);
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

  if (loading !== "success") {
    return <Preloader />;
  }
  if (Array.isArray(cart) && !cart.length) {
    return (
      <Container>
        <Typography
          className={classes.yourCartHeading}
          variant="h2"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          No Products in Car
        </Typography>
      </Container>
    );
  }

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

// Cart.propTypes = {
//   loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
// };

export default Cart;
