import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadProductsRequestStateSelector,
  productsSelector,
  allCategoriesSelector,
  mainCategoriesSelector
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
import fetchSlides from "./store/thunks/slides.thunks";

function App() {
  const downloadRequestState = useSelector(downloadProductsRequestStateSelector);
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

  if (downloadRequestState === "loading") {
    return <Preloader />;
  }

  console.log(productList);
  
  return (
     <div>
  
      <Home 
        loading={downloadRequestState} 
        productList={productList} 
        allCategories={allCategories} 
        categories={categories}
      />
    </div>
  );
}

export default App;
