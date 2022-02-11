import { useParams } from "react-router-dom";
import Product from "../components/Product/Product.jsx";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews.jsx";

const scores = {
  5: 50,
  4: 25,
  3: 20,
  2: 15,
  1: 10
}

const ProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <Product id={id} />
      <CustomerReviews total={120} scores={scores} />
    </>
  )
}

export default ProductPage;