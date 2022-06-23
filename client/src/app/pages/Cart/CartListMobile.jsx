// import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CartItemMobile from "./CartItem.jsx";

// const useStyles = makeStyles(() => ({}));

const CartListMobile = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  //   const classes = useStyles();

  const cartListMobile = cart.map((cartItem) => {
    const totalPrice =
      Number(cartItem.cartQuantity) * Number(cartItem.currentPrice);

    return (
      <CartItemMobile
        key={cartItem.id}
        product={{
          ...cartItem,
          img: cartItem.imageUrls[0],
          name: cartItem.name,
          isBasket: true,
          quantity: cartItem.cartQuantity,
          price: cartItem.currentPrice,
          totalPrice,
        }}
      />
    );
  });

  return <Box>{cartListMobile}</Box>;
};

export default CartListMobile;
