import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeProvider, useTheme } from "@mui/material/styles";
import productCardTheme from "./productCardTheme";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  productCard: {
    borderRadius: "8px",
    position:"relative", 
    border: "2px solid #EFEFEF", 
    boxShadow:"none", 
    minHeight:"512px"
  },
  productCardHeader: {
    position: "absolute", 
    right:"0" 
  },
  productCardButton: {
    border: "1px solid #EFEFEF"
  },
  productCardMedia: {
    width: "294px", 
    margin: "28px auto", 
    borderRadius: "12px"  
  },
  productCardRating: {
    margin: "0px 28px"
  },
  productCardContent: {
    margin: "10px 28px", 
    padding:"0"
  },
  productCardName: {
    margin: "0px", 
    height:"50px", 
    overflow:"hidden"
  },
  productCardPrice: {
    margin: "0px", 
    lineHeight: "54px", 
    fontWeight:"bold"
  },
  productCardButtonBasket: {
    position: "absolute", 
    bottom:"28px", 
    right:"28px", 
    borderRadius:"8px", 
    width:"48px", 
    height:"48px",
    border: "1px solid #EFEFEF"
  }
}))

const ProductCard = ({ product }) => {
  const {name, currentPrice, imageUrls} = product;
  const globalTheme = useTheme();
  const classes = useStyles();

  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", currencyDisplay: 'symbol'
  });

  return (
    <Grid item xs={12} md={6} lg={4}>
      <ThemeProvider theme={{globalTheme, ...productCardTheme}}>
        <Card className={classes.productCard}>
          <CardHeader className={classes.productCardHeader}
            action={
              <IconButton 
                className={classes.productCardButton} 
                color="warning" 
                aria-label="add to favourite"
              >
                <FavoriteBorderIcon />
              </IconButton>
            }
          />
          <CardMedia
            className={classes.productCardMedia}
            component="img"
            width="294px"
            image={`${imageUrls}`}
            alt={name}
          />
          <Rating 
            className={classes.productCardRating}
            name="half-rating" defaultValue={2.5} precision={0.5}
            onChange={f => f}
          />
          <CardContent className={classes.productCardContent}>
            <Typography 
              className={classes.productCardName} 
              variant="h3" 
              color="text.primary"
            >{name}</Typography>
            <Typography 
              className={classes.productCardPrice} 
              component="span" 
              variant="h5" 
              color="text.primary"
            >{localPrice.format(currentPrice)}</Typography>
          </CardContent>
          <CardActions>
            <IconButton 
              className={classes.productCardButtonBasket} 
              aria-label="add to basket" 
              color="primary"
            >
              <ShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      </ThemeProvider>
    </Grid>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;