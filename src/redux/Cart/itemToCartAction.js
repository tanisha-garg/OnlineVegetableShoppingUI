import { increaseQuantityRequest,decreaseQuantityRequest } from "../../Service/CartService"
import { itemToCartConstant } from "./itemToCartConstant";

  export const itemToCartStart = () => ({
    type: itemToCartConstant.Start,
    payload: undefined,
    error: undefined,
   });

  export const itemToCartSuccess = (data) => ({
    type: itemToCartConstant.Success,
    payload: data,
    error: undefined,
  });

  export const itemToCartFailure = (error) => ({
    type: itemToCartConstant.Failure,
    payload: undefined,
    error: error,
  });

  export const itemToCartStartDecrease = () => ({
    type: itemToCartConstant.Start_Decrease,
    payload: undefined,
    error: undefined,
  });

  export const itemToCartSuccessDecrease = (data) => ({
    type: itemToCartConstant.Success_Decrease,
    payload: data,
    error: undefined,
  });

  export const itemToCartFailureDecrease = (error) => ({
    type: itemToCartConstant.Failure_Decrease,
    payload: undefined,
    error: error,
  });

  
  export const Empty_Cart_Action = () => ({
    type: itemToCartConstant.Empty_Cart,
    payload: undefined,
    error: undefined,
  });

  export const itemToCartIncreaseThunk = (data) => {
    return (dispatch) => {
      const objAction = itemToCartStart();
      dispatch(objAction);
      const promise = increaseQuantityRequest(data);
      promise
        .then((response) => {
          console.log(response.data);
          let objActionSuccess = itemToCartSuccess(response.data);
          dispatch(objActionSuccess);
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error.response.data);
          let objActionFailure = itemToCartFailure(error.message);
          dispatch(objActionFailure);
        });
    };
  };

  export const itemToCartDecreaseThunk = (data) => {
    return (dispatch) => {
      const objAction = itemToCartStartDecrease();
      dispatch(objAction);
      const promise = decreaseQuantityRequest(data);
      promise
        .then((response) => {
          console.log(response.data);
          let objActionSuccess = itemToCartSuccessDecrease(response.data);
          dispatch(objActionSuccess);
        })
        .catch((error) => {
          console.log(error.message);
          
          let objActionFailure = itemToCartFailureDecrease(error.message);
          dispatch(objActionFailure);
        });
    };
  };