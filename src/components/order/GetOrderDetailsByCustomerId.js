import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByCustomerId } from "../../redux1/order/fetchordersbycustomerid/fetchOrdersByCustomerIdActions";
import DisplayOrderList from "./DisplayOrderList";

function GetOrderDetailsByCustomerId(props) {

  const dispatch = useDispatch();

  const response = useSelector( state => {
    return {
      orders: state.fetchOrdersByCustomerId.orders,
      error: state.fetchOrdersByCustomerId.error,
    }
  })

  const fetchOrderDetailsOnRender = () => {
    const id = props.match.params.id;
    console.log(id);
    dispatch(fetchOrdersByCustomerId(id));
    
 
  };

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
      <div className="alert alert-info">Please provide an id in the url path</div>
      <div>
        <h2> Get order details placed by customer</h2> <br />
        {response.orders ? (
          <div>
            <DisplayOrderList orders={response.orders} />
          </div>
        ) : (
          ""
        )}
        {response.error ? (
          <div className="text-danger h6">
            Request processing unsuccessful
            <br />
            {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GetOrderDetailsByCustomerId;
