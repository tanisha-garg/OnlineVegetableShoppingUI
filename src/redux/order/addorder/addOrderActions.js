import { addOrderDetails } from "../../../service/OrderServiceT";
import store from "../../store";
import addOrderConstants from "./addOrderConstants";

function addOrderSuccess(order) {
  return {
    progress: false,
    order: order,
    error: "",
    type: addOrderConstants.addOrderSuccess,
  };
}

function addOrderFail(error) {
  return {
    progress: false,
    order: undefined,
    error: error,
    type: addOrderConstants.addOrderFail,
  };
}

function addOrderAction(customerId) {
    return() => {
          const promise = addOrderDetails(customerId);
          promise.then((response) => {
            store.dispatch(addOrderSuccess(response.data));
          })
          .catch((error) => {
            console.log(error.response.data);
            store.dispatch(addOrderFail(error.response.data));
          })
    }
 
}

export {addOrderSuccess, addOrderFail, addOrderAction};
