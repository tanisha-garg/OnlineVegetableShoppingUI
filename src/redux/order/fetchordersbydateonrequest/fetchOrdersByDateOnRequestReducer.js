import fetchOrdersByDateOnRequestConstants from "./fetchOrdersByDateOnRequestConstants";

const initialState ={
    progress: false,
    orders: undefined,
    error: ""
}
function fetchOrdersByDateOnRequestReducer(state = initialState, action){
    if(action.type === fetchOrdersByDateOnRequestConstants.success ||
        action.type === fetchOrdersByDateOnRequestConstants.fail){
            const newState = {...state, ...action};
            return newState;
        }

        return state;
}

export default fetchOrdersByDateOnRequestReducer;