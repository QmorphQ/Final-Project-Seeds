import { Box, AppBar, Toolbar, Typography, IconButton, Badge, Link } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchAppBar from "../SearchAppBar/SearchAppBar.jsx"


const HeaderDesktop = () => {
    const orderLength = 0;
    const favoritesLength = 0;
    
  return (
    <header className="header">
      <AppBar position="static" color="inherit" sx={{boxShadow: "none"}}>
        <Toolbar>
          <Typography
          
            variant="h6"
            component="div"
            sx={{flexGrow: 1, color: "#359740", fontWeight: "bold" }}
          >
            SEEDRA
          </Typography>
         
          <Box display="flex" sx={{flexGrow: 1, justifyContent: "space-between", alignItems: "center", pl: "64px", pr:"64px"}} >
             <Link href="#" underline="none" sx={{fontSize: 14, color: "#70737C"}}>{'ALL PRODUCTS'}</Link>
             <Link href="#" underline="none" sx={{fontSize: 14, color: "#70737C"}}>{'ABOUT SEEDRA'}</Link>
             <Link href="#" underline="none" sx={{fontSize: 14, color: "#70737C"}}>{'CONTACTS'}</Link>
          </Box>
          <SearchAppBar />
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
        </Toolbar>
      </AppBar>
      {/* {cardsList} */}
    </header>
  );
};

export default HeaderDesktop;