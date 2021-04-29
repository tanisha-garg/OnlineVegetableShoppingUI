import { fetchBillDetails } from "../../../service/BillingDetailsService";
import store from "../../store";
import fetchBillByIdOnRequestConstants from "./fetchBillByIdOnRequestConstants";

function fetchBillByIdOnRequestSuccess(bill){
    return({
        progress: false,
        bill: bill,
        error: "",
        type: fetchBillByIdOnRequestConstants.success
    })
}

function fetchBillByIdOnRequestFail(error){
    return({
        progress: false,
        bill: undefined,
        error: error,
        type: fetchBillByIdOnRequestConstants.fail
    })
}

function fetchBillByIdOnRequest(billId){
    return()=> {    
        console.log("Inside on request method")
        const promise = fetchBillDetails(billId);
        promise.then((response) => {
            console.log("Success", response.data);
            const bill = response.data;
            store.dispatch(fetchBillByIdOnRequestSuccess(bill));
        })
        .catch((error) => {
            console.log("Inside catch error",error.message);
            store.dispatch(fetchBillByIdOnRequestFail(error.response.data));
        })
    }
}

export {fetchBillByIdOnRequestSuccess, fetchBillByIdOnRequestFail, fetchBillByIdOnRequest}