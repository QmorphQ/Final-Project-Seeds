import RenderComponent from "../../hoc/RenderComponent.jsx";
import {ProductCardRender} from "../../../ui/components/ProductCard/ProductCard.jsx"
import { useFetch } from "../../hoc/useFetch.jsx";
import { API } from "../../constants/index.js";

const Product = () => {
  const [loading, data, error] = useFetch(API + `products/822862`);

  return (
    <RenderComponent
      loading={loading}
      data={{...data, isProductPage: true}}
      renderSuccess={ProductCardRender}
      loadingFallback={<p>Loading...</p>}
      renderError={error}
    />
  )
}

export default Product;