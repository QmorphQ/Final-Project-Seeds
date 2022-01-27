import { Card, CardHeader, Grid } from "@mui/material";

const ProductCard = () => (
  <Grid item xs="12" md="6" lg="4">
    <Card>
      <CardHeader>
        <Card style={{width:"350px", height: "512px", backgroundColor:"grey"}} />
      </CardHeader>
    </Card>
  </Grid>
)


export default ProductCard;