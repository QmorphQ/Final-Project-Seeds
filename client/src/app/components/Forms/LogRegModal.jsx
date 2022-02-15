import { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
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
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    zIndex: 3,
  },
  BgClose:{
    position: 'fixed',
    width: '100%',
    top: '0',
    right: '0',
    height:'100%',
    backgroundColor: "#00000030",
    zIndex: 2,
  }
});


export default function LogIn() {
    const requestState = useSelector(loginRequestSelector);
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

    const [open, setOpen] = useState(false)

    const handleClickOpen = () =>{
      setOpen(true)
    }

    const handleClose = () =>{
      setOpen(false)
    }

    const handleSubmit = values => {
      dispatch(loginCustomer(values))
      // console.log(values)
      handleClose()
    }

    return (
    <>        
            <Button onClick={handleClickOpen} sx={{mr:1, mt:1, height:40, width:100, fontSize:14}}  color="primary" variant="text">Log In</Button>
              {(open === true) ? 
              <>
              <Box onClick={handleClose} className={styles.BgClose}/>
              <Box className={styles.BlockCenter}  open={open} onClose={handleClose} sx={{border: `1px solid green`, p:4, borderRadius: 3, width:300, margin:"0 auto"}}>
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
                        <IconButton onClick={handleClose} className={styles.ItemRight}><CloseIcon sx={{color: "#359740", pl: "0"}}/></IconButton>
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

