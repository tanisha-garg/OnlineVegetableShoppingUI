import updateVegetablePriceConstants from "./updateVegetablePriceConstants";

const initialState={
    vegetable:undefined,
    error:""
};

export default function updateVegetablePriceReducer(state=initialState , action){
    if(action.type===updateVegetablePriceConstants.fail || action.type===updateVegetablePriceConstants.success){
        let newState={...state,...action};
        return newState;
    }

    return state;
}