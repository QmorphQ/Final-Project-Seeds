import axios from "axios";
import * as Sentry from "@sentry/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SearchResultContainer from "./SearchComponent/SearchResultsContainer.jsx";
import Spinner from "../../../../ui/components/Spinner/Spinner.jsx";

import searchObserver from "./SearchComponent/SearchLogic/searchObserver";
import { API } from "../../../constants/index";


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
  color: theme.palette.success,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
    },
  },
}));

export default function SearchAppBar({ onClose }) {
  
  const [inputText, setInputText] = useState("");
  const [trigger, setTrigger] = useState(false); 
  const [arrIDs, setIDsArr] = useState([]);
  const [products, setProducts] = useState([]);
  const [fetchedProducts, setFetchedProducts] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [activeSearchContainer, setActiveSearchContainer] = useState(false);
  const [ready, setReady] = useState(false);

  
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };
  
  const searchContainerHandler = () => {
    setActiveSearchContainer(false);
    setTrigger(false);
    setIDsArr([]);
    setProducts([]);
    setFetchedProducts([]);
    setFetchedProducts([]);
    setLoading(false);
    setReady(false);
    setInputText("");
  };
  

  const [searchKeys, setSearchKeys] = useState([]);
  
  const getAllProducts = async () => {
    axios
      .get(`${API}products`)
      .then((r) => {
        setFetchedProducts(r.data);
      })
      .catch((err) => Sentry.captureException(err));

    setLoading(false);
    setReady(true);
  };
  
  useEffect(() => {
    if (!trigger && searchObserver(inputText)) {
      
      setFetchedProducts([]);
      setIDsArr([]);
      setActiveSearchContainer(false);
      return setTrigger(true);
    }
    return false;
  }, [inputText]);
  
  useEffect(() => {
    const regEx = new RegExp(`${inputText.trim()}`, "gi");
    const filteredProducts = Array.from(
      new Set(
        searchKeys
          .filter((prod) => regEx.test(prod.name))
          .map((prod) => prod.itemNo)
      )
    );
    return filteredProducts.length > 0
      ? setIDsArr([...filteredProducts])
      : setTrigger(false);
  }, [searchKeys]);
  
  useEffect(() => {
    if (trigger) {
      setLoading(true);
      getAllProducts();
    }
  }, [trigger]);

  useEffect(() => {
    const keys = fetchedProducts.map((product) => {
      const k = {
        name: product.name,
        itemNo: product.itemNo,
      };

      return k;
    });

    setSearchKeys(keys);
  }, [fetchedProducts]);

  useEffect(() => {
    const productsToShow = [];
    fetchedProducts.forEach((product) => {
      arrIDs.forEach((id) => {
        if (product.itemNo === id) {
          productsToShow.push(product);
        }
      });
    });

    setProducts(productsToShow);
  }, [arrIDs]);
  
  useEffect(() => {
    if (ready === true) {
      setActiveSearchContainer(true);
    }
    return [setTrigger(false), setReady(false)];
  }, [ready]);

  useEffect(() => {
    document.addEventListener("click", searchContainerHandler);
    return () => document.removeEventListener("click", searchContainerHandler);
  }, []);

  useEffect(async () => {
    const keysObjects = await axios.get(`${API}searchKeys`);
    const keys = keysObjects.data.map((obj) => {
      const keyObj = {
        name: obj.name,
        itemNo: obj.itemNo,
      };
      return keyObj;
    });

    setSearchKeys(keys);
  }, []);
  
  return (
    <>
      <Search
        component="input"
        sx={{ border: "solid rgba(0, 0, 0, 0.2) 1px", borderRadius: 20 }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          required
          value={inputText}
          placeholder="search"
          onChange={inputHandler}
        />
        {loading ? <Spinner left={"70%"} top={"22%"} /> : false}
        {products.length !== 0 &&
          <SearchResultContainer
            active={activeSearchContainer}
            products={products}
            oneCard={fetchedProducts.length === 1}
            onClose={onClose}
          />
        }
      </Search>
    </>
  );
}

SearchAppBar.propTypes = { 
  onClose: PropTypes.func, 
};
