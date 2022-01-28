import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import fetchProducts from "./store/thunks/products.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home";


function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("Products.json"));
  }, []);

  return (
    <>
      <Home 
        loading={downloadRequestState} 
        productList={productList} 
      />
    </>
    
  );
}
export default App;
