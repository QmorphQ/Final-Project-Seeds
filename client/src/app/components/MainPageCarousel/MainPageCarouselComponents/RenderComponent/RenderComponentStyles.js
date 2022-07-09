import { makeStyles } from "@mui/styles";
import CarouselSectionMediaConfigs from "../../mediaCarouselConfigs";
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

const useStyles = makeStyles({
  // !--------------------------------------- Item
  RenderComponentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (min-width: 0px)": {
      height: CarouselSectionMediaConfigs.xs,
    },
    "@media (min-width: 420px)": {
      height: CarouselSectionMediaConfigs.sm,
    },
    "@media (min-width: 900px)": {
      height: CarouselSectionMediaConfigs.md,
    },
    "@media (min-width: 1200px)": {
      height: CarouselSectionMediaConfigs.lg,
    },
    "@media (min-width: 1536px)": {
      height: CarouselSectionMediaConfigs.xl,
    },
   
  },

  // !--------------------------------------- Info
  RenderComponentInfo: {
    order: 2,
    display: "flex",
    flexFlow: "column wrap",
    paddingTop: "20px",
    paddingLeft: "15px",
  },

  // !------------------------------------------------- Name
  nameContainer: {
    height: "90px",
    overflow: "auto",
    order: 2,
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "30px",
    letterSpacing: "-5%",
    textAlign: "left",
    marginBottom: "12px",
  },

  // !------------------------------------------------- Description
  descriptionContainer: {
    order: 3,
    color: "#1F2533",
    height: "70px",
    overflow: "auto",
    fontSize: " 14px",
    fontWeight: "300",
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
    marginBottom: "23px",
  },
  // !---------------------------------------- Price
  priceContainer: {
    order: 1,
    display: "flex",
    marginBottom: "25px",
  },
  priceContainerImg: {
    marginLeft: "12px",
    content: `url(${Vector})`,
    width: "19px",
    "@media (min-width: 900px)": {
      width: "28px",
    },
  },
  priceContainerDiscount: {
    color: "#E55C5C",
    fontSize: "32px",
    fontWeight: "bold",
    marginLeft: "25px",
    ...flexCentered,
  },
  priceContainerCurrent: {
    color: "#70737C",
    fontSize: "22px",
    fontWeight: "600",
    textDecoration: "line-through",
    marginLeft: "21px",
    ...flexCentered,
  },

  // !--------------------------------------- Buttons
  ButtonsContainer: {
    order: 4,
    display: "flex",
    justifyContent: "center",
    marginBottom: "52px",
  },
  discoverButton: {
    width: "100px",
    height: "40px",
    border: "none",
    fontSize: "14px",
    color: "#359740",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: "18px",
    "&:hover": {
      background: "rgba(53, 151, 64, 0.08);",
    },
  },
  addToCartButton: {
    background: "#359740",
    width: "100px",
    height: "40px",
    border: "none",
    fontSize: "14px",
    color: "#FFFFFF",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      background: "#2BB159",
    },
  },

  // !------------------------------------------------- Image
  RenderItemImageContainer: {
    order: 1,
    marginTop: "41px",
    marginBottom: "20px",
    ...flexCentered,
  },
  RenderItemImage: {
    width: "180px",
  },
  nameImg: {
    display: "none",
  },

  // !================================================== Media
  "@media (min-width: 420px)": {
    RenderItemImage: {
      width: "230px",
    },
    nameContainer: {
      order: 1,
      fontSize: "28px",
      height: "100px",
    },
    descriptionContainer: {
      order: 2,
      fontSize: "15px",
    },
    priceContainer: {
      order: 3,
    },
    discoverButton: {
      width: "120px",
      height: "45px",
      marginLeft: "25px",
    },
    addToCartButton: {
      width: "120px",
      height: "45px",
    },
  },
  "@media (min-width: 600px)": {
    nameContainer: {
      display: "none",
    },
    nameImg: {
      display: "flex",
      fontSize: "30px",
      paddingLeft: "12px",
    },
    descriptionContainer: {
      height: "120px",
      fontSize: "16px",
    },
    discoverButton: {
      width: "160px",
      height: "50px",
      marginLeft: "15%",
    },
    addToCartButton: {
      width: "160px",
      height: "50px",
    },
  },
  "@media (min-width: 900px)": {
    RenderComponentContainer: {
      flexDirection: "row",
    },
    nameImg: {
      display: "none",
    },

    RenderComponentInfo: {
      order: 1,
      paddingLeft: "20px",
      paddingRight: "15px",
    },
    RenderItemImageContainer: {
      order: 2,
    },
    nameContainer: {
      display: "flex",
      fontSize: "28px",
      paddingTop: "40px",
    },
    priceContainerDiscount:{
      color: "black",
      fontSize: "42px",
      marginLeft: "30px",
    },
    RenderItemImage: {
      width: "250px",
    },
    descriptionContainer: {
      height: "80px",
      fontSize: "18px",
    },
    ButtonsContainer: {
      justifyContent: "flex-start",
    },
    discoverButton: {
      width: "150px",
      height: "55px",
      marginLeft: "10%",
      fontSize: "16px",
      fontWeight: "500",
    },
    addToCartButton: {
      width: "150px",
      height: "55px",
      fontSize: "16px",
      fontWeight: "500",
    },
  },
  "@media (min-width: 1200px)": {
    RenderComponentInfo: {
      paddingLeft: "50px",
    },
    nameContainer: {
      fontSize: "42px",
      lineHeight: "54px",
      height: "165px",
      overflow: "hidden",
    },
    RenderItemImage: {
      width: "350px",
    },
    priceContainerCurrent:{
      marginLeft: "30px",
    },
  },
  
  "@media (min-width: 1536px)": {
    nameContainer: {
      fontSize: "52px",
    },
    RenderItemImage: {
      width: "370px",
    },
    discoverButton: {
      width: "180px",
      height: "55px",
      marginLeft: "10%",
      fontSize: "16px",
      fontWeight: "500",
    },
    addToCartButton: {
      width: "180px",
      height: "55px",
      fontSize: "16px",
      fontWeight: "500",
    },
    descriptionContainer:{
      fontSize: "22px",
    },
  },
});

export default useStyles;
