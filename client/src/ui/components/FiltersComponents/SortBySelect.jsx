import {
  Container,
  Typography,
  FormControl,
  NativeSelect,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  paramsSelector,
  sortedByPriceSelector,
} from "../../../store/selectors/selectors";
import {
  setParams,
  sortProductsByPrice,
} from "../../../store/actions/filters.actions";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";

const SortBySelect = () => {
  const classes = useFiltersStyles();

  const params = useSelector(paramsSelector);
  const sortedByPrice = useSelector(sortedByPriceSelector);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(sortProductsByPrice(event.target.value));
    if (event.target.value === "less") {
      dispatch(setParams({ ...params, sort: "currentPrice" }));
    } else {
      dispatch(setParams({ ...params, sort: "-currentPrice" }));
    }
  };

  return (
    <Container className={classes.filterContainer}>
      <Typography variant="h5">Sort by</Typography>
      <FormControl>
        <NativeSelect
          onChange={handleChange}
          defaultValue={sortedByPrice}
          inputProps={{
            name: "Sort by",
            id: "uncontrolled-native",
          }}
        >
          <option value={"most"}>Most expensive</option>
          <option value={"less"}>Less expensive</option>
        </NativeSelect>
      </FormControl>
    </Container>
  );
};

export default SortBySelect;
