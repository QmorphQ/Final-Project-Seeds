// Imporе:
// Libraries:
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// React Component:
import { Typography, Box } from "@mui/material";
import AddToCartModal from "../../../../../ui/components/AddToCardModal/AddToCartModal.jsx";
// Styles:
import useStyles from "./RenderComponentStyles";
// Others:
import { cartSelector } from "../../../../../store/selectors/selectors";
import { readyForEditStart } from "../../../../../store/actions/cart.actions";
import { fetchItemAddToCart } from "../../../../../store/thunks/mainPageCarousel.thunks";
import { sentItemToCart } from "../../../../../store/actions/mainPageCarousel.actions";
// ====================================================
// ----------------------------------------------------
// ++++++
// ====================================================
export default function RenderComponent(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const openModalWindow = useSelector(
    (state) => state.mainPageCarousel.openModalWindow
  );
  const itemAddToCart = useSelector(
    (state) => state.mainPageCarousel.itemAddToCart
  );
  const editCartState = useSelector((state) => state.cart.editCartState);
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);
  const [isOnModal, toggleIsOnModal] = useState(false);
  const [discountStart] = useState(10);
  const [totalPrice, setTotalPrice] = useState(itemAddToCart.discountPrice);
  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  });

  // !!!===========================================================
  function getProductName(strData) {
    const mainPartRegEx = /^[a-z0-9 ]+(?= -)/gi;
    let wordCounter = 0;
    const mainPart = strData.match(mainPartRegEx)[0].split(" ");
    const res = mainPart.map((el) => {
      if (/[a-z]/i.test(el) && wordCounter === 0) {
        wordCounter += 1;
        return el.toUpperCase();
      }
      if (/[a-z]/i.test(el) && wordCounter === 1) {
        wordCounter += 1;
        return el[0].toUpperCase() + el.slice(1);
      }
      return el.toLowerCase();
    });
    return res.join(" ");
  }
  // !!!===========================================================

  useEffect(() => {
    toggleIsOnModal(!isOnModal);
    if (!isOnModal) {
      dispatch(sentItemToCart());
      dispatch(readyForEditStart());
    }
  }, [openModalWindow]);

  useEffect(() => {
    if (editCartState === "success") {
      dispatch(sentItemToCart());
    }
  }, [editCartState]);
  // ======================================================= RENDER ==================================================
  return (
    <Box className={classes.RenderComponentContainer}>
      <Box className={classes.RenderComponentInfo}>
        <Typography className={classes.nameContainer}>
          {getProductName(props.item.name)}
        </Typography>

        <Typography className={classes.descriptionContainer}>
          {props.item.description}
        </Typography>
        <Box className={classes.priceContainer}>
          <Box className={classes.priceContainerImg} component="img" />
          <Typography className={classes.priceContainerDiscount}>
            ${props.item.discountPrice}
          </Typography>
          <Typography className={classes.priceContainerCurrent}>
            ${props.item.currentPrice}
          </Typography>
        </Box>
        <Box className={classes.ButtonsContainer}>
          <Box
            className={classes.addToCartButton}
            component="button"
            onClick={() => {
              dispatch(fetchItemAddToCart(props.item.itemNo));
            }}
          >
            Add to cart
          </Box>
          {openModalWindow && (
            <AddToCartModal
              data={itemAddToCart}
              discontStart={discountStart}
              localPrice={localPrice}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              isOnModal={true}
              toggleIsOnModal={toggleIsOnModal}
              cart={cart}
              _id={itemAddToCart._id}
              slidesItemId={slidesItemId}
            />
          )}
          <Box
            className={classes.discoverButton}
            component="button"
            onClick={() =>
              navigate(
                props.item.itemNo
                  ? `/products/${props.item.itemNo}`
                  : "/will-not-match"
              )
            }
          >
            Discover
          </Box>
        </Box>
      </Box>
      <Box className={classes.RenderItemImageContainer}>
        <Box
          className={classes.RenderItemImage}
          component="img"
          src={`${props.item.imageUrl}`}
          alt={props.item.name}
        />
      </Box>
    </Box>
  );
}
// ====================================================
RenderComponent.propTypes = {
  price: PropTypes.string,
  imgRoute: PropTypes.string,
  name: PropTypes.string,
  descr: PropTypes.string,
  item: PropTypes.object,
};

// ====================================================
