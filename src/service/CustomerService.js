import axios from "axios";

const baseUrl = "http://localhost:3002";

function getCustomerDetailsOnRequest(id) {
  const url = baseUrl + "/customer/get/" + id;
  console.log(url);
  const promise = axios.get(url);
  return promise;
}

function updateCustomerDetails(id) {
  const url = baseUrl + "/customer/update/" + id;
  console.log(url);
  const promise = axios.get(url);
  return promise;
}

function displayCustomerDetails(id) {
  const url = baseUrl + "/customer/details/" + id;
  console.log(url);
  const promise = axios.get(url);
  return promise;
}

function addCustomer(customer) {
  const url = baseUrl + "/add" + customer;
  console.log(url);
  const promise = axios.get(url);
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
  displayCustomerDetails,
  addCustomer,
  viewCustomersByLoc,
};
