import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from '../Header/Header.jsx';
import Footer from '../ Footer/Footer.jsx';
import classes from './AppLayoutStyle.jsx';

export default function AppLayout({ menuCategories, allMenuCategories }) {
  return (
    <Box sx={classes.AppLayout}>
      <Header categories={menuCategories} allCategories={allMenuCategories} />
      <Outlet />
      <Footer />
    </Box>
  );
}
