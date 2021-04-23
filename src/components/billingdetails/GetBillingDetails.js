import React, { useEffect, useState } from "react";
import DisplayBillingDetails from "./DisplayBillingDetails";
import GetBillingDetailsOnRequest from "./GetBillingDetailsOnRequest";

function GetBillingDetails(props) {
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
  const initialState = { bill: undefined, errMsg: undefined };

  const [state, setNewState] = useState(initialState);

  const fetchBillDetailsOnRender = () => {
    const id = props.match.params.id;
    const newState = { ...state, bill: bill, errMsg: undefined };
    setNewState(newState);
  };

  useEffect(fetchBillDetailsOnRender);

  return (
    <div className="container mt-4 w-75">
      <div className="alert alert-info">
        Please provide a billing id in the url path
      </div>
      <div className="mt-4">
        <h2>Get Bill Details by Id</h2>

        {state.bill ? (
          <div>
            <DisplayBillingDetails bill={state.bill} />
          </div>
        ) : (
          ""
        )}

        {state.errMsg ? (
          <div className="text-danger h6 mt-3">
            Request was not successsful <br /> {state.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GetBillingDetails;
