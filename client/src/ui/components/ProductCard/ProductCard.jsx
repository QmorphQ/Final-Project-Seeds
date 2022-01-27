import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = () => (
  <Grid item xs="12" md="6" lg="4">
    <Card sx={{position:"relative", border: "2px solid #EFEFEF", borderRadius: "8px", boxShadow:"none"}}>
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
        image="https://m.media-amazon.com/images/I/91O5BAUxY1L._AC_SL1500_.jpg"
        alt="SEEDRA 600 English Lavender Seeds for Indoor and Outdoor Planting"
      />
      <Rating
        sx={{margin: "0px 28px"}}
        name="half-rating" defaultValue={2.5} precision={0.5}
        onChange={f => f}
      />
      <CardContent sx={{margin: "10px 28px", padding:"0"}}>
        <Typography sx={{margin: "0px"}} align="left" variant="body1" color="text.secondary">
          Seedra Cilantro Seeds for Planting Indoor and Outdoor
        </Typography>
        <Typography sx={{margin: "0px", lineHeight: "54px", fontWeight:"bold"}} align="left" variant="h5" color="text.secondary">
          $12.56
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


export default ProductCard;