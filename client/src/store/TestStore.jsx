import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  filterProductsByCategory,
} from "./thunks/products.thunks";

import { addCustomer, loginCustomer } from "./thunks/customer.thunk";

import {
  downloadRequestStateSelector,
  productsSelector,
  customersSelector
} from "./selectors/selectors";

function TestStore() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);
  const customerInfo = useSelector(customersSelector);
  
  console.log(customerInfo);

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
  const newCustomer = {
    "firstName": "Valeron",
    "lastName": "Drinkins",
    "login": "valeron",
    "email": "valeron.it@gmail.com",
    "password": "justdrink",
    "telephone": "+380679007060",
    "gender": "male",
    "isAdmin": false
};

  // useEffect(() => {
  //   dispatch(addCustomer(newCustomer));
  // }, []);

  const userData = {
    loginOrEmail: "valeron",
    password: "justdrink"
  };

  
  return (
    <div>
      <ul>
        {downloadRequestState === "success" &&
          productList.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
      <button onClick={() => dispatch(filterProductsByCategory("herbs"))}>
        ONLY HERBS
      </button>
      <button onClick={() => dispatch(loginCustomer(userData))}>
        LOGIN
      </button>
      {/* <---test */}
    </div>
  );
}
export default TestStore;
