import { useEffect } from "react";
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
import Header from "../../../../app/components/Header/Header.jsx";
import Footer from "../../../../app/components/ Footer/Footer.jsx";
import { downloadRequestStates } from "../../../../app/constants/index";
import ProductsListFilters from "../../../../app/components/ProductsList/ProductsListFilters.jsx";
import {
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
  inputValueFromSelector,
  inputValueToSelector,
  isOpenOriginCheckboxSelector,
  originCheckboxStateSelector,
  paramsSelector,
  queryParamsSelector,
  sliderValuesSelector,
  sortedByPriceSelector,
} from "../../../../store/selectors/selectors";
import Preloader from "../../Preloader/Prelodaer.jsx";
import { fetchFilteredProducts } from "../../../../store/thunks/products.thunks";
import useFiltersStyles from "../../../../app/pages/Filters/useFiltersStyles";
import {
  setInputValueFrom,
  setInputValueTo,
  setIsOpenOriginCheckbox,
  setParams,
  setQueryParams,
  setSliderValues,
  sortProductsByPrice,
  setOriginCheckboxState,
} from "../../../../store/actions/filters.actions";

const PriceFilter = () => {
    const dispatch = useDispatch();

    const handleInputFromChange = (event) => {
        if (event.target.value === undefined) {
          dispatch(setSliderValues([0, sliderValues[1]]));
          dispatch(setInputValueFrom(event.target.value));
    
          dispatch(setParams({ ...params, minPrice: 0, maxPrice: sliderValues[1] }));
        } else {
          if (+event.target.value > 30) {
            dispatch(setSliderValues([30, 30]));
            dispatch(setInputValueFrom(30));
            dispatch(setInputValueTo(30));
    
            dispatch(setParams({ ...params, minPrice: 30, maxPrice: 30 }));
          } else if (+event.target.value > sliderValues[1]) {
            dispatch(setSliderValues([sliderValues[1], sliderValues[1]]));
            dispatch(setInputValueFrom(sliderValues[1]));
    
            dispatch(setParams({
              ...params,
              minPrice: sliderValues[1],
              maxPrice: sliderValues[1],
            }));
          } else {
            dispatch(setSliderValues([+event.target.value, sliderValues[1]]));
            dispatch(setInputValueFrom(event.target.value));
    
            dispatch(setParams({
              ...params,
              minPrice: +event.target.value,
              maxPrice: sliderValues[1],
            }));
          }
          return null;
        }
        return null;
      };
    
      const handleInputToChange = (event) => {
        if (event.target.value === undefined) {
          dispatch(setSliderValues([sliderValues[1], 0]));
          dispatch(setInputValueTo(event.target.value));
    
          dispatch(setParams({ ...params, minPrice: sliderValues[1], maxPrice: 0 }));
        } else {
          if (+event.target.value < 0) {
            dispatch(setSliderValues([0, 0]));
            dispatch(setInputValueFrom(0));
            dispatch(setInputValueTo(0));
    
            dispatch(setParams({ ...params, minPrice: 0, maxPrice: 0 }));
          } else if (+event.target.value > 30) {
            dispatch(setSliderValues([sliderValues[1], 30]));
            dispatch(setInputValueTo(30));
    
            dispatch(setParams({ ...params, minPrice: sliderValues[1], maxPrice: 30 }));
          } else if (+event.target.value < sliderValues[0]) {
            dispatch(setSliderValues([sliderValues[0], sliderValues[0]]));
            dispatch(setInputValueTo(event.target.value));
    
            dispatch(setParams({
              ...params,
              minPrice: sliderValues[0],
              maxPrice: sliderValues[0],
            }));
          } else {
            dispatch(setSliderValues([sliderValues[1], +event.target.value]));
            dispatch(setInputValueTo(event.target.value));
    
            dispatch(setParams({
              ...params,
              minPrice: sliderValues[1],
              maxPrice: +event.target.value,
            }));
          }
          return null;
        }
        return null;
      };
    
      const handleSliderChange = (event, newValue) => {
        console.log(newValue)
        dispatch(setInputValueFrom(newValue[0]));
        dispatch(setInputValueTo(newValue[1]));
        dispatch(setSliderValues(newValue));
    
        dispatch(setParams({ ...params, minPrice: newValue[0], maxPrice: newValue[1] }));
      };
    
      const classes = useFiltersStyles();

    return(
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
                    value={sliderValues}
                    onChangeCommitted={handleSliderChange}
                  />
                </FormControl>
              </Container>
    )
}

export default PriceFilter;