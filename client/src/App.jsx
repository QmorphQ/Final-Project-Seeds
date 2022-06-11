import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import { getUserDetails } from "./store/thunks/customer.thunks";
import {
  downloadProductsRequestStateSelector,
  productsSelector, 
  isAdminStateSelector, 
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import Cart from "./app/pages/Cart.jsx";
import fetchSlides from "./store/thunks/slides.thunks";
// Pages:
import AppLayout from './app/components/AppLayout/AppLayout.jsx';
// import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
import Filters from "./app/pages/Filters/Filters.jsx";
import ProductPage from './app/pages/ProductPage.jsx';
// import TestCartPage from './app/pages/TestCartPage.jsx';
// import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";
import LogIn from "./app/components/Forms/LogRegModal.jsx";
import SignUp from "./app/components/Forms/RegLogModal.jsx";
import PersonalInfo from "./app/components/Forms/PersonalInfo.jsx";
import { RequireAuth } from "./app/hoc/RequireAuth.jsx";
import Checkout from "./app/pages/Checkout.jsx"
import { CheckAuth } from "./app/hoc/CheckAuth.jsx";
import AddProduct from "./app/components/AdminPanel/AddProduct.jsx";
// =======================================================================

function App() {
  const downloadRequestState = useSelector(downloadProductsRequestStateSelector);
  const productList = useSelector(productsSelector); 
  const isAdmin = useSelector(isAdminStateSelector);

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []); 

  useEffect(() => {
    if (localStorage.jwt) {
      dispatch(getUserDetails()); 
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AppLayout />} >
              <Route index element={<Home loading={downloadRequestState} productList={productList} />} />
              <Route path="/products" element={<Filters />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="login" element={<CheckAuth><LogIn/></CheckAuth>} />
              <Route path="sign-up" element={<CheckAuth><SignUp/></CheckAuth>} />
              <Route path="settings" element={<RequireAuth><PersonalInfo/></RequireAuth>} />
              <Route path="/cart" element={<Cart loading={downloadRequestState}/>}/>
              <Route path="checkout" element={<Checkout />} />
              {isAdmin && <Route path="/add-product" element={<AddProduct />} />}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;