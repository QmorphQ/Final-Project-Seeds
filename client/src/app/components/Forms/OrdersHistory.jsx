import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getOrders } from "../../../store/thunks/customer.thunks"



export default function OrdersHistory() {
    const dispatch = useDispatch()
    const getCustomerOrders = orders => {
        dispatch(getOrders(orders))

    }
    useEffect(() => {
      getCustomerOrders()
      },[])

    return(
    
    <span >In Progress</span>
    )
}