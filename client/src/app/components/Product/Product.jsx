import RenderComponent from "../../hoc/RenderComponent.jsx";
import {ProductCardRender} from "../../../ui/components/ProductCard/ProductCard.jsx"
import { useFetch } from "../../hoc/useFetch.jsx";
import { API } from "../../constants/index";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [loading, data, error] = useFetch(`${API}products/${id}`);
  console.log(data);

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