import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { Grid, Typography, Box, IconButton } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import useStyles from "../Header/HeaderStyles.jsx";
import Textfield from './Components/FormsUI/Textfield';
import Button from './Components/FormsUI/Button';

export default function LogReg() {
    const classes = useStyles();
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
              <Box sx={{border: `1px solid green`, p:3, borderRadius: 10, width:300, margin:"0 auto"}}>
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
                        <Typography sx={{}} className={classes.iconsStyle}>
                          Login <IconButton sx={{}}><CloseIcon className={classes.iconsStyle}/></IconButton>
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
                          Login
                        </Button>
                      </Grid>
                    </Grid>
    
                  </Form>
                </Formik>
              </Box>
      );
}

