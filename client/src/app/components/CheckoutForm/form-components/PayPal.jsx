import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPal() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}
export default PayPal;
