import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";
import validationMessage from "./billingValidationMessage";

function AddBillingDetails() {
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

  const orderRef = React.createRef();
  const tModeRef = React.createRef();
  const tStatusRef = React.createRef();

  const initialState = {
    orderId: -1,
    transactionMode: undefined,
    transactionStatus: undefined,
    bill: undefined,
    errMsg: undefined,
    validations: {orderId:undefined}
  };

  let [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if(state.validations.orderId){
      return;
    }
    const newState = { ...state, bill: undefined, errMsg: errMsg };
    setNewState(newState);
  };

  const fieldHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldVal = field.value;
    let validationMessage;
    if(reference === orderRef){
      validationMessage = validateOrderId(fieldVal);
    }
    const newValidations = {...state.validations, [fieldName]:validationMessage};
    const newState = {
      ...state,
      [fieldName]: fieldVal,
      bill: undefined,
      errMsg: undefined,
      validations: newValidations
    };
    setNewState(newState);
  };

  const validateOrderId = (orderId) => {
    if(orderId < 0){
      return validationMessage.orderIdLessThanZero;
    }
    return undefined;
  }

  return (
    <div className="container mt-5 w-75">
      <h2>Add Bill</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>OrderId:</label>
          <input
            className="form-control"
            type="text"
            name="orderId"
            ref={orderRef}
            onChange={() => fieldHandler(orderRef)}
            required
          />
          {state.validations.orderId ? (
            <div className="text-danger mt-2">
              {state.validations.orderId}
            </div>
          ) : ("")}
        </div>

        <div className="form-group">
          <label>Transaction Mode: </label>
          <input
            className="form-control"
            type="text"
            name="transactionMode"
            ref={tModeRef}
            onChange={() => fieldHandler(tModeRef)}
          />
        </div>

        <div className="form-group">
          <label>Transaction Status: </label>
          <input
            className="form-control"
            type="text"
            name="transactionStatus"
            ref={tStatusRef}
            onChange={() => fieldHandler(tStatusRef)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form><br/>

      {/* <div>
        <h3>Add Bill Details</h3>
        Order Id is {state.orderId} <br />
        Transaction Mode is {state.transactionMode} <br />
        Transaction Status is {state.transactionStatus} <br />
      </div> */}

      {state.bill ? (
        <div>
          <h5>Bill Added successfully</h5>
          <h4>Billing Details Response</h4>
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

export default AddBillingDetails;
