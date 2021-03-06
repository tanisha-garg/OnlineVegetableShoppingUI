import store from "../../store";
import updateVegetablePriceConstants from "./updateVegetablePriceConstants";
import {updateVegetablePriceService} from "../../../service/VegetableService"

function updateVegetablePriceSuccess(vegetable){
    return({
        vegetable:vegetable,
        error:'',
        type :updateVegetablePriceConstants.success
    });
}

function updateVegetablePriceFail(error){
    return({
        vegetable:undefined,
        error:error,
        type:updateVegetablePriceConstants.fail
    });
}

function updateVegetablePrice(data){
    return()=>{
          const promise = updateVegetablePriceService(data);
          promise.then(
              response=>{
                  const vegetable=response.data;
                  store.dispatch(updateVegetablePriceSuccess(vegetable));
              }
          ).catch(error=>{
              let actionObj=updateVegetablePriceFail(error.response.data);
              store.dispatch(actionObj);
          })

    }
}

export {updateVegetablePriceSuccess,updateVegetablePriceFail,updateVegetablePrice}
