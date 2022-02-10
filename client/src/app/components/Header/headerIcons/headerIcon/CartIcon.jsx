import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "@mui/material/Link";
import { Badge, IconButton, MenuItem } from "@mui/material";
// import useStyles from "../../HeaderStyles.jsx";
import classes from "../../HeaderStyles.jsx";
import { fetchCart } from "../../../../../store/thunks/cart.thunks";
import { cartSelector } from "../../../../../store/selectors/selectors";

const CartIcon = () => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const totalCartQuantity = cart?.length;
  const RoutesName = {
    cart: "/cart",
  };
  return(
    <Link href={RoutesName.cart} underline="none">
      {
        <MenuItem>
          <IconButton>
            <Badge
              badgeContent={totalCartQuantity}
              color="primary"
              sx={{ mr: "0px" }}
            >
              <ShoppingCartOutlinedIcon sx={classes.iconsStyle} />
            </Badge>
          </IconButton>
        </MenuItem>
      }
    </Link>
  );
};

export default CartIcon;
