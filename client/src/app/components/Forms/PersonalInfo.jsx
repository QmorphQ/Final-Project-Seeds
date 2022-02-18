
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, IconButton, Container, Button } from "@mui/material";
import Textfield from './Components/FormsUI/Textfield';


const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    password: '',
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Required'),
    addressLine1: Yup.string()
      .required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string()
      .required('Required'),
    state: Yup.string()
      .required('Required'),
    country: Yup.string()
      .required('Required'),
    password: Yup.string()
    .required('Required')
    .min(8, 'Password is 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirm : Yup.string()
    .required('Required')
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
                      <Typography>
                        Address
                      </Typography>
                    </Grid>
  
                    <Grid item xs={12}>
                      <Textfield
                        name="addressLine1"
                        label="Address Line 1"
                      />
                    </Grid>
  
                    <Grid item xs={12}>
                      <Textfield
                        name="addressLine2"
                        label="Address Line 2"
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
                        name="state"
                        label="State"
                      />
                    </Grid>
                    <Grid item xs={12}>
                            <Textfield
                            name="password"
                            label="Password"
                            type='password'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textfield
                            name="passwordConfirm"
                            label="Confirm password*"
                            type='password'
                            />
                        </Grid> 
  
                    <Grid item xs={12}>
                      <Button>
                        Save Changes
                      </Button>
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