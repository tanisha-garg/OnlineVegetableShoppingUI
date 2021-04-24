import fetchBillByIdConstants from "./fetchBillByIdConstants";

function fetchBillByIdRequest(){
    return({
        progress: true,
        bill: undefined,
        error: "",
        type: fetchBillByIdConstants.fetchByIdRequest
    });
}

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

export {fetchBillByIdRequest, fetchBillByIdSuccess, fetchBillByIdFail}