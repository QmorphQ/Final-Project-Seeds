import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import {
  Divider,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MenuItemWithChildrenMobile({
  parentsListWithChildren,
}) {
  return (
    <Box>
      {parentsListWithChildren.map((item, index) => (
        <div key={index}>
          <Accordion sx={{ boxShadow: "none", my: "0px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem sx={{ color: "#1F2533", fontWeight: "700" }}>
               
                <Link
                href={`/${item.parentId}`}
                underline="none"
                sx={{ pl: "16px", color: "#1F2533", fontWeight: "400" }}
                > {item.parentId.charAt(0).toUpperCase() +
                    item.parentId.slice(1)}
                </Link>
                 
              </MenuItem>
            </AccordionSummary>
            {item.name.map((subItem, i) => (
              <div key={`${subItem}${i}`}>
                <AccordionDetails>
                  <Link
                    key={(Math.random() + 1).toString(36).substring(7)}
                    href={`${item.parentId}/${subItem}`}
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

MenuItemWithChildrenMobile.propTypes = {
  parentsListWithChildren: PropTypes.array,
};
