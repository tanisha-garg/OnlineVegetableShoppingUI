import {itemToVegConstant} from "./itemToVegConstant";

const initial_State = {
    
    items: [],
    error: undefined,
  };

  export const itemToVegReducer = (state = initial_State, action) => {
      switch (action.type){
          case itemToVegConstant.Start:
              return{
                  ...state,
              };
          case itemToVegConstant.Success:
               return{
                      ...state,
                      items: action.payload,
                      error: action.error,
                  };
          case itemToVegConstant.Failure:
              return{
                  ...state,
                  items: action.payload,
                  error: action.error,
              };
          default:
              return state;     
      }
  };

  