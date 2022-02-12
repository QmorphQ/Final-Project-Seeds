import { Grid, TextField, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PropTypes } from 'prop-types';

const CustomerInfo = ({ setForm, formData }) => {
  const { firstName, lastName, email, telephone } = formData;

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

  return (
    <>
      {" "}
      <Box
        display="flex"
        height="40px"
        justifyContent="center"
        alignItems="baseline"
      >
        <IconButton aria-label="delete" disabled color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        <Typography
          paddingBottom="40px"
          textAlign="center"
          variant="h2"
          component="h3"
        >
          Checkout
        </Typography>
      </Box>
      <Grid>
        <Typography variant="h3" component="h3">
          Personal info
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            {textField(firstName, "First Name", "firstName")}
          </Grid>
          <Grid item xs={12} lg={6}>
            {textField(lastName, "Last Name", "lastName")}
          </Grid>
          <Grid item xs={12}>
            {textField(email, "Email", "email")}
          </Grid>
          <Grid item xs={12}>
            {textField(telephone, "Telephone", "telephone")}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomerInfo;


CustomerInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  step: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  setForm: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, () => {}]),
};