import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { fetchCart, addCart } from "../../../store/thunks/cart.thunks";
import {
    cartSelector
  } from "../../../store/selectors/selectors";
  import {addProductToCart} from "../../../store/thunks/cart.thunks";


const Cart = () => {








    

const cart = useSelector(cartSelector);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchCart());
    dispatch(addCart())
    
  }, []);

    console.log(cart);
    
    const onClick = () => {
      console.log("click");

    }



  return (
    <>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon onClick={onClick} />
      </IconButton>
    </>
    
  );
};

export default Cart;
