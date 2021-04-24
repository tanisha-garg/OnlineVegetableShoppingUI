import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchBillByIdReducer from "./billingdetails/fetchbillbyid/fetchBillByIdReducer";
import addOrderReducer from "./order/addorder/addOrderReducer";
import fetchOrderDetailsReducer from "./order/fetchorderdetails/fetchOrderDetailsReducer";
import fetchOrdersByCustomerIdReducer from "./order/fetchordersbycustomerid/fetchOrdersByCustomerIdReducer"
import fetchOrdersByDateReducer from "./order/fetchordersbydate/fetchOrdersByDateReducer";

const store = createStore(
    // fetchBillByIdReducer, composeWithDevTools(applyMiddleware(thunk))
    combineReducers({
        fetchBillById: fetchBillByIdReducer,
        fetchOrdersByCustomerId: fetchOrdersByCustomerIdReducer,
        fetchOrdersByDate: fetchOrdersByDateReducer,
        addOrder: addOrderReducer,
        fetchOrderDetails: fetchOrderDetailsReducer
    }), composeWithDevTools(applyMiddleware(thunk))
);

export default store;