import axios from 'axios'

const baseUrl="http://localhost:8080";

/**
 * scenario : fetching vegetable by id
 * parameter :takes id as an input 
 * return promise
 */

function fetchVegetableById(id){
    const url=baseUrl+"/vegetables/byid/" +id;
    console.log("inside fetch vegetable serivce with id " , id)
    const promise=axios.get(url);
    return promise;
}

/**
 * scenario : adding vegetable
 * parameter :takes form data as an input 
 * return promise
 */

function addVegetable(data){
    const url=baseUrl+"/vegetables/add";
    let requestData={name:data.name,type:data.type,category:data.category,price:data.price,quantity:data.quantity};
    console.log("inside addVegetable service" , requestData);
    const promise=axios.post(url,requestData);
    return promise;
}

/**
 * scenario : updating vegetable price
 * parameter :takes form data as an input 
 * return promise
 */

function updateVegetablePriceService(data){
    const url=baseUrl+"/vegetables/changePrice";
    let requestData={vegId:data.vegId,price:data.price};
    console.log("inside update price service", requestData);
    const promise=axios.put(url,requestData);
    return promise;
}


export  { fetchVegetableById , addVegetable , updateVegetablePriceService};