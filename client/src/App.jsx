import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
// import Home from "./app/pages/Home.jsx";/* MVP - switch to HomePage  */
import HomePage from "./app/pages/HomePage.jsx";
import TestHeader from "./app/pages/TestHeader.jsx";
import TestFooter from "./app/pages/TestFooter.jsx";
import AppLayout from "./app/pages/AppLayout.jsx";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";

// function App() {
//   const downloadRequestState = useSelector(downloadRequestStateSelector);
//   const productList = useSelector(productsSelector);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, []);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);
//   if (downloadRequestState === "loading") {
//     return <Preloader />;
//   }
//   return (
//     <BrowserRouter>
//     <div>
//       <Home loading={downloadRequestState} productList={productList} />
//     </div>
//     </BrowserRouter>
//   );
// }

// function App() {
//   const downloadRequestState = useSelector(downloadRequestStateSelector);
//   const productList = useSelector(productsSelector);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, []);

//   if (downloadRequestState === "loading") {
//     return <Preloader />;
//   }
//   return (
//     <>
//       <TestHeader />
//       <Routes>
//         <Route to={"/"}/>
//       </Routes>
//       <TestFooter />
//     </>
//   );
// }

const Home = () => <div style={{width: "500px", height: "500px", fontSize: "5em", backgroundColor: "teal", textAlign: "center", margin: "auto"}}>home</div>
const Blogs =() => <div style={{width: "500px", height: "500px", fontSize: "5em", backgroundColor: "yellow", textAlign: "center", margin: "auto"}}>blogs</div>
const Contact =() => <div style={{width: "500px", height: "500px", fontSize: "5em", backgroundColor: "red", textAlign: "center", margin: "auto"}}>contact</div>
const NoPage =() => <div>.........</div>


function App() {
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
