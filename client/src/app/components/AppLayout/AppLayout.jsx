import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from '../Header/Header.jsx';
import Main from "../Main/Main.jsx";
import Footer from '../Footer/Footer.jsx';
import ScrollToTopBtn from "../../../ui/components/ScrollToToBtn/ScrollToTopBtn.jsx";
import classes from './AppLayoutStyle';

export default function AppLayout() {

  return (
    <Box sx={classes.AppLayout}>
      <Header />
      <Main><Outlet /></Main>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
};