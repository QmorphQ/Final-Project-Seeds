// Libraries Components:
import PropTypes from "prop-types";
// MUI Components:
import { Box, Paper, MenuList, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
// React Components:
import SearchAppBar from "../../../HeaderSearch/SearchAppBar.jsx";
// import LogIn from "../../../Forms/LogRegModal.jsx";
// import SignUp from "../../../Forms/RegLogModal.jsx";
import MenuItemNoChildrenMobile from "./MenuMobileComponents/MenuItemNoChildrenMobile.jsx";
import MenuItemWithChildrenMobile from "./MenuMobileComponents/MenuItemWithChildrenMobile.jsx";

export default function MenuMobile ({
  pressetsNoChildren,
  pressetsWithChildren,
  isLogin,
}) {
  return (
    <>
      <Box
        display={{ xs: "flex", sm: "block", md: "flex" }}
        sx={{ flexWrap: "wrap" }}
      >
        <Paper
          sx={{
            p: 2,
            width: "50%",
            maxWidth: "100%",
            position: "absolute",
            zIndex: "3",
            left: "45%",
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <SearchAppBar />
          <MenuList>
            <MenuItemNoChildrenMobile arrOfOptions={ pressetsNoChildren }
             
            />
            {/* {cardsList} */}
            <MenuItemWithChildrenMobile
              arrOfOptions={pressetsWithChildren}
            />
          </MenuList>
          <Box display="flex" sx={{ justifyContent: "space-around" }}>
            {!isLogin ? (
              <>
                <div>AUTH</div>{/* <LogIn />
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
    </>
  );
};

MenuMobile.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
  isLogin: PropTypes.bool,
};

