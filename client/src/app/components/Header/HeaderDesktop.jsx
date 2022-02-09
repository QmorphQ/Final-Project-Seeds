import { useSelector } from "react-redux";
import { Box, AppBar, Toolbar, IconButton, Badge, Link } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogIn from "../Forms/LogRegModal.jsx";
import useStyles from "./HeaderStyles.jsx";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import Logo from "./headerIcons/headerIcon/Logo.jsx";
import HeaderIcons from "./headerIcons/HeaderIcons.jsx";
import SignUp from "../Forms/RegLogModal.jsx";
import { loginStateSelector } from "../../../store/selectors/selectors";


const HeaderDesktop = () => {
  const classes = useStyles();
  const favoritesLength = 0;
  const isLogin = useSelector(loginStateSelector)
  console.log(isLogin);

  return (
    <header className="header">
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Logo iconWidth={"100px"} iconHeight={"20px"} />

          <Box
            display="flex"
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "center",
              pl: "64px",
              pr: "64px",
            }}
          >
            <Link
              href="#"
              underline="none"
              sx={{ fontSize: 14, color: "#70737C" }}
            >
              {"ALL PRODUCTS"}
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ fontSize: 14, color: "#70737C" }}
            >
              {"ABOUT SEEDRA"}
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ fontSize: 14, color: "#70737C" }}
            >
              {"CONTACTS"}
            </Link>
          </Box>

          <Box display="flex">
            <SearchAppBar />
          </Box>
          <IconButton sx={{ mr: 4 }}>
            <Badge badgeContent={favoritesLength} color="primary">
              <FavoriteBorderOutlinedIcon sx={{ color: "#359740" }} />
            </Badge>
          </IconButton>
          <HeaderIcons />
          {!isLogin ? 
            <>
              <LogIn/>
              <SignUp/>
            </> : <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
          >
            <AccountCircle className={classes.iconsStyle} />
          </IconButton>}

          {/* <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
          >
            <AccountCircle className={classes.iconsStyle} />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default HeaderDesktop;
