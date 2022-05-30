import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from '../Header/Header.jsx';
import Footer from '../ Footer/Footer.jsx';
import classes from './AppLayoutStyle.jsx';
import { downloadCategoriesRequestStateSelector } from "../../../store/selectors/selectors.js";
import { useSelector } from "react-redux";
import Preloader from "../../../ui/components/Preloader/Preloader.jsx";

export default function AppLayout({ menuCategories, allMenuCategories }) {

  return (
    <Box sx={classes.AppLayout}>
      <Header categories={menuCategories} allCategories={allMenuCategories} />
      <Outlet />
      <Footer />
    </Box>
  );
}

AppLayout.propTypes = {
  menuCategories: PropTypes.array,
  allMenuCategories: PropTypes.array
}