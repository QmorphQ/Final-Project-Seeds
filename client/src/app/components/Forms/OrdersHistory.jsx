import { useEffect } from "react"
import { Typography, Container, Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux"
import { customerOrdersHistory } from "../../../store/selectors/selectors"
import { getOrders } from "../../../store/thunks/customer.thunks"
import Preloader from "../../../ui/components/Preloader/Preloader.jsx"


export default function OrdersHistory() {
    const dispatch = useDispatch()
    const ordersList = useSelector(customerOrdersHistory)
    console.log(ordersList);

    const getCustomerOrders = orders => {
        dispatch(getOrders(orders))      
    }

    useEffect(() => {
      getCustomerOrders()
      },[])

    if(ordersList?.length === 0){
      return (
        <Container>
          <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            No Orders yet
          </Typography>
        </Container>
      );
    }

    return(
      <Grid style={{maxWidth:1150,margin:"30px auto"}} container direction="column" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ordersList === undefined ? <Preloader/> : ordersList.map((order, index) => 
          <Grid item style={{border:"2px solid green", borderRadius:"5px", padding:10, margin:10, height:"auto"}} key={index}>
            <Typography variant="h6">OrderNo: {order?.orderNo}</Typography>
              <Grid style={{paddingTop:10}} container justifyContent="space-between" columns={{ xs: 6, md: 12 }}>
                <Grid justifyContent="flex-start" item>
                {order.products.map((product,key) =>
                  <Grid style={{paddingBottom:10}}  container key={key}><img style={{float:"left"}} align="top" width={70} src={product.product.imageUrls[0]} alt="/" /><Typography style={{paddingLeft:10}}> {product.product.name}</Typography></Grid>
                )}
                </Grid>
                <Grid justifyContent="flex-end" item>
                {order.mobile}
                </Grid>
              </Grid>
          </Grid>
          )}
      
      </Grid>
    )
}