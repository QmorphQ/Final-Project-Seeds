import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { fetchCart } from "../../../store/thunks/cart.thunks";
import {
    cartSelector
  } from "../../../store/selectors/selectors";
  // import {addProductToCart} from "../../../store/thunks/cart.thunks";


const Cart = () => {








    

const cart = useSelector(cartSelector);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchCart());
    console.log(cart);
   
  }, []);

    console.log(cart);
    
    

   





  return (
    <>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </>
    
  );
};

export default Cart;
