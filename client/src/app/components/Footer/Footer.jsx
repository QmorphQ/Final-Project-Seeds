import { Box } from "@mui/material";
import FooterDesktop from "./FooterDesktop.jsx";
import FooterMobile from "./FooterMobile.jsx";
import classes from './FooterStyles.jsx';
// ==============================================================

export default function Footer() {
  return (
    <Box sx={classes.Footer}>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <FooterMobile />
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <FooterDesktop />
      </Box>
    </Box>
  );
}
