import { useState, useEffect} from "react";
// import axios from "axios";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch  } from "react-redux";
import { Formik, Form } from "formik";
import { PropTypes } from "prop-types";
import {
  getCustomer
} from "../../../store/thunks/customer.thunks";
import { currentCustomerSelector } from "../../../store/selectors/selectors";
import FORM_VALIDATION from "./FormValidation.jsx";
import PaymentInfo from "./form-components/PaymentInfo.jsx";
import CustomerInfo from "./form-components/CustomerInfo.jsx";
import CheckoutSummary from "./form-components/CheckoutSummary.jsx";
import ShippingInfo from "./form-components/ShippingInfo.jsx";

const steps = ["1", "2", "3"];

// const defaultData = {
//   firstName: "Anton",
//   lastName: "Ogniev",
//   email: "anton@icloud.com",
//   telephone: "+38 095 514 3233",
//   street: "Hegenheimerstrasse",
//   house: "79",
//   flat: "130",
//   postalCode: "4055",
//   city: "Basel",
//   deliveryMethod: "",
//   postOfficeCity: "",
//   postOfficeWarehouse: "",
//   paymentMethod: "card",
// };


export default function CheckoutForm() {
  const currentCustomer = useSelector(currentCustomerSelector);
  const [activeStep, setActiveStep] = useState(0);
  const [orderSummary, setOrderSummary] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const formId = "checkoutForm";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomer());
  }, []);

  
 
  // const createOrder = (order) => {
  //   const interimOrder = {
  //     customerId: "5d99ce196d40fb1b747bc5f5",
  //     deliveryAddress: {
  //       country: "Ukraine",
  //       city: order.city,
  //       address: `${order.street} ${order.house}, f.${order.flat}`,
  //       postal: order.postalCode,
  //     },
  //     shipping: "Kiev 50UAH",
  //     paymentInfo: order.paymentMethod,
  //     status: "not shipped",
  //     email: order.email,
  //     mobile: order.telephone,
  //     letterSubject: "Thank you for order! You are welcome!",
  //     letterHtml: `<h1>Your order №XXXXXXXX is placed. </h1>
  //   <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
  //   <p>Sincerely, your WMF team.</p>`,
  //   };
  //   return {
  //     interimOrder
  //   }
  
  // }



  // const placeOrderToDB = (newOrder) => {
  //   return axios
  //     .post('http://localhost:8000/api/orders', newOrder)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       alert(newOrder);
  //       return error
  //     })
  // }

  // const submitNewOrder = (order) => {
  //   const newOrder = createOrder(order.interimOrder);

  //   placeOrderToDB(newOrder)
  //     .then((response) => {
  //       if (response.orderIsPlaced) {
  //         console.log('sent')
  //       }
  //     })
  //     .catch(() => {
  //       console.log('error');;
  //     });
  // };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  async function _submitForm(values, actions) {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(true);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      setOrderSummary(values)
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const orderNumber = "#222555"
  

  // const submitNewOrder = () => {
  //   const newOrder = createOrder();
  //   console.log(newOrder);
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const props = { formData, setForm, submitNewOrder, handleNext, activeStep, setActiveStep, steps };

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <CustomerInfo/>
            <ShippingInfo/>
          </>
        ) 
      case 1:
        return <PaymentInfo/>;
      case 2:
        return <CheckoutSummary formField={orderSummary}/>;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    currentCustomer != null &&
    <Box
    margin={'auto'}
    width={{ xs: "100%", sm: "50%"}}
    display="flex"
    flexDirection= "column"
    justifyContent= "space-between"
    padding="20px"
    >
      <Stepper activeStep={activeStep}>
        {steps.map((index) => 
 (
            <Step key={index}>
              <StepLabel
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveStep(+index - 1);
                }}
              ></StepLabel>
            </Step>
          )
        )}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Your oder {orderNumber} has been sended!
            Thank You!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <Formik initialValues={currentCustomer} validationSchema={FORM_VALIDATION} onSubmit={_handleSubmit}>
          {
          (props) => (
            <Form id={formId}>
              {stepContent(activeStep, props.setFieldValue)}
              <Box display="flex" mt="20px" justifyContent="flex-end"> 
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                  <Button
                    disabled={props.isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {isLastStep? "Place order" : "Next"}
                  </Button>
                  {props.isSubmitting && <CircularProgress size={24} />}
                </Box>
            </Form>
          )}
        </Formik>
      )}
    </Box>
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
  isSubmitting: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  setFieldValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};
