import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SearchResultContainer from "./SearchComponent/SearchResultsContainer.jsx";
import Spinner from '../../../../ui/components/Spinner/Spinner.jsx';
// import SearchBtn from './SearchBtns/SearchBtn.jsx';
// =========================================================
import searchDB from "./SearchComponent/SearchLogic/searchDB";
import searchObserver from './SearchComponent/SearchLogic/searchObserver';
import searchNormalize from "./SearchComponent/SearchLogic/searchNormalize";

// =========================================================
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.success
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      // "&:focus": {
      //   width: "20ch",
      // },
    },
  },
}));


export default function SearchAppBar() {
// -----------------------------------------------------------------------------------
// Pressets:
const [inputText, setInputText] = useState('');
const [trigger, setTrigger] = useState(false); // Start searching
const [arrIDs, setIDsArr] = useState([]);
const [fetchedProducts, setFetchedProducts] = useState([]); // Array of products
const [loading, setLoading] = useState(false); // Request status
const [activeSaerchContainer, setActiveSearchContainer] = useState(false); // Render container
const [ready, setReady] = useState(false);
// -----------------------------------------------------------------------------------
// Functions:
// ++++++
// Input controller:
const inputHandler = (event) => {
  setInputText(searchNormalize(event.target.value));
}
// ++++++
// +++
const searchContainerHandler = () => {
 
   setActiveSearchContainer(false);
   setTrigger(false);
   setIDsArr([]);
   setFetchedProducts([]);
   setLoading(false);
   setReady(false);
   setInputText('');
 
}
// ++++++
// Get products from server by itemNo:
const getSearchProducts = async (arrOfProductsItemNo = []) => {
  arrOfProductsItemNo.map(async (itemNo) => {
await fetch(`http://localhost:8000/api/products/${itemNo}`).
 then((r) => r.json()).
 then((r) => setFetchedProducts((val) => val.find((prod) => prod.itemNo === r.itemNo) ? val : [...val, r])).
 catch(error => console.log(error.message))
})
setLoading(false);
setReady(true);
};
// ++++++
// -----------------------------------------------------------------------------------
// Hooks:
// ++++++
// Start of searching process:
useEffect(() => {
  if (!trigger && searchObserver(inputText)) {
    // Clear previous results:
    setFetchedProducts([]);
    setIDsArr([]);
    setActiveSearchContainer(false);
    return setTrigger(true)}
  return false;
}, [inputText]);
// ++++++
// Loading:
useEffect(() => {
  if (trigger) {
    const regEx = new RegExp(`${inputText.trim()}`,'gi')
    const filteredProducts = Array.from(new Set((searchDB.filter((prod) => regEx.test(prod.name))).map((prod) => prod.itemNo)));
    return filteredProducts.length > 0 ? setIDsArr([...filteredProducts]) : [console.log('no results'), setTrigger(false)]};
    return false
}, [trigger]);
// ++++++
// Fetch products from server:
useEffect(() => {
  if (arrIDs.length > 0) {
    setLoading(true);
    getSearchProducts(arrIDs);
  }
}, [arrIDs])
// ++++++
// Rendering results:
useEffect(() => {
  if (ready === true) {
    setActiveSearchContainer(true);
  } return [setTrigger(false), setReady(false)];
}, [ready])
useEffect(() => {
  document.addEventListener('click', searchContainerHandler);
  return () => document.removeEventListener('click', searchContainerHandler);
}, [])
// ---------------------------------------------------------------------------------
return (
  <>
    <Search component='input' sx={{ border: "solid rgba(0, 0, 0, 0.2) 1px", borderRadius: 20}}>
      <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
      <StyledInputBase
      required
        value={inputText}
        placeholder='search'
        onChange={inputHandler}
      />{loading ? <Spinner left={'70%'} top={'22%'}/> : false}
      {<SearchResultContainer active={activeSaerchContainer} products={fetchedProducts} oneCard={fetchedProducts.length === 1}/>}
    </Search>
    
    </>
  );
}

