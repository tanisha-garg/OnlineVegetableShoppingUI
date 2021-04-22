function DisplayBillingDetails({ bill }) {
  let {
    billingId,
    transactionMode,
    transactionDate,
    transactionStatus,
    flatNo,
    buildingName,
    area,
    city,
    state,
    pincode,
   } = bill;
  return (
    <div>
      <ul>
        <li>
          Billing Id: {billingId} <br />
          Transaction Mode: {transactionMode} <br />
          Transaction Date: {transactionDate} <br/>
          Transaction Status: {transactionStatus}
        </li>
        <li>
          Billing Address: {flatNo}, {buildingName}, {area},
          <br />
          {city}, {state}, {pincode}
        </li>
      </ul>
    </div>
  );
}

export default DisplayBillingDetails;
