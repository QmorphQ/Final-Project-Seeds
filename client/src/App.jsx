import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { useTheme } from "@mui/styles";
import {fetchProducts} from "./store/thunks/products.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Home from "./app/pages/Home.jsx";
import Preloader from "./ui/components/Preloader/Prelodaer.jsx";
<<<<<<< HEAD

=======
>>>>>>> 72f35d9d781160a494eb44694ff40c7c4bd8d4cd


function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);
  const theme = useTheme();
  console.log(theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("Products.json"));
  }, []);
  if (downloadRequestState === "loading") {
   return <Preloader />
  } 
  return (
    <div>
      <Home 
        loading={downloadRequestState} 
        productList={productList} 
      />
    </div>
  );
}

export default App;
