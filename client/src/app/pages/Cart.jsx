import {Box, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux"; 
import PropTypes from 'prop-types';
import ProductCard from "../../ui/components/ProductCard/ProductCard.jsx";
import { downloadRequestStates } from "../constants/index";

const useStyles = makeStyles((theme) => ({
    yourCartHeading: {
        marginBottom: "40px !important",
        marginTop: "40px !important",
        fontWeight: "bold !important",
        marginLeft: "210px"
      },
    cartItem: {
        display: "flex",
        "& .MuiPaper-root": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            "& .MuiCardMedia-img": {
                width: "64px",
                height: "63px"
            },
            "& .MuiTypography-root": {
                fontSize: "14px",
                LineHeight: "24.95px"
            }
        }
    },
    cartContainer: {
        display: "flex",
        flexDirection: "row",
    },
    cartList: {
        display: "flex",
        flexDirection: "column",
        width: "750px",
        marginLeft: "165px"
    },

    totalResultContainer: {
        width: "350px",
        border: "1px",
        color: theme.palette.grey
    },

    orderSummeryHeading: {
        fontWeight: "bold !important",
        marginLeft: "34px"
    },

    totalPrice: {
        color: theme.palette.primary.main,
        width: "350px"
    }, 
}))
 
const Cart = ({ loading }) => { 
    let totalPrice = 0;
    const products = useSelector(state => state.products.productList) || []; 
    const cart = useSelector(state => state.cart.cart) || []
    const classes = useStyles();
 
    if (loading !== downloadRequestStates.SUCCESS) { 
        return <p>Loading</p> 
    } if (Array.isArray(cart) && !cart.length) { 
        return ( 
            <p> No Products in Cart</p>  
        ) 
    } 
    
    const cartList = cart.map(cartItem => { 
    const cartProduct = products.find(product => product._id === cartItem.id)
    
    if(!cartProduct) return null

    totalPrice += Number(cartItem.cartQuantity) * Number(cartProduct.currentPrice); 

     
    return <Box component="li" className={classes.cartItem} key={cartItem.id}>
        <ProductCard 
        product={{
            ...cartProduct,
            isBasket: true,
            cartQuantity: cartItem.cartQuantity
        }}
        loading={ loading }
        />
    </Box>
    })

    

    return (
        <>
            <Typography 
                className={classes.yourCartHeading}
                variant="h2"
                component="h2">
                Your cart.
            </Typography>
            <Box component="main" className={classes.cartContainer}> 
            <ul className={classes.cartList}> 
                {cartList}  
            </ul>   
            <Box className={classes.totalResultContainer}>
                <Typography
                className={classes.orderSummeryHeading}
                variant="h3"
                component="h3">
                    Order Summery

                </Typography>
                <Box className={classes.totalPrice}>
                    {totalPrice.toFixed(2)}
                </Box> 
            </Box>
        </Box> 
        
        </>
    )
       
}

Cart.propTypes = {
    loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
}

export default Cart;