import getVegetableDetailsOnRequestConstants from "./getVegetableDetailsOnRequestConstants"

const initialState={
    vegetable:undefined,
    error:''
}

export default function getVegetableDetailsOnRequestReducer(state=initialState,action){

    if(action.type===getVegetableDetailsOnRequestConstants.fail||
        action.type===getVegetableDetailsOnRequestConstants.success){
            let newState={...state,...action};
            return newState;
    }
    return state;
}