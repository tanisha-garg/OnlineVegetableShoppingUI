import axios from 'axios'

const baseUrl="http://localhost:8585";

function fetchVegetableById(id){
    const url=baseUrl+"/vegetables/byid/" +id;
    console.log("inside fetch vegetable serivce with id " , id)
    const promise=axios.get(url);
    return promise;
}

function addVegetable(data){
    const url=baseUrl+"/vegetables/add";
    let requestData={name:data.name,type:data.type,category:data.category,price:data.price,quantity:data.quantity};
    console.log("inside addVegetable service" , requestData);
    const promise=axios.post(url,requestData);
    return promise;
}


export default {fetchVegetableById , addVegetable};