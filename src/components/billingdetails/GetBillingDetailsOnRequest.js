import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";
import validationMessage from "./billingValidationMessage";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillByIdOnRequest } from "../../redux1/billingdetails/fetchbillbyidonrequest/fetchBillByIdOnRequestActions";

function GetBillingDetailsOnRequest() {
  const dispatch = useDispatch();

  const billIdRef = React.createRef();

  const initialState = {
    billingId: -1,
    validations: { billingId: undefined },
  };

  const response = useSelector((state) => {
    return {
      bill: state.fetchBillByIdOnRequest.bill,
      error: state.fetchBillByIdOnRequest.error,
    };
  });

  let [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.billingId) {
      return;
    }
    console.log("Current state", currentState);
    const billingId = billIdRef.current.value;
    dispatch(fetchBillByIdOnRequest(billingId));
  };

  const setIdHandler = (reference) => {
    const field = reference.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let validationMessage;
    if (reference === billIdRef) {
      validationMessage = validateBillId(fieldValue);
    }
    const newValidations = {
      ...currentState.validations,
      [fieldName]: validationMessage,
    };
    const newState = {
      ...currentState,
      billingId: fieldValue,
      validations: newValidations,
    };
    setNewState(newState);
  };

  const validateBillId = (billingId) => {
    if (billingId < 0) {
      return validationMessage.billingIdLessThanZero;
    }
    return undefined;
  };

  return (
    <div className="container mt-5 w-75">
      <h3>Fetch bill by Id</h3>
      <form onSubmit={submitHandler} className="mt-3">
        <div className="form-group">
          <label>Enter Billing Id: </label>
          <input
            className="form-control"
            type="text"
            name="billingId"
            ref={billIdRef}
            onChange={() => setIdHandler(billIdRef)}
          />
          {currentState.validations.billingId ? (
            <div className="text-danger mt-2">
              {currentState.validations.billingId}
            </div>
          ) : (
            ""
          )}
        </div>

        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
      <br />
      {response.bill ? (
        <div>
          <div className="alert alert-success">
            Billing Details fetched successfully
          </div>
          <h3>Billing Details Response</h3>
          <DisplayBillingDetails bill={response.bill} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="text-danger h6">
          Request was not successsful <br /> {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GetBillingDetailsOnRequest;
