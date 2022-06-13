import { useState, useEffect } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Grid,
  Typography,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/styles";
import { PropTypes } from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PayPal from "./PayPal.jsx";
import { API } from "../../../constants/index";

// import master from './img/master.png';
// import visa from './img/visa.png';
// import paypal from './img/paypal.png';
// import cash from './img/cash.ico';
// import maestro from './img/maestro.png';

const ButtonLeft = styled("button")({
  width: "100%",
  height: "47px",
  border: "none",
  fontSize: "14px",
  color: "#FFFFFF",
  backgroundColor: " #359740",
  borderRadius: "10px",
  cursor: "pointer",
  marginRight: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  paddingLeft: "15px",
  paddingRight: "15px",
});

const PaymentInfo = (formData) => {
  const { paymentMethod } = formData;

  const [paymentData, setPaymentData] = useState([]);
 
  useEffect(() => {
    axios
      .get(`${API}payment-methods`)
      .then((paymentMethods) => setPaymentData(paymentMethods.data))
      .catch(() => console.log("Some problem with payment methods fetching"));
  }, []);

  const textField = (name, label) => (
    <TextField name={name} defaultValue={""} label={label} fullWidth />
  );

  return (
    <>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <IconButton aria-label="delete" disabled color="primary">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography
            paddingBottom="40px"
            textAlign="center"
            variant="h2"
            component="h3"
          >
            Payment info
          </Typography>
        </Box>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Choose payment method
          </FormLabel>
          <RadioGroup
            name="paymentMethod"
            sx={{ flexDirection: "row", justifyItems: "center", width: "100%" }}
            aria-labelledby="demo-controlled-radio-buttons-group"
            value={paymentMethod}
            // onChange={setForm}
          >
            {paymentData.length !== 0 &&
              paymentData.map((payMethod, index) => (
                <FormControlLabel
                  key={index}
                  value={payMethod.name}
                  control={<Radio />}
                  label={
                    <>
                      {payMethod.imageUrls &&
                        payMethod.imageUrls.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            width="auto"
                            height="50px"
                            style={{ marginRight: "5px" }}
                          />
                        ))}
                    </>
                  }
                />
              ))}
          </RadioGroup>
        </FormControl>
        {paymentMethod === "card" && (
          <>
            <Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {textField("cardNumber", "Card Number")}
                </Grid>
                <Grid item xs={12} lg={6}>
                  {textField("data", "exp date mm/yy")}
                </Grid>
                <Grid item xs={12} lg={6}>
                  {textField("cvv", "cvv code")}
                </Grid>
                <Grid item xs={12}>
                  <ButtonLeft>
                    <Typography>12$</Typography>
                    <Typography
                      position={"relative"}
                      left="35%"
                      justifySelf={"left"}
                    >
                      Continue
                    </Typography>
                    <ArrowForwardIcon />
                  </ButtonLeft>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        {paymentMethod === "paypal" && <PayPal />}
      </Container>
    </>
  );
};

export default PaymentInfo;

PaymentInfo.propTypes = {
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
};
