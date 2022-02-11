import { useEffect, useState } from "react";
import {
  Container,
  Drawer,
  Grid,
  Stack,
  Typography,
  InputLabel,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import MoreIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import ProductsListFilters from "../../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../../ui/components/SortBySelect/SortBySelect.jsx";
import {
  allCategoriesSelector,
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
  mainCategoriesSelector,
} from "../../../store/selectors/selectors";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";
import useFiltersStyles from "./useFiltersStyles";

const Filters = () => {
  const classes = useFiltersStyles();

  const loading = useSelector(downloadFilteredProductsRequestStateSelector);
  const filteredProducts = useSelector(filteredProductsSelector);
  const allCategories = useSelector(allCategoriesSelector);
  const categories = useSelector(mainCategoriesSelector);

  const dispatch = useDispatch();

  const defaultParams = {
    perPage: 9,
    startPage: 1,
    sort: "-currentPrice",
  };

  const [selectedValue, setSelectedValue] = useState("most");

  const [params, setParams] = useState(defaultParams);
  const [queryParams, setQueryParams] = useState(new URLSearchParams(params));

  const [isOpenCategoriesFilter, setIsOpenCategoriesFilter] = useState(
    classes.isClosed
  );
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [inputFromValue, setInputFromValue] = useState(0);
  const [inputToValue, setInputToValue] = useState(30);
  const [sliderValue, setSliderValue] = useState([0, 30]);

  const [isOpenOriginCheckBox, setIsOpenOriginCheckBox] = useState(
    classes.isClosed
  );
  const [originCheckBoxState, setOriginCheckBoxState] = useState([]);

  const [isOpenMaturationCheckBox, setIsOpenMaturationCheckBox] = useState(
    classes.isClosed
  );
  const [maturationCheckBoxState, setMaturationCheckBoxState] = useState([]);

  useEffect(() => {
    dispatch(fetchFilteredProducts(queryParams));
  }, []);

  useEffect(() => {
    setQueryParams(new URLSearchParams(params));
  }, [params]);

  useEffect(() => {
    dispatch(fetchFilteredProducts(queryParams));
  }, [queryParams]);

  useEffect(() => {
    if (selectedCategory !== null) {
      setParams({ ...params, categories: selectedCategory });
    } else {
      const newParams = params;
      delete newParams.categories;
      setParams(newParams);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (originCheckBoxState.length > 0) {
      setParams({ ...params, origin: originCheckBoxState });
    }
  }, [originCheckBoxState]);

  useEffect(() => {
    if (maturationCheckBoxState.length > 0) {
      setParams({ ...params, maturation: maturationCheckBoxState });
    } else {
      const newParams = params;
      delete newParams.maturation;
      setParams(newParams);
    }
  }, [maturationCheckBoxState]);

  
  // ========== Sort by price =================================

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.value === "less") {
      setParams({ ...params, sort: "currentPrice" });
    } else {
      setParams({ ...params, sort: "-currentPrice" });
    }
  };


  // ========= Filter by categories control ======================

  const categoriesList = categories.map(({ name }) => name);
  const process = (arr) => {
    const res = {};

    arr.forEach(({ parentId, name }) => {
      res[parentId] ??= { parentId, sub: [] };
      res[parentId].sub.push(name);
    });
    return Object.values(res).map(({ parentId, sub }) => ({
      parentId,
      name: sub,
    }));
  };

  const result = process(allCategories);

  const parentsListWithChildren = result.filter((e) => e.parentId !== "null");

  const filterBy = (a, b) =>
    a.filter((e) => !b.find((item) => item.parentId === e) && e);

  const parentsListWithoutChildren = filterBy(
    categoriesList,
    parentsListWithChildren
  );

  const toggleCategoriesFilter = () => {
    if (isOpenCategoriesFilter === classes.isClosed) {
      setIsOpenCategoriesFilter(classes.isOpen);
    } else {
      setIsOpenCategoriesFilter(classes.isClosed);
    }
  };

  const showCategoriesDropdown = (e) => {
    const { id } = e.target;
    return setCategoriesDropdownOpen(
      (prevState) => (id !== prevState && id) || null
    );
  };

  const handleCategoryFilter = (category) => {
    if (category === "all") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  // ========= Filter by price control ===========================

  const handleInputFromChange = (event) => {
    if (event.target.value === undefined) {
      setSliderValue([0, sliderValue[1]]);
      setInputFromValue(event.target.value);
      setParams({ ...params, minPrice: 0, maxPrice: sliderValue[1] });
    } else {
      if (+event.target.value > 30) {
        setSliderValue([30, 30]);
        setInputFromValue(30);
        setInputToValue(30);
        setParams({ ...params, minPrice: 30, maxPrice: 30 });
      } else if (+event.target.value > sliderValue[1]) {
        setSliderValue([sliderValue[1], sliderValue[1]]);
        setInputFromValue(sliderValue[1]);

        setParams({
          ...params,
          minPrice: sliderValue[1],
          maxPrice: sliderValue[1],
        });
      } else {
        setSliderValue([+event.target.value, sliderValue[1]]);
        setInputFromValue(event.target.value);

        setParams({
          ...params,
          minPrice: +event.target.value,
          maxPrice: sliderValue[1],
        });
      }
      return null;
    }
    return null;
  };

  const handleInputToChange = (event) => {
    if (event.target.value === undefined) {
      setSliderValue([sliderValue[1], 0]);
      setInputToValue(event.target.value);

      setParams({ ...params, minPrice: sliderValue[1], maxPrice: 0 });
    } else {
      if (+event.target.value < 0) {
        setSliderValue([0, 0]);
        setInputFromValue(0);
        setInputToValue(0);

        setParams({ ...params, minPrice: 0, maxPrice: 0 });
      } else if (+event.target.value > 30) {
        setSliderValue([sliderValue[1], 30]);
        setInputToValue(30);

        setParams({ ...params, minPrice: sliderValue[1], maxPrice: 30 });
      } else if (+event.target.value < sliderValue[0]) {
        setSliderValue([sliderValue[0], sliderValue[0]]);
        setInputToValue(event.target.value);

        setParams({
          ...params,
          minPrice: sliderValue[0],
          maxPrice: sliderValue[0],
        });
      } else {
        setSliderValue([sliderValue[1], +event.target.value]);
        setInputToValue(event.target.value);

        setParams({
          ...params,
          minPrice: sliderValue[1],
          maxPrice: +event.target.value,
        });
      }
      return null;
    }
    return null;
  };

  const handleSliderChange = (event, newValue) => {
    setInputFromValue(newValue[0]);
    setInputToValue(newValue[1]);
    setSliderValue(newValue);

    setParams({ ...params, minPrice: newValue[0], maxPrice: newValue[1] });
  };

  // ============= Filter by origin control ==========================

  const toggleOriginCheckBox = () => {
    if (isOpenOriginCheckBox === classes.isClosed) {
      setIsOpenOriginCheckBox(classes.isOpen);
    } else {
      setIsOpenOriginCheckBox(classes.isClosed);
    }
  };

  const handleOriginChange = (event) => {
    if (event.target.checked) {
      setOriginCheckBoxState([...originCheckBoxState, event.target.name]);
    } else {
      const newOriginCheckBoxState = originCheckBoxState.filter(
        (option) => option !== event.target.name
      );
      setOriginCheckBoxState(newOriginCheckBoxState);
    }
  };

  // =========== Filter by maturation term control =======================

  const toggleMaturationCheckBox = () => {
    if (isOpenMaturationCheckBox === classes.isClosed) {
      setIsOpenMaturationCheckBox(classes.isOpen);
    } else {
      setIsOpenMaturationCheckBox(classes.isClosed);
    }
  };

  const handleMaturationChange = (event) => {
    if (event.target.checked) {
      setMaturationCheckBoxState([
        ...maturationCheckBoxState,
        event.target.name,
      ]);
    } else {
      const newMaturationCheckBoxState = maturationCheckBoxState.filter(
        (option) => option !== event.target.name
      );
      setMaturationCheckBoxState(newMaturationCheckBoxState);
    }
  };


  return (
    <>
      <Grid container>
        <Grid item xs={0} md={4}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            anchor="left"
          >
            <Stack spacing={4}>
              <Typography variant="h5" className={classes.title}>
                FILTERS
              </Typography>
              <Container className={classes.filterContainer}>
                <Typography variant="h5">Sort by</Typography>
                <SortBySelect
                  selectedValue={selectedValue}
                  handleChange={handleSelectChange}
                />
              </Container>
              <Container className={classes.filterContainer}>
                <Container>
                  <Typography variant="h5" className={classes.filterTitle}>
                    Seeds categories
                  </Typography>
                  <MoreIcon
                    className={classes.moreIcon}
                    onClick={toggleCategoriesFilter}
                  ></MoreIcon>
                </Container>

                <Stack className={isOpenCategoriesFilter}>
                  {parentsListWithoutChildren.map((category) => (
                    <Container key={category}>
                      <Container className={classes.categoriesContainer}>
                        <Typography
                          className={classes.superCategoryTitle}
                          variant="h6"
                          onClick={() => {
                            handleCategoryFilter(category);
                          }}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Typography>
                      </Container>
                    </Container>
                  ))}
                  {parentsListWithChildren.map((categoryWithSubs) => (
                    <Container key={categoryWithSubs.parentId}>
                      <Container className={classes.categoriesContainer}>
                        <Typography
                          className={classes.superCategoryTitle}
                          variant="h6"
                          id={categoryWithSubs.parentId}
                          onClick={showCategoriesDropdown}
                        >
                          {categoryWithSubs.parentId.charAt(0).toUpperCase() +
                            categoryWithSubs.parentId.slice(1)}
                        </Typography>
                        {categoriesDropdownOpen !==
                        categoryWithSubs.parentId ? (
                          <ExpandMoreIcon
                            id={categoryWithSubs.parentId}
                            className={classes.expandIcon}
                            onClick={showCategoriesDropdown}
                          />
                        ) : (
                          <ExpandLessIcon
                            className={classes.expandIcon}
                            onClick={showCategoriesDropdown}
                          />
                        )}
                      </Container>
                      {categoriesDropdownOpen === categoryWithSubs.parentId && (
                        <Container>
                          <Stack>
                            <Typography
                              className={classes.subCategoriesTitle}
                              variant="p"
                              onClick={() => {
                                handleCategoryFilter(categoryWithSubs.name[0]);
                              }}
                            >
                              {categoryWithSubs.name[0]
                                .charAt(0)
                                .toUpperCase() +
                                categoryWithSubs.name[0].slice(1)}
                            </Typography>
                            <Typography
                              className={classes.subCategoriesTitle}
                              variant="p"
                              onClick={() => {
                                handleCategoryFilter(categoryWithSubs.name[1]);
                              }}
                            >
                              {categoryWithSubs.name[1]
                                .charAt(0)
                                .toUpperCase() +
                                categoryWithSubs.name[1].slice(1)}
                            </Typography>
                          </Stack>
                        </Container>
                      )}
                    </Container>
                  ))}
                </Stack>
              </Container>
              <Container className={classes.filterContainer}>
                <Typography
                  variant="h5"
                  className={classes.filterTitle}
                  sx={{ paddingLeft: "25px", marginBottom: "10px" }}
                >
                  Price
                </Typography>

                <Container className={classes.priceInputsContainer}>
                  <FormControl>
                    <Container className={classes.priceInputContainer}>
                      <InputLabel className={classes.priceInputLabel}>
                        From
                      </InputLabel>
                      <Input
                        className={classes.priceInput}
                        value={inputFromValue}
                        onChange={handleInputFromChange}
                      />
                    </Container>
                  </FormControl>
                  <FormControl>
                    <Container className={classes.priceInputContainer}>
                      <InputLabel className={classes.priceInputLabel}>
                        To
                      </InputLabel>
                      <Input
                        className={classes.priceInput}
                        value={inputToValue}
                        onChange={handleInputToChange}
                      />
                    </Container>
                  </FormControl>
                </Container>

                <Slider
                  className={classes.priceSlider}
                  min={0}
                  max={30}
                  getAriaLabel={() => "Price"}
                  value={sliderValue}
                  onChangeCommitted={handleSliderChange}
                />
              </Container>
              <Container className={classes.filterContainer}>
                <Container className={classes.originFilterContainer}>
                  <Typography variant="h5" className={classes.filterTitle}>
                    Country of origin
                  </Typography>
                  <MoreIcon
                    className={classes.moreIcon}
                    onClick={toggleOriginCheckBox}
                  ></MoreIcon>
                </Container>
                <Container className={isOpenOriginCheckBox}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleOriginChange}
                          name="american"
                        />
                      }
                      label="American"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleOriginChange}
                          name="english"
                        />
                      }
                      label="English"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleOriginChange} name="french" />
                      }
                      label="French"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleOriginChange}
                          name="italian"
                        />
                      }
                      label="Italian"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleOriginChange}
                          name="mexican"
                        />
                      }
                      label="Mexican"
                    />
                  </FormGroup>
                </Container>
              </Container>
              <Container className={classes.filterContainer}>
                <Container className={classes.originFilterContainer}>
                  <Typography variant="h5" className={classes.filterTitle}>
                    Term of maturation
                  </Typography>
                  <MoreIcon
                    className={classes.moreIcon}
                    onClick={toggleMaturationCheckBox}
                  ></MoreIcon>
                </Container>
                <Container className={isOpenMaturationCheckBox}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleMaturationChange}
                          name="early"
                        />
                      }
                      label="Early"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleMaturationChange}
                          name="late"
                        />
                      }
                      label="Late"
                    />
                  </FormGroup>
                </Container>
              </Container>
            </Stack>

            {/* links/list section */}
          </Drawer>
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductsListFilters
            loading={loading}
            productList={filteredProducts}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
