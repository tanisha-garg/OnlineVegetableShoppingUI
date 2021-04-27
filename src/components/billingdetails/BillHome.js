
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import GetBillingDetails from "./GetBillingDetails";
import GetBillingDetailsOnRequest from "./GetBillingDetailsOnRequest";

function BillHome() {
  return (
    <div>

        <div className="container mt-5 w-75" >
          <h2>Billing Details Module</h2>
          <div className="col-md-12 mt-4">
            <p className="h5">Links to different features:</p>
            <ul className="list-group mt-4">
              <li className="list-group-item">
              <Link to="/billhome/billdetails/:id"> Click here </Link> &emsp;
              To get bill details by giving id in the url: 
              </li>
              <li className="list-group-item">
              <Link to="/billhome/billdetailsonrequest">Click here</Link> &emsp;
              To get bill details on request: 
              
              </li>
            </ul>
           
          </div>
        </div>
    </div>
  );
}

export default BillHome;
