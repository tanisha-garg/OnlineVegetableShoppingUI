import axios from "axios";

const baseUrl = "http://localhost:8080";

function fetchBillDetails(id){

    const url = baseUrl + "/bills/get/" + id;
    const promise = axios.get(url);
    return promise;

}

export {fetchBillDetails};