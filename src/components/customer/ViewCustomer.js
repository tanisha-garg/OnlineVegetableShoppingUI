import React, { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";

export default function ViewCustomer() {
  let customer1 = {
    customerId: 1,
    name: "Ayesha",
    mobileNumber: "987654321",
    emailId: "abc@gmail.com",
    flatNo: "1",
    buildingName: "abc enclave",
    area: "lakshmi nagar",
    city: "mumbai",
    state: "maharashtra",
    pincode: "123456",
  };

  const idRef = React.createRef();

  const initialState = {
    customerId: undefined,
    customer: customer1,
    errMsg: undefined,
  };

  let [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    {
      /* setNewState({ ...state, formStatus: "form submitted successfully" });  */
    }
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
         <h2> View Customer Details</h2>
          <form onSubmit={submitHandler}>
              <div>
                  <label> Enter CustomerId</label>
                  <input name="id" type="number" ref={idRef} onChange={fieldHandler} />
                  </div>
                  <button> Get Customer </button>
           </form>
           {currentState.customer ?(
               <div>
                   <DisplayCustomerDetails customer={currentState.customer} />
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
