import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { fetchProducts } from "./store/thunks/products.thunks";
import fetchCategories from "./store/thunks/catalog.thunks";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
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
      <ViewInArIcon />
    </Box>
  );
}
// ------------------------------------------------- TEST APP ----------------------------------------
export default function TestApp() {
  // Pressets:
    const dispatch = useDispatch();
  // ----------------------------
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);
  // ----------------------------
  return (
    <>
      <TestWarning />
      <Preloader />
    </>
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
