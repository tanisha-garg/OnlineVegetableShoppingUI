import { fetchBillDetails } from "../../../service/BillingDetailsService";
import store from "../../store";
import fetchBillByIdConstants from "./fetchBillByIdConstants";

function fetchBillByIdSuccess(bill){
    return({
        progress: false,
        bill: bill,
        error: "",
        type: fetchBillByIdConstants.fetchByIdSuccess
    })
}

function fetchBillByIdFail(error){
    return({
        progress: false,
        bill: undefined,
        error: error,
        type: fetchBillByIdConstants.fetchByIdFail
    })
}

function fetchBillById(billId){
    return()=> {    
        const promise = fetchBillDetails(billId);
        promise.then((response) => {
            const bill = response.data;
            store.dispatch(fetchBillByIdSuccess(bill));
        })
        .catch((error) => {
            console.log("Inside catch error",error.message);
            store.dispatch(fetchBillByIdFail(error.message));
        })
    }
}

export {fetchBillByIdSuccess, fetchBillByIdFail, fetchBillById}