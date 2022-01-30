import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  productCard: {
    borderRadius: "8px",
    position: "relative",
    border: "2px solid #EFEFEF",
    boxShadow: "none",
    minHeight: "512px",
  },
  productCardHeader: {
    position: "absolute",
    right: "0",
  },
  productCardButton: {
    border: "1px solid #EFEFEF",
  },
  productCardMedia: {
    width: "294px",
    margin: "28px auto",
    borderRadius: "12px",
  },
  productCardRating: {
    margin: "0px 28px",
  },
  productCardContent: {
    margin: "10px 28px",
    padding: "0",
  },
  productCardName: {
    margin: "0px",
    height: "50px",
    overflow: "hidden",
  },
  productCardPrice: {
    margin: "0px",
    lineHeight: "54px",
    fontWeight: "bold",
  },
  productCardButtonBasket: {
    position: "absolute",
    bottom: "28px",
    right: "28px",
    borderRadius: "8px",
    width: "48px",
    height: "48px",
    border: "1px solid #EFEFEF",
  },
}));
