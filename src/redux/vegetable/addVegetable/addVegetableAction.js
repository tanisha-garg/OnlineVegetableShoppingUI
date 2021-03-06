import { addVegetable } from "../../../service/VegetableService";
import store from "../../store";
import addVegetableConstants from "./addVegetableConstants";

function addVegetableSuccess(vegetable){
    return({
        vegetable:vegetable,
        error:'',
        type :addVegetableConstants.success
    });
}

function addVegetableFail(error){
    return({
        vegetable:undefined,
        error:error,
        type:addVegetableConstants.fail
    });
}

function addVegetableAction(data){
    return()=>{
       
          const promise = addVegetable(data);
          promise.then(
              response=>{
                  const vegetable=response.data;
                  store.dispatch(addVegetableSuccess(vegetable));
              }
          ).catch(error=>{
              let actionObj=addVegetableFail(error.response.data);
              store.dispatch(actionObj);
          })

    }
}

export {addVegetableAction,addVegetableSuccess,addVegetableFail}