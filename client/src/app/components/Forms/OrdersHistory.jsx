import { useEffect } from "react"
import { Typography, Container } from "@mui/material";
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
      <>
      {ordersList === undefined ? <Preloader/> : ordersList.map((order, index) => 
         <div key={index}>{order?.email}</div>
        )}
      
      </>
    )
}