import {itemToCartConstant} from "./itemToCartConstant";

const initial_State = {
    vegDetail: undefined,
    items: [],
    error: undefined,
  };

  export const itemToCartReducer = (state = initial_State, action) => {
      switch (action.type){
          case itemToCartConstant.Start:
              return{
                  ...state,
              };
          case itemToCartConstant.Success:
               return{
                      ...state,
                      vegDetail: action.payload,
                      items: addItemsToCart(state.items,action.payload),
                      error: action.error,
                  };
          case itemToCartConstant.Failure:
              return{
                  ...state,
                  vegDetail: action.payload,
                  error: action.error,
              };
          case itemToCartConstant.Start_Decrease:
              return{
                  ...state,
              };
          case itemToCartConstant.Success_Decrease:
              return{
                  ...state,
                  vegDetail: action.payload,
                  items: removeItemsFromCart(state.items, action.payload),
                  error: action.error,
              };
          case itemToCartConstant.Failure_Decrease:
              return{
                  ...state,
                  vegDetail: action.payload,
                  error: action.error,
              };
          case itemToCartConstant.Empty_Cart:
              return{
                vegDetail: action.payload,
                error: action.error,
                items: [],
              };
          default:
              return state;     
      }
  };

  const addItemsToCart = (vegetables, itemToAdd) =>{
      const existingitem = vegetables.find((vegetable) => vegetable.vegId === itemToAdd.vegId);
      if(existingitem){
          return vegetables.map((vegetable)=>
          vegetable.vegId === itemToAdd.vegId
            ?{...vegetable, quantity:itemToAdd.quantity}
            :vegetables
            );
      }
      return [...vegetables, itemToAdd];
  };

  export const removeItemsFromCart = (vegetables,itemToRemove) =>{
      const existingitem = vegetables.find(
          (vegetable) => vegetable.vegId === itemToRemove.vegId
      );
      if(existingitem.quantity === 1){
          return vegetables.filter((vegetable) =>  vegetable.vegId !== itemToRemove.vegId);
      }
      return vegetables.map((vegetable)=>
        vegetable.vegId === itemToRemove.vegId
          ?{...vegetables, quantity:itemToRemove.quantity}
          : vegetables
      );
  };
