import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadProductsRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import Preloader from "./ui/components/Preloader/Preloader.jsx";
import fetchSlides from "./store/thunks/slides.thunks";
import Cart from "./app/pages/Cart.jsx";

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

  if (downloadRequestState === "loading") {
    return <Preloader />;
  }
  
  return (
     <div>
      <Home 
        loading={downloadRequestState} 
        productList={productList} 
      />
      <Cart />
    </div>
  );
}

export default App;
