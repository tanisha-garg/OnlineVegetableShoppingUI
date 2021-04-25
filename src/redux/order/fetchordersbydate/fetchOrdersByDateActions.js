import { fetchAllOrdersByDate } from "../../../service/OrderServiceT";
import store from "../../store";
import fetchOrdersByDateConstants from "./fetchOrdersByDateConstants";

function fetchOrdersByDateSuccess(orders){
    return({
        progress: false,
        orders: orders,
        error: "",
        type: fetchOrdersByDateConstants.fetchByDateSuccess
    })
}

function fetchOrdersByDateFail(error){
    return({
        progress: false,
        orders: undefined,
        error: error,
        type: fetchOrdersByDateConstants.fetchByDateFail
    })
}

function fetchOrdersByDate(date){
    return() => {
          const promise = fetchAllOrdersByDate(date);
          promise.then((response) => {
            store.dispatch(fetchOrdersByDateSuccess(response.data));
          })
          .catch((error) => {
            store.dispatch(fetchOrdersByDateFail(error.message));
          })

    }
}

export {fetchOrdersByDateSuccess, fetchOrdersByDateFail, fetchOrdersByDate}