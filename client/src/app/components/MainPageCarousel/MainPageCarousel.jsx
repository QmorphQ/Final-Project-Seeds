import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { Typography, Container, Icon, Grid, Box, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { styled } from "@mui/styles";
import img from "./carouselImg/leaf.png";
import Vector from "./carouselImg/Vector.svg";
import {
  downloadSlidesRequestStateSelector,
  slidesSelector,
} from "../../../store/selectors/selectors";
import { downloadRequestStates } from "../../constants";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";


const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: '54px',
    letterSpacing: '-0.05em',
    fontSize: '48px'
  }
});


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
        p: "0", zIndex: -1,
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
        bottom={{ xs:"65%", sm: "40%"}}
          component="img"
          sx={{
            width: "320px",
            position: "absolute",
            right: "80%",
          }}
          alt="img"
          src={img}
        />
        <Box
          display={{ sm: "none"}}
          component="img"
          sx={{
            width: "320px",
            position: "absolute",
            bottom: "5%",
            left: "70%",
          }}
          alt="img"
          src={img}
        />
        <Carousel
          m={"auto"}
          navButtonsAlwaysVisible={false}
          interval="5000"
          animation="fade"
          duration="2000"
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

function Item(props)
{

  const classes = useStyles();

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
      <Grid item
      ml={{ xs: "20px", sm: "76px"}}
      pr='50%'     
      xs={6} md={0}
      order={{ xs: 0, sm: 1 }}
      alignSelf={{ xs: "center", sm: "flex-start"}}
      >
          <Typography
          pt='10px'
          color='#E55C5C'
          fontSize= '30px'
          fontWeight= 'bold'
          line-height= '30'
          >
                <Icon
                sx={{
                pr: '14px',
                overflow:'visible',
              }}>
                <img  src={Vector}/>
                </Icon>
            ${props.item.currentPrice}
            </Typography>
      </Grid>
      <Grid item 
      mt='12px'
      ml={{ xs: "20px", sm: "76px"}}
      alignSelf="flex-start"
      xs={6} md={1}
      flexDirection="column">
            <Typography className={classes.multiLineEllipsis}
            width={{xs: "90%", sm: "60%"}}
            height={{ xs: "210px", sm: "108px"}}
            fontSize={{ xs: "28px", sm: "48px"}}
            textAlign={{ xs: "center", sm: "left"}}
            fontWeight= '600'
            >
              {props.item.name}
            </Typography>
      </Grid>
      <Grid item
      mt={{ xs: '20px'}}
      xs={8} md={2}
      pr={{ xs: '10px', sm: '30px' }}
      order={{ xs: 0, sm: 1 }}
      position={{ xs: 'static', sm: 'absolute' }}
      left={'72%'}
      justifySelf={'center'}
      alignSelf="center"
      flexDirection="row">
          <CardMedia
          component="img"
          width="294px"
          pr="300px"
          image={`${props.item.imageUrl}`}
          alt={props.item.name}
        />
      </Grid>
      <Grid item
      xs={6} md={4}
      alignSelf="flex-start"
      flexDirection="row">
          <Typography 
          width={{ sm: "560px"}}
          height={{ xs: "200px", sm: "76px"}}
          overflow={{ xs: "scroll", sm: "hidden", md: "hidden" }}
          pl={{ xs: "20px", sm: "76px"}}
          pr= "40px"
          align= 'left'
          fontSize= '16px'
          line-height= '28px'
          letterSpacing= '-5%'          >
            {props.item.description}
          </Typography>
      </Grid>
      <Grid item
      mt={{ xs: "10px"}}
      ml={{ xs: "20px", sm: "76px"}}
      alignSelf="flex-start"
      bottom={0}
      order={{ xs: 0, sm: 1 }}
      xs={6} md={2}
      justifyContent="space-evenly"
      flexDirection="row">
            <ButtonLeft>
               Add to cart
          </ButtonLeft>
            <ButtonRight
            >
               Discover
          </ButtonRight>
      </Grid>
</Grid>
</Box>
    )
}


export default MainPageCarousel;

Item.propTypes = {
  price: PropTypes.string,
  imgRoute: PropTypes.string,
  name: PropTypes.string,
  descr: PropTypes.string,
  item: PropTypes.object,
};
