// Import:
import { makeStyles } from "@mui/styles";
import leaf from "/leavese.png";
import img from "./carouselImg/leaf.png";
// ========================================================
// --------------------------------------------------------
// ++++++

// ========================================================
const useStyles = makeStyles({
  headerCarouselSection: {
    fontFamily: "Lexend",
    border: "1px solid green",
    padding: "0",
    marginTop: "15px",
    zIndex: -1,
  },
  headerCarouselContainer: {
   
    overflow: "hidden",
    pb: "20px",
    margin: "auto",
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#EAF1EB",
    backgroundImage: `url(${img}), url(${leaf})`,
    backgroundPosition: "-200px -100px",
    backgroundRepeat: "no-repeat",
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
  },
  headerCarousel: {
    border: "1px solid blue",
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
    "& .indicatorsWrapper": {
      position: "absolute",
      left: "0",
      bottom: "0",
    },
  },
});

// ========================================================
export default useStyles;
