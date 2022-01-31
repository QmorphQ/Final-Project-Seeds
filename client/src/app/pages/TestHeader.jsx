import { Box } from "@mui/material";
import HeaderMobile from "../components/Header/HeaderMobile.jsx";
import HeaderDesktop from "../components/Header/HeaderDesktop.jsx";

export default function TestHeader() {
  return (
    <>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeaderMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeaderDesktop />
      </Box>
    </>
  );
}
