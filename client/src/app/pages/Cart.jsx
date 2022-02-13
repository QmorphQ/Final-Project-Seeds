import {Box} from "@mui/material" 
import { useSelector } from "react-redux"; 
import PropTypes from 'prop-types';
import ProductCard from "../../ui/components/ProductCard/ProductCard.jsx";
import { downloadRequestStates } from "../constants/index";
 
const Cart = ({ loading }) => { 
    let totalPrice = 0;
    const products = useSelector(state => state.products.productList); 
    const cart = useSelector(state => state.cart.cart) 
 
    if(!products.length) { 
        return <p>Loading</p> 
    } if (!cart.length) { 
        return ( 
            <p> No Products in Cart</p>  
        ) 
    } 
 
    const cartList = cart.map(cartItem => { 
    const cartProduct = products.find(product => product.itemNo === cartItem.id)
    
    if(!cartProduct) return null

    totalPrice += Number(cartItem.cartQuantity) * Number(cartProduct.currentPrice); 

    console.log("cartItem:", cartItem);
    console.log("cartProduct", cartProduct)
     
    return <Box component="li" key={cartItem.id}>
        <ProductCard 
        product={{
            name: cartProduct.name,
            currentPrice: cartProduct.currentPrice,
            imageUrls:cartProduct.imageUrls,
            isProductPage: false,
            isFiltersPage: false,
            categories: cartProduct.categories,
            quantity: cartProduct.quantity,
            isBasket: true,
            discountPrice: cartProduct.discountPrice,
            itemNo: cartProduct.itemNo,
        }}
        loading={ loading }
        />
    </Box>
    })

    return (
        <Box component="main"> 
         <ul> 
             {cartList}  
         </ul>   
        <Box>
            {totalPrice}
        </Box> 
        </Box> 
    )
       
}

Cart.propTypes = {
    loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
}

export default Cart;