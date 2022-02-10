import PropTypes from "prop-types";
import { FormControl, NativeSelect } from "@mui/material";

const SortBySelect = ({ selectedValue, handleChange }) => (
  <FormControl>
    <NativeSelect
      onChange={handleChange}
      defaultValue={selectedValue}
      inputProps={{
        name: "Sort by",
        id: "uncontrolled-native",
      }}
    >
      <option value={"most"}>Most expensive</option>
      <option value={"less"}>Less expensive</option>
    </NativeSelect>
  </FormControl>
);

SortBySelect.propTypes = {
  selectedValue: PropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SortBySelect;
