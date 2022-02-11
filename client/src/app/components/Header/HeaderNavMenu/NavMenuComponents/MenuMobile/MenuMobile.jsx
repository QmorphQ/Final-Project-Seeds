// Libraries Components:
import PropTypes from "prop-types";
// MUI Components:
import { Box, Paper, MenuList, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
// !!!------------------------------------------
import { makeStyles } from "@material-ui/core"; // !!! <-------------- MUI CORE
// !!!------------------------------------------
// React Components:
import SearchAppBar from "../../../HeaderSearch/SearchAppBar.jsx";
// import LogIn from "../../../Forms/LogRegModal.jsx";
// import SignUp from "../../../Forms/RegLogModal.jsx";
import MenuItemNoChildrenMobile from "./MenuMobileComponents/MenuItemNoChildrenMobile.jsx";
import MenuItemWithChildrenMobile from "./MenuMobileComponents/MenuItemWithChildrenMobile.jsx";

// ======================================================================
export default function MenuMobile({
  pressetsNoChildren,
  pressetsWithChildren,
  isLogin,
}) {
  // --------------------------------------------------------------------
  // Styles:
  const useStyles = makeStyles((theme) => ({
    DropDownMenu: {
      width: "60%",
      [theme.breakpoints.down("xs")]: {
        width: "80%",
      },
    },
  }));
  // =================================== Render ==================================
  const classes = useStyles();
  return (
    <Box
      display={{ xs: "flex", sm: "block", md: "flex" }}
      sx={{ flexWrap: "wrap", border: "1px red black", position: "relative" }}
    >
      <Paper
        className={classes.DropDownMenu}
        sx={{
          p: 2,
          position: "absolute",
          zIndex: "99999",
          top: "0",
          right: "0",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          border: "1px red solid",
        }}
      >
        <SearchAppBar />
        <MenuList>
          <MenuItemNoChildrenMobile arrOfOptions={pressetsNoChildren} />
          {/* {cardsList} */}
          <MenuItemWithChildrenMobile arrOfOptions={pressetsWithChildren} />
        </MenuList>
        <Box display="flex" sx={{ justifyContent: "space-around" }}>
          {!isLogin ? (
            <>
              <div>AUTH</div>
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
      </Paper>
    </Box>
  );
}

MenuMobile.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
  isLogin: PropTypes.bool,
};
