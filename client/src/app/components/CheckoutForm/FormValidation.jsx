import * as Yup from 'yup';

 const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .matches(/[a-zA-Z]/, "Firstname can only contain Latin letters."),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .matches(/[a-zA-Z]/, "Lastname can only contain Latin letters."),
    email: Yup.string().email("Invalid email."),
    phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number"),
    addressLine: Yup.string()
    .when(['deliveryMethod'], (deliveryMethod, schema) => 
        (deliveryMethod === "expressDelivery") ? schema.required('Required') : schema.min(0)),
    house: Yup.string()
    .when(['deliveryMethod'], (deliveryMethod, schema) => 
        (deliveryMethod === "expressDelivery") ? schema.number().integer().typeError("Please enter a valid code number") : schema.min(0)),
    flat: Yup.string()
    .when(['deliveryMethod'], (deliveryMethod, schema) => 
        (deliveryMethod === "expressDelivery") ? schema.number().integer().typeError("Please enter a valid code number") : schema.min(0)),
    code: Yup.string()
    .when(['deliveryMethod'], (deliveryMethod, schema) => 
        (deliveryMethod === "expressDelivery") ? schema.number().integer().typeError("Please enter a valid code number") : schema.min(0)),
    city: Yup.string()
    .when(['deliveryMethod'], (deliveryMethod, schema) => 
        (deliveryMethod === "expressDelivery") ? schema.required('Required') : schema.min(0)),
})


export default FORM_VALIDATION