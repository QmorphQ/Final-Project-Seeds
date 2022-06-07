// Import:
// =======================================================================================
// ------------------------------------------------------------------------------------
// Libraries Components:
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// ------------------------------------------------------------------------------------
// MUI Components:
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// ------------------------------------------------------------------------------------
// React Components:
import SearchAppBar from "./HeaderSearch/SearchAppBar.jsx";
import { loginStateSelector, cartQuantitySelector, wishlistSelector } from "../../../store/selectors/selectors";
import LogoBtn from "./HeaderBtns/LogoBtn.jsx";
import CartBtn from "./HeaderBtns/CartBtn.jsx";
import FavoriteBtn from './HeaderBtns/FavoriteBtn.jsx';
import HeaderNavMenu from "./HeaderNavMenu/HeaderNavMenu.jsx";
// ++++++++++++++++
// Auth Component:
import Auth from "../Forms/Auth.jsx";
import ProfileMenu from './ProfileMenu.jsx';
// ++++++++++++++++
// ------------------------------------------------------------------------------------
// Styles:
import classes from "./HeaderStyles.jsx";
// =======================================================================================

const Header = ({ arrNoChildrenBlock, arrWithChildrenBlock, logoPath}) => {
  const isLogin = useSelector(loginStateSelector);
  // const favoriteQuantity = useSelector(wishlistSelector) ?? 0;
  const cartQuantity = useSelector(cartQuantitySelector) ?? 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => {
    setIsMenuOpen(prevVal => !prevVal)
  };
     
  const handleClickAway = () => setIsMenuOpen(false);
  // useEffect(() => {
  //   console.log(favoriteQuantity)
  // }, [favoriteQuantity])
  useEffect(() => {
    console.log(cartQuantity)
  }, [cartQuantity])
  // =============================================== Render ==============================================
  return (
    <Box sx={classes.Header}>
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar
        disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {logoPath ? <LogoBtn linkPath={logoPath}  /> : <LogoBtn />}
          <Box
            display={{ xs: "none", sm: "none", md: "none", lg: 'block' }}
          >
            {/* <MenuDesktop /> */}
            <HeaderNavMenu resolution={'desktop'} parentsListWithoutChildren={arrNoChildrenBlock} parentsListWithChildren={arrWithChildrenBlock}/>
          </Box>
          <Box
            display={{ xs: "none", sm: "none", md: "flex", lg: 'none' }}
          >
            {/* <MenuTable /> */}
            <HeaderNavMenu resolution={'table'} parentsListWithoutChildren={arrNoChildrenBlock} parentsListWithChildren={arrWithChildrenBlock}/>
          </Box>
          <Box /* Search AppBar Block */
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box display={{ xs: "none", sm: "none", md: "block" }} >
              <SearchAppBar />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "space-between", width: '100%'
              }}
            >
              {isLogin && (
                <FavoriteBtn />
              )}
              <CartBtn quantity={cartQuantity} marginRight={ !isLogin ? '30px' : {xs: '30px', md: '0', }} />
              <Box display={{ xs: "none", sm: "none", md: "flex" }} >
                {!isLogin ? (
                  <Box sx={{ width: 'fit-content', display: "flex", flexDirection: 'column'}}>
                   <Auth />
                  </Box>
                ) : (
                  <ProfileMenu />
                )}
              </Box>
            </Box>
             <Box  display={{ xs: "block", sm: "block", md: "none" }}>
              <IconButton
               id='menuBtn'
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{ mr: 0 }}
              >
                <MenuIcon sx={{color: isMenuOpen ? '#359740' : '#70737C'}} />
              </IconButton>
            </Box>
          </Box> 
        </Toolbar>
      </AppBar>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        {isMenuOpen &&<ClickAwayListener onClickAway={handleClickAway}><Box>  <HeaderNavMenu login={isLogin}  resolution={'mobile'} parentsListWithoutChildren={arrNoChildrenBlock} parentsListWithChildren={arrWithChildrenBlock}/></Box></ClickAwayListener>}
       
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
