import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../../redux/order/fetchorderdetails/fetchOrderDetailsActions";
import DisplayOrderDetails from "./DisplayOrderDetails";

/**
 * Component to display order details by passing id in the url.
 * By default an error message will be shown as there is no valid id in the url
*/
function GetOrderDetails(props) {

  const dispatch = useDispatch();

  const response = useSelector(state => {
    return {order: state.fetchOrderDetails.order, error: state.fetchOrderDetails.error};
  });

  const fetchOrderDetailsOnRender = () => {
    const id = props.match.params.id;
    dispatch(fetchOrderDetails(id));
  };

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
