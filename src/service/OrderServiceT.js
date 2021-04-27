import axios from "axios";
import { data } from "jquery";
import orderValidationMessage from "../components/order/orderValidationMessage";

const baseUrl = "http://localhost:8080";

function fetchOrderById(id){

    const url = baseUrl + "/orders/get/" + id;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

function fetchOrdersByCustId(id){

    const url = baseUrl + "/orders/get/customer/" + id;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

function fetchAllOrdersByDate(date){

    const url = baseUrl + "/orders/get/date/" + date;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

function addOrderDetails(id){

    const url = baseUrl + "/orders/add/" + id;
    console.log(url);
    const promise = axios.post(url);
    return promise;

}

export function fetchOrderList(){

    
    const url = baseUrl + "/orders/getAll";
    console.log(url);
    const promise = axios.get(url);
    return promise;


}

function updateOrderDetails(data){
    
    const url = baseUrl + "/orders/update/status/" + data.orderId ;
    const request ={orderStatus:data.status}
    console.log(url);
    const promise = axios.put(url,request);
    return promise;


}




export {fetchOrderById, fetchOrdersByCustId, fetchAllOrdersByDate, addOrderDetails,updateOrderDetails};