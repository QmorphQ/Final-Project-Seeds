import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
// import ProductCard from "../../../ui/components/ProductCard/ProductCard.jsx";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    "& .MuiTableContainer-root": {
      boxShadow: "none",
    },
  },
  tableTitle: {
    "& .MuiTableCell-root": {
      color: theme.palette.text.secondary,
      paddingTop: "24px",
      paddingBottom: "24px",
    },
  },
}));

const CartList = () => {
  const products = useSelector((state) => state.products.productList) || [];
  const cart = useSelector((state) => state.cart.cart) || [];
  const classes = useStyles();

  const cartList = cart.map((cartItem) => {
    const cartProduct = products.find((product) => product._id === cartItem.id);

    if (!cartProduct) return null;

    const totalPrice =
      Number(cartItem.cartQuantity) * Number(cartProduct.currentPrice);

    return (
      <>
        <CartItem
          key={cartProduct._id}
          product={{
            ...cartProduct,
            id: cartProduct._id,
            img: cartProduct.imageUrls[0],
            name: cartProduct.name,
            quantity: cartProduct.quantity,
            cartQuantity: cartItem.cartQuantity,
            price: cartProduct.currentPrice,
            totalPrice,
          }}
        />
      </>
    );
  });

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="product-list">
          <TableHead className={classes.tableTitle}>
            <TableRow>
              <TableCell>PRODUCT DETAILS</TableCell>
              <TableCell align="right">AMOUNT</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartList}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartList;
