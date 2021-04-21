import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";

function UpdateTransactionMode() {
  let bill = {
    billingId: 1,
    transactionMode: "COD",
    transactionDate: "2021-04-20",
    transactionStatus: "Succesful",
    flatNo: "21",
    buildingName: "ABC",
    area: "Sector 2",
    city: "Chandigarh",
    state: "punjab",
    pincode: "123456",
  };
  let errMsg = "Cannot retrieve Bill Details Response";

  const tModeRef = React.createRef();
  const billIdRef = React.createRef();

  const initialState = {
    transactionMode: undefined,
    bill: undefined,
    errMsg: undefined,
  };

  let [state, setState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    const newState = { ...state, bill: bill, errMsg: undefined };
    setState(newState);
  };

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    const newState = {
      ...state,
      [fieldName]: fieldVal,
      bill: undefined,
      errMsg: undefined,
    };
    setState(newState);
  };

  return (
    <div>
      <h2>Update Transaction Mode</h2>
      <form onSubmit={submitHandler}>
        <label>Enter BillingId:</label>
        <input
          type="text"
          name="billingId"
          ref={billIdRef}
          onChange={() => fieldHandler(billIdRef)}
        /> <br />
        <label>Enter Transaction Mode: </label>
        <input
          type="text"
          name="transactionMode"
          ref={tModeRef}
          onChange={() => fieldHandler(tModeRef)}
        />{" "}
        <br />
        <button>Submit</button>
      </form>

      <span>
        Id is {state.billingId} Transaction Mode is {state.transactionMode}{" "}
      </span>

      {state.bill ? (
        <div>
          
      <h3>Updated Billing Details Response</h3>
          <DisplayBillingDetails bill={bill} />
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

export default UpdateTransactionMode;
