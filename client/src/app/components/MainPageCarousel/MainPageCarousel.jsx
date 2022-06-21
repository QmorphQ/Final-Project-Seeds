import Carousel from "react-material-ui-carousel";
import {  
  useSelector 
} from "react-redux";
import { Typography, Container, Grid, Box, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
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
    letterSpacing: '-0.05em',
    color: "#1F2533",
  }

});

const MainPageCarousel = () => {
  const requestState = useSelector(downloadSlidesRequestStateSelector);
  const slideList = useSelector(slidesSelector);


  return (
    requestState === "success" &&
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
            bottom: "10%",
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
          display="flex"
          pt='10px'
          color='#E55C5C'
          fontSize= {{xs: "32px", sm: "32px", md: "42px"}}
          fontWeight= 'bold'
          >
              <Box
                component="img"
                pr={{xs: "14px", sm: "14px", md: "25px"}}
                overflow='visible'
                width={{xs: "19px", sm: "19px", md: "28px"}}
                  src={Vector}
                >
              </Box>
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
            lineHeight={{ xs: "36px", sm: "54px"}}
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
          width={{ sm: "55%"}}
          height={{ xs: "200px", sm: "76px"}}
          overflow={{ xs: "scroll", sm: "hidden", md: "hidden" }}
          pl={{ xs: "20px", sm: "76px"}}
          pr= "40px"
          align='left'
          fontSize= {{ xs: "14px", sm: "14px", md: "16px"}}
          fontWeight='300'
          color="#1F2533"
          lineHeight= "28px"
          letterSpacing= '-5%'          >
            {props.item.description}
          </Typography>
      </Grid>
      <Grid item
      mt={{ xs: "10px"}}
      ml={{ xs: "6px", sm: "76px"}}
      alignSelf= "flex-start"
      order={{ xs: 0, sm: 1 }}
      xs={6} md={2}
      >
       
       <Box
                component="button"
                width= "142px"
                height= "47px"
                border= "none"
                fontSize= "14px"
                color= "#FFFFFF"
                backgroundColor= " #359740"
                borderRadius= "10px"
                cursor= "pointer"
                marginRight={{xs: "12px", md: "15px"}}
                marginBottom="6px"
                >
                  Add to cart
        </Box>
        <Box
                component="button"
                width= "142px"
                height="47px"
                border= "none"
                fontSize= "14px"
                color= "#359740"
                backgroundColor= " #FFFFFF"
                borderRadius= "10px"
                cursor= "pointer"
                >
                    Discover
        </Box>
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


