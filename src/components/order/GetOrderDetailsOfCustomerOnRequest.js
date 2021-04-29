import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByCustIdOnRequest } from "../../redux1/order/fetchordersbycustidonrequest/fetchOrdersByCustIdOnRequestActions";
import DisplayOrderList from "./DisplayOrderList";
import validationMessage from "./orderValidationMessage";

function GetOrderDetailsOfCustomerOnRequest() {
  const idRef = React.createRef();

  const initialState = {
    customerId: -1,
    validations: { customerId: undefined },
  };

  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      orders: state.fetchOrdersByCustIdOnRequest.orders,
      error: state.fetchOrdersByCustIdOnRequest.error,
    };
  });

  const [currentState, setNewState] = useState(initialState);

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    let validationMessage;
    if (reference === idRef) {
      validationMessage = validateCustomerId(fieldVal);
    }
    const newValidations = {
      ...currentState.validations,
      [fieldName]: validationMessage,
    };
    const newState = {
      ...currentState,
      [fieldName]: fieldVal,
      validations: newValidations,
    };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    console.log("Inside submit handler");
    event.preventDefault();
    if (currentState.validations.customerId) {
      return;
    }
    const customerId = idRef.current.value;
    const data = { ...currentState };
    dispatch(fetchOrdersByCustIdOnRequest(customerId));
  };

  const validateCustomerId = (customerId) => {
    if (customerId < 0) {
      return validationMessage.customerIdLessThanZero;
    }
    return undefined;
  };

  return (
    <div className="container w-75 mt-5">
      <h2>Get all the orders placed by a customer</h2>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group mt-4">
          <label>Enter Customer Id</label>
          <input
            type="text"
            name="customerId"
            className="form-control"
            ref={idRef}
            onChange={() => fieldHandler(idRef)}
            required
          />
          {currentState.validations.customerId ? (
            <div className="text-danger mt-2">
              {currentState.validations.customerId}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>{" "}
      <br />
      {response.orders ? (
        <div>
          <div className="alert alert-success">
            Orders list fetched successfully
          </div>
          <DisplayOrderList orders={response.orders} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="text-danger h6">
          Request processing unsuccessful
          <br />
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GetOrderDetailsOfCustomerOnRequest;
