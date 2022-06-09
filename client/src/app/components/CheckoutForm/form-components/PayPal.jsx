import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

<<<<<<< HEAD
const PayPal = () =>  (
=======
function PayPal ()  {

        return (
>>>>>>> c66c6b36b826f8a6882dc9f193ec02d5892c0ebb
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        );


export default PayPal;