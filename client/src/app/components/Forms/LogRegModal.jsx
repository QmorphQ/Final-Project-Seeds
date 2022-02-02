import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { Grid, Container, Typography, Box } from "@material-ui/core";
import Textfield from './Components/FormsUI/Textfield';
import Button from './Components/FormsUI/Button';

export default function LogReg() {

    const INITIAL_FORM_STATE = {
        email: '',
        password: '',
    };
    
    const FORM_VALIDATION = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email.')
        .required('Required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    })


    return (
            <Container>
              <Box sx={{border: '1px solid #70737C', p:3, borderRadius: 10, width:300, margin:"0 auto"}}>
                <Formik
                  initialValues={{
                    ...INITIAL_FORM_STATE
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={values => {
                    console.log(values);
                  }}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography color=''>
                          Login
                        </Typography>
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="email"
                          label="Email"
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
                        <Button>
                          Submit Form
                        </Button>
                      </Grid>
                    </Grid>
    
                  </Form>
                </Formik>
              </Box>
            </Container>
      );
}

