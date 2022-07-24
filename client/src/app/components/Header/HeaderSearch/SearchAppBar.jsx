import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import SearchResultContainer from "./SearchComponents/SearchResultsContainer.jsx";
import SearchIconWrapper from "./SearchComponents/StyledComponents/SearchIconWrapper";
import StyledInputBase from "./SearchComponents/StyledComponents/StyledInputBase";
import Search from "./SearchComponents/StyledComponents/Search";
import { API } from "../../../constants/index";
import {
  formatUserText,
  fetchSearchKeys,
  fetchProducts,
  createArrOfIDs,
} from "./SearchComponents/SearchHelper";
// ==========================================================================
export default function SearchAppBar() {
  const [inputText, setInputText] = useState("");
  const [prevInputText, setPrevInputText] = useState("");
  const [formatedInputText, setFormatedInputText] = useState("");
  const [downloadState, setDownloadState] = useState("idle");
  const [searchKeys, setSearchKeys] = useState([{}]);
  const [arrIDs, setIDsArr] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeSearchContainer, setActiveSearchContainer] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);
  const [enterPressed, setEnterPressed] = useState(false);

  // Pressets:
  const init = {
    searchDelay: 700,
    searchKeysEndPoint: undefined,
    searchInputID: "search-input",
    timerID: null,
    typedMoreThen: (n) => {
      const regEx = new RegExp(`^.{${n},}`, "gi");
      return { in: (str) => regEx.test(str) };
    },
    API,
  };

  const fetchProductsBy = fetchProducts.bind(
    null,
    arrIDs,
    setDownloadState,
    init.API,
    "products"
  );
  const createArrOfProductsIDs = createArrOfIDs.bind(null, searchKeys);
  // --------------------------------------------------
  // Handlers:
  function inputHandler(event) {
    clearTimeout(init.timerID);
    setPrevInputText(inputText);
    setInputText(event.target.value);
  }

  function closeSearchContainerHandler(event) {
    if (
      event.currentTarget.id !== "search-container" ||
      event.currentTarget.id !== "search-input"
    ) {
      setIDsArr([]);
    }
  }

  function keyPressHandler(event) {
    if (event.which === 13 && event.target.id === "search-input") {
      clearTimeout(init.timerID);
      setSearchStatus(true);
      setEnterPressed(true);
    }
  }

  function clearSearch() {
    setIDsArr([]);
    setSearchStatus(false);
  }

  function launchNextSearch() {
    setIDsArr([]);
    setSearchStatus(true);
  }

  function updateFormattedInputText() {
    const prevFormattedInputText = formatedInputText;
    const nextFormattedInputText = formatUserText(inputText);
    if (prevFormattedInputText.length !== nextFormattedInputText.length) {
      setFormatedInputText(nextFormattedInputText);
    }
  }

  function updateIDsFrom(arrOfIDs) {
    const prevArrOfIDs = [...arrOfIDs];
    const nextArrOfIDs = createArrOfProductsIDs(formatedInputText, searchKeys);
    prevArrOfIDs.sort();
    nextArrOfIDs.sort();
    if (prevArrOfIDs.toString() !== nextArrOfIDs.toString()) {
      setIDsArr(nextArrOfIDs);
    }
  }
  // ---------------------------------------------------------
  // useEffect:
  useEffect(() => {
    fetchSearchKeys(init.API, init.searchKeysEndPoint ?? "products").then(
      setSearchKeys
    );
  }, []);

  useEffect(() => {
    if (inputText.length < prevInputText.length) {
      clearSearch();
      updateFormattedInputText();
    } else {
      launchNextSearch();
      updateFormattedInputText();
    }
  }, [inputText]);

  useEffect(() => {
    if (searchStatus === true) {
      if (init.typedMoreThen(3).in(formatedInputText)) {
        updateIDsFrom(arrIDs);
      }
    }
  }, [formatedInputText, searchStatus, enterPressed]);

  useEffect(() => {
    if (arrIDs.length !== 0) {
      if (searchStatus === true) {
        init.timerID = setTimeout(
          () => {
            fetchProductsBy()
              .then((r) => setProducts(r))
              .then(() => enterPressed && setEnterPressed(false));
          },
          enterPressed === true ? 0 : init.searchDelay
        );
      }
    } else {
      setProducts([]);
    }
  }, [arrIDs]);

  useEffect(() => {
    if (products.length > 0) {
      setActiveSearchContainer(true);
      setSearchStatus(false);
    }
  }, [products]);

  useEffect(() => {
    document.addEventListener("keypress", keyPressHandler);
    return () => document.removeEventListener("keypress", keyPressHandler);
  }, [enterPressed]);

  useEffect(() => {
    document.addEventListener("click", closeSearchContainerHandler);
    return () =>
      document.removeEventListener("click", closeSearchContainerHandler);
  }, []);

  return (
    <>
      <Search
        component="input"
        sx={{
          border: "solid rgba(0, 0, 0, 0.2) 1px",
          borderRadius: 20,
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          id={init.searchInputID}
          disabled={downloadState === "pending"}
          required
          autoFocus
          value={downloadState === "pending" ? "searching..." : inputText}
          placeholder={"search"}
          onChange={inputHandler}
        />
        {downloadState === "pending" && (
          <CircularProgress
            sx={{ position: "absolute", right: "40px", top: "12px" }}
            size={15}
            color="inherit"
          />
        )}
        {products.length !== 0 && (
          <SearchResultContainer
            active={activeSearchContainer}
            products={products}
            oneCard={products.length === 1}
          />
        )}
      </Search>
    </>
  );
}
