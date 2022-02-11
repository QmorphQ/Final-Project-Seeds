// Import:
// =======================================================================================
// ------------------------------------------------------------------------------------
// Libraries Components:
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import { Link as RoutLink } from 'react-router-dom';
// ------------------------------------------------------------------------------------
// MUI Components:
import { Box, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// ------------------------------------------------------------------------------------
// React Components:
// import Logo from "./headerIcons/headerIcon/Logo.jsx";
// import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
// import MenuMobile from "../Menu/MenuMobile.jsx";
// import MenuDesktop from "../Menu/MenuDesktop.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import { loginStateSelector } from "../../../store/selectors/selectors";
import LogoBtn from "./HeaderBtns/LogoBtn.jsx";
import CartBtn from "./HeaderBtns/CartBtn.jsx";
import HeaderNavMenu from "./HeaderNavMenu/HeaderNavMenu.jsx";
// ++++++++++++++++
// Auth Component:
import LogIn from "../Forms/LogRegModal.jsx";
import SignUp from "../Forms/RegLogModal.jsx";
// ++++++++++++++++
// ------------------------------------------------------------------------------------
// Styles:
import classes from "./HeaderStyles.jsx";
// =======================================================================================

const Header = () => {
  const favoritesLength = 0;
  const isLogin = useSelector(loginStateSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  // Component did mount:
  useEffect(() => {
    console.log('isLogin: ' ,isLogin);
  }, [isLogin])
  // =============================================== Render ==============================================
  return (
    <Box sx={classes.Header}>
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LogoBtn />
          <Box
            display={{ xs: "none", sm: "none", md: "block" }}
            sx={{ border: "1px solid green" }}
          >
            {/* <MenuDesktop /> */}
            <HeaderNavMenu resolution={'desctop'} parentsListWithoutChildren={[["products", "all"],
    ["preview", "bundles"]]} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid red",
            }}
          >
            <Box display={{ xs: "none", sm: "none", md: "block" }}>
              <SearchAppBar sx={{ width: 500 }} />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "flex-start",
              }}
            >
              {isLogin && (
                <IconButton>
                  <Badge badgeContent={favoritesLength} color="primary">
                    <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
                  </Badge>
                </IconButton>
              )}
              <CartBtn />
              <Box display={{ xs: "none", sm: "none", md: "flex" }}>
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
                    <AccountCircle />
                  </IconButton>
                )}
              </Box>
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
        {isMenuOpen && <HeaderNavMenu resolution={'mobile'} />}
      </Box>
    </Box>
  );
};

// =====================================================================
// Header.default = {
//   allCategories: [{parentId:'bundles', name: ['herbs-mono', 'herbs-mix']}, {parentId:'vegetables',name: ['vegetables-mono', 'vegetables-mix']}, {parentId:'flowers', name: ['flowers-mono', 'flowers-mix']}],
//   categories: [['products', 'all'], ['preview', 'bundles']],
// }

// Header.propTypes = {
//   allCategories: PropTypes.arrayOf(
//     PropTypes.shape({
//       parentID: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   categories: PropTypes.array,
// };

export default Header;
