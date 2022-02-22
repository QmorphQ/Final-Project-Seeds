// Import:
// =======================================================================================
// ------------------------------------------------------------------------------------
// Libraries Components:
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import { Link as RoutLink } from 'react-router-dom';
// ------------------------------------------------------------------------------------
// MUI Components:
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Logo from "./headerIcons/headerIcon/Logo.jsx";
import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
import MenuMobile from "../Menu/MenuMobile.jsx";
import MenuDesktop from "../Menu/MenuDesktop.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import { loginStateSelector } from "../../../store/selectors/selectors";
import ProfileMenu from "./ProfileMenu.jsx";
import Auth from "../Forms/Auth.jsx"
// import { downloadRequestStates } from "../../constants";


const Header = ({ allCategories, categories}) => {

  const favoritesLength = 0;
  const isLogin = useSelector(loginStateSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => {
    setIsMenuOpen(prevVal => !prevVal)
  };

  const result = Array.isArray(allCategories) ? process(allCategories) : [];

  const parentsListWithChildren = result.filter((e) => e.parentId !== "null");

  const filterBy = (a, b) => a.filter((e) => !b.find((item) => item.parentId === e) && e);

  const parentsListWithoutChildren = filterBy(categoriesList, parentsListWithChildren);

  
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
          <Box sx={{ display: { xs: "flex", md: "flex" }, justifyContent: "flex-start" }}>
          {isLogin && <IconButton>
              <Badge badgeContent={favoritesLength} color="primary">
                <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
              </Badge>
            </IconButton>}
            <HeaderIcons />
            <Box display={{ xs: "none", sm: "none", md:"flex" }}>
            {!localStorage.getItem('jwt') ? (
                <Auth/>
            ) : (
              <ProfileMenu/>
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
              {isLogin && (
                <FavoriteBtn />
              )}
              <CartBtn marginRight={ !isLogin ? '30px' : {xs: '30px', md: '0', }} />
              <Box display={{ xs: "none", sm: "none", md: "flex" }} >
                {!isLogin ? (
                  <Box sx={{ width: 'fit-content', display: "flex", flexDirection: 'column'}}>
                   <LogIn />
                    <SignUp />
                  </Box>
                ) : (
                  <ProfileMenu />
                  // <IconButton
                  //   id='menuBtn'
                  //   size="large"
                  //   edge="end"
                  //   aria-label="account of current user"
                  //   // aria-controls={menuId}
                  //   aria-haspopup="true"
                  //   // onClick={handleProfileMenuOpen}
                  // >
                  // </IconButton>
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
