import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";
import { maturationCheckboxStateSelector } from "../../../store/selectors/selectors";
import { setMaturationCheckboxState } from "../../../store/actions/filters.actions";


const MaturationFilter = () => {
  const classes = useFiltersStyles();

  const maturationCheckBoxState = useSelector(maturationCheckboxStateSelector);

  const [isOpenMaturationCheckBox, setIsOpenMaturationCheckBox] = useState(
    classes.isClosed
  );

  const dispatch = useDispatch();

  const toggleMaturationCheckBox = () => {
    if (isOpenMaturationCheckBox === classes.isClosed) {
      setIsOpenMaturationCheckBox(classes.isOpen);
    } else {
      setIsOpenMaturationCheckBox(classes.isClosed);
    }
  };

  const handleMaturationChange = (event) => {
    if (event.target.checked) {
      dispatch(setMaturationCheckboxState([
        ...maturationCheckBoxState,
        event.target.name,
      ]));
    } else {
      const newMaturationCheckBoxState = maturationCheckBoxState.filter(
        (option) => option !== event.target.name
      );
      dispatch(setMaturationCheckboxState(newMaturationCheckBoxState));
    }
  };

  return (
    <Container className={classes.filterContainer}>
      <Container className={classes.originFilterContainer}>
        <Typography variant="h5" className={classes.filterTitle}>
          Term of maturation
        </Typography>
        <MoreIcon
          className={classes.moreIcon}
          onClick={toggleMaturationCheckBox}
        ></MoreIcon>
      </Container>
      <Container className={isOpenMaturationCheckBox}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={handleMaturationChange} name="early" />
            }
            label="Early"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleMaturationChange} name="late" />}
            label="Late"
          />
        </FormGroup>
      </Container>
    </Container>
  );
};

export default MaturationFilter;
