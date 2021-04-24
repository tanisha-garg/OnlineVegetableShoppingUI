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

function addOrder(customerId) {
    return() => {
        let order = {
            orderId: 2,
            customerName: "Tanisha",
            totalAmount: 100.0,
            date: "20/01/2021",
            status: "Placed",
          };
          store.dispatch(addOrderSuccess(order));
          //store.dispatch(addOrderFail("Nothing to show"));
    }
 
}

export {addOrderSuccess, addOrderFail, addOrder};
