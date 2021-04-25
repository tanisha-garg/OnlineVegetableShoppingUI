import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addVegetableReducer from "./addVegetable/addVegetableReducer";
import getVegetableDetailsOnRequestReducer from "./getVegetableDetailsOnRequest/getVegetableDetailsOnRequestReducer";
import updateVegetablePriceReducer from "./updateVegetablePrice/updateVegetablePriceReducer";


const store=createStore(
    combineReducers({
        addVegetable:addVegetableReducer,
        getVegetableDetailsOnRequest:getVegetableDetailsOnRequestReducer,
        updateVegetablePrice:updateVegetablePriceReducer

    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;