import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchBillByIdReducer from "./billingdetails/fetchbillbyid/fetchBillByIdReducer";
import fetchBillByIdOnRequestReducer from "./billingdetails/fetchbillbyidonrequest/fetchBillByIdOnRequestReducer";
import addOrderReducer from "./order/addorder/addOrderReducer";
import fetchOrderDetailsReducer from "./order/fetchorderdetails/fetchOrderDetailsReducer";
import fetchOrdersByCustIdOnRequestReducer from "./order/fetchordersbycustidonrequest/fetchOrdersByCustIdOnRequestReducer";
import fetchOrdersByCustomerIdReducer from "./order/fetchordersbycustomerid/fetchOrdersByCustomerIdReducer"
import fetchOrdersByDateReducer from "./order/fetchordersbydate/fetchOrdersByDateReducer";
import addVegetableReducer from "./vegetable/addVegetable/addVegetableReducer";
import getVegetableDetailsOnRequestReducer from "./vegetable/getVegetableDetailsOnRequest/getVegetableDetailsOnRequestReducer";
import updateVegetablePriceReducer from "./vegetable/updateVegetablePrice/updateVegetablePriceReducer";

const store = createStore(
    // fetchBillByIdReducer, composeWithDevTools(applyMiddleware(thunk))
    combineReducers({
        fetchBillById: fetchBillByIdReducer,
        fetchBillByIdOnRequest: fetchBillByIdOnRequestReducer,
        fetchOrdersByCustomerId: fetchOrdersByCustomerIdReducer,
        fetchOrdersByCustIdOnRequest: fetchOrdersByCustIdOnRequestReducer,
        fetchOrdersByDate: fetchOrdersByDateReducer,
        addOrder: addOrderReducer,
        fetchOrderDetails: fetchOrderDetailsReducer,
        addVegetable:addVegetableReducer,
        getVegetableDetailsOnRequest:getVegetableDetailsOnRequestReducer,
        updateVegetablePrice:updateVegetablePriceReducer
    }), composeWithDevTools(applyMiddleware(thunk))
);

export default store;