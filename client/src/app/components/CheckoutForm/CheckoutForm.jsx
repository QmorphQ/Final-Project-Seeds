import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useForm } from "react-hooks-helper";
import { PropTypes } from "prop-types";
import DeliveryInfo from "./form-components/DeliveryInfo.jsx";
import PaymentInfo from "./form-components/PaymentInfo.jsx";
import CustomerInfo from "./form-components/CustomerInfo.jsx";
import CheckoutSummary from "./form-components/CheckoutSummary.jsx";

const steps = ["1", "2", "3"];

const defaultData = {
  firstName: "Anton",
  lastName: "Ogniev",
  email: "anton@icloud.com",
  telephone: "+38 095 514 3233",
  street: "Hegenheimerstrasse",
  house: "79",
  flat: "130",
  postalCode: "4055",
  city: "Basel",
  deliveryMethod: "home",
  postOfficeCity: "",
  postOfficeWarehouse: "",
  paymentMethod: "card",
};

export default function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setForm] = useForm(defaultData);

  const createOrder = () => {
    const newOrder = {
      customerId: "5d99ce196d40fb1b747bc5f5",
      deliveryAddress: {
        country: "Ukraine",
        city: formData.city,
        address: `${formData.street} ${formData.house}, f.${formData.flat}`,
        postal: formData.postalCode,
      },
      shipping: "Kiev 50UAH",
      paymentInfo: formData.paymentMethod,
      status: "not shipped",
      email: formData.email,
      mobile: formData.telephone,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: `<h1>Your order №XXXXXXXX is placed. </h1>
    <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
    <p>Sincerely, your WMF team.</p>`,
    };

    return {
      ...newOrder,
      products: "cart.products",
    };
  };

  const submitNewOrder = () => {
    const newOrder = createOrder();
    console.log(newOrder);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const props = { formData, setForm };

  const StepContent = ({ step }) => {
    switch (step) {
      case 0:
        return (
          <>
            <CustomerInfo {...props} />
            <DeliveryInfo {...props} />
          </>
        );
      case 1:
        return <PaymentInfo {...props} />;
      case 2:
        return <CheckoutSummary {...props} />;
      default:
        return <></>;
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container
      sx={{
        width: "50%",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={4} md={4}>
                <StepContent step={activeStep} />
              </Grid>
            </Grid>
          </>
          <Box sx={{ display: "flex", flexDirection: "row", pb: "20px" }}>
            {activeStep !== 0 && (
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={
                activeStep === steps.length - 1 ? submitNewOrder : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

CheckoutForm.propTypes = {
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
};
