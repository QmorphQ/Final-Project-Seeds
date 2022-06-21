import { useEffect } from "react"
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


    return(
      <>
      {ordersList === undefined ? <Preloader/> : ordersList.map((order, index) => 
          <div key={index}>{order?.email}</div>
        )}
      

      </>
    )
}