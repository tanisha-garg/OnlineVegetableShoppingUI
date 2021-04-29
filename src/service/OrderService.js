import axios from "axios";

const baseUrl = "http://localhost:8080";

/**
 * function to send request to fetchOrderDetails endpoint of OrderRestController
 * @param  id (orderId)
 * @returns promise
 */

function fetchOrderById(id){

    const url = baseUrl + "/orders/get/" + id;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

/**
 * function to send request to fetchOrderDetailsByCustomerId endpoint of OrderRestController
 * @param  id (customerId)
 * @returns promise
 */

function fetchOrdersByCustId(id){

    const url = baseUrl + "/orders/get/customer/" + id;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

/**
 * function to send request to fetchOrderDetailsByDate endpoint of OrderRestController
 * @param  date
 * @returns promise
 */

function fetchAllOrdersByDate(date){

    const url = baseUrl + "/orders/get/date/" + date;
    console.log(url);
    const promise = axios.get(url);
    return promise;

}

/**
 * function to send request to addOrderDetails endpoint of OrderRestController
 * @param  id (customerId)
 * @returns promise
 */

function addOrderDetails(id){

    const url = baseUrl + "/orders/add/" + id;
    console.log(url);
    const promise = axios.post(url);
    return promise;

}

/**
 * function to send request to fetchAllOrders endpoint of OrderRestController
 * @param  
 * @returns promise
 */

function fetchOrderList(){

    
    const url = baseUrl + "/orders/getAll";
    console.log(url);
    const promise = axios.get(url);
    return promise;


}

/**
 * function to send request to updateOrderStatus endpoint of OrderRestController
 * @param  data
 * @returns promise
 */

function updateOrderDetails(data){
    
    const url = baseUrl + "/orders/update/status/" + data.orderId ;
    const request ={orderStatus:data.status}
    console.log(url);
    const promise = axios.put(url,request);
    return promise;


}

/**
 * function to return a dummy customerId element
 * 
 * @returns 16 (customerId)
 */

function fetchCustomerId(){
    return 16;
}

/**
 * function to return todays date
 * 
 * @returns date
 */

function ordersPlacedToday(){
    const today = new Date();
    return today;
}




export {fetchOrderById, fetchOrdersByCustId, fetchAllOrdersByDate,fetchOrderList, addOrderDetails,updateOrderDetails, fetchCustomerId, ordersPlacedToday};