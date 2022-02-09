import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link as RoutLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Logo from "./headerIcons/headerIcon/Logo.jsx";
import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
import MenuMobile from "../Menu/MenuMobile.jsx";
import MenuDesktop from "../Menu/MenuDesktop.jsx";
import LogIn from "../Forms/LogRegModal.jsx";
import SignUp from "../Forms/RegLogModal.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import { loginStateSelector } from "../../../store/selectors/selectors";
import ProfileMenu from "./ProfileMenu.jsx";
// import { downloadRequestStates } from "../../constants";


const Header = ({ allCategories, categories}) => {

  const favoritesLength = 0;
  const isLogin = useSelector(loginStateSelector);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const categoriesList = categories.map(({ name }) => ( name
  ));
  const process = (arr) => {
    const res = {};

    arr.forEach(({ parentId, name }) => {
      res[parentId] ??= { parentId, sub: [] };
      res[parentId].sub.push(name);
    });
    return Object.values(res).map(({ parentId, sub }) => ({
      parentId,
      name: sub,
    }));
  };

  const result = process(allCategories);

  const parentsListWithChildren = result.filter((e) => e.parentId !== "null");

  const filterBy = (a, b) => a.filter((e) => !b.find((item) => item.parentId === e) && e);

  const parentsListWithoutChildren = filterBy(categoriesList, parentsListWithChildren);


  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{  boxShadow: "none" }}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <RoutLink to={'/'}><Logo iconWidth={"100px"} iconHeight={"20px"} /></RoutLink>
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <MenuDesktop parentsListWithoutChildren={parentsListWithoutChildren} parentsListWithChildren={parentsListWithChildren } />
          </Box>
         <Box sx={{ display: "flex", alignItems: "center"}}>
         <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <SearchAppBar sx={{ width: 500 }} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" }, justifyContent: "flex-start" }}>
          {isLogin && <IconButton>
              <Badge badgeContent={favoritesLength} color="primary">
                <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
              </Badge>
            </IconButton>}
            <HeaderIcons />
            <Box display={{ xs: "none", sm: "none", md:"flex" }}>
            {!isLogin ? (
              <>
                <LogIn />
                <SignUp /> 
              </>
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
              <MenuIcon />
            </IconButton>
          </Box>



           
         </Box>
          
        </Toolbar>
      </AppBar>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        {isMenuOpen && <MenuMobile parentsListWithoutChildren={parentsListWithoutChildren} parentsListWithChildren={parentsListWithChildren } />}
      </Box>
    </Box>
  );
};

Header.propTypes = {
  allCategories: PropTypes.array,
  categories: PropTypes.array,
};


export default Header;
