import React from "react";

function App() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("/Products.json"));  
  }, []);

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
