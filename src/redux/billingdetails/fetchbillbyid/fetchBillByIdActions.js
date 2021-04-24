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
        let bill = {
            billingId: 2,
            transactionMode: "COD",
            transactionDate: "2021-04-20",
            transactionStatus: "Succesful",
            flatNo: "21",
            buildingName: "ABC",
            area: "Sector 2",
            city: "Chandigarh",
            state: "punjab",
            pincode: "123456",
          };
          //store.dispatch(fetchBillByIdSuccess(bill));
          store.dispatch(fetchBillByIdFail("Nai hai kuch yaha pe"));
    }
}

export {fetchBillByIdSuccess, fetchBillByIdFail, fetchBillById}