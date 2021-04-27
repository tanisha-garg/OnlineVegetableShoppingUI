import axios from "axios";

const baseUrl = "http://localhost:8080";

function fetchFeedbackByVegetableId(vegetableId) {

    const url = baseUrl + "/feedback/view/veg/" + vegetableId;
    const promise = axios.get(url);
    return promise;

}

function addFeedback(data) {

    const url = baseUrl + "/feedback/add";
    let requestData = {
        custId: data.customerId,
        vegetableId: data.vegetableId,
        rating: data.rating,
        comment: data.comment
    };

    console.log("inside addPackage service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function fetchAllFeedbacks() {

    const url = baseUrl + "/feedback";
    const promise = axios.get(url);
    return promise;

}

export { fetchFeedbackByVegetableId, addFeedback, fetchAllFeedbacks };