import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortBySelect = ({ selectedValue, handleChange }) => (
  <FormControl>
    <InputLabel>Sort by</InputLabel>
    <Select value={selectedValue} onChange={handleChange}>
      <MenuItem value={"most"}>Most expensive</MenuItem>
      <MenuItem value={"less"}>Less expensive</MenuItem>
    </Select>
  </FormControl>
);
export default SortBySelect;
