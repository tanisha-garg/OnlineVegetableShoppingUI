import { addCustomer } from "../../service1/CustomerService";
import { addCustomerConstant } from "./addCustomerConstant";
import store from "../store";

const data = {
  customerId: 20,
  name: "Ayesha",
  mobileNumber: "987654321",
  emailId: "abc@gmail.com",
  flatNo: "1",
  buildingName: "abc enclave",
  area: "lakshmi nagar",
  city: "mumbai",
  state: "maharashtra",
  pincode: "123456",
};

export const addCustomerStart = () => ({
  type: addCustomerConstant.Fetch_Add_Customer_Start,
  payload: undefined,
  error: undefined,
});

export const addCustomerSuccess = (data) => ({
  type: addCustomerConstant.Fetch_Add_Customer_Success,
  payload: data,
  error: undefined,
});

export const addCustomerFailure = (error) => ({
  type: addCustomerConstant.Fetch_Add_Customer_Failure,
  payload: undefined,
  error: error,
});
export const addCustomerThunk = (state) => {
  return () => {
    const data = {
      customerId: state.customerId,
      name: state.name,
      mobileNumber: state.mobileNumber,
      emailId: state.emailId,
      flatNo: state.flatNo,
      buildingName: state.buildingName,
      area: state.area,
      city: state.city,
      state: state.state,
      pincode: state.pincode,
    };
    const promise = addCustomer(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionsuccess = addCustomerSuccess(response.data);
        store.dispatch(objActionsuccess);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = addCustomerFailure(error.message);
        store.dispatch(objActionFailure);
      });
  };
};
