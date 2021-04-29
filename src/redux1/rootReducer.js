import { combineReducers } from "redux";
import { itemToCartReducer} from "./Cart/itemToCartReducer";
import { itemToVegReducer } from "./vegItem/itemToVegReducer";

export const rootReducer= combineReducers({
    itemToCart:itemToCartReducer,
    itemToVeg:itemToVegReducer
})