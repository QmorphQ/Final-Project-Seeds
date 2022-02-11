import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Divider,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MenuItemWithChildrenMobile({ arrOfOptions }) {
  // ============================= Render ============================
  return (
    <Box>
      {arrOfOptions.map((item, index) => (
        <div key={index}>
          <Accordion sx={{ boxShadow: "none", my: "0px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem sx={{ color: "#1F2533", fontWeight: "700" }}>
                <Link
                  component={RouterLink}
                  to={`products/${item.parentId}`}
                  underline="none"
                  sx={{ pl: "16px", color: "#1F2533", fontWeight: "400" }}
                >
                  {" "}
                  {item.parentId.charAt(0).toUpperCase() +
                    item.parentId.slice(1)}
                </Link>
              </MenuItem>
            </AccordionSummary>
            {item.name.map((subItem, i) => (
              <div key={`${subItem}${i}`}>
                <AccordionDetails>
                  <Link
                    component={RouterLink}
                    to={`products/${item.parentId}/${subItem}`}
                    key={(Math.random() + 1).toString(36).substring(7)}
                    underline="none"
                    sx={{
                      color: "#70737C",
                      fontWeight: "300",
                      fontFamily: "Lexend",
                    }}
                  >
                    {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
                  </Link>
                </AccordionDetails>
              </div>
            ))}
          </Accordion>
          <Divider />
        </div>
      ))}
    </Box>
  );
}
// ==================================================================
MenuItemWithChildrenMobile.defaultProps = {
  arrOfOptions: [
    { parentId: "option1", name: ["subOption1-1", "subOption1-2"] },
    { parentId: "option2", name: ["subOption2-1", "subOption2-2"] },
    { parentId: "option3", name: ["subOption3-1", "subOption3-2"] },
  ],
};
MenuItemWithChildrenMobile.propTypes = {
  arrOfOptions: PropTypes.arrayOf(
    PropTypes.shape({
      parentId: PropTypes.string,
      name: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
