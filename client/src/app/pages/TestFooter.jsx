import { Box } from "@mui/material";
import FooterDesktop from "../components/ Footer/FooterDesktop.jsx";
import FooterMobile from "../components/ Footer/FooterMobile.jsx";

export default function TestFooter() {
  return (
    <>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <FooterMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <FooterDesktop />
      </Box>
    </>
  );
}
