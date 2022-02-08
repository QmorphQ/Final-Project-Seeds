// import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Paper, MenuList, MenuItem, Link } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

const MenuDesktop = ({ parentsListWithoutChildren, parentsListWithChildren }) => {
  const [dropDownOpen, setDropDownOpen] = useState(null);

  const showDropdown = (e) => {
    // let dropDown;
    // e.target.id === dropDownOpen ? (dropDown = null) : (dropDown = e.target.id);

    // return setDropDownOpen(dropDown);
    const { id } = e.target;
    return setDropDownOpen((prevState) => id !== prevState && id || null)
  };

  const categoriesWithoutСhildren = parentsListWithoutChildren.map((e, i) => (
    <>
      <Box
        key={(Math.random() + 1).toString(36).substring(7)}
        display="flex"
        sx={{ alignItems: "flex-start" }}
      >
        <MenuItem
          key={(Math.random() + 1).toString(36).substring(7)}
          sx={{ pt: 0 }}
        >
          <Link
            key={(Math.random() + 1).toString(36).substring(7)}
            href={`/${e}`}
            underline="none"
            sx={{
              
              color: "#70737C",
              fontWeight: "500",
              display: "flex",
              fontSize: "14px",
            }}
          >
            {e.toUpperCase()}
          </Link>
        </MenuItem>
      </Box>
    </>
  ));

  const cardsList = parentsListWithChildren.map((e, index) => (
    <Box
      key={`${e.parentId}${index}`}
      sx={{ boxShadow: "none", mr: "3vw" }}
    >
      <Box
    
        id={e.parentId}
        sx={{ boxShadow: "none", my: "0px", position: "relative" }}
      >
        <MenuItem
          
          fontWeight="700"
          sx={{
            color: "#70737C",
            fontSize: "14px",
            pt: 0,
            position: "relative",
          }}
        >
          <Link
            
            href={`/${e.parentId}`}
            underline="none"
            sx={{ color: "#70737C", fontWeight: "500" }}
          >
            {e.parentId.toUpperCase()}
          </Link>
          <MoreIcon id={e.parentId} onClick={showDropdown} />
        </MenuItem>
        <Box
          
          sx={{ position: "absolute", zIndex: 3 }}
        >
          {e.name.map((item, i) => (
            <div key={`${item}/${i}`}>
              {dropDownOpen === e.parentId && (
                <Box
                  
                  sx={{ position: "relative" }}
                >
                  <Paper
                    
                    sx={{
                      border: "none",
                      borderRadius: 0,
                      boxShadow: "none",
                    }}
                  >
                    <MenuItem
                      
                      sx={{
                        position: "relative",
                        color: "#70737C",
                        fontWeight: "300",
                        fontFamily: "Lexend",
                        fontSize: "14px",
                      }}
                    >
                      <Link
                        
                        href={`${e.parentId}/${item}`}
                        underline="none"
                        sx={{
                          color: "#70737C",
                          fontWeight: "300",
                          fontFamily: "Lexend",
                        }}
                      >
                        {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                      </Link>
                    </MenuItem>
                  </Paper>
                </Box>
              )}
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Box
      display="flex"
      sx={{
        flexGrow: 1,
        alignItems: "baseline",
        justifyContent: "flex-start",
        justifyItems: "flex-start",
        width: "100%",
        pl: "calc((100vw - 1300px)/2)",
      }}
    >
      <MenuList
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: "14px",
        }}
      >
        <>
          {categoriesWithoutСhildren}
          {cardsList}
        </>
      </MenuList>
    </Box>
  );
};

MenuDesktop.propTypes = {
  allCategories: PropTypes.array,
  loading: PropTypes.string,
};

export default MenuDesktop;