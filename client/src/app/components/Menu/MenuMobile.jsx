import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Box, Paper, MenuList } from "@mui/material";
import { loginStateSelector } from "../../../store/selectors/selectors";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import LogIn from "../Forms/LogRegModal.jsx";
import SignUp from "../Forms/RegLogModal.jsx";
import MenuItemNoChildrenMobile from "./MenuItemNoChildrenMobile.jsx";
import MenuItemWithChildrenMobile from "./MenuItemWithChildrenMobile.jsx";
import ProfileMenu from "../Header/ProfileMenu.jsx";


const MenuMobile = ({
  parentsListWithoutChildren,
  parentsListWithChildren,
}) => {

  const isLogin = useSelector(loginStateSelector);
  
  

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
          {!isLogin ? (
              <>
                <LogIn />
                <SignUp />
              </>
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
