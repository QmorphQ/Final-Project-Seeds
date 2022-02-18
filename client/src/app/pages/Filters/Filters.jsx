import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Drawer, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductsListFilters from "../../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../../ui/components/FiltersComponents/SortBySelect.jsx";
import CategoryFilter from "../../../ui/components/FiltersComponents/CategoryFilter.jsx";
import {
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
  maturationCheckboxStateSelector,
  originCheckboxStateSelector,
  paramsSelector,
  queryParamsSelector,
  selectedCategorySelector,
} from "../../../store/selectors/selectors";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";
import useFiltersStyles from "./useFiltersStyles";
import OriginFilter from "../../../ui/components/FiltersComponents/OriginFilter.jsx";
import MaturationFilter from "../../../ui/components/FiltersComponents/MaturationFilter.jsx";
import {
  setInputValueFrom,
  setInputValueTo,
  setMaturationCheckboxState,
  setOriginCheckboxState,
  setParams,
  setQueryParams,
  setSelectedCategory,
  setSliderValues,
} from "../../../store/actions/filters.actions";
import PriceFilter from "../../../ui/components/FiltersComponents/PriceFilter.jsx";

const Filters = () => {
  const classes = useFiltersStyles();

  const loading = useSelector(downloadFilteredProductsRequestStateSelector);
  const filteredProducts = useSelector(filteredProductsSelector);
  const params = useSelector(paramsSelector);
  const queryParams = useSelector(queryParamsSelector);
  const selectedCategory = useSelector(selectedCategorySelector);
  const originCheckBoxState = useSelector(originCheckboxStateSelector);
  const maturationCheckBoxState = useSelector(maturationCheckboxStateSelector);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  let initialParams = null;

  const defaultParams = {
    perPage: 9,
    startPage: 1,
    sort: "-currentPrice",
  };

  if (searchParams.toString() !== "") {
    const newParams = {};
    searchParams.forEach((value, key) => {
      newParams[key] = value;
    });
    initialParams = newParams;
  } else {
    initialParams = defaultParams;
  }

  useEffect(() => {
    dispatch(setParams(initialParams));

    dispatch(setQueryParams(new URLSearchParams(initialParams)));

    if (searchParams.get("categories") !== null) {
      dispatch(setSelectedCategory(searchParams.get("categories")));
    }

    if (searchParams.get("minPrice") !== null) {
      dispatch(setInputValueFrom(searchParams.get("minPrice")));
    }

    if (searchParams.get("maxPrice") !== null) {
      dispatch(setInputValueTo(searchParams.get("maxPrice")));
    }

    if (
      searchParams.get("minPrice") !== null &&
      searchParams.get("maxPrice") !== null
    ) {
      dispatch(
        setSliderValues([
          +searchParams.get("minPrice"),
          +searchParams.get("maxPrice"),
        ])
      );
    }

    if (searchParams.get("origin") !== null) {
      dispatch(setOriginCheckboxState(searchParams.get("origin")));
    }

    if (searchParams.get("maturation") !== null) {
      dispatch(setMaturationCheckboxState(searchParams.get("maturation")));
    }

    dispatch(fetchFilteredProducts(queryParams));
  }, []);

  useEffect(() => {
    dispatch(setQueryParams(new URLSearchParams(params)));
  }, [params]);

  useEffect(() => {
    setSearchParams(queryParams);
    dispatch(fetchFilteredProducts(queryParams));
  }, [queryParams]);

  useEffect(() => {
    if (selectedCategory.length !== 0) {
      dispatch(setParams({ ...params, categories: selectedCategory }));
    } else {
      const newParams = { ...params };
      delete newParams.categories;
      dispatch(setParams(newParams));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (originCheckBoxState.length > 0) {
      dispatch(setParams({ ...params, origin: originCheckBoxState }));
    } else {
      const newParams = { ...params };
      delete newParams.origin;
      dispatch(setParams(newParams));
    }
  }, [originCheckBoxState]);

  useEffect(() => {
    if (maturationCheckBoxState.length > 0) {
      dispatch(setParams({ ...params, maturation: maturationCheckBoxState }));
    } else {
      const newParams = { ...params };
      delete newParams.maturation;
      dispatch(setParams(newParams));
    }
  }, [maturationCheckBoxState]);

  
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

              <SortBySelect />

              <CategoryFilter />

              <PriceFilter />

              <OriginFilter />

              <MaturationFilter />
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
