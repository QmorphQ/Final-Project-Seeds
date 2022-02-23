import { Grid } from "@mui/material";
import CheckoutForm from '../components/CheckoutForm/CheckoutForm.jsx';

function Checkout() {
    return ( 
        <Grid container spacing={2} maxWidth={`1100px`} paddingTop="30px" marginBottom="30px" boxSizing={'border-box'}>
          <CheckoutForm />
       </Grid>
    );
};

export default Checkout;


