import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";
import validationMessage from "./billingValidationMessage";

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
    validations: { billingId: undefined }
  };

  let [state, setState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.validations.billingId) {
      return;
    }
    const newState = { ...state, bill:undefined, errMsg: errMsg };
    setState(newState);
  };

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    let validationMessage;
    if (reference === billIdRef) {
      validationMessage = validateBillId(fieldVal);
    }
    const newValidations = {
      ...state.validations,
      [fieldName]: validationMessage
    };
    const newState = {
      ...state,
      [fieldName]: fieldVal,
      bill: undefined,
      errMsg: undefined,
      validations: newValidations
    };
    setState(newState);
  };

  const validateBillId = (billingId) => {
    if (billingId < 0) {
      return validationMessage.billingIdLessThanZero;
    }
    return undefined;
  };

  return (
    <div className="container mt-5 w-75">
      <h2>Update Transaction Mode</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Enter BillingId:</label>
          <input
            className="form-control"
            type="text"
            name="billingId"
            ref={billIdRef}
            onChange={() => fieldHandler(billIdRef)}
          />
          {state.validations.billingId ? (
            <div className="text-danger mt-2">{state.validations.billingId}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>Enter Transaction Mode: </label>
          <input
            className="form-control"
            type="text"
            name="transactionMode"
            ref={tModeRef}
            onChange={() => fieldHandler(tModeRef)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form> <br />

      {/* <span>
        Id is {state.billingId} Transaction Mode is {state.transactionMode}{" "}
      </span> */}

      {state.bill ? (
        <div>
          <h3>Updated Billing Details Response</h3>
          <DisplayBillingDetails bill={bill} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div className="text-danger h6">
          Request was not successsful <br /> {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UpdateTransactionMode;