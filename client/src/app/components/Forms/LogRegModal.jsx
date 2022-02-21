import { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import useStyles from "../Header/HeaderStyles.jsx";
import Textfield from './Components/FormsUI/Textfield';
import ButtonWrapper from './Components/FormsUI/Submit/ButtonWrapper';
import { loginCustomer } from '../../../store/thunks/customer.thunks';
import { loginRequestSelector } from '../../../store/selectors/selectors';
import ErrorHandler from '../ErrorHandler/ErrorHandler.jsx';
import { downloadRequestStates } from '../../constants/index';



const style = makeStyles({
  ItemBlock:{
    position: "relative"
  },
  ItemRight: {
    position: "absolute",
    right: "-10px",
    top: "5px"
  },
  BlockCenter: {
    position: 'relative',
    margin:"100px auto",
    backgroundColor: "#FFF",
  }
});


export default function LogIn() {
    const requestState = useSelector(loginRequestSelector);
    const navigation = useNavigate()
    const classes = useStyles();
    const styles = style();
    const dispatch = useDispatch()
    const INITIAL_FORM_STATE = {
        loginOrEmail: '',
        password: '',
    };
  
    const FORM_VALIDATION = Yup.object().shape({
        loginOrEmail: Yup.string()
        .required('Required')
        .email('Invalid email.'),
        password: Yup.string()
        .min(8, 'Password is 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Required')
    })

    const [open, setOpen] = useState(true)

    // const handleClickOpen = () =>{
    //   setOpen(true)
    // }

    const handleClose = () =>{
      navigation(-1)
      setOpen(false)
    }

    const handleSubmit = values => {
      dispatch(loginCustomer(values))
      // console.log(values)
      handleClose()
    }

    return (
    <>        
              {(open === true) ? 
              <>
              <Box className={styles.BlockCenter}  open={open} onClose={handleClose} sx={{border: `1px solid green`, p:4, borderRadius: 3, maxWidth:300}}>
                <Formik  
                  initialValues={{
                    ...INITIAL_FORM_STATE
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid className={styles.ItemBlock} item xs={12}>
                        <Typography color="primary" sx={{pb:1}}>
                          Login
                        </Typography>
                        <IconButton onClick={handleClose} className={styles.ItemRight}><CloseIcon className={classes.iconsStyle}/></IconButton>
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="loginOrEmail"
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
                        <ButtonWrapper onClick={handleClose}>
                          Log In
                        </ButtonWrapper>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
            </Box></> : false}
            {requestState === downloadRequestStates.ERROR && (
        <ErrorHandler errorMessage={"Incorrect email or password."} />)}      
    </>);
}

