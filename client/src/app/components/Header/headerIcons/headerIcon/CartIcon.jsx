import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Link from "@mui/material/Link";
import { Badge, IconButton, MenuItem } from "@mui/material";
import useStyles from "../../HeaderStyles.jsx";
import {fetchCart} from "../../../../../store/thunks/cart.thunks";
import {
  cartSelector
} from "../../../../../store/selectors/selectors";

const CartIcon = () => {
  const classes = useStyles();
  
  const cart = useSelector(cartSelector);
  
  
  
  // const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
    
     
    
  }, []);

console.log(cart);
//  const testCart = [
//     "4",
//     "1"
// ]
  
  // const {lengthCart} = cart;
  // console.log(lengthCart);
  
  
  const totalCartQuantity = cart?.length;
  
  const RoutesName = {
    cart: "/cart",
  };

  return (
    <Link href={RoutesName.cart} underline="none">
      {
        <MenuItem className={classes.headerMenuItem}>
          <IconButton>
            <Badge badgeContent={totalCartQuantity} color="primary" sx={{ mr: "0px"}}>
              <ShoppingCartOutlinedIcon className={classes.iconsStyle} />
            </Badge>
          </IconButton>
        </MenuItem>
      }
    </Link>
  );
};

export default CartIcon;
