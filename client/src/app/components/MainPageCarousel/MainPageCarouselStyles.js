import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  CarouselSection: {

  },

  CarouselContainer: {
  [theme.breakpoints.up("xs")]:{
    margin: "auto",
  },

  },

  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    letterSpacing: "-0.05em",
    color: "#1F2533",
  },

  addToCartButton: {
    background: "#359740",
    "&:hover": {
      background: "#2BB159",
    },
  },

  discoverButton: {
    background: "#FFFFFF",
    "&:hover": {
      background: "rgba(53, 151, 64, 0.08);",
    },
  },
}));

export default useStyles;
