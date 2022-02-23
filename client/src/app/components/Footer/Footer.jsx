import { Box } from "@mui/material";
import FooterDesktop from "./FooterDesktop.jsx";
import FooterMobile from "./FooterMobile.jsx";

export default function Footer() {
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
