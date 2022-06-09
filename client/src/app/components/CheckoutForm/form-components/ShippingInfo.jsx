import {
  FormControl,
  FormLabel,
  RadioGroup,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { useField, useFormikContext } from "formik";
import ShippingNovaPoshta from "../ShippingMethods/ShippingNovaPoshta.jsx";
import ExpressDelivery from "../ShippingMethods/ExpressDelivery.jsx";

const shippingData = [
  {
    enabled: true,
    default: true,
    costValue: 50,
    costType: "fix",
    _id: "5db97b344f42d81a14e674fe",
    customId: "expressDelivery",
    name: "Express Delivery",
    freeShippingOrderSum: 1000,
    date: "2019-10-30T11:59:48.145Z",
    __v: 0,
    imageUrl: "https://static.novaposhta.ua/sitecard/misc/img/courier_auto.png",
  },
  {
    enabled: true,
    default: false,
    costValue: 100,
    costType: "fix",
    _id: "5dbee039246d7b1ba0c719a6",
    customId: "novaPoshta",
    name: "Nova Poshta",
    locations: [
      {
        country: "UKR",
      },
    ],
    freeShippingOrderSum: 500,
    period: "2 days",
    currency: "UAH",
    date: "2019-11-03T14:12:09.239Z",
    __v: 0,
    imageUrl:
      "https://static.novaposhta.ua/sitecard/misc/img/ico/med_Icon%203-svg.png",
  },
  {
    enabled: false,
    default: false,
    costValue: 100,
    costType: "fix",
    _id: "5dbee039246d7b1ba0c7729a6",
    customId: "dhl",
    name: "DHL",
    locations: [
      {
        country: "UKR",
      },
    ],
    freeShippingOrderSum: 500,
    period: "2 days",
    currency: "UAH",
    date: "2019-11-03T14:12:09.149Z",
    __v: 0,
    imageUrl:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1473147170/urdahj7veaunf7f9tjhl.png",
  },
];

const ShippingInfo = () => {
  const [field] = useField("deliveryMethod");
  const { setFieldValue } = useFormikContext();

  let defaultMetod;

  field.value === ""
    ? shippingData.forEach((item) => {
        item.default && (defaultMetod = item.customId);
      })
    : (defaultMetod = field.value);

  const deliveryMethods = (method) => {
    switch (method) {
      case "expressDelivery":
        return <ExpressDelivery />;
      case "novaPoshta":
        return <ShippingNovaPoshta />;
      default:
        return <Typography>Not Found</Typography>;
    }
  };

  const handleChange = (event) => {
    setFieldValue("deliveryMethod", event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} pt="15px" ml="0">
        <FormControl fullWidth margin="normal">
          <FormLabel id="controlled-radio-buttons-group">
            Choose delivery method
          </FormLabel>
          <RadioGroup
            aria-labelledby="controlled-radio-buttons-group"
            name="deliveryMethod"
            value={defaultMetod}
            onChange={handleChange}
          >
            <Grid container spacing={2} justifyContent="space-around" ml="0">
              {shippingData.map(
                (item) =>
                  item.enabled && (
                    <Grid item key={item.customId} xs={12} lg={6}>
                      <Box display="flex" flexDirection="row">
                        <FormControlLabel
                          value={item.customId}
                          control={<Radio />}
                          label={item.name}
                        />
                        <Box
                          key={item._id}
                          component="img"
                          sx={{
                            height: "50px",
                          }}
                          alt={item.name}
                          src={item.imageUrl}
                        />
                      </Box>
                    </Grid>
                  )
              )}
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
      {deliveryMethods(defaultMetod)}
    </>
  );
};

export default ShippingInfo;

ShippingInfo.propTypes = {
  formField: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  setFieldValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
};
