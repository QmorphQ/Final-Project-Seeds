import ProductsList from "../components/ProductsList/ProductsList";

const Wishlist = ({ wishlist, loading }) => {

  return (
    <ProductsList loading={loading} productList={wishlist?.products} totalLength={wishlist?.products.length} />
  )
}

export default Wishlist;