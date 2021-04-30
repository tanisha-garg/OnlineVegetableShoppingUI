import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillById } from "../../redux/billingdetails/fetchbillbyid/fetchBillByIdActions";
import DisplayBillingDetails from "./DisplayBillingDetails";

/**
 * Component to fetch the bill details by providing id in the url.
 * User has to provide a bill id in the url, by default there will be an error saying,
 *  "Request not successfull"
 */

function GetBillingDetails(props) {
  /**
   * useDispatch() is assigned to a variable and an action is dispatched to the store by adding action
   * as an argument in the variable.
   */

  const dispatch = useDispatch();

  /**
   * useSelector is used to extract data from the redux store state.
   * It is returning bill, error from the store
   */

  const response = useSelector((state) => {
    return { bill: state.fetchBillById.bill, error: state.fetchBillById.error };
  });

  const fetchBillDetailsOnRender = () => {
    const id = props.match.params.id;
    dispatch(fetchBillById(id));
  };

  /**
   * useEffect helps in performing side effects
   */

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
