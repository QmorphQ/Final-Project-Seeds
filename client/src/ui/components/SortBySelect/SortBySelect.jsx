import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const SortBySelect = ({ selectedValue, handleChange }) =>  (
    <FormControl>
      <InputLabel>Sort by</InputLabel>
      <Select value={selectedValue} onChange={handleChange}>
        <MenuItem value={"most"}>Most expensive</MenuItem>
        <MenuItem value={"less"}>Less expensive</MenuItem>
      </Select>
    </FormControl>
  );


SortBySelect.propTypes = {
  selectedValue: PropTypes.number,
  handleChange: PropTypes.func,
}

export default SortBySelect;
