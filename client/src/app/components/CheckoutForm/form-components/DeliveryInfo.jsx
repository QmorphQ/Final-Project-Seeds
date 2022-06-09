import { useState } from "react";
import { Formik, Form } from 'formik';
import { PropTypes } from "prop-types";
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
  Button
} from "@mui/material";
import axios from "axios";

const DeliveryInfo = ({ formData, setForm,}) => {
  // axios.get("http://localhost:8000/api/payment-methods").then((response) => {
  //   console.log(response);
  // });

  // const { street, house, flat, postalCode, city, } = formData;



  const [cityes, setPostOfficeCity] = useState({
    data: {
      data: [{ Description: "Enter min 3 characters" }],
    },
  });
  const [postOffice, setPostOffice] = useState({
    data: {
      data: [{ Description: "Loading..." }],
    },
  });

  // const [checkInInfo, setCheckIninfo] =useState({})

  const novaPoshtaApiKey = "7cf87c82521d99729382a37e171da6e7";

  const textField = (name, label, prop, method) => (
    <TextField
    InputLabelProps={{
      style: {
        top: "-10px",
      },
    }}
      inputProps={{
        style: {
          padding: 5,
        },
      }}
      name={prop}
      defaultValue={name || ""}
      label={label}
      fullWidth
      onChange={method}
    />
  );

  const fetchData = (func, settings) => {
    const config = {
      method: "POST",
      url: "https://api.novaposhta.ua/v2.0/json/",
      headers: {
        "content-Type": "application/json",
      },
      data: settings,
      redirect: "follow",
    };

    axios(config).then((response) => func(response));
  };

  const handlerPostOffice = (param) => {
    const settings = {
      apiKey: novaPoshtaApiKey,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: `${param.inputProps.value}`,
        Limit: 500,
      },
    };
    fetchData(setPostOffice, settings);
  };

  const handlerCity = (param) => {
    const settings = {
      apiKey: novaPoshtaApiKey,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: `${param.inputProps.value}`,
        Limit: 5,
      },
    };
    fetchData(setPostOfficeCity, settings);
  };

  const handleSubmitCustomer = (values) => {
    setForm(values);
    console.log(formData);
  }

  

  return (
    <>
     <Formik
       initialValues={formData}
        onSubmit={(values) => handleSubmitCustomer(values)} 
     >
       {({
         values,
      //  errors,
       //  touched,
         handleChange,
        // handleBlur,
      //   handleSubmit,
         setFieldValue,
       //  isSubmitting,
         /* and other goodies */
       }) => (
         <Form id='my-form' >
           {/* {errors.password && touched.password && errors.password} */}
           {/* <button type="submit" >
             Submit
           </button> */}
           <Box display="flex" alignItems="center" justifyContent="space-evenly">
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
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          <FormControl
            sx={{
              marginTop: "20px",
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              Choose delivery method
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="deliveryMethod"
              value={values.deliveryMethod}
              onChange={handleChange}
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
      {values.deliveryMethod === "postOffice" && (
        <>
          <Typography marginBottom={"10px"}>Post Office Info</Typography>
          <Grid container justifyContent="space-around" direction="column">
            <Autocomplete
              
              name="postOfficeCity"
              onChange={(e, value) => {setFieldValue( "postOfficeCity", value.Description)}}
              options={cityes.data.data}
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
                  onChange={() => {handlerCity(params)}}
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
              name="postOfficeWarehouse"
              onChange={(e, value) => {setFieldValue( "postOfficeWarehouse", value.Description)}}
              sx={{ marginTop: "25px" }}
              options={postOffice.data.data}
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
                onClose={handleChange}
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
      {values.deliveryMethod === "home" && (
        <>
          <Grid>
            <Typography variant="h3" component="h3" marginBottom={"10px"}>
              Delivery info
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {textField(values.street, "Street", "street", handleChange)}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(values.house, "House", "house", handleChange)}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(values.flat, "Flat", "flat", handleChange)}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(values.postalCode, "Postal Code", "postalCode", handleChange)}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textField(values.city, "City", "city", handleChange)}
              </Grid>

            </Grid>
          </Grid>
        </>
      )}

         </Form>
         
       )}

     </Formik>    
     <Box sx={{ flex: "1 1 auto" }} />
            <Button
            form="my-form"
              type="submit"
            >
           submit
            </Button> 
    </>
  );
};

export default DeliveryInfo;

DeliveryInfo.propTypes = {
  formData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  step: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  setForm: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
  activeStep: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
  handleNext: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
  submitNewOrder: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
  steps: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
};
