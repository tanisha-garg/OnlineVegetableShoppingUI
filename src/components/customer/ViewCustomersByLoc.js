import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomerList from "./DisplayCustomerList";

export default function ViewCustomersByLoc() {

  const customer1 = {
    customerId: 1,
    name: "Lol123",
    mobileNumber: "987654321",
    emailId: "lol@gmail.com",
    flatNo: "16",
    buildingName: "vasant kunj",
    area: "ashok van",
    city: "jamnagar",
    state: "gujarat",
    pincode: "123456",
  };

  const customer2 = {
    customerId: 2,
    name: "Lol123",
    mobileNumber: "987654321",
    emailId: "lol@gmail.com",
    flatNo: "16",
    buildingName: "shanti niketan",
    area: "shanti nivas",
    city: "jamnagar",
    state: "gujarat",
    pincode: "123456",
  };

  let customersList = [customer1, customer2]

  const response = { customers: customersList, errMsg: undefined };

  const initialState = {
    city: undefined
  };

  const [currentState, setNewState] = useState(initialState);

  const cityRef = React.createRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = () => {
    const fieldValue = cityRef.current.value;
    const newState = { city: fieldValue};
    setNewState(newState);
  };

return (
    <div>
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
                        required = "true" 
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
                        <DisplayCustomerList customers={response.customers} />
                    ) : ''}
                </ul>
            </div>
            {response.errMsg ? (
                <div className={commonStyle.error}>
                    Request cannot be successfull
                    <br />
                    {response.errMsg}
                </div>
            ) : ''}
        </div>
    </div>
);
}
