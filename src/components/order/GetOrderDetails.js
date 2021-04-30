import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../../redux/order/fetchorderdetails/fetchOrderDetailsActions";
import DisplayOrderDetails from "./DisplayOrderDetails";

/**
 * Component to display order details by passing id in the url.
 * By default an error message will be shown as there is no valid id in the url
 */
function GetOrderDetails(props) {
  /**
   * useDispatch() is assigned to a variable and an action is dispatched to the store by adding action
   * as an argument in the variable.
   */

  const dispatch = useDispatch();

  /**
   * useSelector is used to extract data from the redux store state.
   * It is returning order, error from the store
   */

  const response = useSelector((state) => {
    return {
      order: state.fetchOrderDetails.order,
      error: state.fetchOrderDetails.error,
    };
  });

  const fetchOrderDetailsOnRender = () => {
    const id = props.match.params.id;
    dispatch(fetchOrderDetails(id));
  };

  /**
   * useEffect helps in performing side effects
   */

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
      <h2>Get Order Details</h2>

      {response.order ? (
        <div>
          <DisplayOrderDetails order={response.order} />
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
  );
}

export default GetOrderDetails;
