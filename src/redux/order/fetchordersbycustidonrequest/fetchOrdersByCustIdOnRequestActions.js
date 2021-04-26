import { fetchOrdersByCustId } from "../../../service/OrderServiceT";
import store from "../../store";
import fetchOrdersByCustIdOnRequestConstants from "./fetchOrdersByCustIdOnRequestConstants";

function fetchOrdersByCustIdOnRequestSuccess(orders){
    return({
        progress: false,
        orders: orders,
        error: "",
        type: fetchOrdersByCustIdOnRequestConstants.success
    });
}

function fetchOrdersByCustIdOnRequestFail(error){
    return({
        progress: false,
        orders: undefined,
        error: error,
        type: fetchOrdersByCustIdOnRequestConstants.fail
    })
}

function fetchOrdersByCustIdOnRequest(customerId){
    return() => {
        const promise = fetchOrdersByCustId(customerId);
        promise.then((response) => {
          store.dispatch(fetchOrdersByCustIdOnRequestSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(fetchOrdersByCustIdOnRequestFail(error.message));
        })

  }

}

export {fetchOrdersByCustIdOnRequestSuccess, fetchOrdersByCustIdOnRequestFail, fetchOrdersByCustIdOnRequest}