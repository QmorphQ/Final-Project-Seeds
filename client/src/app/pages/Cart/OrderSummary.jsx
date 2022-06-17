import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  orderContainer: {
    display: "flex",
    marginTop: "48px",
    marginLeft: "60px",
    width: "350px",
    height: "484px",
  },

  orderHeading: {
    color: "red",
  },
}));

const OrderSummary = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          borderRadius: "12px",
        }}
        className={classes.orderContainer}
      >
        <Typography className={classes.orderHeading}>
          Order Summary = 0
        </Typography>
      </Box>
    </>
  );
};

export default OrderSummary;
