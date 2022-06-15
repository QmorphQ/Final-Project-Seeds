import {
  TableCell,
  TableRow,
  Button,
  ButtonGroup,
  FilledInput,
} from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

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
      <TableCell align="right">{product.quantity}</TableCell>
      <TableCell align="right">${product.price}</TableCell>
      <TableCell align="right">${product.totalPrice}</TableCell>
      <TableCell>
        <ButtonGroup
          color="primary"
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button
            // onClick={() => {
            //   setProductAmount((prevProductAmount) => +prevProductAmount - 1);
            // }}
            variant="text"
            // disabled={productAmount <= 1}
          >
            {"-"}
          </Button>
          <FilledInput
            inputProps={{ sx: { textAlign: "center" } }}
            disableUnderline={true}
            hiddenLabel={true}
            // value={productAmount}
            // onChange={(e) => setProductAmount(+e.target.value)}
            id="product-amount"
            // className={productPageClasses.productAmountInput}
          />
          <Button
            onClick={() => {
              //   setProductAmount(+productAmount + 1);
            }}
            variant="text"
            // disabled={productAmount >= quantity}
          >
            {"+"}
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

export default CartItem;
