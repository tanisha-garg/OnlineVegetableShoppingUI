import axios from "axios";


const baseUrl = "http://localhost:8080";

function getCustomerDetailsOnRequest(customerId) {      
  const url = baseUrl + "/customers/view/" + customerId;
  console.log(url);
  const promise = axios.get(url);
  return promise;
}

 function updateCustomer(data) {
   const url = baseUrl + "/customers/update/" + data.customerId;
   let requestData= {name:data.name, mobileNumber: data.mobileNumber,
     emailId: data.emailId };
   console.log(requestData);
   const promise = axios.put(url,requestData);
   return promise;
 }

function addCustomer(data) {
  const url = baseUrl + "/customers/add";
  let requestData={customerId:data.customerId,name:data.name,mobileNumber:data.mobileNumber,emailId:data.emailId,
  flatNo:data.flatNo,buildingName:data.buildingName,area:data.area,city: data.city,state:data.state,
  pincode:data.pincode};
  console.log(url);
  const promise = axios.post(url,requestData);
  return promise;
}

 function viewCustomersByLoc(city) {
   const url = baseUrl + "/view/allbycity" + city;
   console.log(url);
   const promise = axios.get(url,city);
   return promise;
 }

export {
  getCustomerDetailsOnRequest,
  updateCustomer,
  addCustomer,
  viewCustomersByLoc,
};
