
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, IconButton, Container } from "@mui/material";
import Textfield from './Components/FormsUI/Textfield';
import ButtonWrapper from './Components/FormsUI/Submit/ButtonWrapper';


const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine: '',
    house: '',
    code: '',
    flat: '',
    city: '',
    state: '',
    country: '',
    password: '',
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string()
      .email('Invalid email.'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number'),
    addressLine: Yup.string(),
    code: Yup.number()
    .integer()
    .typeError('Please enter a valid code number'),
    flat: Yup.number()
    .integer()
    .typeError('Please enter the correct number'),
    house: Yup.number()
    .integer()
    .typeError('Please enter the correct number'),
    city: Yup.string(),
    password: Yup.string()
    .min(8, 'Password is 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirm : Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same!'),
  });
  
function PersonalInfo  ()  { 
    const navigation = useNavigate()
    const handleSubmit = () => { navigation(-1) }
    return (
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
              <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={handleSubmit}>
                <Form>
                  <Grid container spacing={2}>
                  <IconButton
                    edge="start"
                    color="primary">
                  </IconButton>
                    <Grid item xs={12}>
                      <Typography>
                        Your details
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name="firstName"
                        label="First Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name="lastName"
                        label="Last Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name="email"
                        label="Email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name="phone"
                        label="Phone"
                      />
                    </Grid>
                    <Grid item xs={12}>
                            <Textfield
                            name="password"
                            label="New password"
                            type='password'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textfield
                            name="passwordConfirm"
                            label="Confirm new password*"
                            type='password'
                            />
                    </Grid> 
                    <Grid item xs={12}>
                      <Typography>
                        Address
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name="addressLine"
                        label="Street"
                      />
                    </Grid>  
                    <Grid item xs={6}>
                      <Textfield
                        name="city"
                        label="City"
                      />
                    </Grid>  
                    <Grid item xs={6}>
                      <Textfield
                        name="house"
                        label="House"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="flat"
                        label="Flat"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="code"
                        label="Postal code"
                      />
                    </Grid>
                    <Grid sx={{mb:10, mt:5 }} item xs={12}>
                    <ButtonWrapper onClick={handleSubmit}>
                          Save Changes
                    </ButtonWrapper>
                    </Grid> 
                  </Grid>
                </Form>
              </Formik>
          </Container>
        </Grid>
      </Grid>
    );
  };
  
  export default PersonalInfo;