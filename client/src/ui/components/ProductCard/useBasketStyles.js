import { makeStyles } from "@mui/styles";

export const useBasketStyles = makeStyles(() => ({
  productCardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "700px",
  },
  productCard: {
    boxShadow: "none",
  },
  productCardMedia: {
    borderRadius: "12px",
    width: "64px",
    height: "63px",
  },
  productCardNameContainer: {
    width: "60%",
  },
  productCardName: {
    fontSize: "14px",
    lineHeight: "24,95px",
  },
  productCardPrice: {
    fontWeight: "bold",
  },
  productCardButtonGroup: {
    height: "42px",
    display: "flex",
    alignItems: "center",
  },
  productCardButton: {
    width: "10.67px",
    height: "10.67px",
  },
  productCardAmount: {
    width: "32px",
    height: "32px",
  },
}));
