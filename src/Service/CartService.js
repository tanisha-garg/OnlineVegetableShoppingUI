import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function addItemToCartRequest(data){
    const url=baseUrl+"/cart/add"
    const promise=axios.post(url,data)
    return promise;
}
export function increaseQuantityRequest(data){
    const url=baseUrl+"/cart/increasequantity"
    const promise=axios.put(url,data);
    return promise;
}

export function decreaseQuantityRequest(data){
    const url=baseUrl+"/cart/decreasequantity"
    const promise=axios.put(url,data);
    return promise;
}

export function removeItemToCartRequest(data){
    const url=baseUrl+"/cart/removeVegetable";
    const promise=axios.delete(url,data)
    return promise;

}