
// import axios, { Axios } from "axios";
// import { API } from "../../../app/constants/index";
// import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Container, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import img from "./carouselImg/leaf.png";
import Vector from "./carouselImg/Vector.svg";
import {
  // cartSelector, 
  downloadSlidesRequestStateSelector,
  slidesSelector,
} from "../../../store/selectors/selectors";
import { downloadRequestStates } from "../../constants";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
// import AddToCartModal from "../../../ui/components/AddToCardModal/AddToCartModal.jsx";


const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    letterSpacing: "-0.05em",
    color: "#1F2533",
  },
  addToCartButton: {
      background: "#359740",
      '&:hover': {
         background: "#2BB159",
      },
    },
    discoverButton: {
      background: "#FFFFFF",
      '&:hover': {
         background: "rgba(53, 151, 64, 0.08);",
      },
    },
});

const MainPageCarousel = () => {
  const requestState = useSelector(downloadSlidesRequestStateSelector);
  const slideList = useSelector(slidesSelector);


//   useEffect(() => {
//  const sld = [
//    {itemNo: "954601"},
//    {itemNo: "351153"},
//    {itemNo: "219571"}
//  ];
// const sldNew = sld.map((item) => {
//   axios
//   .get(`${API}/products/${item.itemNo}`)
//   .then((response) => {
//     console.log(response);
//     return response.data
//     });
// });

//   }, []);
  

  return (
    requestState === "success" && (
      <Container
        sx={{
          p: "0",
          zIndex: -1,
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
            bottom={{ xs: "65%", sm: "40%" }}
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
            display={{ sm: "none" }}
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
          <ErrorHandler
            errorMessage={"There is some problem with downloading slides"}
          />
        )}
      </Container>
    )
  );
};

function Item(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  // const cart = useSelector(cartSelector);
  // const [isOnModal, toggleIsOnModal] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(props.item.currentPrice);
  // const localPrice = Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   currencyDisplay: "symbol",
  // });


//   const data = {
//     "enabled": true,
//     "imageUrls": [
//         "https://res.cloudinary.com/danbeavers/image/upload/v1643484123/9125PQypA4S._AC_SL1500__ektwec.jpg"
//     ],
//     "quantity": 12,
//     "_id": "61f6c1ef481e16304cbbbd7a",
//     "name": "seedra 70 corn seeds for indoor and outdoor planting - home garden - gmo-free and heirloom seeds - 1 pack",
//     "currentPrice": 10,
//     "categories": "vegetables-mono",
//     "description": "SEEDRA Corn - Bodacious Hybrid - contains 70 seeds in 1 Pack and professional instructions",
//     "currentRating": 4.5,
//     "itemNo": "601020",
//     "date": "2022-01-30T16:50:55.902Z",
//     "__v": 0,
//     "discountPrice": 7,
//     "origin": "english",
//     "maturation": "late",
//     "faq": [
//         {
//             "question": "Can they be grown on hydraponic systems?",
//             "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
//         },
//         {
//             "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
//             "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
//         }
//     ],
//     "itemWeight": "0.317 ounces",
//     "packageDimensions": "5.43 x 3.5 x 0.35 inches",
//     "ASIN": "B0968P124N",
//     "itemAbout": [
//         "SEEDRA Corn - Bodacious Hybrid - contains 70 seeds in 1 Pack and professional instructions",
//         "Be Sure Of Our Quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee",
//         "Corn Common Culinary Uses: salads, stir-fries, pastas, dips, succotash, pudding, tacos, soups, pizzas, and more",
//         "Proudly Sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product",
//         "SEEDRA Customer Service - please contact us directly through Amazon with any questions or concerns about our products. We care about each customer and do our best to provide you with 100% satisfaction"
//     ]
// }

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
          ml={{ xs: "0px", sm: "76px" }}
          pr="50%"
          xs={6}
          md={0}
          order={{ xs: 0, sm: 1 }}
          alignSelf="flex-start"
        >
          <Box display="flex" alignItems="center">
            <Typography
              display="flex"
              pt="10px"
              color={{ xs: "#E55C5C", md: "#1F2533" }}
              fontSize={{ xs: "32px", md: "42px" }}
              fontWeight="bold"
            >
              <Box
                component="img"
                pl={{ xs: "9vw", sm: "0px" }}
                pr={{ xs: "14px", sm: "14px", md: "25px" }}
                overflow="visible"
                width={{ xs: "19px", sm: "19px", md: "28px" }}
                src={Vector}
              ></Box>
              ${props.item.currentPrice}
            </Typography>
            <Typography
              component="span"
              color="#70737C"
              fontSize="22px"
              fontWeight="600"
              pt="10px"
              pl={{ xs: "12px", sm: "12px", md: "21px" }}
              style={{ textDecoration: "line-through" }}
            >
              ${(props.item.currentPrice * 1.1).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          mt="12px"
          ml={{ xs: "20px", sm: "76px" }}
          alignSelf="flex-start"
          xs={6}
          md={1}
          flexDirection="column"
        >
          <Typography
            className={classes.multiLineEllipsis}
            width={{ xs: "90%", sm: "60%" }}
            height={{ xs: "210px", sm: "108px" }}
            fontSize={{ xs: "28px", md: "48px" }}
            lineHeight={{ xs: "36px", md: "54px" }}
            textAlign={{ xs: "center", sm: "left" }}
            fontWeight="600"
          >
            {props.item.name}
          </Typography>
        </Grid>
        <Grid
          item
          mt={{ xs: "20px" }}
          xs={8}
          md={2}
          pr={{ xs: "10px", sm: "30px" }}
          order={{ xs: 0, sm: 1 }}
          // position={{ xs: 'static', sm: 'absolute' }}
          position={{ xs: "relative", sm: "absolute" }}
          // left={'72%'}
          // left="-17%"
          left={{ xs: "10vw", sm: "73%" }}
          justifySelf="center"
          alignSelf="center"
          flexDirection="row"
        >
          <Box
            component="img"
            pr="300px"
            width={{ xs: "55vw", sm: "18vw" }}
            src={`${props.item.imageUrl}`}
            alt={props.item.name}
          ></Box>
        </Grid>
        <Grid item xs={6} md={4} alignSelf="flex-start" flexDirection="row">
          <Typography
            width={{ sm: "55%" }}
            height={{ xs: "200px", sm: "76px" }}
            overflow={{ xs: "scroll", sm: "hidden", md: "hidden" }}
            pl={{ xs: "20px", sm: "76px" }}
            pr="40px"
            align="left"
            fontSize={{ xs: "14px", sm: "14px", md: "16px" }}
            fontWeight="300"
            color="#1F2533"
            lineHeight="28px"
            letterSpacing="-5%"
          >
            {props.item.description}
          </Typography>
        </Grid>
        <Grid
          item
          mt={{ xs: "10px" }}
          ml={{ xs: "6px", sm: "76px" }}
          alignSelf="flex-start"
          order={{ xs: 0, sm: 1 }}
          xs={6}
          md={2}
        >
          <Box className={classes.addToCartButton}
            component="button"
            width="142px"
            height="47px"
            border="none"
            fontSize="14px"
            color="#FFFFFF"
            // backgroundColor="#359740"
            borderRadius="10px"
            sx={{ cursor: "pointer"}}
            marginRight={{ xs: "12px", md: "15px" }}
            marginBottom="6px"
            // onClick={() => {
            //   toggleIsOnModal(true);
            // }}
          >
            Add to cart
            {/* <AddToCartModal
              data={props.item}
              discontStart={10}
              localPrice={localPrice}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              isOnModal={isOnModal}
              toggleIsOnModal={toggleIsOnModal}
              cart={cart}
              _id={props.item._id}
            /> */}
          </Box>
          <Box className={classes.discoverButton}
            component="button"
            width="142px"
            height="47px"
            border="none"
            fontSize="14px"
            color="#359740"
            backgroundColor="#FFFFFF"
            borderRadius="10px"
            sx={{ cursor: "pointer"}}
            onClick={() => navigate( `/products/${props.item.itemNo}`)}
            // onClick={() => navigate(`/products/699319`)}
          >
            Discover
          </Box>
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