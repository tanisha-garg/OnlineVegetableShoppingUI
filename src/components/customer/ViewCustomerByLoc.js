import React, { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";

export default function ViewCustomerByLoc() {
  let customer1 = {
    customerId: 1,
    name: "Ayesha",
    mobileNumber: "987654321",
    emailId: "abc@gmail.com",
    flatNo: "1",
    buildingName: "abc enclave",
    area: "lakshmi nagar",
    city: "jamnagar",
    state: "gujarat",
    pincode: "123456",
  };

  let customer2 = {
    customerId: 2,
    name: "yesha",
    mobileNumber: "1234567890",
    emailId: "def@gmail.com",
    flatNo: "2",
    buildingName: "siddhi",
    area: "ashok vihar",
    city: "jamnagar",
    state: "gujarat",
    pincode: "234567",
  };

  const cityRef = React.createRef();

  const initialState = {
    city: undefined,
    customer: customer1,
    customer: customer2,
    errMsg: undefined,
  };

  let [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("current state is:", currentState);
  };

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    const newState = {...currentState, [fieldName]: fieldVal };
    setNewState(newState);
  };

  return (
      <div>
        <h2> View Customer By Location</h2>
          <form onSubmit={submitHandler}>
              <div>
                  <label> Enter Location:</label>
                  <input name="location" ref={cityRef} onChange={fieldHandler} />
                  </div>
                  <button> Get Customers </button>
           </form>
           {currentState.customer ?(
               <div>
                   <DisplayCustomerDetails customer={customer1} />
                   <br />
                   <DisplayCustomerDetails customer={customer2} />
                   </div>
           ):(
               ""
               )}
               {currentState.errMsg ?(
                   <div>
                   Request Unsuccessful
                   <br />
                   {currentState.errMsg }
                    </div>
           ):(
               ""
               )}          
          
      </div>
  )
};
