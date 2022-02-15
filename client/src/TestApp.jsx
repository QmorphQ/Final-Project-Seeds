import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadProductsRequestStateSelector,
  productsSelector,
  allCategoriesSelector,
  mainCategoriesSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import fetchSlides from "./store/thunks/slides.thunks";
// =======================================================================
// Pages:
import AppLayout from "./app/components/AppLayout/AppLayout.jsx";
import Block from "./DevHelper/TestComponents/Block.jsx";
// import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
import Icon from "./ui/components/Icon/Icon.jsx";
import Filters from "./app/pages/Filters/Filters.jsx";
import ProductPage from "./app/pages/ProductPage.jsx";
import TestCartPage from "./app/pages/TestCartPage.jsx";
import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";
// =====================================================================

// =======================================================================================================
// -------------------------------------------------------------------------------------------------------
// ++++++
// +++
// ================================
// Marker:
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
      <FlashOnIcon />
    </Box>
  );
}
// ------------------------------------------------- TEST APP ----------------------------------------
export default function TestApp() {
  // Pressets:
  const downloadRequestState = useSelector(
    downloadProductsRequestStateSelector
  );
  const categories = useSelector(mainCategoriesSelector);
  const allCategories = useSelector(allCategoriesSelector);
  const productList = useSelector(productsSelector);
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
   
  }, []);
  return (
    <Box sx={{width: '98.5vw', height: '98.3vh', margin: 'auto', border: '1px black solid'}}>
      {<Icon viewBox={'37 -1 24 24'} sx={{width: '98px', viewPort: '30px', border: '1px solid black', margin: '0', fontSize: '20,65px'}} icon={Icon.icons.Logo} />}
      <TestWarning />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AppLayout allMenuCategories={allCategories}  menuCategories={categories}/> }>
            <Route path="/products" element={<Block />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
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
