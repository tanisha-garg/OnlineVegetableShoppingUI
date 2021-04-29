import { fetchAllOrdersByDate } from "../../../service1/OrderServiceT";
import store from "../../store";
import fetchOrdersByDateOnRequestConstants from "./fetchOrdersByDateOnRequestConstants";


function fetchOrdersByDateOnRequestSuccess(orders){
    return({
        progress: false,
        orders: orders,
        error: "",
        type: fetchOrdersByDateOnRequestConstants.success
    })
}

function fetchOrdersByDateOnRequestFail(error){
    return({
        progress: false,
        orders: undefined,
        error: error,
        type: fetchOrdersByDateOnRequestConstants.fail
    })
}

function fetchOrdersByDateOnRequest(date){
    return() => {
        const promise = fetchAllOrdersByDate(date);
        promise.then((response) => {
          store.dispatch(fetchOrdersByDateOnRequestSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(fetchOrdersByDateOnRequestFail(error.response.data));
        })

  }
}

export {fetchOrdersByDateOnRequestSuccess, fetchOrdersByDateOnRequestFail, fetchOrdersByDateOnRequest}