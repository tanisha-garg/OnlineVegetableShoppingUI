import React, { useState } from "react";
import DisplayCustomerList from "./DisplayCustomerList";

/**
 * Component returns the list details of customer where the city is 
 * accepted from a form
*/

export default function ViewCustomersByLoc() {
  
// let customer1={
//   customerId:1,
//   name:"Ayesha",
//   mobileNumber:"9999999999",
//   emailId:"ash@gmail.com",
//   flatNo:"2",
//   buildingName:"Kalpatru Gardens",
//   area:"Pramod Nagar",
//   city:"Mumbai",
//   state:"Maharashtra",
//   pincode:"444444"
// }
// let customer2={
//   customerId:2,
//   name:"Adnan",
//   mobileNumber:"8888888888",
//   emailId:"ad@gmail.com",
//   flatNo:"4",
//   buildingName:"Siddhi Apartment",
//   area:"Ashok Nagar",
//   city:"Panji",
//   state:"Goa",
//   pincode:"555555"
// }
// let customer3={
//   customerId:3,
//   name:"Shivank",
//   mobileNumber:"7777777777",
//   emailId:"shiv@gmail.com",
//   flatNo:"6",
//   buildingName:"Rupal Society",
//   area:"Ashok van",
//   city:"Mumbai",
//   state:"Maharashtra",
//   pincode:"467890"
// }

// const customerList=[customer1, customer2, customer3]

  const response = { customers:undefined , errMsg: undefined };

  const initialState = {
    city: undefined
  };

  const [currentState, setNewState] = useState(initialState);

  const cityRef = React.createRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const city={...currentState}
    const promise = ViewCustomersByLoc(city);
    promise
      .then((response) =>
        setNewState({ ...currentState, city: response.data, errMsg: undefined })
      )
      .catch((error) =>
        setNewState({ ...currentState, city: undefined, errMsg: error.message })
      );

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
        <form onSubmit={(event)=>submitHandler(event)}>
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
