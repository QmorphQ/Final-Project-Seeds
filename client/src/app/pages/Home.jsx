import { Box } from "@mui/material";
import TabsSection from "../../ui/components/TabsSection/TabsSection.jsx"
import HeaderMobile from "../../ui/components/Header/HeaderMobile.jsx";
import HeaderDesktop from "../../ui/components/Header/HeaderDesktop.jsx";
import FooterDesktop from "../../ui/components/ Footer/FooterDesktop.jsx";
import FooterMobile from "../../ui/components/ Footer/FooterMobile.jsx";
import ProductsList from "../../ui/components/ProductsList/ProductsList.jsx";

/* eslint-disable  */
const Home = ({loading, productList}) => {
  return (
    <>

      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeaderMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeaderDesktop />
     </Box>

     <TabsSection loading={loading} productList={productList} />
     <ProductsList products={productList} loading={loading} />
       
     <Box display={{ xs: "block", sm: "block", md: "none" }} >
        <FooterMobile />
     </Box>
     <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <FooterDesktop  />
     </Box>
    </>
  )
}

export default Home;