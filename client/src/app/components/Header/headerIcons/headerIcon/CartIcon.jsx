import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Link from "@mui/material/Link";
// import { useSelector } from 'react-redux';
import { Badge, IconButton, MenuItem } from "@mui/material";
import useStyles from "../../HeaderStyles.jsx";

const CartIcon = () => {
  const classes = useStyles();
  // const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const totalCartQuantity = 3;
  const RoutesName = {
    cart: "/shopping-cart",
  };

  return (
    <Link href={RoutesName.cart} underline="none">
      {
        <MenuItem className={classes.headerMenuItem}>
          <IconButton sx={{ mr: 4 }}>
            <Badge badgeContent={totalCartQuantity.toString()} color="primary">
              <ShoppingCartOutlinedIcon className={classes.iconsStyle} />
            </Badge>
          </IconButton>
        </MenuItem>
      }
    </Link>
  );
};

export default CartIcon;
