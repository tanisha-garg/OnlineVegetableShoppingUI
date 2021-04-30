import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByCustomerId } from "../../redux/order/fetchordersbycustomerid/fetchOrdersByCustomerIdActions";
import { fetchCustomerId } from "../../service/OrderService";
import DisplayOrderList from "./DisplayOrderList";

/**
 * Component displays all the orders placed by the customer.
 * The id in the url is taken from the logged in user.
 * For now, there is a method in the service which is returning a hard coded customer id
 */

function GetOrderDetailsByCustomerId(props) {
  const customerId = fetchCustomerId();
  /**
   * useDispatch() is assigned to a variable and an action is dispatched to the store by adding action
   * as an argument in the variable.
   */
  const dispatch = useDispatch();

  /**
   * useSelector is used to extract data from the redux store state.
   * It is returning orders, error from the store
   */

  const response = useSelector((state) => {
    return {
      orders: state.fetchOrdersByCustomerId.orders,
      error: state.fetchOrdersByCustomerId.error,
    };
  });

  const fetchOrderDetailsOnRender = () => {
    const id = props.match.params.id;
    dispatch(fetchOrdersByCustomerId(customerId));
  };

  /**
   * useEffect helps in performing side effects
   */

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
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
