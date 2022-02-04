import { makeStyles } from "@mui/styles";

export const useProductPageStyles = makeStyles(() => ({
  productCard: {
    boxShadow: "none"
  },
  productCardHeader: {

  },
  productActionsBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  productCardMediaWrapper: {
    maxWidth: "445px",
    maxHeight:"auto",
  },
  productCardMedia: {
    borderRadius: "12px",
  },
  productCardContent: {
  },
  productCardName: {
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "15px"
  },
  productCardAvailable: {
    borderRadius: "24px",
  },
  productCardPrice: {
    fontWeight: "bold",
  },
  productCardButtonBasket: {
  },
}));
