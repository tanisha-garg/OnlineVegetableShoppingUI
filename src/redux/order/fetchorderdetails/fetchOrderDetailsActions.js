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
        let order = {
            orderId: 2,
            customerName: "Tanisha",
            totalAmount: 100.0,
            date: "20/01/2021",
            status: "Placed",
          };
          store.dispatch(fetchOrderDetailsSuccess(order));
          //store.dispatch(fetchOrderDetailsFail("Nothing to show"));
    }
 
}

export {fetchOrderDetailsSuccess, fetchOrderDetailsFail, fetchOrderDetails};