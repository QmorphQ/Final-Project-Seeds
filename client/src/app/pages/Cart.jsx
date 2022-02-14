import {Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux"; 
import PropTypes from 'prop-types';
import ProductCard from "../../ui/components/ProductCard/ProductCard.jsx";
import { downloadRequestStates } from "../constants/index";

const useStyles = makeStyles((theme) => ({
    cartItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    cartContainer: {
        display: "flex",
        flexDirection: "row"
    },
    cartList: {
        display: "flex",
        flexDirection: "column"
    },
    totalPrice: {
        color: theme.palette.primary.main
    }
}))
 
const Cart = ({ loading }) => { 
    let totalPrice = 0;
    const products = useSelector(state => state.products.productList); 
    const cart = useSelector(state => state.cart.cart) 
    const classes = useStyles();
 
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

     
    return <Box component="li" className={classes.cartItem} key={cartItem.id}>
        <ProductCard 
        product={{
            name: cartProduct.name,
            currentPrice: cartProduct.currentPrice,
            imageUrls: cartProduct.imageUrls,
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
        <Box component="main" className={classes.cartContainer}> 
            <ul className={classes.cartList}> 
                {cartList}  
            </ul>   
            <Box className={classes.totalPrice}>
                {totalPrice}
            </Box> 
        </Box> 
    )
       
}

Cart.propTypes = {
    loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
}

export default Cart;