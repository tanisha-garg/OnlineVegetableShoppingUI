import axios from "axios";
//import { data } from "jquery";

const baseUrl = "http://localhost:8584";

function getCustomerDetailsOnRequest(customerId) {
  const url = baseUrl + "/customers/viewCustomer/" + customerId;
  console.log(url);
  const promise = axios.get(url);
  return promise;
}

 function updateCustomerDetails(data) {
   const url = baseUrl + "/customers/update/" + data.customerId;
   let requestData= {customerId:data.customerId,name:data.name, mobileNumber: data.mobileNumber,
     emailId: data.emailId };
   console.log(url);
   const promise = axios.put(url,requestData);
   return promise;
 }

function addCustomer(data) {
  const url = baseUrl + "/customers/addCustomer";
  let requestData={customerId:data.customerId,name:data.name,mobileNumber:data.mobileNumber,emailId:data.emailId,
  flatNo:data.flatNo,buildingName:data.buildingName,area:data.area,city: data.city,state:data.state,
  pincode:data.pincode};
  console.log(url);
  const promise = axios.post(url,requestData);
  return promise;
}

 function viewCustomersByLoc(city) {
   const url = baseUrl + "/view/location" + city;
   console.log(url);
   const promise = axios.get(url);
   return promise;
 }

export {
  getCustomerDetailsOnRequest,
  updateCustomerDetails,
  addCustomer,
  viewCustomersByLoc,
};
