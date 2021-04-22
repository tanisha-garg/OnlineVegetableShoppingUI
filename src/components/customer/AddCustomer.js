import React, { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";

function AddCustomer() {
  const customer = {
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
  const nameRef = React.createRef();
  const mobileNumberRef = React.createRef();
  const emailIdRef = React.createRef();
  const flatNoRef = React.createRef();
  const buildingNameRef = React.createRef();
  const areaRef = React.createRef();
  const cityRef = React.createRef();
  const stateRef = React.createRef();
  const pincodeRef = React.createRef();

  const initialState = {
    customerId: -1,
    name: undefined,
    mobileNumber: undefined,
    emailId: undefined,
    flatNo: undefined,
    buildingName: undefined,
    area: undefined,
    city: undefined,
    state: undefined,
    pincode: undefined,
    customer: undefined,
    errMsg: undefined,
    formStatus: "",
  };

  let [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    setNewState({ ...state, formStatus: "form submitted successfully" });
  };

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    let newState = {
      ...state,
      [fieldName]: fieldVal,
      customer: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div>
      <h2> Add New Customer</h2>
      <form onSubmit={(event) => submitHandler(event)}>
        <label> Customer Id: </label>
        <input
          name="Customer Id"
          placeholder="CustomerId"
          ref={idRef}
          onChange={() => fieldHandler(idRef)}
        />
        <br />
        <label> Customer Name: </label>
        <input
          name="Customer Name"
          placeholder="Name"
          ref={nameRef}
          onChange={() => fieldHandler(nameRef)}
        />
        <br />
        <label> Mobile Number: </label>
        <input
          name="Mobile Number"
          placeholder="Mobile Number"
          ref={mobileNumberRef}
          onChange={() => fieldHandler(mobileNumberRef)}
        />
        <br />
        <label> EmailId: </label>
        <input
          name="Email Id"
          type="email"
          placeholder="EmailId"
          ref={emailIdRef}
          onChange={() => fieldHandler(emailIdRef)}
        />
        <br />
        <label> Flat No. </label>
        <input
          name="Flat no."
          placeholder="Flat No."
          ref={flatNoRef}
          onChange={() => fieldHandler(flatNoRef)}
        />
        <br />
        <label> Building Name: </label>
        <input
          name="Building Name"
          placeholder="Building Name"
          ref={buildingNameRef}
          onChange={() => fieldHandler(buildingNameRef)}
        />
        <br />
        <label> Area: </label>
        <input
          name="Area"
          placeholder="Area"
          ref={areaRef}
          onChange={() => fieldHandler(areaRef)}
        />
        <br />
        <label> City: </label>
        <input
          name="City"
          placeholder="City"
          ref={cityRef}
          onChange={() => fieldHandler(cityRef)}
        />
        <br />
        <label> State: </label>
        <input
          name="State"
          placeholder="State"
          ref={stateRef}
          onChange={() => fieldHandler(stateRef)}
        />
        <br />
        <label> Pincode: </label>
        <input
          name="Pincode"
          placeholder="Pincode"
          ref={pincodeRef}
          onChange={() => fieldHandler(pincodeRef)}
        />
        <br />
        <button> Submit Data</button>
      </form>
      <h2>{state.formStatus}</h2>
      <h3>
        Details: <br />
      </h3>

      <br />
      {state.customer ? (
        <div>
          <h3>Customer Added Successfully</h3>
          <br />
          <DisplayCustomerDetails customer={state.customer} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div>
          <h3> Customer not Added Successfully</h3>
          <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddCustomer;
