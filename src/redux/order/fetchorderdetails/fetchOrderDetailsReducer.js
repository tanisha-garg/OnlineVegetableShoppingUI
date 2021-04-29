import fetchOrderDetailsConstants from "./fetchOrderDetailsConstants";

const initialState = {
    progress: false,
    order:undefined,
    error: ""
}

function fetchOrderDetailsReducer(state=initialState, action){
    if(action.type === fetchOrderDetailsConstants.fetchByOrderIdSuccess ||
        action.type === fetchOrderDetailsConstants.fetchByOrderIdFail){
            const newState = {...state, ...action};
            return newState;
        }
        return state;
}

export default fetchOrderDetailsReducer;