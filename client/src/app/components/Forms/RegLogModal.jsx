import { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, IconButton,Button  } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import useStyles from "../Header/HeaderStyles.jsx";
import Textfield from './Components/FormsUI/Textfield';
import ButtonWrapper from './Components/FormsUI/Submit/ButtonWrapper';
import CheckboxWrapper from './Components/FormsUI/Checkbox';



const style = makeStyles({
  ItemBlock:{
    position: "relative"
  },
  ItemRight: {
    position: "absolute",
    right: "-10px",
    top: "-10px"
  },
  BlockCenter: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    zIndex: 3,
    transition: '1s'
  },
  BgClose:{
    position: 'fixed',
    width: '100%',
    top: '0',
    right: '0',
    height:'100%',
    backgroundColor: "#00000030",
    zIndex: 2,
    transition: '1s'
  }
});


export default function SignUp() {
    const classes = useStyles();
    const styles = style();
    const INITIAL_FORM_STATE = {
        email: '',
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
        password: Yup.string()
        .min(8, 'Password is 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordConfirm : Yup.string()
        .oneOf([Yup.ref('password')], 'Password must be the same!')
        .required('Required'),
        termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
    })

    const [open, setOpen] = useState(false)

    const handleClickOpen = () =>{
      setOpen(true)
    }

    const handleClose = () =>{
      setOpen(false)
    }

    return (
    <>        
            <Button onClick={handleClickOpen}  color="outlined" variant="contained">Sign up</Button>  
              {(open === true) ? 
              <>
              <Box onClick={handleClose} className={styles.BgClose}/>
              <Box className={styles.BlockCenter}  open={open} onClose={handleClose} sx={{border: `1px solid green`, p:3, borderRadius: 10, width:400, margin:"0 auto"}}>
                <Formik  
                  initialValues={{
                    ...INITIAL_FORM_STATE
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={values => {
                    console.log(values)
                    handleClose()
                  }}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid className={styles.ItemBlock} item xs={12}>
                        <Typography className={classes.iconsStyle}>
                         Sign up <IconButton onClick={handleClose} className={styles.ItemRight}><CloseIcon className={classes.iconsStyle}/></IconButton>
                        </Typography>
                      </Grid>
                        <Grid item xs={6}>
                            <Textfield
                            name="firstName"
                            label="First Name"
                            />
                        </Grid>

                        <Grid item xs={6}>
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
                            <CheckboxWrapper
                            name="termsOfService"
                            legend="Terms Of Service"
                            label="I agree"
                            />
                        </Grid>
                                
                      <Grid item xs={12}>
                        <ButtonWrapper onClick={handleClose}>
                          Sign Up
                        </ButtonWrapper>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
            </Box></> : false}
              
        
    </>);
}

