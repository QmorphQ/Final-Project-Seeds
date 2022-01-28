import { Box } from "@mui/material";
import HeaderMobile from "./ui/components/Header/HeaderMobile.jsx";
import HeaderDesktop from "./ui/components/Header/HeaderDesktop.jsx";
import FooterDesktop from "./ui/components/ Footer/FooterDesktop.jsx";
import FooterMobile from "./ui/components/ Footer/FooterMobile.jsx";


function App() {
  return (
    <div>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeaderMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeaderDesktop />
     </Box>
     <Box display={{ xs: "block", sm: "block", md: "none" }} >
        <FooterMobile />
     </Box>
     <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <FooterDesktop  />
     </Box>
     
    </div>
  );
}
export default App;
