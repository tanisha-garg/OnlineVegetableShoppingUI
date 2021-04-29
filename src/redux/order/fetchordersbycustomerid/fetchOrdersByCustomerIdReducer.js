import fetchOrdersByCustomerIdConstants from "./fetchOrdersByCustomerIdConstants"

const initialState = {
    progress: false,
    orders: undefined,
    error: ""
}

function fetchOrdersByCustomerIdReducer(state = initialState, action){
    if(action.type === fetchOrdersByCustomerIdConstants.fetchByIdSuccess ||
        action.type === fetchOrdersByCustomerIdConstants.fetchByIdFail){
            let newState = {...state, ...action};
            return newState;
        }
        return state;
}

export default fetchOrdersByCustomerIdReducer;