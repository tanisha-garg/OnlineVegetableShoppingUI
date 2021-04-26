import axios from "axios";

const baseUrl = "http://localhost:8181";

function fetchFeedbackByVegetableId(vegetableId) {

    const url = baseUrl + "/feedbacks/byid/" + vegetableId;
    const promise = axios.get(url);
    return promise;

}

function addFeedback(data) {

    const url = baseUrl + "/feedbacks/add";
    let requestData = {

        feedback: data.feedback,
        vegetableId: data.vegetableId,
        rating: data.rating
    };

    console.log("inside addPackage service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function fetchAllFeedbacks() {

    const url = baseUrl + "/feedbacks";
    const promise = axios.get(url);
    return promise;

}

export { fetchFeedbackByVegetableId, addFeedback, fetchAllFeedbacks };