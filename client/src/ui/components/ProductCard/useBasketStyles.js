import { makeStyles } from "@mui/styles";

export const useBasketStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
  productCardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "900px",
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
    margin: "15px",
  },
  productCardPrice: {
    fontWeight: "bold",
  },
  productCardButtonGroup: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.grey["300"],
    borderRadius: "12px",
    margin: "10px",
  },
  productCardButton: {
    width: "10.67px",
    height: "30px",
  },
  productCardAmount: {
    width: "40px",
    height: "32px",
  },
}));
