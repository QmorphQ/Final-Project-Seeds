import { Box } from "@mui/material";
import LogReg from "../Forms/LogRegModal.jsx";
import HeaderDesktop from "./HeaderDesktop.jsx";
import HeaderMobile from "./HeaderMobile.jsx";

export default function Header() {
  return (
    <>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeaderMobile />
        <LogReg/>
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeaderDesktop />
        <LogReg/>
      </Box>
    </>
  );
}
