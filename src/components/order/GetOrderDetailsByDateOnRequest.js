import React, { useState } from "react";
import DisplayOrderList from "./DisplayOrderList";

function GetOrderDetailsByDateOnRequest() {
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

  const dateRef = React.createRef();

  const initialState = {
    date: undefined,
    orders: undefined,
    errMsg: undefined,
  };

  const [state, setNewState] = useState(initialState);

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    const newState = {
      ...state,
      [fieldName]: fieldVal,
      orders: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newState = { ...state, orders: orders, errMsg: undefined };
    setNewState(newState);
  };

  return (
    <div className="container w-75 mt-5">
      <h2>Get Order Details By Date</h2>

      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group mt-4">
          <label>Enter Date:</label>
          <input
            type="text"
            name="orderDate"
            placeholder="Eg: 10 August 2021"
            className="form-control"
            ref={dateRef}
            onChange={() => fieldHandler(dateRef)}
            required
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form> <br />

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

export default GetOrderDetailsByDateOnRequest;
