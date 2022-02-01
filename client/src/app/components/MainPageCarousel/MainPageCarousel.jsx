import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { Typography, Container, Icon, Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@material-ui/core/styles";
import img from "./carouselImg/leaf.png";
import Vector from "./carouselImg/Vector.svg";
import {
  downloadSlidesRequestStateSelector,
  slidesSelector,
} from "../../../store/selectors/selectors";
import { downloadRequestStates } from "../../constants";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";

const ButtonLeft = styled("button")({
  width: "142px",
  height: "47px",
  border: "none",
  fontSize: "14px",
  color: "#FFFFFF",
  backgroundColor: " #359740",
  borderRadius: "10px",
  cursor: "pointer",
  marginRight: "15px",
});
const ButtonRight = styled("button")({
  width: "142px",
  height: "47px",
  border: "none",
  fontSize: "14px",
  color: "#359740",
  backgroundColor: " #FFFFFF",
  borderRadius: "10px",
  cursor: "pointer",
  marginLeft: "15px",
});

const MainPageCarousel = () => {
  const requestState = useSelector(downloadSlidesRequestStateSelector);
  const slideList = useSelector(slidesSelector);

  return (
    <Container
      sx={{
        p: "0",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          pb: "20px",
          mt: "15px",
          ml: "15px",
          mr: "15px",
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#EAF1EB",
          maxWidth: 1100,
        }}
      >
        <Box
          component="img"
          sx={{
            width: "320px",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            position: "absolute",
            bottom: "40%",
            right: "80%",
          }}
          alt="img"
          src={img}
        />
        <Box
          component="img"
          sx={{
            width: "320px",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            position: "absolute",
            bottom: "10%",
            left: "80%",
          }}
          alt="img"
          src={img}
        />
        <Carousel
          m={"auto"}
          navButtonsAlwaysVisible={false}
          interval="5000"
          animation="slide"
          duration="3000"
          autoPlay={true}
        >
          {slideList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
      {requestState === downloadRequestStates.ERROR && (
        <ErrorHandler errorMessage={"There is some problem with downloading slides"} />
      )}
    </Container>
  );
};

function Item(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        m="0"
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          pr="50%"
          xs={6}
          md={0}
          order={{ xs: 0, sm: 1 }}
          alignSelf={{ xs: "center", sm: "flex-start" }}
        >
          <Typography
            pt="10px"
            pl="50px"
            color="#E55C5C"
            fontSize="30px"
            fontWeight="bold"
            line-height="30"
          >
            <Icon
              sx={{
                pr: "14px",
                overflow: "visible",
              }}
            >
              <img src={Vector} />
            </Icon>
            ${props.item.currentPrice}
          </Typography>
        </Grid>
        <Grid
          item
          mt="15px"
          mb="55px"
          ml={{ xs: "20px", sm: "20px" }}
          alignSelf="flex-start"
          xs={6}
          md={1}
          flexDirection="row"
        >
          <Typography
            width={{ xs: "90%", sm: "700px" }}
            height={{ xs: "150px", sm: "50px" }}
            sx={{ lineHeight: 1, fontStyle: "Lexend" }}
            align="center"
            fontSize="28px"
            fontWeight="bold"
            line-height="30"
          >
            {props.item.name}
          </Typography>
        </Grid>
        <Grid
          item
          mt={{ xs: "20px" }}
          xs={8}
          md={2}
          order={{ xs: 0, sm: 1 }}
          position={{ xs: "static", sm: "absolute" }}
          left={"72%"}
          alignSelf="center"
          flexDirection="row"
        >
          <img width={"220px"} height={"200px"} src={props.item.imageUrl} />
        </Grid>
        <Grid
          item
          ml={{ xs: "0", sm: "20px" }}
          xs={6}
          md={4}
          alignSelf="flex-start"
          flexDirection="row"
        >
          <Typography
            pt="15px"
            width={{ sm: "720px" }}
            height={{ xs: "200px", sm: "200px" }}
            overflow={{ xs: "scroll", sm: "visible", md: "visible" }}
            pl="30px"
            pr="40px"
            align="left"
            fontSize="15px"
          >
            {props.item.description}
          </Typography>
        </Grid>
        <Grid
          item
          mt={{ xs: "10px" }}
          ml={{ xs: "20px", sm: "50px" }}
          alignSelf="flex-start"
          bottom={0}
          order={{ xs: 0, sm: 1 }}
          xs={6}
          md={2}
          justifyContent="space-evenly"
          flexDirection="row"
        >
          <ButtonLeft>Add to cart</ButtonLeft>
          <ButtonRight>Discover</ButtonRight>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPageCarousel;

Item.propTypes = {
  price: PropTypes.string,
  imgRoute: PropTypes.string,
  name: PropTypes.string,
  descr: PropTypes.string,
  item: PropTypes.object,
};
