import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByDate } from "../../redux1/order/fetchordersbydate/fetchOrdersByDateActions";
import { fetchOrdersByDateOnRequest } from "../../redux1/order/fetchordersbydateonrequest/fetchOrdersByDateOnRequestActions";
import DisplayOrderList from "./DisplayOrderList";

function GetOrderDetailsByDateOnRequest() {

  const dateRef = React.createRef();

  const initialState = {date: undefined };

  const dispatch = useDispatch();

  const response = useSelector( state => {
    return {orders: state.fetchOrdersByDateOnRequest.orders, error: state.fetchOrdersByDateOnRequest.error }
  })

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
      </form> <br />

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
