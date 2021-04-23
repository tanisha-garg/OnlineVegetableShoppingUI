import BillNavbar from "./BillNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetBillingDetails from "./GetBillingDetails";
import GetBillingDetailsOnRequest from "./GetBillingDetailsOnRequest";

function BillHome() {
  return (
    <div>
      <Router>
        <BillNavbar />

        <Route exact path="/billdetails/:id" component={GetBillingDetails} />
        <Route
          exact
          path="/billdetailsonrequest"
          component={GetBillingDetailsOnRequest}
        />
      </Router>
    </div>
  );
}

export default BillHome;
