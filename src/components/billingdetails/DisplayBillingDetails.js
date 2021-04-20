function DisplayBillingDetails({ bill }) {
  return (
    <div>
      <h2>Bill Details</h2>
      <ul>
        <li>
          {bill.billingId} {bill.transactionMode} {bill.transactionDate}{" "}
          {bill.transactionStatus}
        </li>
        <li>
          Billing Address: {bill.flatNo}, {bill.buildingName}, {bill.area},
          <br />
          {bill.city}, {bill.state}, {bill.pincode}
        </li>
      </ul>
    </div>
  );
}

export default DisplayBillingDetails;
