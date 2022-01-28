import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

/* eslint-disable  */

const ProductCard = ({product}) => {
  const {name, price, categories, imageUrls} = product;
  const localPrice = Intl.NumberFormat("us", {style: "currency", currency: "USD"});
return (
  <Grid item xs="12" md="6" lg="4">
    <Card sx={{position:"relative", border: "2px solid #EFEFEF", borderRadius: "8px", boxShadow:"none", minHeight:"512px"}}>
      <CardHeader sx={{ position: "absolute", top:"0", right:"0" }}
        action={
          <IconButton aria-label="settings" sx={{border: "1px solid #EFEFEF", color:"#FFCF55"}}>
            <FavoriteBorderIcon />
          </IconButton>
        }
      />
      <CardMedia
        sx={{width: "294px", margin: "28px auto", borderRadius: "12px"}}
        component="img"
        width="294px"
        image={imageUrls}
        alt="SEEDRA 600 English Lavender Seeds for Indoor and Outdoor Planting"
      />
      <Rating
        sx={{margin: "0px 28px"}}
        name="half-rating" defaultValue={2.5} precision={0.5}
        onChange={f => f}
      />
      <CardContent sx={{margin: "10px 28px", padding:"0"}}>
        <Typography sx={{margin: "0px", height:"50px", overflow:"hidden"}} align="left" variant="body1" color="text.secondary">
          {name}
        </Typography>
        <Typography sx={{margin: "0px", lineHeight: "54px", fontWeight:"bold"}} align="left" variant="h5" color="text.secondary">
          {localPrice.format(price)}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" sx={{ position: "absolute", bottom:"28px", right:"28px", border: "1px solid #EFEFEF", color:"#359740", borderRadius:"8px", width:"48px", height:"48px" }}>
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
)
}

export default ProductCard;