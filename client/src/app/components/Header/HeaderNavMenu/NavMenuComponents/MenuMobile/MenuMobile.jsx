// Libraries Components:
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// MUI Components:
import { Box, Paper, MenuList, Grid } from "@mui/material";
// !!!------------------------------------------
import { makeStyles } from "@material-ui/core"; // !!! <-------------- MUI CORE
// !!!------------------------------------------
// React Components:
import SearchAppBar from "../../../HeaderSearch/SearchAppBar.jsx";
// -----------------------
// Auth:
import LogIn from "../../../../Forms/LogRegModal.jsx";
import SignUp from "../../../../Forms/RegLogModal.jsx";
import ProfileMenu from "../../../ProfileMenu.jsx";
//------------------------
import MenuItemNoChildrenMobile from "./MenuMobileComponents/MenuItemNoChildrenMobile.jsx";
import MenuItemWithChildrenMobile from "./MenuMobileComponents/MenuItemWithChildrenMobile.jsx";
// Selectors: 
// import { loginStateSelector } from "../../../../../../store/selectors/selectors";
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
  // let loginStatus = useSelector(loginStateSelector);
  // =================================== Render ==================================
  const classes = useStyles();
  return (
    <Box
      display={{ xs: "flex", sm: "block", md: "flex" }}
      sx={{ flexWrap: "wrap", position: "relative" }}
    >
      <Paper
        className={classes.DropDownMenu}
        sx={{
          p: 2,
          position: "absolute",
          zIndex: "100",
          top: "0",
          right: "0",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid container sx={{ flexGrow: 1, border: '1px solid red' }}  item xs={12} alignItems='center' justifyContent={LogIn ? 'space-between' : "flex-end"}>
            <Grid item xs={2}>{isLogin && (<ProfileMenu />) }</Grid>
            <Grid item xs={10}>
              <SearchAppBar />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MenuList>
              <MenuItemNoChildrenMobile arrOfOptions={pressetsNoChildren} />

              {/* {cardsList} */}
              <MenuItemWithChildrenMobile arrOfOptions={pressetsWithChildren} />
            </MenuList>
          </Grid>
          <Box display="flex" sx={{ justifyContent: "space-around" }}>
            {!isLogin && (
              <>
                <LogIn />
                <SignUp />
              </>
            ) }
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
}

MenuMobile.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
  isLogin: PropTypes.bool,
};
