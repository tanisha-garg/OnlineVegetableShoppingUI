import { addCustomerConstant } from "./addCustomerConstant";

const initial_State = {
  customer: undefined,
  error: undefined,
};

export const addCustomerReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addCustomerConstant.Fetch_Add_Customer_Start:
      return {
        ...state,
      };
    case addCustomerConstant.Fetch_Add_Customer_Success:
      return {
        ...state,
        customer: action.payload,
        error: action.error,
      };
    case addCustomerConstant.Fetch_Add_Customer_Failure:
      return {
        ...state,
        customer: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
