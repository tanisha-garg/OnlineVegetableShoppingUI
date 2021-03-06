import { useState } from "react";
import DisplayOrderDetail from "./DisplayOrderDetail";

const ViewOrderDetail = () => {
  const orderList = [{ orderId: 1 }, { orderId: 2 }, { orderId: 3 }];
  const order = {
    orderId: "1",
    customerName: "Suriya",
    status: "delievered",
    totalAmount: "800" ,
    date: "20/21",
    itemName: ["Onion"],
  };
  const [state, setState] = useState({
    orderId: "",
  });

  const response = { orderDetail: undefined, error: "" };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state });
  };
  return (
    <div className="container">
      <h2>View Order Detail</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Order Id</label>
          <select
            className="form-control"
            name="orderId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select order
            </option>
            {orderList.map((order, index) => (
              <option key={order.orderId} value={order.orderId}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.orderDetail ? (
        <DisplayOrderDetail order={response.orderDetail} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewOrderDetail;