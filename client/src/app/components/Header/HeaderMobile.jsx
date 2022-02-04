import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useStyles from "./HeaderStyles.jsx";
import Menu from "../Menu/Menu.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
import PreloaderIcon from "../../../ui/components/Preloader/PreloaderIcon/PreloaderIcon.jsx";

const HeaderMobile = () => {
  const classes = useStyles();
  const favoritesLength = 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickButton = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className="header">
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#359740", fontWeight: "bold" }}
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
          <HeaderIcons />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            sx={{ mr: 2 }}
          >
            <AccountCircle className={classes.iconsStyle} />
          </IconButton>

          <Box display="block">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={clickButton}
              sx={{ mr: 0 }}
            >
              <MenuIcon className={classes.iconsStyle} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isMenuOpen && <Menu />}
    </header>
  );
};

export default HeaderMobile;
