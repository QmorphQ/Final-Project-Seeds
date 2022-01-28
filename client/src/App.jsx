import { Box } from "@mui/material";
import HeaderMobile from "./ui/components/Header/HeaderMobile.jsx";
import HeaderDesktop from "./ui/components/Header/HeaderDesktop.jsx";
import FooterDesktop from "./ui/components/ Footer/FooterDesktop.jsx";
import FooterMobile from "./ui/components/ Footer/FooterMobile.jsx";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import {fetchProducts} from "./store/thunks/products.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home";
import ProductsList from "./ui/components/ProductsList/ProductsList.jsx";

function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("Products.json"));
  }, []);

  return (
    <div>
      <Home 
        loading={downloadRequestState} 
        productList={productList} 
      />
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeaderMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeaderDesktop />
     </Box>

     <ProductsList products={productList} loading={downloadRequestState} />
       
     <Box display={{ xs: "block", sm: "block", md: "none" }} >
        <FooterMobile />
     </Box>
     <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <FooterDesktop  />
     </Box>
     
    </div>
  );
}
export default App;
