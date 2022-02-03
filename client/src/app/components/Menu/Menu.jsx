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
  // downloadRequestStateSelector,
  allCategoriesSelector,
  mainCategoriesSelector,
} from "../../../store/selectors/selectors";
// import Subcategories from "./Subcategories.jsx";

const Menu = () => {

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
  
      const subArr = [
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
  


const arrCat = result.filter(e => e.parentId === "null");
console.log(arrCat);
const [{name}] = arrCat;
console.log(name);




      const filterBy = (a, b) => {
        let typedArr = a.filter(function (a) {
            console.log(a);
            if ((!b.find((item) => item.parentId === a))) {
                return a
            }
            
          
        });
        return typedArr;
      };
  
        console.log(subArr);
        console.log(filterBy(name, subArr));
        const parentArr = filterBy(name, subArr);
    //     const productsList = filterBy(testArr, propArr);
    //     console.log(productsList);

const categoriesWithoutСhildren = parentArr.map((e, i) => (
    <>
        <MenuItem key={i} >
          <Link href={`/${e}`} underline="none" sx={{color: "#1F2533", fontWeight: "500"}} >{(e === "all")? ((e.charAt(0).toUpperCase() + e.slice(1)) + " vegetables") : (e.charAt(0).toUpperCase() + e.slice(1)) }</Link>
        </MenuItem>
        <Divider />
    </>
));


const cardsList = subArr.map((e) => (
    <>
<Accordion key={e.parentId} sx={{boxShadow: "none"}}>
   
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem fontWeight="700" sx={{color: "#1F2533"}}>
              <ListItemText>{e.parentId.charAt(0).toUpperCase() + e.parentId.slice(1)}</ListItemText>
            </MenuItem>
          </AccordionSummary>
          {e.name.map((item, i) => (
        <AccordionDetails key={i}>
        <Link href={`${e.parentId}/${item}`} underline="none" sx={{color: "#70737C", fontWeight: "300", fontFamily: "Lexend"}}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            </AccordionDetails>
      ))}
          {/* <AccordionDetails>
          <Link href="#" underline="none">{"2"}</Link>
              
           
          </AccordionDetails> */}
        </Accordion>
        <Divider />
        </>
        ));



  return (


    <Box display={{ xs: "flex", sm: "block", md: "flex" }} sx={{flexWrap: "wrap"}}>
    <Paper  sx={{p: 2, width: "50%", maxWidth: "100%", position: "absolute", zIndex: "3", left: "45%", boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)"}}>
    {/* <Paper display="flex"  sx={{p: 2, width: "50%", maxWidth: "100%", boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)"}}> */}
      {/* <Box display={{ xs: "flex", sm: "block", md: "none" }} sx={{flexWrap: "wrap"}}> */}
      <SearchAppBar />
      
        <MenuList>
        {categoriesWithoutСhildren}
        {cardsList}
      </MenuList>
      {/* </Box> */}
    </Paper>
    </Box>

      
  );
};

export default Menu;