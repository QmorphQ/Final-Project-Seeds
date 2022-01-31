import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
// import AppLayout from "./app/components/AppLayout/AppLayout.jsx"; --MVP - add routes

function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (downloadRequestState === "loading") {
    return <Preloader />;
  }
  return (
      <div>
        <Home loading={downloadRequestState} productList={productList} />
      </div>
  );
}

/*

Don't delete!!!. After creating Header & Footer with links as props will be connected. --MVP

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
export default App;
