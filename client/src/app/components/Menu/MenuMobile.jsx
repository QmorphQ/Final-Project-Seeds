import PropTypes from "prop-types";
import { Box, Paper, MenuList } from "@mui/material";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import MenuItemNoChildrenMobile from "./MenuItemNoChildrenMobile.jsx";
import MenuItemWithChildrenMobile from "./MenuItemWithChildrenMobile.jsx";
import ProfileMenu from "../Header/ProfileMenu.jsx";
import Auth from "../Forms/Auth.jsx";


function MenuMobile  ({
  parentsListWithoutChildren,
  parentsListWithChildren,
})  { 

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
            <MenuItemNoChildrenMobile
              parentsListWithoutChildren={parentsListWithoutChildren}
            />
            {/* {cardsList} */}
            <MenuItemWithChildrenMobile
              parentsListWithChildren={parentsListWithChildren}
            />
          </MenuList>
          <Box display="flex"
          sx={{justifyContent: "space-around" }}
          >
          {!localStorage.getItem('jwt') ? (
                <Auth/>
            ) : (
              <ProfileMenu/>
            )}
          </Box>
            
        </Paper>
      </Box>
    </>
  );
};


MenuMobile.propTypes = {
  parentsListWithoutChildren: PropTypes.array,
  parentsListWithChildren: PropTypes.array,
};
export default MenuMobile;
