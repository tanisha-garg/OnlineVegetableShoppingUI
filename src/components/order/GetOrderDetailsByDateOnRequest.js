import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByDateOnRequest } from "../../redux/order/fetchordersbydateonrequest/fetchOrdersByDateOnRequestActions";
import DisplayOrderList from "./DisplayOrderList";

/**
 * Component returns a list of orders placed on a particular date
 * The date is accepted form a form in dd mmmm yyyy format
 */

function GetOrderDetailsByDateOnRequest() {
  const dateRef = React.createRef();

  const initialState = { date: undefined };

  /**
   * useDispatch() is assigned to a variable and an action is dispatched to the store by adding action
   * as an argument in the variable.
   */

  const dispatch = useDispatch();

  /**
   * useSelector is used to extract data from the redux store state.
   * It is returning orders, error from the store
   */

  const response = useSelector((state) => {
    return {
      orders: state.fetchOrdersByDateOnRequest.orders,
      error: state.fetchOrdersByDateOnRequest.error,
    };
  });

  /**
   * useState is being used to maintain the current state by setting new state with setNewState
   *  function
   */

  const [currentState, setNewState] = useState(initialState);

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    const newState = {
      ...currentState,
      [fieldName]: fieldVal,
    };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const date = dateRef.current.value;
    dispatch(fetchOrdersByDateOnRequest(date));
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

export default GetOrderDetailsByDateOnRequest;
