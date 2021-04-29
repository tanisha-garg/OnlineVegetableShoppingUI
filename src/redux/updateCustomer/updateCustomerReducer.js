import { updateCustomerConstant } from "./updateCustomerConstant"

const initial_State ={
    customer:undefined,
    error:undefined
}
 
export const updateCustomerReducer=(state=initial_State,action)=>{
    switch(action.type){
        case updateCustomerConstant.Fetch_Update_Customer_Start:
            return{
                ...state,
            };
        case updateCustomerConstant.Fetch_Update_Customer_Success:
                return{
                    ...state,customer:action.payload,error:action.error
                };
        case updateCustomerConstant.Fetch_Update_Customer_Failure:
            return{
                ...state,customer:action.payload,error:action.error
            };
        default:
            return state
            
    }
};
