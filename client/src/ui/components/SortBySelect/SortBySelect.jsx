import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const SortBySelect = ({ selectedValue, handleChange }) => {
  return (
    <FormControl>
      <InputLabel>Sort by</InputLabel>
      <Select value={selectedValue} onChange={handleChange}>
        <MenuItem value={"most"}>Most expensive</MenuItem>
        <MenuItem value={"less"}>Less expensive</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBySelect;
