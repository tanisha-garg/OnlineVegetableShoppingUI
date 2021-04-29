import { viewAllVeg } from "../../Service/CartService";
import { itemToVegConstant } from "./itemToVegConstant";

  export const itemToVegStart = () => ({
    type: itemToVegConstant.Start,
    payload: undefined,
    error: undefined,
   });

  export const itemToVegSuccess = (data) => ({
    type: itemToVegConstant.Success,
    payload: data,
    error: undefined,
  });

  export const itemToVegFailure = (error) => ({
    type: itemToVegConstant.Failure,
    payload: undefined,
    error: error,
  });

  
  export const itemToVegThunk = () => {
    return (dispatch) => {
      const objAction = itemToVegStart();
      dispatch(objAction);
      const promise = viewAllVeg();
      promise
        .then((response) => {
          console.log(response.data);
          let objActionSuccess = itemToVegSuccess(response.data);
          dispatch(objActionSuccess);
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error.response.data);
          let objActionFailure = itemToVegFailure(error.message);
          dispatch(objActionFailure);
        });
    };
  };
