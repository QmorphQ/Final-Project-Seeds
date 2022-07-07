import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
// ================
import RenderComponent from "./MainPageCarouselComponents/RenderComponent/RenderComponent.jsx";
// ================
import img from "./carouselImg/leaf.png";
import {
  downloadSlidesRequestStateSelector,
  slidesSelector,
} from "../../../store/selectors/selectors";
import { downloadRequestStates } from "../../constants";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
// -----------------------------------------------------------
// Styles:

// =============================================================================================================

// ==================================================== CAROUSEL ===============================================
const MainPageCarousel = () => {
  const requestState = useSelector(downloadSlidesRequestStateSelector);
  const slideList = useSelector(slidesSelector);
  // ==================================================== RENDER =================================================

  // ||||||||||||||||||||||||||||||||
  if (requestState !== "success") {
    return (
      <Box
        sx={{
          minHeight: "432.433px",
          backgroundColor: "#EAF1EB",
          margin: "auto",
          border: "1px solid black",
        }}
      ></Box>
    );
  }

  // ||||||||||||||||||||||||||||||||
  return (
    requestState === "success" && (
      <Box
        className="header-carousel-section"
        component={"section"}
        sx={{
          border: "1px solid red",
          p: "0",
          mt: "15px",
          zIndex: -1,
        }}
      >
        <Box
          className="carousel-container"
          sx={{
            border: "1px solid green",
            overflow: "hidden",
            pb: "20px",
            margin: "auto",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "#EAF1EB",
            // <----------------------------------!!! backgroundColor
           
            // minHeight: "432.433px"// <----------------------------------!!! minHeight
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "-200px -100px"
          }}
        >
          <Carousel
            m={"auto"}
            navButtonsAlwaysVisible={false}
            interval="5000"
            animation="fade"
            duration="2000"
            autoPlay={true}
          >
            {slideList.map((itemData, i) => (
              <RenderComponent key={i} item={itemData} />
            ))}
          </Carousel>
        </Box>
        {requestState === downloadRequestStates.ERROR && (
          <ErrorHandler
            errorMessage={"There is some problem with downloading slides"}
          />
        )}
      </Box>
    )
  );
};

// ================================================== ITEM =====================================================

// ==============================================================================================================
export default MainPageCarousel;
