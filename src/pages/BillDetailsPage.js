import { Route, Switch } from "react-router";
import GetBillingDetails from "../components/billingdetails/GetBillingDetails";
import GetBillingDetailsOnRequest from "../components/billingdetails/GetBillingDetailsOnRequest";
import "./page.css"

const BillDetailsPage = (props) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="page">
        <div className="pageButton">
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/billdetails/:id`)
            }
          >
            View By Id
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/billdetailsonrequest`)
            }
          >
            View By Id On Request
          </button>
        </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
          <Switch>
            <Route
              exact
              path={`${props.match.url}/billdetails/:id`}
              component={GetBillingDetails}
            />
             <Route
                  exact
                  path={`${props.match.url}/billdetailsonrequest`}
                  component={GetBillingDetailsOnRequest}
                />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default BillDetailsPage;
