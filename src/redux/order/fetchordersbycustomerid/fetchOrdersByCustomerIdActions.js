import store from "../../store";
import fetchOrdersByCustomerIdConstants from "./fetchOrdersByCustomerIdConstants";

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
          console.log("Inside fetchOrderByCustomerId function");
          console.log(orders);
          store.dispatch(fetchOrdersByCustomerIdSuccess(orders));
          //store.dispatch(fetchOrdersByCustomerIdFail("Kuch nai hai yaha"));

    }
}

export {fetchOrdersByCustomerIdSuccess, fetchOrdersByCustomerIdFail, fetchOrdersByCustomerId}