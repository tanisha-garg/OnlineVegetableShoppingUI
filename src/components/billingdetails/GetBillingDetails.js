import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillById } from "../../redux/billingdetails/fetchbillbyid/fetchBillByIdActions";
import DisplayBillingDetails from "./DisplayBillingDetails";

function GetBillingDetails(props) {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return { bill: state.fetchBillById.bill, error: state.fetchBillById.error };
  });

  const fetchBillDetailsOnRender = () => {
    const id = props.match.params.id;
    dispatch(fetchBillById(id));
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
            <div className="alert alert-success">
              Billing Details fetched successfully
            </div>
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
