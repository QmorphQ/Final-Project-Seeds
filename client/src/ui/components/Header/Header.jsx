import { useState } from "react";
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";
import Menu from "../Menu/Menu.jsx";
import SearchAppBar from "../SearchAppBar/SearchAppBar.jsx"
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx"

const Header = () => {
    const orderLength = 2;
    const favoritesLength = 3;
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
            sx={{ flexGrow: 1, color: "#359740", fontWeight: "bold" }}
          >
            SEEDRA
          </Typography>
          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
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
            
            <Box display={{ xs: "block", sm: "block", md: "none" }}>
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

export default Header;

