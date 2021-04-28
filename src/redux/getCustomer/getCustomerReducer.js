import { getCustomerConstant } from "./getCustomerConstant"

const initial_State ={
    customer:undefined,
    error:undefined
}
 
export const getCustomerReducer=(state=initial_State,action)=>{
    switch(action.type){
        case getCustomerConstant.Fetch_View_Customer_Start:
            return{
                ...state,
            };
        case getCustomerConstant.Fetch_View_Customer_Success:
                return{
                    ...state,customer:action.payload,error:action.error
                };
        case getCustomerConstant.Fetch_View_Customer_Failure:
            return{
                ...state,customer:action.payload,error:action.error
            };
        default:
            return state
            
    }
};