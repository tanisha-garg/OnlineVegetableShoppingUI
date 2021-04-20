import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";

function UpdateTransactionStatus() {

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

  const tStatusRef = React.createRef();

  const initialState = {transactionStatus:undefined, bill:undefined, errMsg:undefined};

  let [state, setState] = useState(initialState);

  const submitHandler = (event) => {
      event.preventDefault();
      const newState = {...state, bill:bill, errMsg:undefined};
      setState(newState);

  }

  const setTStatusHandler = () => {
    const field = tStatusRef.current;
    const fieldVal = field.value;
    const newState = {...state,transactionStatus:fieldVal, bill:undefined, errMsg:undefined};
    setState(newState);
  }

  return (
    <div>
      <h2>Update Transaction Status</h2>
      <form onSubmit={submitHandler}>
        <label>Enter Transaction Status: </label>
        <input
          type="text"
          name="transactionStatus"
          ref={tStatusRef}
          onChange={() => setTStatusHandler()}
        /> <br />
        <button>Submit</button>
      </form>

      <span>Transaction Status is {state.transactionStatus} </span>

      <h3>Updated BillingDetails Response</h3>
      {state.bill ? (
          <div>
              <DisplayBillingDetails bill={bill} />
          </div>
      ) : ("") }
      {state.errMsg ? (
          <div>
              Request was not successsful <br /> {state.errMsg}
          </div>
      ) : ("")}
    </div>
  );
}

export default UpdateTransactionStatus;
