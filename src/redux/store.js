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
import fetchOrdersByDateOnRequestReducer from "./order/fetchordersbydateonrequest/fetchOrdersByDateOnRequestReducer";
import addVegetableReducer from "./vegetable/addVegetable/addVegetableReducer";
import getVegetableDetailsOnRequestReducer from "./vegetable/getVegetableDetailsOnRequest/getVegetableDetailsOnRequestReducer";
import updateVegetablePriceReducer from "./vegetable/updateVegetablePrice/updateVegetablePriceReducer";
import { addCustomerReducer } from "./addCustomer/addCustomerReducer";
import { updateCustomerReducer } from "./updateCustomer/updateCustomerReducer";
import { getCustomerReducer } from "./getCustomer/getCustomerReducer";
import {itemToCartReducer} from "./Cart/itemToCartReducer";
import {itemToVegReducer} from "./vegItem/itemToVegReducer"

const store = createStore(
    combineReducers({
        fetchBillById: fetchBillByIdReducer,
        fetchBillByIdOnRequest: fetchBillByIdOnRequestReducer,
        fetchOrdersByCustomerId: fetchOrdersByCustomerIdReducer,
        fetchOrdersByCustIdOnRequest: fetchOrdersByCustIdOnRequestReducer,
        fetchOrdersByDate: fetchOrdersByDateReducer,
        fetchOrdersByDateOnRequest: fetchOrdersByDateOnRequestReducer,
        addOrder: addOrderReducer,
        fetchOrderDetails: fetchOrderDetailsReducer,
        addVegetable:addVegetableReducer,
        getVegetableDetailsOnRequest:getVegetableDetailsOnRequestReducer,
        updateVegetablePrice:updateVegetablePriceReducer,
        addCustomer: addCustomerReducer,
        updateCustomer: updateCustomerReducer,
        getCustomer: getCustomerReducer,
        itemToCart:itemToCartReducer,
        itemToVeg:itemToVegReducer
    }), composeWithDevTools(applyMiddleware(thunk))
);

export default store;