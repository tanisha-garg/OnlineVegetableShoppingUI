import axios from "axios";

const baseUrl = "http://localhost:8080";

/**
 * function to send request to the fetchBillDetails endpoint of BillingRestController  
 * @param id 
 * @returns  promise
 */

function fetchBillDetails(id){

    const url = baseUrl + "/bills/get/" + id;
    const promise = axios.get(url);
    return promise;

}

export {fetchBillDetails};