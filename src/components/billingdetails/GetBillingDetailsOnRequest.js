import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";
import validationMessage from "./billingValidationMessage";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillById } from "../../redux/billingdetails/fetchbillbyid/fetchBillByIdActions";

function GetBillingDetailsOnRequest() {
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

  const dispatch = useDispatch();

  const billIdRef = React.createRef();

  const initialState = {
    billingId: -1,
    validations: { billingId: undefined }
  };

  const response = useSelector(state => { 
    return ({
      bill: state.fetchBillById.bill, error: state.fetchBillById.error
    });
  })

  let [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.validations.billingId) {
      return;
    }
    console.log("Current state", state);
    const billingId = billIdRef.current.value;
    dispatch(fetchBillById(billingId));
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
      ...state.validations,
      [fieldName]: validationMessage
    };
    const newState = {
      ...state,
      billingId: fieldValue,
      bill: undefined,
      errMsg: undefined,
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
          {state.validations.billingId ? (
            <div className="text-danger mt-2">{state.validations.billingId}</div>
          ) : (
            ""
          )}
        </div>

        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
      <br />
      {/* <span>Id is {state.billingId} </span> */}
      {response.bill ? (
        <div>
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
