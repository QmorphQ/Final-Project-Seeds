import { useState } from "react";
import { Box, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Logo from "./headerIcons/headerIcon/Logo.jsx";
import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
import MenuMobile from "../Menu/MenuMobile.jsx";
import MenuDesktop from "../Menu/MenuDesktop.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
// import { downloadRequestStates } from "../../constants";
// import {
//   downloadCategoriesRequestStateSelector,
//   mainCategoriesSelector,
//   allCategoriesSelector
// } from "../../../store/selectors/selectors";
// import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
// import fetchCategories from "../../../store/thunks/catalog.thunks";


const Header = () => {
  // const downloadRequestState = useSelector(
  //   downloadCategoriesRequestStateSelector
  // );
  // if (downloadRequestState === downloadRequestStates.LOADING)
  //   return <div>Loading...</div>; // Here must be a loader
  // if (downloadRequestState === downloadRequestStates.ERROR)
  //   return (
  //     <ErrorHandler
  //       errorMessage={
  //         "There is some problem with downloading product categories"
  //       }
  //     />
  //   );

  //   const categories = useSelector(mainCategoriesSelector);
  //   const allCategories = useSelector(allCategoriesSelector);
   
  const favoritesLength = 0;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Logo iconWidth={"100px"} iconHeight={"20px"} />
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
      <MenuDesktop />
        </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <SearchAppBar  sx={{ width: 500 }}/>
      </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton>
              <Badge badgeContent={favoritesLength} color="primary">
                <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
              </Badge>
            </IconButton>
            <HeaderIcons />
          </Box>
          <Box display={{ xs: "block", sm: "block", md: "none" }}>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
      {isMenuOpen && <MenuMobile /> }
      </Box>
      </Box >
      
  );
};

export default Header;
