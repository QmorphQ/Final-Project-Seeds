import { Box } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
// import { useDispatch } from "react-redux";
// import {
//   addProductToCart,
//   changeProductQuantity,
//   decreaseProductQuantity,
//   deleteProductFromCart,
// } from "../../../store/thunks/cart.thunks";

const useStyles = makeStyles(() => ({
  mobileCartProductContainer: {
    display: "flex",
    backgroundColor: "red",
    width: "345px",
    height: "302px",
  },
}));

const CartItemMobile = () => {
  const classes = useStyles();
  //   const dispatch = useDispatch();

  return (
    <>
      <Box component={"div"} className={classes.mobileCartProductContainer}>
        ghbdtn
      </Box>
    </>
  );
};

CartItemMobile.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    cartQuantity: PropTypes.number,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

export default CartItemMobile;
