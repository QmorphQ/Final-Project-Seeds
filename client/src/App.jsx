import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  allCategoriesSelector,
  mainCategoriesSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
// import Cart from "./app/pages/Cart.jsx";
import fetchSlides from "./store/thunks/slides.thunks";
// Pages:
import AppLayout from './app/components/AppLayout/AppLayout.jsx';
import Filters from "./app/pages/Filters/Filters.jsx";
import ProductPage from './app/pages/ProductPage.jsx';
// import TestCartPage from './app/pages/TestCartPage.jsx';
import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";
import LogIn from "./app/components/Forms/LogRegModal.jsx";
import Wishlist from "./app/pages/Wishlist";
import { fetchWishlist } from "./store/thunks/wishlist.thunks";
import { fetchCart } from "./store/thunks/cart.thunks";
// import Checkout from "./app/pages/Checkout.jsx"
// =======================================================================

function App() {
  const categories = useSelector(mainCategoriesSelector);
  const allCategories = useSelector(allCategoriesSelector);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCart());
  }, []);

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<AppLayout allMenuCategories={allCategories} menuCategories={categories} />} >
        <Route index element={<Home />} />
        <Route path="/products" element={<Filters />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<LogIn/>} />
        {/* <Route path="/cart" element={<TestCartPage />}/> */}
        {/* <Route path="*" element={<Checkout />} /> */}
        <Route path="*" element={<PageNotFound />} />
       </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;


