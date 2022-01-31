import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import {fetchProducts} from "./store/thunks/products.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";


function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("/Products.json"));
  }, []);
  if (downloadRequestState === "loading") {
   return <Preloader />
  } 
  return (
    <>
      <PageNotFound/>
    {/* <div>
      <Home 
        loading={downloadRequestState} 
        productList={productList} 
      />
    </div> */}
    </>
  );
}

export default App;
