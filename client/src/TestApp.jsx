import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { addProduct, fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
import { loginCustomer } from "./store/thunks/customer.thunks";
import {
  addCart,
  addProductToCart,
  fetchCart,
} from "./store/thunks/cart.thunks";
import { addProductToWishlist, addWishlist, fetchWishlist } from "./store/thunks/wishlist.thunks";
// =======================================================================================================
// -------------------------------------------------------------------------------------------------------
// ++++++
// +++
// ================================
// Marker:
import {
  downloadProductsRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Filters from "./app/pages/Filters";

function TestWarning() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      sx={{
        position: "fixed",
        top: "1%",
        zIndex: "9999",
        left: "1%",
        color: "red",
      }}
    >
      <ViewInArIcon />
    </Box>
  );
}
// ------------------------------------------------- TEST APP ----------------------------------------
export default function TestApp() {
  // Pressets:
  const dispatch = useDispatch();
  // ----------------------------
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  // const newProduct = {
  //   "name": "teeeesssst from code",
  //   "currentPrice": 18.89,
  //   "categories": "herbs-mix",
  //   "description": "SEEDRA 15 Herb Seeds Variety Pack contains 15 herbs - Basil, Thyme, Lavender, Sage, Parsley, Chives, Rosemary, Tarragon, Oregano, Fennel, Mint, Cilantro, Dill, Savory, Lemon Mint. Free Tools - professional instructions, pH tester, 15 plant markers",
  //   "imageUrls": [
  //     "https://res.cloudinary.com/danbeavers/image/upload/v1643483461/A1JINiGVodL._AC_SL1500__f5hgdy.jpg"
  //   ],
  //   "quantity": 100,
  //   "currentRating": 4.5
  // }

  // useEffect(() => {
  //   dispatch(addProduct(newProduct));

  // }, []);

  // const login = {
  //   "loginOrEmail": "danbeavers",
  //   "password": "justbeavers"
  // }

  // useEffect(() => {
  //     dispatch(loginCustomer(login));

  //   }, []);

  // const newCart = {
  //   products: [
  //     {
  //       product: "caaaaaaaaart",
  //       cartQuantity: 1
  //     }
  //   ]
  // };

  // useEffect(() => {
  //   dispatch(addCart(newCart));

  // }, []);

  // useEffect(() => {
  //   dispatch(fetchCart());

  // }, []);

  // useEffect(() => {
  //   dispatch(addProductToCart("61f6c0f0481e16304cbbbd62"));
  // }, []);

  // const newWishlist = {
  //   products: ["5da463678cca382250dd7bc7", "5d73ad04fcad90130470f08b"]
  // };

  // useEffect(() => {
  //   dispatch(addWishlist(newWishlist));
  // }, []);

  // useEffect(() => {
  //   dispatch(addProductToWishlist("61f6c1df481e16304cbbbd77"));
  // }, []);
  
  // useEffect(() => {
  //   dispatch(fetchWishlist());
  // }, []);

  const downloadRequestState = useSelector(downloadProductsRequestStateSelector);
  const productList = useSelector(productsSelector);

  if (downloadRequestState === "loading") {
    return <Preloader />;
  }
  

  // ----------------------------
   return (
     <div>
      <Filters 
        loading={downloadRequestState} 
        productList={productList} 
      />
    </div>
  );
}
// =======================================================================================================
/*
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="description" element={<CurrentProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<AboutSeedra />} />
          <Route path="contact" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
*/
// =======================================================================================================
