// Import:
import { makeStyles } from "@mui/styles";
import leavese from "./carouselImg/close-up-white.png";
import img from "./carouselImg/leaf.png";
import CarouselSectionMediaConfigs from "./mediaCarouselConfigs";
// ========================================================
// --------------------------------------------------------
// ++++++

// ========================================================
const useStyles = makeStyles({
  headerCarouselSection: {
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
    backgroundImage: `url(${img}), url(${leavese})`,
    backgroundPosition: "-200px -100px , 65% 170%", 
    backgroundRepeat: "no-repeat",
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
  headerCarousel: {
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
    "& .indicatorsWrapper": {
      position: "absolute",
      left: "0",
      bottom: "0",
    },
  },
});

// ========================================================
export default useStyles;
