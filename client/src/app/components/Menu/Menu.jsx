import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
import fetchCategories from "../../../store/thunks/catalog.thunks";
import {
  downloadRequestStateSelector,
  allCategoriesSelector,
  mainCategoriesSelector,
} from "../../../store/selectors/selectors";
import Subcategories from "./Subcategories.jsx";

const Menu = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);


  const allCategories = useSelector(allCategoriesSelector);
  const mainCategories = useSelector(mainCategoriesSelector);
  const downloadRequestState = useSelector(downloadRequestStateSelector);

const result = [
  {
      "parentId": "null",
      "name": [
          "all",
          "bundles",
          "herbs",
          "vegetables",
          "flowers"
      ]
  },
  {
      "parentId": "herbs",
      "name": [
          "herbs-mono",
          "herbs-mix"
      ]
  },
  {
      "parentId": "vegetables",
      "name": [
          "vegetables-mono",
          "vegetables-mix"
      ]
  },
  {
      "parentId": "flowers",
      "name": [
          "flowers-mono",
          "flowers-mix"
      ]
  }
];
  
  // const process = (arr) => {
  //   const res = {};
    
  //   arr.forEach(({ parentId, name }) => {
  //     res[parentId] ??= { parentId, sub: [] };
  //     res[parentId].sum.push(name);
      
  //   });
  //   return Object.values(res).map(({ parentId, sub }) => ({
  //     parentId,
  //     name: sub,
  //   }));
  // };
  
  // console.log(process(allCategories));


  return (
    <Box
      display={{ xs: "flex", sm: "block", md: "none" }}
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
          <MenuItem>
            <ListItemText>All vegetables</ListItemText>
          </MenuItem>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem>
                <ListItemText>Bundles</ListItemText>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#" underline="none">
                {"12 Herb Seeds"}
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem>
                <ListItemText>Herbs</ListItemText>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem>
                <ListItemText>Vegetables</ListItemText>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem>
                <ListItemText>Fruits</ListItemText>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem>
                <ListItemText>Supplies</ListItemText>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem>
                <ListItemText>Flowers</ListItemText>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Subcategories />
          <Divider />
        </MenuList>
      </Paper>
    </Box>
  );
}

export default Menu;
