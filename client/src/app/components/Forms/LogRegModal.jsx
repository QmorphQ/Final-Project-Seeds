
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { Box, Grid } from "@material-ui/core";
import TextfieldWrapper from './LogRegTextfield.jsx';

export default function LogReg() {

    const INITIAL_FORM_STATE = {
        email: 'eded',
        password: 'eded',
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

    console.log(INITIAL_FORM_STATE.email);
    console.log(INITIAL_FORM_STATE.password);

    return (
        <Box sx={{
          width: 300,
          height: 300,
        }}>
            <Formik
                inititialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    console.log(values);
                }}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextfieldWrapper
                                name='email'
                                label='Email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextfieldWrapper
                                name='password'
                                label='Password'
                                
                            />
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
    )
}

