import { fetchVegetableById } from "../../../service/VegetableService";
import store from "../../store";
import getVegetableDetailsOnRequestConstants from "./getVegetableDetailsOnRequestConstants";


function getVegetableOnRequestSuccess(vegetable){
    return({
        type:getVegetableDetailsOnRequestConstants.success,
        vegetable:vegetable,
        error:''
    });
}


function getVegetableOnRequestFail(error){

    return({
        type : getVegetableDetailsOnRequestConstants.fail,
        vegetable:undefined,
        error:error
    });
}


function getVegetableDetailsOnRequestAction(vegId){
    return()=>{
          const promise=fetchVegetableById(vegId);
          promise.then(response=>{
              const vegetable=response.data;
              store.dispatch(getVegetableOnRequestSuccess(vegetable))
          }).catch(error=>{
              store.dispatch(getVegetableOnRequestFail(error.response.data))
          })
    }
}

export {getVegetableDetailsOnRequestAction,getVegetableOnRequestFail,getVegetableOnRequestSuccess}