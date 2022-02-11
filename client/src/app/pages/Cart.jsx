import {Box} from "@mui/material" 
import { useSelector } from "react-redux"; 
import ProductCard from "../../ui/components/ProductCard/ProductCard.jsx" 
 
const Cart = () => { 
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

    totalPrice += cartItem.quantity * cartProduct.price; 
     
    return <Box component="li" key={cartItem.id}>
        <ProductCard 
        name={cartProduct.name}
        currentPrice={cartProduct.currentPrice}
        imageUrls={cartProduct.imageUrls}
        isProductPage={false}
        isFiltersPage={false}
        categories={cartProduct.categories}
        quantity={cartProduct.quantity}
        isBasket={true}
        discountPrice={cartProduct.discountPrice}
        itemNo={cartProduct.itemNo}
        />
    </Box>
    })
console.log(totalPrice);

    return (
        <Box component="main"> 
         <ul> 
             {cartList}  
         </ul>   
        </Box> 
    )
       
}

export default Cart;