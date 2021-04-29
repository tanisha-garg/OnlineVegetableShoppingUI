/**
 * Component to display billing details
*/

function DisplayBillingDetails({ bill }) {

  /**
   * Destructuring of bill
  */
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
      <ul className="list-group mt-4">
        <li className="list-group-item">Billing Id: {billingId}</li>
        <li className="list-group-item">Transaction Mode: {transactionMode}</li>
        <li className="list-group-item">Transaction Date: {transactionDate}</li>
        <li className="list-group-item">
          Transaction Status: {transactionStatus}
        </li>
        <li className="list-group-item">
          {" "}
          Billing Address: {flatNo}, {buildingName}, {area}, {city}, {state},{" "}
          {pincode}
        </li>
      </ul>
     
    </div>
  );
}

export default DisplayBillingDetails;
