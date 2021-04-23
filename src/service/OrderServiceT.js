import axios from "axios";

const baseUrl = "http://localhost:8080";

function fetchOrderById(id){

    const url = baseUrl + "/orders/get/" + id;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

function fetchOrdersByCustomerId(id){

    const url = baseUrl + "/orders/get/customer/" + id;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

function fetchOrdersByDate(date){

    const url = baseUrl + "/orders/get/date/" + date;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}



export {fetchOrderById, fetchOrdersByCustomerId, fetchOrdersByDate};