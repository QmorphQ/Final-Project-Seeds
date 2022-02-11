import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadProductsRequestStateSelector,
  productsSelector
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import fetchSlides from "./store/thunks/slides.thunks";
// =======================================================================
// Pages:
import AppLayout from './app/components/AppLayout/AppLayout.jsx';
// import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
import Filters from "./app/pages/Filters/Filters.jsx";
import ProductPage from './app/pages/ProductPage.jsx';
import TestCartPage from './app/pages/TestCartPage.jsx';
import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";
// =======================================================================

function App() {
  const downloadRequestState = useSelector(downloadProductsRequestStateSelector);
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
  return (

    <BrowserRouter>
    <Routes>
       <Route path="/" element={<AppLayout />} >
        <Route index element={<Home loading={downloadRequestState} productList={productList} />} />
        <Route path="/products" element={<Filters />} />
        <Route path="/preview" element={<ProductPage />} />
        <Route path="/cart" element={<TestCartPage />}/>
        <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;


