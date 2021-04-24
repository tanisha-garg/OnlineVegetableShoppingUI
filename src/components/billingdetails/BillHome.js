
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
              Get bill details by giving id in the url: &emsp;
              <Link to="/billhome/billdetails/:id"> Get bill details by id </Link>
              </li>
              <li className="list-group-item">
              Get bill details on request: &emsp;
              <Link to="/billhome/billdetailsonrequest"> Get bill details by id on request</Link>
              </li>
            </ul>
           
          </div>
        </div>

      {/* <Router>
        <BillNavbar />

        <Route exact path="/billdetails/:id" component={GetBillingDetails} />
        <Route
          exact
          path="/billdetailsonrequest"
          component={GetBillingDetailsOnRequest}
        />
      </Router> */}
    </div>
  );
}

export default BillHome;
