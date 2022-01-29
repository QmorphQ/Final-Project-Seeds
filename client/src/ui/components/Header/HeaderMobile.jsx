import { useState } from "react";
import { Box, AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Menu from "../Menu/Menu.jsx";
import SearchAppBar from "../SearchAppBar/SearchAppBar.jsx";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import PreloaderIcon from "../Preloader/PreloaderIcon/PreloaderIcon.jsx";

const HeaderMobile = () => {
    const orderLength = 0;
    const favoritesLength = 0;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickButton = () => {
      setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen); 
    }


  
  return (
    <header className="header">
      <AppBar position="static" color="inherit" sx={{boxShadow: "none"}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, color: "#359740", fontWeight: "bold" }}
          >
            <PreloaderIcon iconWidth="100px" iconHeight="20px" />
          </Typography>
          <Box display="none">
          <SocialNetworks />
          <SearchAppBar />
          </Box>
          <IconButton sx={{ mr: 4 }}>
          <Badge badgeContent={favoritesLength} color="primary">
            <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
           </Badge>
          </IconButton>
          <IconButton sx={{ mr: 4 }}>
            <Badge badgeContent={orderLength} color="primary">
            <ShoppingCartOutlinedIcon sx={{ color: "#359740" }} />
          </Badge>
            </IconButton>
            
            <Box display= "block">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={clickButton}
            sx={{ mr: 0, color: "#359740" }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isMenuOpen &&  <Menu /> }
      {/* {cardsList} */}
    </header>
  );
};

export default HeaderMobile;

