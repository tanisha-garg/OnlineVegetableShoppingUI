import { updateCustomer } from "../../service1/CustomerService";
import store from "../store";
import { updateCustomerConstant } from "./updateCustomerConstant";

export const updateCustomerStart = () => ({
  type: updateCustomerConstant.Fetch_Update_Customer_Start,
  payload: undefined,
  error: undefined,
});

export const updateCustomerSuccess = (data) => ({
  type: updateCustomerConstant.Fetch_Update_Customer_Success,
  payload: data,
  error: undefined,
});

export const updateCustomerFailure = (error) => ({
  type: updateCustomerConstant.Fetch_Update_Customer_Failure,
  payload: undefined,
  error: error,
});
export const updateCustomerThunk = (state) => {
  return () => {
    // const data = {
    //           customerId: state.customerId,
    //           name: state.name,
    //           mobileNumber: state.mobileNumber,
    //           emailId: state.emailId,
    //         };
    const promise = updateCustomer(state);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionsuccess = updateCustomerSuccess(response.data);
        store.dispatch(objActionsuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = updateCustomerFailure(error.response.data);
        store.dispatch(objActionFailure);
      });
  };
};
