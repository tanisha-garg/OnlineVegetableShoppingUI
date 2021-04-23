import { useEffect, useState } from "react";
import DisplayOrderDetails from "./DisplayOrderDetails";

function GetOrderDetails(props) {

let order = {orderId:1, customerName: "Tanisha", totalAmount:100.0, date:"20/01/2021", status:"Placed"};
let errMsg = "Cannot process the request";

  const initialState = { order: undefined, errMsg: undefined };

  const [state, setNewState] = useState(initialState);

  const fetchOrderDetailsOnRender = () => {
    const id = props.match.params.id;
    const newState = { ...state, order: order, errMsg: undefined };
    setNewState(newState);
  };

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
      <h2>Get Order Details</h2>

      {state.order ? (
        <div>
          <DisplayOrderDetails order={state.order} />
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
  );
}

export default GetOrderDetails;
