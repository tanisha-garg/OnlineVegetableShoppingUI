import fetchOrdersByDateConstants from "./fetchOrdersByDateConstants";

const initialState = {
    progress: false,
    orders: undefined,
    error: ""
}

function fetchOrdersByDateReducer(state=initialState, action){

    if(action.type === fetchOrdersByDateConstants.fetchByDateSuccess ||
        action.type === fetchOrdersByDateConstants.fetchByDateFail){
            let newState = {...state, ...action}
            return newState;
        }

        return state;

}

export default fetchOrdersByDateReducer;