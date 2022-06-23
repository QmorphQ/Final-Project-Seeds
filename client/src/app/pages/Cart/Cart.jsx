import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Divider, Container, Button } from "@mui/material";
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
import CartListMobile from "./CartListMobile.jsx";

const useStyles = makeStyles((theme) => ({
  yourCartHeading: {
    marginBottom: "40px !important",
    marginTop: "40px !important",
    fontWeight: "bold !important",
  },

  contShopBtn: {
    width: "206px",
    height: "51px",
    marginTop: "50px",
    marginLeft: "40px",
    marginBottom: "147px",
    color: theme.palette.text.secondary,
    textTransform: "none",
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
      <Box
        className={classes.cartContainer}
        display={{ xs: "flex", sm: "flex" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
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
            <CartListMobile />
            <CartList />
          </Box>
        </Box>
        <OrderSummary />
      </Box>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            border: "1px solid rgba(112, 115, 124, 1)",
            borderRadius: "8px",
          }}
          className={classes.contShopBtn}
          variant="outlined"
          disableRipple
        >
          <Typography>Continue Shoping</Typography>
        </Button>
      </Link>
    </>
  );
};

// Cart.propTypes = {
//   loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
// };

export default Cart;
