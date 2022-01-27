import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import fetchProducts from "./store/thunks/products.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import Icon from "./ui/components/Icon/Icon.jsx";


function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
    <h1 style={{textAlign: "center"}}>APP TEST</h1>{/* <---test */}
    <ul>
      {downloadRequestState === "success" &&
        productList.map((product) => <li key={product.id}>{product.name}</li>)}
    </ul>
    <button onClick={ () => console.log(productsSelector)}>GET LOG OF PRODUCTS</button>{/* <---test */}

    <button style={{color: "red"}}>
      <Icon icon={Icon.icons.Strawberry}/>
    </button>

    </div>

    
  );
}
export default App;
