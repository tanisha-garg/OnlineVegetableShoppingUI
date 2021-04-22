import { useState } from "react";
const CancelOrderDetail = () => {
  const orderList = [
    { id: 1, name: "Sameer" },
    { id: 2, name: "Suriya" },
    { id: 3, name: "Ayesha" },
  ];
  const order = {
    name: "Sameer",
    customer: "12",
  };
  const [state, setState] = useState({
    id: "",
    orderDetail: undefined,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, orderDetail: order });
  };
  return (
    <div>
      <h2>Cancel Order Detail</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Order Id</label>
        <select name="id" onChange={onHandleChange}>
          <option disabled selected>
            select order
          </option>
          {orderList.map((order) => (
            <option key={order.id} value={order.id}>
              {order.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <br />
      Id:- {state.id}
      <br />
      {console.log(state.orderDetail)}
    </div>
  );
};

export default CancelOrderDetail;