import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = () =>  (
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        );


export default PayPal;