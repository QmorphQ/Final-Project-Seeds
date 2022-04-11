import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Drawer, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsListFilters from "../../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../../ui/components/FiltersComponents/SortBySelect.jsx";
import CategoryFilter from "../../../ui/components/FiltersComponents/CategoryFilter.jsx";
import {
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
  hasMoreFilteredProductsSelector,
  maturationCheckboxStateSelector,
  originCheckboxStateSelector,
  productsQuantitySelector,
  queryParamsSelector,
  selectedCategorySelector,
} from "../../../store/selectors/selectors";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";
import useFiltersStyles from "./useFiltersStyles";
import OriginFilter from "../../../ui/components/FiltersComponents/OriginFilter.jsx";
import MaturationFilter from "../../../ui/components/FiltersComponents/MaturationFilter.jsx";
import {
  setHasMoreFilteredProducts,
  setInputValueFrom,
  setInputValueTo,
  setMaturationCheckboxState,
  setOriginCheckboxState,
  setQueryParams,
  setSelectedCategory,
  setSliderValues,
} from "../../../store/actions/filters.actions";
import PriceFilter from "../../../ui/components/FiltersComponents/PriceFilter.jsx";

const Filters = () => {
  const classes = useFiltersStyles();

  const productsQuantity = useSelector(productsQuantitySelector);
  const loading = useSelector(downloadFilteredProductsRequestStateSelector);
  const filteredProducts = useSelector(filteredProductsSelector);
  const hasMoreFilteredProducts = useSelector(hasMoreFilteredProductsSelector);
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

  const fetchData = () => {
    let newParams = {};
    if (productsQuantity !== 0) {
      newParams = {
        ...queryParams,
        perPage: +queryParams.perPage + 9,
      };
    }

    if (productsQuantity !== 0 && newParams.perPage > productsQuantity) {
      newParams.perPage = productsQuantity;
      setHasMoreFilteredProducts(false);
    }

    if (hasMoreFilteredProducts) {
      dispatch(setQueryParams(newParams));
    }
  };

  useEffect(() => {
    dispatch(setQueryParams(initialParams));

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

    dispatch(fetchFilteredProducts(defaultParams));

    return function cleanUp() {
      dispatch(setQueryParams(null));
      dispatch(setSelectedCategory([]));
      dispatch(setInputValueFrom(0));
      dispatch(setInputValueTo(30));
      dispatch(setSliderValues([0, 30]));
      dispatch(setOriginCheckboxState([]));
      dispatch(setMaturationCheckboxState([]));
      dispatch(setHasMoreFilteredProducts(true));
    };
  }, []);

  useEffect(() => {
    setSearchParams(new URLSearchParams(queryParams));
    if (Object.keys(queryParams).length > 0) {
      dispatch(fetchFilteredProducts(queryParams));
    }
  }, [queryParams]);

  useEffect(() => {
    if (selectedCategory.length !== 0) {
      dispatch(
        setQueryParams({ ...queryParams, categories: selectedCategory })
      );
    } else {
      const newParams = { ...queryParams };
      delete newParams.categories;
      dispatch(setQueryParams(newParams));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (originCheckBoxState.length > 0) {
      dispatch(setQueryParams({ ...queryParams, origin: originCheckBoxState }));
    } else {
      const newParams = { ...queryParams };
      delete newParams.origin;
      dispatch(setQueryParams(newParams));
    }
  }, [originCheckBoxState]);

  useEffect(() => {
    if (maturationCheckBoxState.length > 0) {
      dispatch(
        setQueryParams({ ...queryParams, maturation: maturationCheckBoxState })
      );
    } else {
      const newParams = { ...queryParams };
      delete newParams.maturation;
      dispatch(setQueryParams(newParams));
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
          <InfiniteScroll
            dataLength={filteredProducts.length}
            next={fetchData}
            hasMore={hasMoreFilteredProducts}
          >
            <ProductsListFilters
              loading={loading}
              productList={filteredProducts}
            />
          </InfiniteScroll>
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
