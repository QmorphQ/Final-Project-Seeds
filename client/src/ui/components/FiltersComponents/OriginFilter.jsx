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
import { originCheckboxStateSelector } from "../../../store/selectors/selectors";
import { setOriginCheckboxState } from "../../../store/actions/filters.actions";


const OriginFilter = () => {
  const classes = useFiltersStyles();

  const originCheckBoxState = useSelector(originCheckboxStateSelector)

  const [isOpenOriginCheckBox, setIsOpenOriginCheckBox] = useState(
    classes.isClosed
  );

  const dispatch = useDispatch();

  const toggleOriginCheckBox = () => {
    if (isOpenOriginCheckBox === classes.isClosed) {
      setIsOpenOriginCheckBox(classes.isOpen);
    } else {
      setIsOpenOriginCheckBox(classes.isClosed);
    }
  };

  const handleOriginChange = (event) => {
    if (event.target.checked) {
      dispatch(setOriginCheckboxState([...originCheckBoxState, event.target.name]));
    } else {
      const newOriginCheckBoxState = originCheckBoxState.filter(
        (option) => option !== event.target.name
      );
      dispatch(setOriginCheckboxState(newOriginCheckBoxState));
    }
  };

  return (
    <Container className={classes.filterContainer}>
      <Container className={classes.originFilterContainer}>
        <Typography variant="h5" className={classes.filterTitle}>
          Country of origin
        </Typography>
        <MoreIcon
          className={classes.moreIcon}
          onClick={toggleOriginCheckBox}
        ></MoreIcon>
      </Container>
      <Container className={isOpenOriginCheckBox}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleOriginChange} name="american" />}
            label="American"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleOriginChange} name="english" />}
            label="English"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleOriginChange} name="french" />}
            label="French"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleOriginChange} name="italian" />}
            label="Italian"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleOriginChange} name="mexican" />}
            label="Mexican"
          />
        </FormGroup>
      </Container>
    </Container>
  );
};

export default OriginFilter;
