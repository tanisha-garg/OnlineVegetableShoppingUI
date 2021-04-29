import { fetchOrderById } from "../../../service/OrderServiceT";
import store from "../../store";
import fetchOrderDetailsConstants from "./fetchOrderDetailsConstants";

function fetchOrderDetailsSuccess(order){
    return ({
        progress: false,
        order: order,
        error: "",
        type: fetchOrderDetailsConstants.fetchByOrderIdSuccess
      });
}

function fetchOrderDetailsFail(error){
    return ({
        progress: false,
        order: undefined,
        error: error,
        type: fetchOrderDetailsConstants.fetchByOrderIdFail
      });
}

function fetchOrderDetails(orderId) {
     return() => {
    const promise = fetchOrderById(orderId);
    promise.then((response) => {
        store.dispatch(fetchOrderDetailsSuccess(response.data));
    })
    .catch((error) => {
        store.dispatch(fetchOrderDetailsFail(error.response.data));
    })
    
    }
 
}

export {fetchOrderDetailsSuccess, fetchOrderDetailsFail, fetchOrderDetails};