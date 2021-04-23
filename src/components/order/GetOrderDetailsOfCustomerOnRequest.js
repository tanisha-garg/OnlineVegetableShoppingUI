import React, { useState } from "react";
import DisplayOrderList from "./DisplayOrderList";
import validationMessage from "./orderValidationMessage";

function GetOrderDetailsOfCustomerOnRequest() {
  const order1 = {
    orderId: 1,
    customerName: "Tanisha",
    totalAmount: 100.0,
    date: "20/01/2021",
    status: "Placed",
  };
  const order2 = {
    orderId: 2,
    customerName: "Pallavi",
    totalAmount: 200.0,
    date: "10/01/2021",
    status: "Placed",
  };
  const orders = [order1, order2];
  const errMsg = "Cannot fetch data";

  const idRef = React.createRef();

  const initialState = {
    customerId: -1,
    orders: undefined,
    errMsg: undefined,
    validations: { customerId: undefined },
  };

  const [state, setNewState] = useState(initialState);

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    let validationMessage;
    if (reference === idRef) {
      validationMessage = validateCustomerId(fieldVal);
    }
    const newValidations = {
      ...state.validations,
      [fieldName]: validationMessage
    };
    const newState = {
      ...state,
      [fieldName]: fieldVal,
      orders: undefined,
      errMsg: undefined,
      validations: newValidations
    };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    console.log("Inside submit handler");
    event.preventDefault();
    if (state.validations.customerId) {
      return;
    }
    const newState = { ...state, orders: orders, errMsg: undefined };
    setNewState(newState);
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
          {state.validations.customerId ? (
            <div className="text-danger mt-2">{state.validations.customerId}</div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>{" "}
      <br />
      {state.orders ? (
        <div>
          <DisplayOrderList orders={state.orders} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div className="text-danger h6">
          Request processing unsuccessful
          <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GetOrderDetailsOfCustomerOnRequest;
