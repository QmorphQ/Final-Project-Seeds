import TabsSection from "../../ui/components/TabsSection/TabsSection"

const Home = ({loading, productList}) => {
  return (
    <>
      <TabsSection loading={loading} productList={productList} />
    </>
  )
}

export default Home;