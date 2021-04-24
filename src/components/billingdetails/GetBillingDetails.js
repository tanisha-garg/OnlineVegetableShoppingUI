import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillById } from "../../redux/billingdetails/fetchbillbyid/fetchBillByIdActions";
import DisplayBillingDetails from "./DisplayBillingDetails";

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

  const initialState = {billingId:-1 };

  const dispatch = useDispatch();

  const [state, setNewState] = useState(initialState);

  const response = useSelector( state => {
    return { bill: state.bill, error: state.error}
  })

  const fetchBillDetailsOnRender = () => {
    const id = props.match.params.id;
    const newState = { ...state};
    const data = {...state};
    dispatch(fetchBillById(data.billingId));
    setNewState(newState);
  };

  useEffect(fetchBillDetailsOnRender, []);

  return (
    <div className="container mt-4 w-75">
      <div className="alert alert-info">
        Please provide a billing id in the url path
      </div>
      <div className="mt-4">
        <h2>Get Bill Details by Id</h2>

        {response.bill ? (
          <div>
            <DisplayBillingDetails bill={response.bill} />
          </div>
        ) : (
          ""
        )}

        {response.error ? (
          <div className="text-danger h6 mt-3">
            Request was not successsful <br /> {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GetBillingDetails;
