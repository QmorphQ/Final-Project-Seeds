import RenderComponent from "../../hoc/RenderComponent.jsx";
import {ProductCardRender} from "../../../ui/components/ProductCard/ProductCard.jsx"
import { useFetch } from "../../hoc/useFetch.jsx";

const Product = () => {
  const [loading, data, error] = useFetch("./CurrentProduct.json");

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