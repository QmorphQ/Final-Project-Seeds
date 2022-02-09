import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadProductsRequestStateSelector,
  productsSelector,
  allCategoriesSelector,
  mainCategoriesSelector
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import fetchSlides from "./store/thunks/slides.thunks";
import AppLayout from './app/components/AppLayout/AppLayout.jsx';
import Filters from "./app/pages/Filters/Filters.jsx";
import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";

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

  
  
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AppLayout />} />
    <Route index element={<Home loading={downloadRequestState} productList={productList} allCategories={allCategories} categories={categories}  />} />
    <Route path="products" element={<Filters />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           <Route path="products" element={<AllProducts />} />
//           <Route path="description" element={<CurrentProduct />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="about" element={<AboutSeedra />} />
//           <Route path="contact" element={<Page404 />} />
//           <Route path="*" element={<Page404 />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
