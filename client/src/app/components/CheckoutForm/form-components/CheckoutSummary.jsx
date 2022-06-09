import { PropTypes } from 'prop-types';
import {
    Typography,
  } from "@mui/material";




const CheckoutSummary = (formData) => {

    const arr = [];

    const entries = Object.entries(formData.formField);
    entries.forEach(([key, value]) => {
        if(value !== "") {
    arr.push(`${key}: ${value}`)
        }
})

console.log(arr);

    return (
        <>
        <Typography paddingBottom="40px" textAlign="center" variant="h2" component="h3">
            Check your data
        </Typography>      
        {arr.map(el => (
            <Typography key={el}>{el}</Typography>
          ))}
        </>
    );
};

export default CheckoutSummary;

CheckoutSummary.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  };