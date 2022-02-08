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
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import MoreIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/ Footer/Footer.jsx";
import { downloadRequestStates } from "../../constants";
import ProductsListFilters from "../../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../../ui/components/SortBySelect/SortBySelect.jsx";
import {
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
} from "../../../store/selectors/selectors";
import Preloader from "../../../ui/components/Preloader/Prelodaer.jsx";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";
import useFiltersStyles from "./useFiltersStyles";

const Filters = () => {
  const classes = useFiltersStyles();

  const loading = useSelector(downloadFilteredProductsRequestStateSelector);
  const filteredProducts = useSelector(filteredProductsSelector);

  const dispatch = useDispatch();

  const defaultParams = {
    perPage: 9,
    startPage: 1,
    sort: "-currentPrice",
  };

  const [selectedValue, setSelectedValue] = useState("most");

  const [params, setParams] = useState(defaultParams);
  const [queryParams, setQueryParams] = useState(new URLSearchParams(params));
  const [inputFromValue, setInputFromValue] = useState(0);
  const [inputToValue, setInputToValue] = useState(30);
  const [sliderValue, setSliderValue] = useState([0, 30]);
  const [isOpenOriginCheckBox, setIsOpenOriginCheckBox] = useState(
    classes.isClosed
  );
  const [originCheckBoxState, setOriginCheckBoxState] = useState([]);

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
    if (originCheckBoxState.length > 0) {
      setParams({ ...params, origin: originCheckBoxState });
    }
  }, [originCheckBoxState]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.value === "less") {
      setParams({ ...params, sort: "currentPrice" });
    } else {
      setParams({ ...params, sort: "-currentPrice" });
    }
  };

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

  const toggleOriginCheckBox = () => {
    isOpenOriginCheckBox === classes.isClosed
      ? setIsOpenOriginCheckBox(classes.isOpen)
      : setIsOpenOriginCheckBox(classes.isClosed);
  };

  const handleOriginChange = (event) => {
    setOriginCheckBoxState([...originCheckBoxState, event.target.name]);
  };

  
  return (
    <>
      <Header />
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
                <FormControl>
                  <Container className={classes.priceInputsContainer}>
                    <Container className={classes.priceInputContainer}>
                      <InputLabel className={classes.priceInputLabel}>
                        From
                      </InputLabel>
                      <Input
                        className={classes.priceInput}
                        value={inputFromValue}
                        onChange={handleInputFromChange}
                        defaultValue={0}
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
                    aria-label="Price"
                    value={sliderValue}
                    onChangeCommitted={handleSliderChange}
                  />
                </FormControl>
              </Container>
              <Container className={classes.filterContainer}>
                <Container className={classes.originFilterContainer}>
                  <Typography variant="h6">Country of origin</Typography>
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
      <Footer />
    </>
  );
};

export default Filters;
