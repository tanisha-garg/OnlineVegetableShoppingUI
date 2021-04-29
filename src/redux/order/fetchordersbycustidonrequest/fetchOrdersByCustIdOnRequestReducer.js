import fetchOrdersByCustIdOnRequestConstants from "./fetchOrdersByCustIdOnRequestConstants";

const initialState = {
    progress: false,
    orders: undefined,
    error: ""
}

function fetchOrdersByCustIdOnRequestReducer(state = initialState, action){
    if(action.type === fetchOrdersByCustIdOnRequestConstants.success ||
        action.type === fetchOrdersByCustIdOnRequestConstants.fail){
            const newState = {...state, ...action};
            return newState;
        }
        return state;
}

export default fetchOrdersByCustIdOnRequestReducer;