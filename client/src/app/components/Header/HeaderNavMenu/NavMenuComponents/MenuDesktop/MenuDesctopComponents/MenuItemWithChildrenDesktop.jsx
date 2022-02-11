// Libraries Components:
import PropTypes from "prop-types";
import { useState } from "react";
// MUI Components:
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Paper,
  MenuItem,
  Link,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
// ========================================================================



export default function MenuItemWithChildrenDesctop({ arrOfOptions }) {

    const [dropDownOpen, setDropDownOpen] = useState(null);
    const showDropdown = (e) => {
      const { id } = e.target;
      return setDropDownOpen((prevState) => (id !== prevState && id) || null);
    };
  // useEffect(() => {
  //   console.log(`MenuItemWithChildrenDesctop: `, arrOfOptions)
  // },[arrOfOptions]);
// =================================== Render =======================
  return  (

    arrOfOptions.map((e, index) => (
    <Box key={`${e.parentId}${index}`} sx={{ boxShadow: "none", mr: "0" }}>
      <Box
        id={e.parentId}
        sx={{ boxShadow: "none", my: "0px", position: "relative"}}
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
            component={RouterLink}
            to={`products/${e.parentId}`}
            underline="none"
            sx={{ color: "#70737C", fontWeight: "500" }}
          >
            {e.parentId.toUpperCase()}
          </Link>
          <MoreIcon id={e.parentId} onClick={showDropdown} />
        </MenuItem>

        <Box sx={{ position: "absolute", zIndex: 3 }}>
          {e.name.map((item, i) => (
            <Box key={`${item}/${i}`}>
              {dropDownOpen === e.parentId && (
                <Box sx={{ position: "relative" }}>
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
                        border: '1px solid red'
                      }}
                    >
                      <Link
                        component={RouterLink}
                        to={`products/${e.parentId}/${item}`}
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  ))
)}
// ================================================================
MenuItemWithChildrenDesctop.defaultProps ={
  arrOfOptions: [
    { parentId: "option1", name: ["subOption1-1", "subOption1-2"] },
    { parentId: "option2", name: ["subOption2-1", "subOption2-2"] },
    { parentId: "option3", name: ["subOption3-1", "subOption3-2"] },
  ],
  
};

MenuItemWithChildrenDesctop.propTypes = {
    arrOfOptions: PropTypes.arrayOf(PropTypes.shape({
      parentId: PropTypes.string,
      name: PropTypes.arrayOf(PropTypes.string),
    }))
};