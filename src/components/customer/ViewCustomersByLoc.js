import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomerList from "./DisplayCustomerList";

export default function ViewCustomersByLoc() {
  

  
  const response = { customers: customersList, errMsg: undefined };

  const initialState = {
    city: undefined,
  };

  const [currentState, setNewState] = useState(initialState);

  const cityRef = React.createRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = () => {
    const fieldValue = cityRef.current.value;
    const newState = { city: fieldValue };
    setNewState(newState);
  };

  return (
    <div className="container mt-4 w-75">
      <h3>Get Customers By location</h3>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter city to view customers: </label>
            <input
              type="text"
              name="city"
              onChange={changeHandler}
              ref={cityRef}
              className="form-control"
              required="true"
              list="displaycustomerlist"
            />
          </div>
          <button className="btn btn-primary">Get Customers</button>
        </form>
      </div>
      <div className="mt-5">
        <div>
          <ul>
            {response.customers ? (
              <div>
                <div className="alert alert-success">
                  Customers fetched successfully
                </div>
                <DisplayCustomerList customers={response.customers} />
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        {response.errMsg ? (
          <div className="text-danger h6 mt-3">
            Request cannot be successful
            {response.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
