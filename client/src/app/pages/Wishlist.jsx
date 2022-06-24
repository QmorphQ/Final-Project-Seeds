import { useSelector } from "react-redux";
import { downloadWishlistRequestStateSelector, wishlistSelector } from "../../store/selectors/selectors";
import ProductsListSection from "../../ui/components/ProductsListSection/ProductsListSection.jsx";
// import Spinner from "../../ui/components/Spinner/Spinner.jsx";
import ErrorHandler from "../components/ErrorHandler/ErrorHandler.jsx";
// import ProductsList from "../components/ProductsList/ProductsList";
import RenderComponent from "../hoc/RenderComponent.jsx";

const Wishlist = () => {

  const wishlist = useSelector(wishlistSelector);
  const downloadWishlistRequest = useSelector(downloadWishlistRequestStateSelector);

  return (
    <RenderComponent
      loading={downloadWishlistRequest}
      data={wishlist}
      renderSuccess={ProductsListSection}
      loadingFallback={<ProductsListSection isLoading={true} productsNumber={3} />}
      renderError={<ErrorHandler errorMessage="There is some problem with products downloading"/>}
    />
  )
}

export default Wishlist;