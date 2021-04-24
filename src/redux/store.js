import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchBillByIdReducer from "./billingdetails/fetchbillbyid/fetchBillByIdReducer";

const store = createStore(
    fetchBillByIdReducer, composeWithDevTools(applyMiddleware(thunk))
    // combineReducers({
    //     fetchBillById: fetchBillByIdReducer
    // }), composeWithDevTools(applyMiddleware(thunk))
);

export default store;