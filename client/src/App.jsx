import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import fetchProducts from "./store/thunks/products.thunks";
import {
  downloadRequestStateSelector,
  productsSelector,
} from "./store/selectors/selectors";
import ProductsList from "./ui/components/ProductsList/ProductsList.jsx";

function App() {
  return (
    <>
      <ProductsList products={productList} loading={downloadRequestState} />
      <div>
      <h1 style={{textAlign: "center"}}>APP TEST</h1>{/* <---test */}
      <ul>
      {downloadRequestState === "success" &&
      productList.map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>
      <button onClick={ () => console.log(productsSelector)}>GET LOG OF PRODUCTS</button>{/* <---test */}       
      </div>
    </>
  );
}
export default App;
