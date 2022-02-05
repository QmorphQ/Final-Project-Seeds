import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Logo from "./headerIcons/headerIcon/Logo.jsx";
import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
import MenuMobile from "../Menu/MenuMobile.jsx";
import MenuDesktop from "../Menu/MenuDesktop.jsx";
import LogIn from "../Forms/LogRegModal.jsx";
import SignUp from "../Forms/RegLogModal.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import { loginStateSelector } from "../../../store/selectors/selectors.js";
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
  const isLogin = useSelector(loginStateSelector);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{  boxShadow: "none" }}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Logo iconWidth={"100px"} iconHeight={"20px"} />
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <MenuDesktop />
          </Box>
         <Box sx={{ display: "flex", alignItems: "center"}}>
         <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <SearchAppBar sx={{ width: 500 }} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton>
              <Badge badgeContent={favoritesLength} color="primary">
                <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
              </Badge>
            </IconButton>
            <HeaderIcons />
            {!isLogin ? (
              <>
                <LogIn />
                <SignUp />
              </>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
              >
                <AccountCircle className={classes.iconsStyle} />
              </IconButton>
            )}
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



           
         </Box>
          
        </Toolbar>
      </AppBar>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        {isMenuOpen && <MenuMobile />}
      </Box>
    </Box>
  );
};

export default Header;
