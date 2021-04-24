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
        const order1 = {
            orderId: 1,
            customerName: "Tanisha",
            totalAmount: 100.0,
            date: "20/01/2021",
            status: "Placed",
          };
          const order2 = {
            orderId: 2,
            customerName: "Pallavi",
            totalAmount: 200.0,
            date: "10/01/2021",
            status: "Placed",
          };
          const orders = [order1, order2];
          console.log("Inside fetchOrdersByDate function");
          console.log(orders);
          store.dispatch(fetchOrdersByDateSuccess(orders));
          //store.dispatch(fetchOrdersByDateFail("Kuch nai hai yaha"));

    }
}

export {fetchOrdersByDateSuccess, fetchOrdersByDateFail, fetchOrdersByDate}