import { addCustomerReducer } from "./addCustomer/addCustomerReducer";
import { updateCustomerReducer } from "./updateCustomer/updateCustomerReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import logger from "redux-logger";
import thunk from "redux-thunk";
import { getCustomerReducer } from "./getCustomer/getCustomerReducer";
//import { rootReducer } from "./root_reducer";


//const store=createStore(applyMiddleware(logger,thunk))

const store = createStore(
    combineReducers({
        addCustomer: addCustomerReducer,
        updateCustomer: updateCustomerReducer,
        getCustomer: getCustomerReducer,
    }),composeWithDevTools(applyMiddleware(thunk))
);

export default store;