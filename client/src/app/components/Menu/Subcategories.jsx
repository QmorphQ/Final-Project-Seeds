// import { AccordionDetails, Link } from "@mui/material";
import {
  Box,
  Divider,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from "@mui/material";
// import Accord from "./Accord.jsx";

const Subcategories = () => {
  //const name = ["herbs-mono", "herbs-mix"];
  const card = {
    parentId: "herbs",
    name: ["herbs-mono", "herbs-mix"],
  };

  const { name } = card;
  console.log(name);

  return (
    <>
      <MenuItem>
        <ListItemText>{card.parentId.toUpperCase()}</ListItemText>
      </MenuItem>
      {name.map((item) => (
        <Accord key={item} cater={item.toUpperCase()} />
      ))}
    </>
  );
};

export default Subcategories;
