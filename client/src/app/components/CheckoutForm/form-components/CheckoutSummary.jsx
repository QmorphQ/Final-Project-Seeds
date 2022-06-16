import { PropTypes } from "prop-types";
import { Typography, Container, Box } from "@mui/material";
import useCheckoutSummaryStyles from "./useCheckoutSummaryStyles";

const CheckoutSummary = (formData) => {
  const arr = [];

  const classes = useCheckoutSummaryStyles();

  const entries = Object.entries(formData.formField);
  entries.forEach(([key, value]) => {
    if (value !== "") {
      arr.push(`${key}: ${value}`);
    }
  });

  console.log(arr);

  return (
    <>
      <Typography
        paddingBottom="40px"
        textAlign="center"
        variant="h2"
        component="h3"
      >
        Check your data
      </Typography>
      <Container className={classes.container}>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>FIRST NAME: </Typography>
          <Typography>{formData.formField.firstName}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>LAST NAME:</Typography>
          <Typography>{formData.formField.lastName}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>EMAIL:</Typography>
          <Typography>{formData.formField.email}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>TELEPHONE: </Typography>
          <Typography>{formData.formField.telephone}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>ADDRESS: </Typography>
          <Typography></Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>PAYMENT METHOD: </Typography>
          <Typography></Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.fieldName}>SHIPPING METHOD: </Typography>
          <Typography></Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={`${classes.fieldName} ${classes.sum}`}>TOTAL SUM: </Typography>
          <Typography></Typography>
        </Box>
      </Container>
    </>
  );
};

export default CheckoutSummary;

CheckoutSummary.propTypes = {
  formData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};
