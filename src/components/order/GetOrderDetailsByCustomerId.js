import { useEffect, useState } from "react";
import DisplayOrderList from "./DisplayOrderList";

function GetOrderDetailsByCustomerId(props) {
  const order1 = {
    orderId: 1,
    customerName: "Tanisha",
    totalAmount: 100.0,
    date: "20/01/2021",
    status: "Placed",
  };
  const order2 = {
    orderId: 2,
    customerName: "Pallavi",
    totalAmount: 200.0,
    date: "10/01/2021",
    status: "Placed",
  };
  const orders = [order1, order2];
  const errMsg = "Cannot fetch data";

  const initialState = { orders: undefined, errMsg: undefined };

  const [state, setNewState] = useState(initialState);

  const fetchOrderDetailsOnRender = () => {
    const id = props.match.params.id;
    const newState = {...state, orders: orders, errMsg: undefined };
    setNewState(newState);
  };

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
      <div className="alert alert-info">Please provide an id in the url path</div>
      <div>
        <h2> Get order details placed by customer</h2> <br />
        {state.orders ? (
          <div>
            <DisplayOrderList orders={state.orders} />
          </div>
        ) : (
          ""
        )}
        {state.errMsg ? (
          <div className="text-danger h6">
            Request processing unsuccessful
            <br />
            {state.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GetOrderDetailsByCustomerId;
