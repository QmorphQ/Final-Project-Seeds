import { Box } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop.jsx.js";
import HeaderMobile from "./HeaderMobile.jsx.js";

export default function Header() {
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