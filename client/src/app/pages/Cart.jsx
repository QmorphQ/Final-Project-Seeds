import {Box} from "@mui/material"
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import RenderComponent  from "../hoc/RenderComponent.jsx";
import ProductsListSection from "../../ui/components/ProductsListSection/ProductsListSection.jsx";
import ErrorHandler from "../components/ErrorHandler/ErrorHandler.jsx";

const Cart = () => {
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

    if (!productList) return null;
    
    totalPrice += cartItem.quantity * products.price;
    
    console.log(cartList);
    
    return <li key={cartItem.id}>     
        <RenderComponent
            loading={loading}
            data={{products: productList}}
            renderSuccess={ProductsListSection}
            loadingFallback={<p>Loading...</p>}
            renderError={<ErrorHandler errorMessage="There is some problem with products downloading"/>}
            />    
    </li> 
        
    }) 

    RenderComponent.propTypes = {
        loading: PropTypes.string,
        productList: PropTypes.array,
      };

    return <>
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
</>

}


export default Cart;