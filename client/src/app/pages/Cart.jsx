import {Box} from "@mui/material" 
import { useSelector } from "react-redux"; 
 
export default function Cart() { 
    let totalPrice = 0; 
 
    const products = useSelector(state => state.products.downloadAllRequestState); 
    const cart = useSelector(state => state.cart.cart) 
 
    if(!products.length) { 
        return <p>Loading</p> 
    } if (!cart.length) { 
        return ( 
            <p> No Products in Cart</p>  
        ) 
    } 
 
    const cartList = cart.map(cartItem => { 
    const productList = products.find(product => product.id === cartItem.id) 
 
    totalPrice += cartItem.quantity * products.price; 
     
    return <li key={cartItem.id}>      
        <Box component="main"> 
         <ul> 
             {cartList}  
         </ul> 
         <div> 
             <div> 
                 <p>Total: {totalPrice}</p> 
            </div> 
       </div> 
     </Box> 
 
    </li>  
         
    })  
}