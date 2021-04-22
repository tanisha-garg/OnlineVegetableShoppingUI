import React, { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";

function UpdateAddress() {
  const customer1 = {
    flatNo: "1",
    buildingName: "abc enclave",
    area: "lakshmi nagar",
    city: "mumbai",
    state: "maharashtra",
    pincode: "123456",
  };
  let errMsg = "Cannot retrieve Customer Details Response";

  const flatNoRef = React.createRef();
  const buildingNameRef = React.createRef();
  const areaRef = React.createRef();
  const cityRef = React.createRef();
  const stateRef = React.createRef();
  const pincodeRef = React.createRef();

  const initialState = {
    flatNo: undefined,
    buildingName: undefined,
    area: undefined,
    city: undefined,
    state: undefined,
    pincode: undefined,
    customer1: undefined,
    errMsg: undefined,
  };

  let [state, setState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    const newState = { ...state, customer1: undefined, errMsg: errMsg };
    setState(newState);
  };

  const setTModeHandler = () => {
    const field = tModeRef.current;
    const fieldVal = field.value;
    const newState = {
      ...state,
      transactionMode: fieldVal,
      bill: undefined,
      errMsg: undefined,
    };
    setState(newState);
  };

  return (
    <div>
      <h2>Update Customer Address</h2>
      <form onSubmit={submitHandler}>
        <label>Enter New Details: </label>
        <input
          type="text"
          name="transactionMode"
          ref={tModeRef}
          onChange={() => setTModeHandler()}
        />{" "}
        <br />
        <button>Submit</button>
      </form>

      <span>Transaction Mode is {state.transactionMode} </span>

      <h3>Updated CustomerDetails Response</h3>
      {state.customer1 ? (
        <div>
          <DisplayCustomerDetails customer1={customer1} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div>
          Request was not successsful <br /> {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UpdateAddress;
