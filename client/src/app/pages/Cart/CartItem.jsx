import {
  TableCell,
  TableRow,
  ButtonGroup,
  Button,
  FilledInput,
} from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  changeProductQuantity,
  decreaseProductQuantity,
  deleteProductFromCart,
} from "../../../store/thunks/cart.thunks";

const useStyles = makeStyles(() => ({
  tableRow: {
    "& .MuiTableCell-root": {
      paddingTop: "30px",
      paddingBottom: "30px",
    },
  },
  productDetails: {
    display: "flex",
  },
  cartImage: {
    width: "64px",
    height: "63px",
    paddingRight: "16px",
  },
  productName: {
    textTransform: "capitalize",
  },
}));

const CartItem = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <TableRow
      className={classes.tableRow}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <div className={classes.productDetails}>
          <img
            className={classes.cartImage}
            src={product.img}
            alt={product.name}
          />
          <p className={classes.productName}>{product.name}</p>
        </div>
      </TableCell>
      <TableCell align="right">
        <ButtonGroup
          color="primary"
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              dispatch(decreaseProductQuantity(product.id));
            }}
            variant="text"
            disabled={product.quantity <= 1}
          >
            {"-"}
          </Button>
          <FilledInput
            inputProps={{ sx: { textAlign: "center" } }}
            disableUnderline={true}
            hiddenLabel={true}
            value={product.cartQuantity}
            onChange={(e) =>
              dispatch(changeProductQuantity(product.id, +e.target.value))
            }
          />
          <Button
            onClick={() => {
              dispatch(addProductToCart(product.id));
            }}
            variant="text"
            // disabled={product.quantity >= cartQuantity}
          >
            {"+"}
          </Button>
        </ButtonGroup>
      </TableCell>
      <TableCell align="right">${product.price}</TableCell>
      <TableCell align="right">${product.totalPrice.toFixed(2)}</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(deleteProductFromCart(product.id));
          }}
        >
          delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

CartItem.propTypes = {
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

export default CartItem;
