import PropTypes from 'prop-types'; // MVP
import { useEffect, useState } from "react";
import {
  Container,
  Drawer,
  Grid,
  Stack,
  Typography,
  InputLabel,
} from "@mui/material";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
// import { downloadRequestStates } from "../../constants";
import ProductsListFilters from "../../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../../ui/components/SortBySelect/SortBySelect.jsx";
import {
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
} from "../../../store/selectors/selectors";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";
import useFiltersStyles from "./useFiltersStyles";

const Filters = () => {
  const classes = useFiltersStyles();

  const loading = useSelector(downloadFilteredProductsRequestStateSelector);
  const filteredProducts = useSelector(filteredProductsSelector);

  const dispatch = useDispatch();

  const defaultUSP = new URLSearchParams({
    perPage: 6,
    startPage: 1,
    sort: "-currentPrice",
  });

  const [selectedValue, setSelectedValue] = useState("most");
  const [queryParams, setQueryParams] = useState(defaultUSP);
  const [inputFromValue, setInputFromValue] = useState(0);
  const [inputToValue, setInputToValue] = useState(30);
  const [sliderValue, setSliderValue] = useState([0, 30]);

   
  useEffect(() => {
    dispatch(fetchFilteredProducts(queryParams));
  }, []);

  useEffect(() => {
    console.log('dispatch')
    dispatch(fetchFilteredProducts(queryParams));
  }, [queryParams]);
// ================================================================== MVP

// ================================================================== MVP
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.value === "less") {
      const usp = new URLSearchParams({
        perPage: 6,
        startPage: 1,
        sort: "currentPrice",
      });
      setQueryParams(usp);
    } else {
      setQueryParams(defaultUSP);
    }
  };

  const handleInputFromChange = (event) => {
    if (event.target.value === undefined) {
      setSliderValue([0, sliderValue[1]]);
      setInputFromValue(event.target.value);

      const usp = new URLSearchParams({
        minPrice: 0,
        maxPrice: sliderValue[1],
      });
      setQueryParams(usp);
    } else {
      if (+event.target.value > 30) {
        setSliderValue([30, 30]);
        setInputFromValue(30);
        setInputToValue(30);

        const usp = new URLSearchParams({
          minPrice: 30,
          maxPrice: 30,
        });
        setQueryParams(usp);
      } else if (+event.target.value > sliderValue[1]) {
        setSliderValue([sliderValue[1], sliderValue[1]]);
        setInputFromValue(sliderValue[1]);

        const usp = new URLSearchParams({
          minPrice: sliderValue[1],
          maxPrice: sliderValue[1],
        });
        setQueryParams(usp);
      } else {
        setSliderValue([+event.target.value, sliderValue[1]]);
        setInputFromValue(event.target.value);

        const usp = new URLSearchParams({
          minPrice: +event.target.value,
          maxPrice:  sliderValue[1],
        });
        setQueryParams(usp);
      }
      return null;
    }
    return null
  };

  const handleInputToChange = (event) => {
    if (event.target.value === undefined) {
      setSliderValue([sliderValue[1], 0]);
      setInputToValue(event.target.value);

      const usp = new URLSearchParams({
        minPrice: sliderValue[1],
        maxPrice:  0,
      });
      setQueryParams(usp);
    } else {
      if (+event.target.value < 0) {
        setSliderValue([0, 0]);
        setInputFromValue(0);
        setInputToValue(0);

        const usp = new URLSearchParams({
          minPrice: 0,
          maxPrice:  0,
        });
        setQueryParams(usp);
      } else if (+event.target.value > 30) {
        setSliderValue([sliderValue[1], 30]);
        setInputToValue(30);

        const usp = new URLSearchParams({
          minPrice: sliderValue[1],
          maxPrice:  30,
        });
        setQueryParams(usp);
      } else if (+event.target.value < sliderValue[0]) {
        setSliderValue([sliderValue[0], sliderValue[0]]);
        setInputToValue(event.target.value);

        const usp = new URLSearchParams({
          minPrice: sliderValue[0],
          maxPrice:  sliderValue[0]
        });
        setQueryParams(usp);
      } else {
        setSliderValue([sliderValue[1], +event.target.value]);
        setInputToValue(event.target.value);

        const usp = new URLSearchParams({
          minPrice: sliderValue[1],
          maxPrice:  +event.target.value
        });
        setQueryParams(usp);
      }
      return null;
    }
    return null;
  };

  const handleSliderChange = (event, newValue) => {
    setInputFromValue(newValue[0]);
    setInputToValue(newValue[1]);
    setSliderValue(newValue);

    const usp = new URLSearchParams({
      minPrice: newValue[0],
      maxPrice:  newValue[1]
    });
    setQueryParams(usp);
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
                <Typography variant="h6">Sort by</Typography>
                <SortBySelect
                  selectedValue={selectedValue}
                  handleChange={handleSelectChange}
                />
              </Container>
              <Container className={classes.filterContainer}>
                <Typography variant="h6">Categories</Typography>
              </Container>
              <Container className={classes.filterContainer}>
                <Typography variant="h6">Price</Typography>
                <FormGroup>
                  <Container className={classes.priceInputsContainer}>
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
                  </Container>

                  <Slider
                    className={classes.priceSlider}
                    min={0}
                    max={30}
                    getAriaLabel={() => "Price"}
                    value={sliderValue}
                    onChangeCommitted={handleSliderChange}
                  />
                </FormGroup>
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

// ================================================ MVP
Filters.propTypes = {
  queryArg: PropTypes.string,
};
// ================================================ MVP


export default Filters;
