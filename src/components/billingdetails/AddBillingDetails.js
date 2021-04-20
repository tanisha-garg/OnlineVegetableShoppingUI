import React, { useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";

function AddBillingDetails() {

    // let bill = {
    //     billingId: 1,
    //     transactionMode: "COD",
    //     transactionDate: "2021-04-20",
    //     transactionStatus: "Succesful",
    //     flatNo: "21",
    //     buildingName: "ABC",
    //     area: "Sector 2",
    //     city: "Chandigarh",
    //     state: "punjab",
    //     pincode: "123456",
    //   };
    //let errMsg = "Cannot retrieve Bill Details Response";

  const orderRef = React.createRef();
  const tModeRef = React.createRef();
  const tStatusRef = React.createRef();

  const initialState = {
    orderId: -1,
    transactionMode: undefined,
    transactionStatus: undefined,
    bill: undefined,
    errMsg: undefined,
  };

  let [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    // const newState = {...state, bill:undefined, errMsg: undefined};
    // setNewState(newState);
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
    setNewState(newState);
  };

  return (
    <div>
      <h2>Add Bill</h2>
      <form onSubmit={submitHandler}>
        <label>OrderId:</label>
        <input
          type="text"
          name="orderId"
          ref={orderRef}
          onChange={() => fieldHandler(orderRef)}
        />
        <br />
        <label>Transaction Mode: </label>
        <input
          type="text"
          name="transactionMode"
          ref={tModeRef}
          onChange={() => fieldHandler(tModeRef)}
        />
        <br />
        <label>Transaction Status: </label>
        <input
          type="text"
          name="transactionStatus"
          ref={tStatusRef}
          onChange={() => fieldHandler(tStatusRef)}
        />
        <br />
        <button>Submit</button>
      </form>

      <h3>Add Bill Details</h3>
      Order Id is {state.orderId} <br />
      Transaction Mode is {state.transactionMode} <br />
      Transaction Status is {state.transactionStatus} <br />

      <h3>Billing Details Response</h3>
      {/* {state.bill ? (
          <div>
              <h4>Bill Added successfully</h4>
              <DisplayBillingDetails bill={bill}/>
          </div>
      ) : ("")} */}

      {/* {state.errMsg ? (
          <div>
              Request was not successsful <br /> {state.errMsg}
          </div>
      ) : ("")} */}

    </div>
  );
}

export default AddBillingDetails;
