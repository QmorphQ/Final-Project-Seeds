import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
// ================
import RenderComponent from "./MainPageCarouselComponents/RenderComponent/RenderComponent.jsx";
// ================
import {
  downloadSlidesRequestStateSelector,
  slidesSelector,
} from "../../../store/selectors/selectors";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
// -----------------------------------------------------------
// Styles:
import useStyles from "./MainPageCarouselStyles";
// =============================================================================================================

// ==================================================== CAROUSEL ===============================================
const MainPageCarousel = () => {
  const requestState = useSelector(downloadSlidesRequestStateSelector);
  const slideList = useSelector(slidesSelector);
  // ==================================================== RENDER =================================================

  // ||||||||||||||||||||||||||||||||
  const classes = useStyles();

  // ||||||||||||||||||||||||||||||||
  function showCarousel(requsestStat){
    switch(requsestStat){
      case "idle":
      case "loading":
        return <Box sx={{height: "400px"}}/>
      case "success":
        return  (<Carousel
          className={classes.headerCarousel}
          indicatorContainerProps={{
            className: "indicatorsWrapper"
          }}
          indicatorIconButtonProps={{
            style:{
              color: "rgba(7, 188, 12, 0.3)"
            }
          }}
          activeIndicatorIconButtonProps={{
            style:{
              color: "rgb(7, 188, 12)"
            }
          }}
          m={"auto"}
          navButtonsAlwaysVisible={false}
          interval="5000"
          animation="fade"
          duration="2000"
          autoPlay={false}
          stopAutoPlayOnHover={true}
        >
          {slideList.map((itemData, i) => (
            <RenderComponent key={i} item={itemData} />
          ))}
        </Carousel>)
      case "error":
        return  <ErrorHandler
        errorMessage={"There is some problem with downloading slides"}
      />
      default:
        return <Box>Nam Pizda</Box>
    }
  }
  return (
    <Box
      className={classes.headerCarouselSection}
      component={"section"}
    > 
      <Box className={classes.headerCarouselContainer}>
       {showCarousel(requestState)}
      </Box>
     
    </Box>
  );
};

// ================================================== ITEM =====================================================

// ==============================================================================================================
export default MainPageCarousel;
