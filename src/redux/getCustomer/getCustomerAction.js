import { getCustomerDetailsOnRequest } from "../../service1/CustomerService";
import store from "../store";
import { getCustomerConstant } from "./getCustomerConstant";


  export const getCustomerStart = () => ({
  type: getCustomerConstant.Fetch_View_Customer_Start,
  payload: undefined,
  error: undefined,
});

export const getCustomerSuccess = (data) => ({
  type: getCustomerConstant.Fetch_View_Customer_Success,
  payload: data,
  error: undefined,
});

export const getCustomerFailure = (error) => ({
  type: getCustomerConstant.Fetch_View_Customer_Failure,
  payload: undefined,
  error: error,
});
export const getCustomerThunk=(state)=> {
  return () => {
    
     let  customerId=state.customerId;
   
    const promise = getCustomerDetailsOnRequest(customerId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionsuccess = getCustomerSuccess(response.data);
        store.dispatch(objActionsuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = getCustomerFailure(error.message);
        store.dispatch(objActionFailure);
      });
  };
};