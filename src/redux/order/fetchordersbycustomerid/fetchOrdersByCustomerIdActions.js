import store from "../../store";
import fetchOrdersByCustomerIdConstants from "./fetchOrdersByCustomerIdConstants";
import {fetchOrdersByCustId} from "../../../service1/OrderServiceT" 

function fetchOrdersByCustomerIdSuccess(orders){
    return({
        progress:false,
        orders: orders,
        error: "",
        type: fetchOrdersByCustomerIdConstants.fetchByIdSuccess
    })
}

function fetchOrdersByCustomerIdFail(error){
    return({
        progress:false,
        orders: undefined,
        error: error,
        type: fetchOrdersByCustomerIdConstants.fetchByIdFail
    })
}

function fetchOrdersByCustomerId(customerId){
    return() => {
          const promise = fetchOrdersByCustId(customerId);
          promise.then((response) => {
            store.dispatch(fetchOrdersByCustomerIdSuccess(response.data));
          })
          .catch((error) => {
            store.dispatch(fetchOrdersByCustomerIdFail(error.response.data));
          })

    }
}

export {fetchOrdersByCustomerIdSuccess, fetchOrdersByCustomerIdFail, fetchOrdersByCustomerId}