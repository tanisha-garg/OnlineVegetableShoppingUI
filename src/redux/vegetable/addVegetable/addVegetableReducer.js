import addVegetableConstants from "./addVegetableConstants";

const initialState={
    vegetable:undefined,
    error:""
};

export default function addVegetableReducer(state=initialState , action){
    if(action.type===addVegetableConstants.fail || action.type===addVegetableConstants.success){
        let newState={...state,...action};
        return newState;
    }

    return state;
}