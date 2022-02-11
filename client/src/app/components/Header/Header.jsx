// Import:
// =======================================================================================
// ------------------------------------------------------------------------------------
// Libraries Components:
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import { Link as RoutLink } from 'react-router-dom';
// ------------------------------------------------------------------------------------
// MUI Components:
import ClickAwayListener from '@mui/material/ClickAwayListener';
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
// import LogIn from "../Forms/LogRegModal.jsx";
// import SignUp from "../Forms/RegLogModal.jsx";
// ++++++++++++++++
// ------------------------------------------------------------------------------------
// Styles:
import classes from "./HeaderStyles.jsx";
// =======================================================================================

const Header = ({ arrNoChildrenBlock, arrWithChildrenBlock, logoPath}) => {
  const favoritesLength = 0;
  const isLogin = useSelector(loginStateSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMobileMenuOpen = (e) => (console.log(e.target) ,setIsMenuOpen(true));
     
  const handleClickAway = () => setIsMenuOpen(false);
    
  // Component did mount:
  useEffect(() => {
    console.log('isLogin: ' ,isLogin)
  }, [isLogin]);
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
          {logoPath ? <LogoBtn linkPath={logoPath}  /> : <LogoBtn />}
          <Box
            display={{ xs: "none", sm: "none", md: "block" }}
            sx={{ border: "1px solid green" }}
          >
            {/* <MenuDesktop /> */}
            <HeaderNavMenu resolution={'desktop'} parentsListWithoutChildren={arrNoChildrenBlock} parentsListWithChildren={arrWithChildrenBlock}/>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid red",
            }}
          >
            <Box display={{ xs: "none", sm: "none", md: "block" }}>
              <SearchAppBar />
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
                   {/* <LogIn />
                    <SignUp /> */}
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
            <Box id='menuBtn' display={{ xs: "block", sm: "block", md: "none" }}>
              <IconButton
               id='menuBtn'
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
        {isMenuOpen &&<ClickAwayListener onClickAway={handleClickAway}><Box>  <HeaderNavMenu  resolution={'mobile'} parentsListWithoutChildren={arrNoChildrenBlock} parentsListWithChildren={arrWithChildrenBlock}/></Box></ClickAwayListener>}
       
      </Box>
      
    </Box>
  );
};

// =====================================================================
Header.defaultProps = {
  arrWithChildrenBlock: [{parentId:'herbs', name: ['herbs-mono', 'herbs-mix']}, {parentId:'vegetables',name: ['vegetables-mono', 'vegetables-mix']}, {parentId:'flowers', name: ['flowers-mono', 'flowers-mix']}],
  arrNoChildrenBlock: [['products', 'all'], ['products/bundles', 'bundles']],
}

Header.propTypes = {
  arrWithChildrenBlock: PropTypes.arrayOf(
    PropTypes.shape({
      parentID: PropTypes.string,
      name: PropTypes.array,
    })
  ),
  arrNoChildrenBlock: PropTypes.array,
  logoPath: PropTypes.string,
};

export default Header;
