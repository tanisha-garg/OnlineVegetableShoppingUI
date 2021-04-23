function DisplayOrderDetails({ order }) {
  let { orderId, customerName, totalAmount, date, status } = order;

  return (
    <div>
      <ul class="list-group mt-5">
        <li className="list-group-item">Order Id: {orderId} </li>
        <li className="list-group-item"> Customer Name: {customerName} </li>
        <li className="list-group-item">Total Amount: {totalAmount} </li>
        <li className="list-group-item">Order Date: {date} </li>
        <li className="list-group-item">Status : {status} </li>
      </ul>
    </div>
  );
}

export default DisplayOrderDetails;
