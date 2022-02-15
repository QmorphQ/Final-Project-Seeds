import { useState } from "react";
import { PropTypes } from 'prop-types';
import {
  TextField,
  Box,
  Autocomplete,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Typography,
} from "@mui/material";


const DeliveryInfo = ({ setForm, formData }) => {

  const { street, house, flat, postalCode, city, deliveryMethod } = formData;

  const [cityes, setPostOfficeCity] = useState({
    data: [{ Description: "Enter min 3 characters" }],
  });
  const [postOffice, setPostOffice] = useState({
    data: [{ Description: "Loading..." }],
  });

  const textField = (name, label, prop) => (
    <TextField 
    inputProps={{
      style: {
        padding: 5
      }
   }}
    name={prop}
    defaultValue={name || ""}
    label={label}
    onBlur={setForm}
    fullWidth
      />
  );

  const fetchDataCity = (param, func, call) => {
    const settings = {
      apiKey: "7cf87c82521d99729382a37e171da6e7",
      modelName: "Address",
      calledMethod: call,
      methodProperties: {
        FindByString: `${param.inputProps.value}`,
        Limit: 5,
      },
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(settings),
      redirect: "follow",
    };

    fetch("https://api.novaposhta.ua/v2.0/json/", requestOptions)
      .then((response) => response.json())
      .then((result) => func(result));
  };

  const fetchDataOffice = (param, func, call) => {
    const settings = {
      apiKey: "7cf87c82521d99729382a37e171da6e7",
      modelName: "Address",
      calledMethod: call,
      methodProperties: { CityName: `${param.inputProps.value}`, Limit: 500 },
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(settings),
      redirect: "follow",
    };

    fetch("https://api.novaposhta.ua/v2.0/json/", requestOptions)
      .then((response) => response.json())
      .then((result) => func(result));
  };

  const handlerPostOffice = (param) => {
    fetchDataOffice(param, setPostOffice, "getWarehouses");
  };

  const handlerCity = (param) => {
    fetchDataCity(param, setPostOfficeCity, "getCities");
  };
  return (
    <>
    <Box
    display="flex"
    alignItems= "center"
    justifyContent= "space-evenly" 
    >
      <Box
        component="img"
        sx={{
          width: "120px",
        }}
        alt="img"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nova_Poshta_2014_logo.svg/1200px-Nova_Poshta_2014_logo.svg.png"
        }
      />
          <Box
    display="flex"
    alignItems= "center"
    justifyContent= "space-evenly" 
    >
      <FormControl
              sx={{
                marginTop: "20px",
              }}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Choose delivery method
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="deliveryMethod"
          value={deliveryMethod}
          onChange={setForm}
        >
          <FormControlLabel
            value="postOffice"
            control={<Radio />}
            label="To Post Office"
          />
          <FormControlLabel
            value="home"
            control={<Radio />}
            label="Express delivery"
          />
        </RadioGroup>
      </FormControl>
      </Box>
      </Box>
      {deliveryMethod === "postOffice" && (
        <> 
        <Typography>Post Office Info</Typography>
        <Grid container justifyContent="space-around" direction="column">
          <Autocomplete
            id="city-select"
            options={cityes.data}
            autoHighlight
            getOptionLabel={(option) => option.Description}
            isOptionEqualToValue={(option) => option.Description}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.Description}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                name="postOfficeCity"
                onChange={() => handlerCity(params)}
                onBlur={() => handlerPostOffice(params)}
                {...params}
                label="Choose a city"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Autocomplete
            id="warehouse-select"
            sx={{ marginTop: "25px" }}
            options={postOffice.data}
            autoHighlight
            getOptionLabel={(option) => option.Description}
            isOptionEqualToValue={(option) => option.Description}
            renderOption={(props, option) => (
              <Box key={option.Description} component="li" {...props}>
                {option.Description}
            </Box>
            )}
            renderInput={(params) => (
              <TextField
              name="postOfficeWarehouse"
                {...params}
                label="Choose a Post Office"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />

        </Grid>
        </>
      )}
      {deliveryMethod === "home" && (
        <>
          <Grid>
            <Typography variant="h3" component="h3">Delivery info</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {textField(street, "Street", "street")}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(house, "House", "house")}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(flat, "Flat", "flat" )}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField( postalCode, "Postal Code","postalCode" )}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(city, "City", "city" )}
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};


export default DeliveryInfo;


DeliveryInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  step: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  setForm: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, () => {}]),
};