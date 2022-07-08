import { makeStyles } from "@mui/styles";
import Vector from "../../carouselImg/Vector.svg";
//* =======================================================
/*
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px

    "@media (min-width: 0px)": {
      height: "700px",
    },
    "@media (min-width: 420px)": {
      height: "500px",
    },
    "@media (min-width: 900px)": {
      height: "400px",
    },
    "@media (min-width: 1200px)": {
      height: "600px",
    },
    "@media (min-width: 1536px)": {
      height: "600px",
    },

*/
const flexCentered = {
  display: "flex",
  justifyContentt: "center",
  alignItems: "center",
};

const marked = {
  border: "1px solid red",
  borderRadius: "5px",
};

const useStyles = makeStyles({
  // !--------------------------------------- Item
  RenderComponentContainer: {
    display: "flex",
    
    alignItems: "center",
    ...marked
  },

  // !--------------------------------------- Info
  RenderComponentInfo: {
    display: "flex",
    flexFlow: "column wrap",
    
    paddingLeft: "76px",
    paddingRight: "74px",
    paddingTop: "48px",
    ...marked
  },

  // !------------------------------------------------- Name
  nameContainer: {
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "54px",
    letterSpacing: "-0.05em",
    textAlign: "left",
    marginBottom: "12px",
    "@media (min-width: 900px)": {
      fontSize: "48px",
    },
    ...marked
  },

  // !------------------------------------------------- Description
  descriptionContainer: {
    color: "#1F2533",
    maxHeight: "80px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: " 16px",
    fontWeight: "300",
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
    marginBottom: "23px",
    ...marked
  },
  // !---------------------------------------- Price
  priceContainer: {
    display: "flex",
    marginBottom: "25px",
    ...marked
  },
  priceContainerImg: {
    content: `url(${Vector})`,
    width: "19px",
    "@media (min-width: 900px)": {
      width: "28px",
    },
    ...marked
  },
  priceContainerDiscount: {
    color: "#E55C5C",
    fontSize: "32px",
    fontWeight: "bold",
    marginLeft: "25px",
    ...flexCentered,
    "@media (min-width: 900px)": {
      color: "#1F2533",
      fontSize: "42px",
    },
    ...marked
  },
  priceContainerCurrent: {
    color: "#70737C",
    fontSize: "22px",
    fontWeight: "600",
    textDecoration: "line-through",
    marginLeft: "21px",
    ...flexCentered,
    ...marked
  },

  // !--------------------------------------- Buttons
  ButtonsContainer: {
    display: "flex",
    marginBottom: "52px",
    ...marked
  },
  discoverButton: {
    width: "153px",
    height: "51px",
    border: "none",
    fontSize: "14px",
    color: "#359740",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: "12px",
    "&:hover": {
      background: "rgba(53, 151, 64, 0.08);",
    },
    ...marked
  },
  addToCartButton: {
    background: "#359740",
    width: "153px",
    height: "51px",
    border: "none",
    fontSize: "14px",
    color: "#FFFFFF",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      background: "#2BB159",
    },
    ...marked
  },

  // !------------------------------------------------- Image
  RenderItemImageContainer:{
    
    ...flexCentered,
    ...marked
  },
  RenderItemImage: {
    width: "370px",
    ...marked
  },
});

export default useStyles;
