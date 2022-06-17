import { useSelector } from "react-redux";
import { Box, Typography, Divider, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  orderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: "48px",
    marginLeft: "60px",
    width: "350px",
    height: "484px",
  },

  orderHeading: {
    fontWeight: "bold !important",
    paddingLeft: "34px",
  },

  itemsAndSummery: {
    display: "flex",
    flexDirection: "rows",
    justifyContent: "space-between",
  },
  itemsSumm: {
    paddingLeft: "34px",
    color: theme.palette.text.secondary,
  },
  totalSumm: {
    paddingRight: "30px",
    fontSize: "18px",
    lineHeight: "25px",
  },
  discountTitle: {
    paddingLeft: "34px",
    fontSize: "14px",
    lineHeight: "24.95px",
    color: theme.palette.text.secondary,
  },
  discountSumm: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2px",
    paddingLeft: "34px",
    paddingBottom: "35px",
  },

  continueBtn: {
    width: "286px",
    height: "51px",
    marginLeft: "34px",
    backgroundColor: theme.palette.primary.main,
  },
}));

const OrderSummary = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.cart)
  const totalSum = useSelector((state) => state.cart.totalSum);
  

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          borderRadius: "12px",
        }}
        className={classes.orderContainer}
      >
        <Box>
          <Typography className={classes.orderHeading} component={"h6"}>
            Order Summary
          </Typography>
        </Box>
        <Box component={"div"} className={classes.itemsAndSummery}>
          <Typography className={classes.itemsSumm} component={"p"}>
            {cart.length} ITEMS
          </Typography>
          <Typography className={classes.totalSumm} component={"p"}>
            $ {totalSum.toFixed()}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.discountTitle} component={"p"}>
            Discount (from $500)
          </Typography>
          <Box className={classes.discountSumm}>
            <Typography> $25 sale</Typography>
          </Box>
        </Box>
        <Divider variant="middle" />

        <Box component={"div"} className={classes.itemsAndSummery}>
          <Typography className={classes.itemsSumm} component={"p"}>
            Total amount
          </Typography>
          <Typography className={classes.totalSumm} component={"p"}>
            $ 12.45
          </Typography>
        </Box>
        <Button className={classes.continueBtn} variant="contained">
          <Typography>Continue</Typography>
        </Button>
      </Box>
    </>
  );
};

export default OrderSummary;
